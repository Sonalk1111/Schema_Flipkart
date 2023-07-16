import { merge, Observable, ObservedValueOf, of, race, Subject, timer } from "rxjs"
import { filter, skip, switchMap, take } from "rxjs/operators"

type NoInfer<T> = [T][T extends any ? 0 : never]

const n$ = <$ extends Observable<unknown>>(t: $) => t as Observable<ObservedValueOf<$>>

const O = {
  entries: Object.entries as <O extends object>(o: O) => [keyof O, O[keyof O]][],
  fromEntries: Object.fromEntries as <K extends keyof any, V>(o: [K, V][]) => { [_ in K]: V }
}

const tuple = <T extends unknown[]>(...x: T) => x

export const createMachine =
  <S extends string, E extends string>
    (initial: NoInfer<S>, states: { [_ in S]: { [_ in E]?: NoInfer<S> } }) => {
      let event$ = new Subject<Exclude<E, `${number}`>>()
      let state: { [_ in S]: (isSelfTransition?: boolean) => Observable<S> } =
        O.fromEntries(O.entries(states).map(([s, transitions]) => tuple(s,
            (isSelfTransition = false) => merge(of(s), race(O.entries(transitions).map(([e, t]) =>
              n$(Number.isNaN(Number(e)) ? event$.pipe(filter((er: unknown) => er === e)) : timer(Number(e)))
                .pipe(skip(isSelfTransition ? 1 : 0), take(1), switchMap(() => state[t as S](t === s)))
            )))
          )))

      return Object.assign(state[initial](), { send: event$.next.bind(event$) })
    }

export default createMachine
