// import { createMachine, send, actions, interpret } from 'xstate';

// const { assign } = actions;

// const serverMachine = createMachine({
//   id: 'server',
//   initial: 'idle',
//   states: {
//     idle: {
//       on: {
//         FETCH: 'loading',
//       },
//     },
//     loading: {
//       entry: send('LOAD', { to: 'http' }),
//       on: {
//         SUCCESS: 'success',
//         ERROR: 'error',
//       },
//     },
//     success: {
//       type: 'final',
//     },
//     error: {
//       type: 'final',
//     },
//   },
// });

// const httpMachine = createMachine({
//   id: 'http',
//   initial: 'idle',
//   states: {
//     idle: {
//       on: {
//         LOAD: 'loading',
//       },
//     },
//     loading: {
//       invoke: {
//         src: (context:any, event:any) => {
//           const { method, url, data } = event;
//           if (method === 'GET') {
//             return fetch(url).then((response) => response.json());
//           } else if (method === 'POST') {
//             return fetch(url, {
//               method: 'POST',
//               body: JSON.stringify(data),
//               headers: { 'Content-Type': 'application/json' },
//             }).then((response) => response.json());
//           } else {
//             throw new Error(`Unsupported method: ${method}`);
//           }
//         },
//         onDone: [
//           {
//             target: 'success',
//             actions: assign({
//               response: (context, event) => event,
//             }),
//           },
//         ],
//         onError: {
//           target: 'error',
//         },
//       },
//     },
//     success: {
//       type: 'final',
//     },
//     error: {
//       type: 'final',
//     },
//   },
// });

// const actorMachine = createMachine({
//   id: 'actor',
//   initial: 'idle',
//   states: {
//     idle: {
//       on: {
//         SEND_MESSAGE: {
//           actions: send(
//             (context, event) => {
//             //   const { method, data } = event;
//               const url = `http://localhost:3000`;
//               return {
//                 type: 'FETCH',
//                 // method,
//                 url,
//                 // data,
//               };
//             },
//             { to: 'server' }
//           ),
//           target: 'loading',
//         },
//       },
//     },
//     loading: {
//       invoke: {
//         src: serverMachine,
//         onDone: {
//           target: 'success',
//         },
//         onError: {
//           target: 'error',
//         },
//       },
//     },
//     success: {
//       type: 'final',
//     },
//     error: {
//       type: 'final',
//     },
//   },
// });

// // Usage example
// const actorService = interpret(actorMachine).start();

// // Send GET request to localhost server
// actorService.send({
//   type: 'SEND_MESSAGE',
//   method: 'GET',
//   path: '/todos/1',
// });

// // Send POST request to localhost server
// actorService.send({
//   type: 'SEND_MESSAGE',
//   method: 'POST',
//   path: '/posts',
//   data: { title: 'foo', body: 'bar', userId: 1 },
// });


// import { createMachine, interpret, sendParent } from 'xstate';


// const fetchMachine = createMachine({
//   id: 'fetch',
//   initial: 'idle',
//   states: {
//     idle: {
//       on: {
//         FETCH: 'loading'
//       }
//     },
//     loading: {
//       entry: 'fetchData',
//       on: {
//         RESOLVE: 'success',
//         REJECT: 'failure'
//       }
//     },
//     success: {
//       type: 'final'
//     },
//     failure: {
//       type: 'final'
//     }
//   }
// }, {
//   actions: {
//     fetchData: (context:any, event, send) => {
//       const { url, method, body } = event.data;
//       fetch(url, { method, body })
//         .then(response => response.json())
//         .then(data => {
//           context.data = data;
//           // send({ type: 'RESOLVE' });
//         })
//         .catch(error => {
//           console.error(error);
//           // send({ type: 'REJECT' });
//         });
//     }
//   }
// });

// const fetchActorService = interpret(fetchMachine).onTransition((state =>
//   console.log('Actor state:', state.value))
// ).start()

// fetchActorService.send({ type: 'FETCH', data: { url: 'http://localhost:3000/data', method: 'GET' } });


// const postService = (context:any, event:any) => {
//   return fetch('https://dummy-server.com/api', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(event.data)
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       return { data };
//     })
//     .catch(error => {
//       return { error: error.message };
//     });
// };

// const postMachine = createMachine({
//   id: 'post',
//   initial: 'idle',
//   states: {
//     idle: {
//       on: {
//         POST: 'loading'
//       }
//     },
//     loading: {
//       invoke: {
//         id: 'postService',
//         src: postService,
//         onDone: {
//           target: 'success',
//           actions: sendParent((context, event) => ({ type: 'POST_SUCCESS', data: event.data }))
//         },
//         onError: {
//           target: 'failure',
//           actions: sendParent((context, event) => ({ type: 'POST_FAILURE', error: event.data.error }))
//         }
//       }
//     },
//     success: {
//       type: 'final'
//     },
//     failure: {
//       type: 'final'
//     }
//   }
// });

// const postActor = interpret(postMachine)
//   .onDone(() => console.log('POST request completed successfully'))
//   .onStop(() => console.log('POST request stopped'))
//   .start();

// postActor.send({ type: 'POST', data: { name: 'John', age: 30 } });

// import { createMachine, sendParent, interpret } from 'xstate';

// const postService:any = (context:any, event:any) => {
//   return fetch('https://dummy-server.com/api', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(event.data)
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       console.log(data)
//       return { data };
//     })
//     .catch(error => {
//       return { error: error.message };
//     });
// };

// const parentMachine = createMachine({
//   id: 'parent',
//   initial: 'start',
//   states: {
//     start: {
//       invoke: {
//         id: 'postService',
//         src: postService
//       },
//       on: {
//         POST_SUCCESS: {
//           actions: (context, event) => console.log('POST request succeeded:', event.data)
//         },
//         POST_FAILURE: {
//           actions: (context, event) => console.log('POST request failed:', event.error)
//         }
//       }
//     }
//   }
// });

// const parentActor = interpret(parentMachine).start();

// const postMachine = createMachine({
//   id: 'post',
//   initial: 'idle',
//   states: {
//     idle: {
//       on: {
//         POST: 'loading'
//       }
//     },
//     loading: {
//       invoke: {
//         id: 'postService',
//         src: postService,
//         onDone: {
//           target: 'success',
//           actions: sendParent((context, event) => ({ type: 'POST_SUCCESS', data: event.data }))
//         },
//         onError: {
//           target: 'failure',
//           actions: sendParent((context, event) => ({ type: 'POST_FAILURE', error: event.data.error }))
//         }
//       }
//     },
//     success: {
//       type: 'final'
//     },
//     failure: {
//       type: 'final'
//     }
//   }
// });

// const postActor = interpret(postMachine)
//   .onDone(() => console.log('POST request completed successfully'))
//   .onStop(() => console.log('POST request stopped'))
//   .start();

// postActor.send({ type: 'POST', data: { name: 'John', age: 30 } });

import { createMachine, sendParent, interpret } from 'xstate';

const postService = (context:any, event:any) => {
  return fetch('https://dummy-server.com/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event.data)
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data)
      return { data };
    })
    .catch(error => {
      return { error: error.message };
    });
};

const postMachine = createMachine({
  id: 'post',
  initial: 'idle',
  states: {
    idle: {
      on: {
        POST: 'loading'
      }
    },
    loading: {
      invoke: {
        id: 'postService',
        src: postService,
        onDone: {
          target: 'success',
          actions: [
            sendParent((context, event) => ({ type: 'POST_SUCCESS', data: event.data })),
            () => console.log('POST request completed successfully')
          ]
        },
        onError: {
          target: 'failure',
          actions: [
            sendParent((context, event) => ({ type: 'POST_FAILURE', error: event.data.error })),
            () => console.log('POST request failed:')
          ]
        }
      }
    },
    success: {
      type: 'final'
    },
    failure: {
      type: 'final'
    }
  }
});

const postActor = interpret(postMachine).start();

postActor.send({ type: 'POST', data: { name: 'John', age: 30 } });