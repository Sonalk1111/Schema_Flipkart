import { ActorHandle, lookup } from './Actor';

export interface Response {
  requestId: RequestId;
}
declare global {
  interface RequestNameMap {}
  interface RequestNameResponsePairs {}
}

type ValidRequestName = keyof RequestNameMap;
type PromiseResolver = (x: any) => void;
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type ValidActorName = keyof ActorMessageType;
export type RequestId = string;

const waitingRequesters = new Map<RequestId, PromiseResolver>();

export function generateUniqueId(): RequestId {
  return [...new Array(16)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
}

export interface Request {
  requester: string;
  requestId: RequestId;
}

export function sendRequest<
  T extends ValidActorName,
  R extends ValidRequestName
>(
  handle: ActorHandle<T>,
  request: Omit<ActorMessageType[T] & Request, 'requestId'>
): Promise<RequestNameResponsePairs[R]> {
  return new Promise((resolve) => {
    const requestId = generateUniqueId();
    // @ts-expect-error types
    const augmentedRequest: ActorMessageType[T] & Request = {
      ...request,
      requestId,
    };
    waitingRequesters.set(requestId, resolve);
    handle.send(augmentedRequest);
  });
}

function isResponse(x: any): x is Response {
  return 'requestId' in x && waitingRequesters.has(x.requestId);
}

export function processResponse(msg: any): boolean {
  if (!isResponse(msg)) {
    return false;
  }
  if (waitingRequesters.has(msg.requestId)) {
    const resolver = waitingRequesters.get(msg.requestId)!;
    resolver(msg);
  }
  return true;
}

export async function sendResponse<R extends ValidRequestName>(
  req: RequestNameMap[R],
  resp: Omit<RequestNameResponsePairs[R], 'requestId'>
) {
  // @ts-ignore
  const actor = lookup(req.requester);
  actor.send({
    ...resp,
    // @ts-expect-error types
    requestId: req.requestId,
  });
}
