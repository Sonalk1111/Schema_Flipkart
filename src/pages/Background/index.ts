import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import { interpret } from 'xstate';
import {backgroundMachine} from "./backgroundMachine"
import { runPromise, log } from '@effect/io/Effect';
// import { Subject,Observable, from, merge } from "rxjs";
// import { share, scan, map, concatMap } from 'rxjs/operators';

// const eventSubject = new Subject();
// const events$ = from(eventSubject).pipe(share());
// console.log(events$)

console.log("hello from ddddddd background.js")
runPromise(log("Hello from Effect In Background"))
// const eventQueue: any = [];

// function processEventQueue() {
//   // if (eventQueue.length > 0) {
//   //   const event = eventQueue.shift(); // Get the first event from the queue
//   //   service.send(event); // Send the event to the state machine
//   // }
//   while (eventQueue.length > 0) {
//     const event = eventQueue.shift(); // Get the first event from the queue
//     service.send(event); // Send the event to the state machine
//   }
// }

// const service = interpret(backgroundMachine).onTransition((state) => {
//   console.log(state.value)
//   console.log(state.context, "myContext")

// }).start()

// service.send('ACTIVE')

// // class EventService {
// //   // Create a subject to manage the events
// //   private eventSubject = new Subject<any>();

// //   // Method to send events
// //   sendEvent(event: any) {
// //     this.eventSubject.next(event);
// //   }

// //   // Method to subscribe to events
// //   subscribeToEvents(): Observable<any> {
// //     return this.eventSubject.asObservable();
// //   }
// // }

// // const eventService = new EventService();


// // const eventSubject = new BehaviorSubject([] as any);

// // const events$ = eventSubject.pipe(
// //   // scan((acc, val) => [acc, val])
// //   scan((eventList: any, event: any) => [...eventList, event], [])
// // );

// // const state$ = from(service).pipe(
// //   map(() => service.getSnapshot().value)
// // )

// // const stateSubscription = state$.subscribe(state => {
// //   console.log('New state:', state);
// // })

// // const eventSubscription = events$.subscribe((eventList: any) => {
// //   console.log('Stored events:', eventList);

// //   if(Array.isArray(eventList)){
// //     eventList.forEach((event: any) => {
// //       service.send(event);
// //       console.log('Sent event:', event);
// //     });
// //   }
// // });


// // const event = { type: 'ACTIVE' };
// // eventQueue.push(event)
// // processEventQueue()
// // eventService.sendEvent(event);

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   // console.log(request)
// })

// chrome.runtime.onMessageExternal.addListener(function(message, sender, sendResponse) {
//   console.log('Received message from web page:', message);
//   if(message.flipkart){
//     console.log('Received message from web page:', message.flipkart);
//   }
//   if(message.userInfo){
//     chrome.storage.local.set({
//       credentials: message.userInfo,
//       userDetails: {
//         signInUserSession: message.userInfo.signInUserSession , 
//         username: message.userInfo.username,
//         endpoint: message.userInfo.client.endpoint,
//         clientID: message.userInfo.pool.clientId,
//         clientIDData: JSON.parse(message.userInfo.attributes['custom:clientId'])
//       },
//     })
//   }
//   sendResponse('Message received by the extension!');
// });


// const req_url = ["https://seller.flipkart.com/index.html#dashboard/home-page","https://seller.jiomart.com/oms/", "https://supplier.meesho.com/panel/v3/new/growth/fkihi/home" ]


// // "https://identity.seller.jiomart.com/seller_profile/company_profile/pan"
// chrome.tabs.query({}, function(tabs) {
//   // if(tabs.find((x) => x.url == "https://seller.flipkart.com/index.html#dashboard/home-page")){
//   //   console.log("trueeeeeeeeeeee")
//   // }
//   // const result = tabs.find((x) => x.url == "https://seller.flipkart.com/index.html#dashboard/home-page")
//   const matchedUrls = tabs.filter((x) => req_url.includes(x.url!))
//   console.log(matchedUrls, "Matchedddddddddd")
//   matchedUrls.map((x) => {
//     chrome.cookies.getAll({url: x.url}, function(cookie) {
//       chrome.identity.getProfileUserInfo(function (userInfo) {
//         // if(x.url == "https://seller.flipkart.com/index.html#dashboard/home-page"){
//         //   console.log(cookie, userInfo, "detailss for flipkart")
//         // }
//         // else if(x.url == "https://seller.jiomart.com/oms/"){
//         //   console.log(cookie, userInfo, "detailss for jiomart")
//         // }
//         // else if(x.url == "https://supplier.meesho.com/panel/v3/new/growth/fkihi/home"){
//         //   console.log(cookie, userInfo, "details for meesho")
//         // }
//         if(cookie.find((x) => x.domain == "identity.seller.jiomart.com")){
//           chrome.storage.local.set({
//             cookies: {
//               cookie: cookie ,
//               userInfo: userInfo 
//             }
//           })
//         }
//       })
//     });
//   })
// });
// chrome.storage.local.get(['credentials', 'cookies', 'userDetails'], async function(request){
//   if(request.credentials){
//     console.log(request.credentials, "Credentialssssss")
//     // eventQueue.push({ type: 'LOGIN', data: request.credentials })
//     // processEventQueue()
//     service.send({ type: 'LOGIN', data: request.credentials })
//     // await eventService.sendEvent({ type: 'LOGIN', data: request.credentials });
//   }
//   else{
//     console.log("user has no LoggedIn Credentials Stored please send credentials from web")
//   }

//   if(request.cookies){
//     eventQueue.push({ type: 'COOKIE', cookie: request.cookies })
//     // processEventQueue()
//     service.send({ type: 'COOKIE', cookie: request.cookies })
//     service.send('CHECK_COOKIE')

//     // eventSubject.next({ type: 'COOKIE', cookie: request.cookies });
//     // eventSubject.next('CHECK_COOKIE')

//   }
//   else{
//     console.log("no Cookies Are Set please login to the Marketplace")
//   }


//   if(request.userDetails){
//     var alarmPeriod = request.userDetails.clientIDData.alarm;
//     var defaultPeriod = 15*60
//     if (request.userDetails && request.userDetails.clientIDData && request.userDetails.clientIDData.alarm) {
//       // console.log(alarmPeriod, 'Alarmmmmmmmm')
//       chrome.alarms.create("cookieAlarm", { periodInMinutes: 2 }); // alarm period
//     }
//     // else{
//     //   chrome.alarms.create("cookieAlarm", { periodInMinutes: 0.5 }); //default period
//     // }
//   }
// })



// // chrome.alarms.get("cookieAlarm", function(alarm) {
// //   if (alarm) {
// //     console.log("Alarm is active.", alarm);
// //     // if(eventQueue.find((x: any) => x.type == 'COOKIE').type == 'COOKIE'){
// //     //   eventQueue.push({ type: 'ALARM_ACTIVE', alarm: alarm})
// //     // }
//     // console.log(eventQueue, "myEventQueue")
// //     // const val = eventQueue.find((x: any) => x.type == 'COOKIE')
// //     const hasCookieEvent = eventQueue.some((event: any) => event.type === 'COOKIE');
// //     console.log(hasCookieEvent)
// //     // console.log("Next alarm trigger time:", new Date(alarm.scheduledTime));
// //     // service.send({ type: 'ALARM_ACTIVE', alarm: alarm})
// //   } else {
// //     console.log("Alarm is not active.");
// //     // service.send('ALARM_DEACTIVE')
// //   }
// // });


// chrome.alarms.onAlarm.addListener(function(alarm) {
//   if(alarm){
//     console.log(service.getSnapshot().value, "state_valueeeeeeee")
//     service.send('A_ACTIVE')
//     service.send('CHECK_NOTI')
//   }
//   else{
//     console.log("alarm is off")
//   }
//   // if (alarm.name == "cookieAlarm") {
//   //   eventQueue.push({ type: 'ALARM_ACTIVE', alarm: alarm})
//   //   processEventQueue()
//   //   console.log(eventQueue, "myEventQueue")
//     // fetch('http://localhost:3000/')
//     // .then(response => response.json())
//     // .then((res) => {
//     //   console.log(res, "ressssssssssssssssssssssssss")
//     //   if(res[0].notification == "SendCookie_JIOMART"){
//     //     // service.send('NOTIFICATION')
//     //   }
//     // }).catch((err) => {
//     //   console.log(err, "errrrrrrrrrrrrrrrr")
//     // })
    
//   // }
//   // if(alarm){
//     // fetch('http://localhost:3000/')
//     // .then(response => response.json())
//     // .then((res) => {
//     //   console.log(res, "ressssssssssssssssssssssssss")
//     //   if(res[0].notification == "SendCookie_JIOMART"){
//     //     // service.send('NOTIFICATION')
//     //     eventQueue.push({type: 'NOTIFICATION'})
//     //     console.log(eventQueue)
//     //   }
//     // }).catch((err) => {
//     //   console.log(err, "errrrrrrrrrrrrrrrr")
//     // })
//   // }
// })


// new Promise((resolve, reject) => {
//   chrome.storage.local.get(['credentials', 'cookies', 'userDetails'], async function(request){
//     if(request.credentials){
//       // console.log(request.credentials, "Cre)
//       resolve(request.credentials)
//     }
//     else{
//       console.log("user has no LoggedIn Credentials Stored please send credentials from web")
//       reject("no Credentials found")
//     }  
//   })
// }).then((x) => {
//   console.log(x, "reqqqqqqq")
//   eventSubject.next({type: 'LOGIN', data: x})
// })


// eventSubscription.unsubscribe();
// stateSubscription.unsubscribe();


// import { createMachine, interpret } from 'xstate';
// // import AWS from 'aws-sdk'
// // import {
// //   acquireRelease,
// //   log,
// //   runPromise,
// //   scoped,
// //   sync,
// //   tap,
// //   tryCatchPromise,
// // } from '@effect/io/Effect';
// // import { pipe } from '@effect/data/Function';
// // import { exponential } from "@effect/io/Schedule"
// // import { seconds } from "@effect/data/Duration"
// import { Actor, hookup, lookup } from '../../actor/Actor';




// chrome.storage.local.get(['cookies', 'userDetails'], function(request) {
  //   const options = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({data: request.cookies.cookie[0].value, for: "SendCookie_JIOMART"}),
  //     method: 'POST'
  //   }

  //   fetch('http://localhost:3000/data', options).then((data) => {
  //     console.log(data)
  //   })
  // })


// backgroundMachineService.onTransition((state) => {
//   // console.log(state.value, 'finalll')
//   chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     if(request.machineStatus == "getStatus"){
//       if(state.value == 'loggedOUT'){
//         console.log("i m outtttttt")
//         console.log(state.value)
//         sendResponse({ actorState: state.value })
//       }
//       else{
//         console.log(" i am innnnn")
//         console.log(state.value)
//         sendResponse({ actorState: 'loggedIn' })
//       }
//     }
//   })
// })


// export class BackgroundActor extends Actor<'background'> {
//   onMessage(message: string) {
//     console.log('On Message recieved - background', message);
//     // chrome.storage.local.set()
//     chrome.runtime.onMessage.addListener(function (
//       request,
//       sender,
//       sendResponse
//     ) {
//       if (request.action == 'messagefromBg') {
//         sendResponse(message);
//       }
//     });
//   }
// }

// export class UIActor extends Actor<'background'> {
//   onMessage(message: string) {
//     console.log('On Message recieved from ui', message);
//     chrome.runtime.sendMessage('Responding Back');
//     // chrome.storage.local.set()
//   }
// }

// hookup('background', new BackgroundActor());
// lookup('background').send('hello from Background Actor');


// // const message = {
// //   cookie: 'Please login First',
// // };

// chrome.management.onDisabled.addListener(function(info){
//   console.log(info, 'Disabledd')
// })

// chrome.management.onEnabled.addListener(function(info){
//   console.log(info, 'Enableddd')
// })

// chrome.management.onInstalled.addListener(function(info){
//   console.log(info, 'Installed')
// })

// chrome.management.onUninstalled.addListener(function(info){
//   console.log(info, 'Uninstalled')
// })


// chrome.storage.local.get(['cookie', 'userInfo', 'userDetails'], function (request) {

//   console.log(request)
  // const clientId = request.userDetails.clientID;
  // const refreshToken = request.userDetails.signInUserSession.refreshToken.token
  // const params = {
  //   AuthFlow: 'REFRESH_TOKEN_AUTH',
  //   ClientId: clientId,
  //   AuthParameters: {
  //     REFRESH_TOKEN: refreshToken,
  //   },
  // };
  //   // https://cognito-idp.ap-south-1.amazonaws.com/
  // fetch(`${request.userDetails.endpoint}`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-amz-json-1.1',
  //     'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
  //   },
  //   body: JSON.stringify(params),
  // })
  // .then((response) => response.json())
  // .then((data) => {
  //   // console.log(`"${btoa(JSON.stringify(request.cookie[0]))}"`, `"${request.cookie[0]}"`)
  //   // const query = `mutation update {
  //   //   updateTokens(token: { content: "${JSON.stringify(request.cookie[0])}", id: "${request.userInfo}" })
  //   // }`;
  //   console.log(data, "refreshtoken data")
  //   if(data.message == "Refresh Token has expired"){
  //     backgroundMachineService.send('TOKENINACTIVE')
  //   }
//     else{
//       backgroundMachineService.send('TOKENACTIVE')
//     }
//     const content = JSON.stringify(request.cookie[0]);
//     const id = JSON.stringify(request.userInfo);

//     const mutation = `
//       mutation updateTokens($content: String!, $id: String!) {
//         updateTokens(token: { content: $content, id: $id })
//       }`;

    // const variables = {
    //   content,
    //   id,
    // }
//     const url = "https://ieqq6u7bozcj7n2lu6xtumc3ai.appsync-api.ap-south-1.amazonaws.com/graphql";
//     const token = data.AuthenticationResult.AccessToken
//     const options = {
//       method: "POST",
//       headers: { 
//         "Content-Type": "application/json",
//         'Authorization': `Bearer ${token}`  
//       },
//       body: JSON.stringify({  
//         query: mutation,
//         variables, 
//       }),
//     };
      
//     fetch(url, options)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data, "dataaaaa")
//         backgroundMachineService.send('FETCHCOOKIE')
//       })
//       .catch((error) => console.log(error, "error"));
//   })
//   .catch((error) => {
//     console.log(error, "sonallllllllllllll")
//   });
// });


// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(request)
  // if (request.message) {
  //   lookup('ui').send(request.message);

  //   return true
  // }
  // if (request.action == 'getExtensionDetails') {
  //   chrome.management.getAll(function (extensionInfoList) {
  //     // console.log(extensionInfoList)
  //     sendResponse({ extensionList: extensionInfoList });
  //   });
  //   return true;
  // }
  // if (request && request.loggedIn && request.loggedIn.type === 'LOGIN_STATUS') {
  //   if (request.loggedIn.loggedIn) {
  //     // console.log(true);
  //     hookup('ui', new UIActor());
  //     logInMachineService.send('ACTIVATE')
  //     // backgroundMachineService.send('TOKENACTIVE')
  //     backgroundMachineService.send('USERLOGIN')
  //     sendResponse({ success: true });
  //   } 
  //   else {
  //     // console.log(false);
  //     logInMachineService.send('DEACTIVATE')
  //     sendResponse({ success: true });
  //   }
  //   return true;
  // }
  // if(request.machineStatus == "getStatus" ){
  //     const currentState = backgroundMachineService.getSnapshot().value
  //     console.log(currentState);
  //   sendResponse({ actorState: currentState })
  //   // const state = backgroundMachineService.getSnapshot().value
  //   // console.log(state)
  //   return true
  // }

  // if(request && request.machineStatus=="getStatus"){
  //   // console.log(request.machineStatus)
  //   logInMachineService.onTransition((state) => {
  //     console.log(state.value)
  //     // if (state.done) {
  //     //   console.log('Machine is in a final state:', state.value)
  //     // }
  //   })
  //   return  true
  // }
  // if(request && request.loggedin){
  //   backgroundMachineService.send('USERLOGIN')
  // }
  // console.log(request)
  // if (
  //   request.message.type == 'communicationStatus' &&
  //   request &&
  //   request.message
  // ) {
  //   console.log(request.message);
  // }
    // if (request && request.popupStatus == 'PopupActive') {
  //   logInMachineService.onTransition((state) => {
  //     sendResponse({ response: state.value });
  //   });
  //   return true;
  // }
// });


// backgroundMachineService.onTransition((state) => {
//   console.log(state.value, "bySonalll")
//   if(state.value == 'loggedOUT'){
//     sendResponse({ actorState: state.value })
//   }
//   else{
//     console.log('Hiiiiiii')
//     sendResponse({ actorState: 'any' })
//   }
//   // logInMachineService.onTransition((state) => {
//   //   sendResponse({ loggedIn: state.value, actorState: statebg.value })
//   // })
// })



// fetch('https://cognito-idp.ap-south-1.amazonaws.com/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-amz-json-1.1',
//     'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
//   },
//   body: JSON.stringify(params),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data, "sonalllllllllllll")
//     if(data.message == 'Refresh Token has expired'){
//       backgroundMachineService.send('TOKENINACTIVE')
//     }
//     else{
//       backgroundMachineService.send('TOKENACTIVE')
//     }
//   })
//   .catch((error) => {
//     console.log(error)
//     backgroundMachineService.send('TOKENINACTIVE')
//   });

  
// AWS.config.update({ region: 'ap-south-1' });
// const cognito = new AWS.CognitoIdentityServiceProvider();
// const params = {
//   AuthFlow: 'REFRESH_TOKEN_AUTH',
//   ClientId: '42ve7kg7ccfmstt9e1lf3ha645',
//   AuthParameters: {
//     REFRESH_TOKEN: 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.AcX_u7IJdhRXFm9vwY_ncl2eH7DbEaxFe8-5tAOVul4oiJyUzQugd_RV-CW-IO5-i5k0tO9C3HxNdhjwkevzWfg3QyQ5QP451k1skta5uohR_q13OmN_e_cg8-vxH9MvK5mqp96gVp05n6ggEYwQ1PZyRi_hA_DKmXSUXBnVtBCigyvAUWyNGLGYtnssnWu1MLvX17_-6eG4JmkGoa7p9-463d47Opayjz39pu6J9WzGPTzJ5kRh5Gn9hULKiH4yxGzYm9SRamCNCcECFi1sVPHkiI5SaYfj6aP8od9yKlOzENhusXplIvEPDZBovZY9KQny_f39m9mGf2jEN1HJaQ.R-3nqCV_c8gtgnE3.DGR-zCD1_I493Cdo-6AQN9Ickwz05wcWLkVFR6nXgQ3Ud98DLP910XdIpGqg0m-DAbKtRELKiDiTqzMpMv16uxdujogByYrUTpqouYHMfuNqHG-pAnCmcQ5PL6deefi9ESoYuVbitQxzcrr7OZANJSP8tXGezDvV8X6Bzst36jxsBFI80ZYh3bL_9gaCYEO-Ek_5RJWF4_BPKGCMI3v3U6j6UzshyvRWG4nwhEcwndwlCfqI4Q7rptpygkPpJAQFrkITriJlbFps7EaU9osDs0SCSBUDrfnJEXpZHlvi6d9XiUb1iVupCepTN0sHONQmT6bd6XhZDh9IabNQGARkCqs7ZjIXKirdb5YpO84Ax04Uqkv_nxcm_ARL9nn4TThWPo3q-h9CUCb5RsS57FwBs1JsIMhgwPHx-ih0iR0zybcfC6fZDHl4T1bKk4_4yez6Drsn36vUrxq3XB2VTwPMZaH9LrTHN4PoEVc1qt4l2sDy9B2LbyWpUnsXxK_iKairdgigMD-sn44keT8nNyMvWa0-1kWZRrgxFx4tcTImJeeDfzK7WhLk07_o4KfjL7IBrn8ElTE3qeQRN7HLiPsCtfoVzv6UDXgPbC5K8Ii8IBiRvuJWrteGRVjmvvNmJBNlhJLm4-XvSYoQ81hM5qSlwtKV_tP1YjgfgsnE-Rwe3vIy1x1ym-gaQWTLXvV2YoRIPFKb5cSYUemQO7Ck3ZZzJdFhcHBEJhCMjTlcca8XFdaVpphQjLk9wblJkpipcFby7JxGeL1AJ9Tog-ofenOlWbtAwDmIFOvwHTTkJ1_02g0wco-IibxqkRdYlXTqRHexygZsbrLsTlXMQ54ruYguRF40TZAeyQCtWOIPEznFmuGhRoKis0KL2Do1-lUAIUgXSQTcSZv-O7QgLJjO57L3DRhGETpfw2XxA4iTX207yQZ5FXgzava35WKlvusJPqG0b9E2O2TGkJKDzLQTFIVJD7knJx5Nu1ebEQpuRsCgjGcZ9yCHGoOYgboPvyJHGh9s5LtbbxyEkHiE-x-6YqaYVqnsNnYYTpf_RdtKGP21Lwol8EPPh7zVN00IlWcxrZgjEsqOP7SB6jKHexUY80z4KggJes5ITQVjpF1CsfD16IyL7dI68EyDtBPwkC6Y8Yihw6Emob1mVzCSswYcYZzAfIS_VCclD05_JhJV6eLD1Mr1IXuda8ekYHZ0yF30vAf3-4X3sDSze_5BFfrtR1HJZHMG9cfZsXdC-T5CXCu0uAFjTwuaPiEaZ4b5J0NyaOt_3-Fz4w.N9pByT-0ryT0sIurJaMHRw'
//   }
// };
// cognito.initiateAuth(params, (err, data) => {
//   if (err) {
//     console.log(err, err.stack);
//     backgroundMachineService.send('TOKENINACTIVE')
//   } else {
//     console.log(data.AuthenticationResult);
//     backgroundMachineService.send('TOKENACTIVE')
//   }
// });



// if (request.action == 'getCookie') {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     // console.log(tabs[0].url)
//     if (tabs[0]?.url == 'https://identity.seller.jiomart.com/sso/login') {
//       sendResponse(message);
//     } else {
//       chrome.cookies.getAll({ url: tabs[0]?.url }, function (cookie) {
//         chrome.identity.getProfileUserInfo(function (userInfo) {
//           console.log(userInfo, cookie);
//           sendResponse({ userInfo: userInfo, cookie: cookie });
//           // fetch('http://localhost:3000/data', {
//           //   method: 'POST',
//           //   headers: {
//           //     'Content-Type': 'application/json',
//           //   },
//           //   body: JSON.stringify({
//           //     message: 'Hello, server!',
//           //     cookie: response.cookie[0].value ? response.cookie[0].value : '',
//           //     emailID: response.userInfo ? response.userInfo.email : '',
//           //     userID: response.userInfo ? response.userInfo.id : '',
//           //     time: currentTime,
//           //   }),
//           // })
//           // .then((res) => res.json())
//           // // .then(data => console.log(data, "sonalllllllll"))
//           // .catch((error) => console.error(error));
//         });
//       });
//     }
//   });
//   return true;
// }

// runPromise(
//   retry(exponential(seconds(2)))(log('Hello from background.jsssssssss'))
// );

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log(request.text);
//   console.log(sender)
//   // sendResponse("hey hiiii from extension")
// });

// var data1: any;




// export function fetchDetails(){
//   // console.log(data)
//   return data1
// }

// chrome.storage.local.get("fetchMeeshoDetails", function(data){
//   console.log(data)
// })

// initializeQueues().then(() =>
//   runPromise(
//     pipe(
//       // initialise the actor by hooking up
//       acquireRelease(
//         tryCatchPromise(
//           () => hookup('background', new BackgroundActor()),
//           (err: any) => {
//             console.log(err);
//             return new Error('HookingUp Error');
//           }
//         ),
//         (breakUp) => sync(() => {})
//       ),
//       tap(() => log(`Testing Background Messages`)),
//       tap(() =>
//         sync(() => {
//           console.log('Sending Message');
//           lookup('ui').send('yooooo');
//           console.log('Sent Message');
//         })
//       ),
//       scoped
//     )
//   )
// );



// const logInMachine = createMachine({
//   id: 'popupActor',
//   initial: 'inactive',
//   states: {
//     inactive: {
//       on: {
//         ACTIVATE: 'active',
//       },
//     },
//     active: {
//       on: {
//         DEACTIVATE: 'inactive',
//       },
//     },
//   },
// });

// export const logInMachineService = interpret(
//   logInMachine
// ).start();


// const backgroundActorMachine = createMachine({
//   id: "websiteActor",
//   initial: "initial",
//   states: {
//     initial: {
//       on: {
//         ACTIVE: {
//           target: "ReqCred",
//         },
//         // INACTIVE: {
//         //   target: "ResServer",
//         // },
//       },
//     },
//     ReqCred: {
//       on: {
//         TOKENINACTIVE: {
//           target: "loggedOUT",
//         },
//         TOKENACTIVE: {
//           target: "LoggedIn",
//         },
        
//       },
//     },
//     ResServer: {
//       type: "final",
//     },
//     loggedOUT: {
//       on: {
//         USERLOGIN: {
//           target: "LoggedIn",
//         },
//       },
//     },
//     LoggedIn: {
//       on: {
//         FETCHCOOKIE: {
//           target: "ResServer",
//         },
//       },
//     },
//   },

// });

// export const backgroundActor2 = createMachine({
//   id: "(machine)",
//   initial: "checkLogin",
//   states: {
//     checkLogin: {
//       on: {
//         LOGGEDIN: {
//           target: "sendingCookie",
//         },
//         LOGGEDOUT: {
//           target: "loggedOut",
//         },
//       },
//     },
//     loggedOut: {
//       on: {
//         LOGIN: {
//           target: "sendingCookie",
//         },
//       },
//     },
//     sendingCookie: {
//       on: {
//         RESPONSE_SUCCESS: {
//           target: "cookieCheck",
//         },
//         RESPONSE_FAILED: {
//           target: "loggedOut",
//         },
//       },
//     },
//     cookieCheck: {
//       on: {
//         COOKIEEXPIRED: {
//           target: "logInMarrketplace",
//         },
//         COOKIE: {
//           target: "success",
//         },
//       },
//     },
//     logInMarrketplace: {
//       on: {
//         LOGGEDIN: {
//           target: "cookieCheck",
//         },
//       },
//     },
//     success: {
//       type: "final",
//     },
//   },
//   predictableActionArguments: true,
//   preserveActionOrder: true,
// });


// // const testPlans = test(logInMachine, {
// //   // Define your test cases here
// //   // This test case tests that the machine transitions correctly
// //   // from loggedOut to loggedIn when a LOGIN event is sent
// //   'transition from loggedOut to loggedIn when LOGIN event is sent': {
// //     meta: { author: 'John', description: 'Test login transition' },
// //     initial: 'loggedOut',
// //     events: [{ type: 'LOGIN' }],
// //     states: {
// //       loggedIn: true
// //     }
// //   }
// // });

// export const backgroundMachineService = interpret(
//   backgroundActorMachine
// ).onTransition((state) => {
//   console.log(state.value, 'finalll')
//   // chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//   //   if(request.machineStatus == "getStatus"){
//   //     if(state.value == 'loggedOUT'){
//   //       console.log("i m outtttttt")
//   //       console.log(state.value)
//   //       sendResponse({ actorState: state.value })
//   //     }
//   //     else{
//   //       console.log(" i am innnnn")
//   //       console.log(state.value)
//   //       sendResponse({ actorState: 'loggedIn' })
//   //     }
//   //   }
//   // })
// }).start()

// // backgroundMachineService

// // backgroundMachineService.start()

// backgroundMachineService.send('ACTIVE')

// const fetchData = async (credentials:any) => {
//   console.log("FETCH DATA CALLED")
//   try {
//     if(credentials){
//       const url = credentials.client.endpoint
//       const refreshToken = credentials.signInUserSession.refreshToken.token
//       const clientID = credentials.pool.clientId
//       const params= {
//         AuthFlow: 'REFRESH_TOKEN_AUTH',
//         ClientId: clientID,
//         AuthParameters: {
//           REFRESH_TOKEN: refreshToken
//         }
//       }
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-amz-json-1.1',
//           'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth'
//         },
//         body: JSON.stringify(params)
//       }).then(res => res.json()).then((data) => {
//         console.log(data, "fetched access token")

//         const query = `query saleAmountCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//           saleAmountCard(filter: {
//             company: $company,
//             endDate: $endDate,
//             marketplace: $marketplace,
//             startDate: $startDate,
//             type: $type
//           })
//         }`

//         const query2 = `query saleQuantityCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//           saleQuantityCard(filter: {
//             company: $company,
//             endDate: $endDate,
//             marketplace: $marketplace,
//             startDate: $startDate,
//             type: $type
//           })
//         }`

//         const query3 = `query realisedAmountCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//           realisedAmountCard(filter: {
//             company: $company,
//             endDate: $endDate,
//             marketplace: $marketplace,
//             startDate: $startDate,
//             type: $type
//           })
//         }`

//         const variables = {
//           company: '',
//           endDate: '2023-04-30',
//           marketplace: 'AMAZON IN',
//           startDate: '2023-04-01',
//           type: 'saleQuantityCard'
//         }

//         const url = 'https://o4olf5fb4zfqdgg2yag2k2ckmm.appsync-api.ap-south-1.amazonaws.com/graphql'
//         const token = data.AuthenticationResult.AccessToken
//         const option = {
//           method: 'POST',
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//           },
//           body: JSON.stringify({
//             query: query2,
//             variables
//           })
//         }
//         fetch(url, option).then((res) => res.json()).then((response) => {
//           console.log(JSON.parse(response), "result data")
//         }).catch(err => console.log("err in result data"))
//       }).catch((err)=> console.log("err access token"))
//     }
//     const response = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve([
//           {
//             value: "amount",
//             name: "Amount",
//             content: {
//               label: "Sales",
//               value: 400,
//               change: {
//                 value: 12
//               },
//               yaxis: "orderValue",
//               xaxis: "orderDate",
//               average: 130000,
//               data: [
//                 {
//                   "orderDate": "01-04",
//                   "orderValue": 172146
//                 },
//                 {
//                   "orderDate": "02-04",
//                   "orderValue": 128024
//                 },
//                 {
//                   "orderDate": "03-04",
//                   "orderValue": 152550
//                 },
//                 {
//                   "orderDate": "04-04",
//                   "orderValue": 101164
//                 },
//                 {
//                   "orderDate": "05-04",
//                   "orderValue": 129030
//                 },
//                 {
//                   "orderDate": "06-04",
//                   "orderValue": 139631.6
//                 },
//                 {
//                   "orderDate": "07-04",
//                   "orderValue": 118037
//                 }
//               ]
//             }
//           },
//           {
//             value: "quantity",
//             name: "Quantity",
//             content: {
//               label: "Sales",
//               value: 400,
//               change: {
//                 value: 10
//               },
//               yaxis: "orderValue",
//               xaxis: "orderDate",
//               average:150,
//               data: [
//                 {
//                   "orderDate": "01-04",
//                   "orderValue": 172
//                 },
//                 {
//                   "orderDate": "02-04",
//                   "orderValue": 128
//                 },
//                 {
//                   "orderDate": "03-04",
//                   "orderValue": 152
//                 },
//                 {
//                   "orderDate": "04-04",
//                   "orderValue": 101
//                 },
//                 {
//                   "orderDate": "05-04",
//                   "orderValue": 129
//                 },
//                 {
//                   "orderDate": "06-04",
//                   "orderValue": 139
//                 },
//                 {
//                   "orderDate": "07-04",
//                   "orderValue": 118
//                 }
//               ]
//             }
//           },
//         ]);
//       }, 1000);
//     });

//     return response;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// try {
//   console.log(cardContext, "in Fetch Data in Card")
//   const response = new Promise((resolve, reject) => {
//     if(cardContext.type == "saleCard" && cardContext.cognito_cred){
      // const url = cardContext.cognito_cred.client.endpoint;
      //   const refreshToken = cardContext.cognito_cred.signInUserSession.refreshToken.token;
      //   const clientID = cardContext.cognito_cred.pool.clientId;
      //   const params = {
      //     AuthFlow: "REFRESH_TOKEN_AUTH",
      //     ClientId: clientID,
      //     AuthParameters: {
      //       REFRESH_TOKEN: refreshToken,
      //     },
      //   };
      //   fetch(url, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/x-amz-json-1.1",
      //       "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
      //     },
      //     body: JSON.stringify(params),
      //   })
      //     .then((res) => res.json())
//           .then((data) => {
//             console.log(data, "fetched access token");

            // const query = `query saleAmountCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
            // saleAmountCard(filter: {
            //   company: $company,
            //   endDate: $endDate,
            //   marketplace: $marketplace,
            //   startDate: $startDate,
            //   type: $type
            // })}`;

//             const query2 = `query saleQuantityCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//             saleQuantityCard(filter: {
//               company: $company,
//               endDate: $endDate,
//               marketplace: $marketplace,
//               startDate: $startDate,
//               type: $type
//             })
//           }`;

//             const query3 = `query realisedAmountCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//             realisedAmountCard(filter: {
//               company: $company,
//               endDate: $endDate,
//               marketplace: $marketplace,
//               startDate: $startDate,
//               type: $type
//             })
//           }`;

            // const variables = {
            //   company: "",
            //   endDate: "2023-04-30",
            //   marketplace: "AMAZON IN",
            //   startDate: "2023-04-01",
            //   type: "saleQuantityCard",
            // };

            // const url =
            //   "https://o4olf5fb4zfqdgg2yag2k2ckmm.appsync-api.ap-south-1.amazonaws.com/graphql";
            // const token = data.AuthenticationResult.AccessToken;
            // const option = {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //     Authorization: `Bearer ${token}`,
            //   },
            //   body: JSON.stringify({
            //     query: query2,
            //     variables,
            //   }),
            // };
            // fetch(url, option)
            //   .then((res) => res.json())
            //   .then((response) => {
//                 console.log(response, "dataaaaaaaa")
//                 const required_response = response;
//                 // const value = JSON.parse(
//                 //   required_response.data.saleQuantityCard
//                 // );
//                 // console.log(value, "result data");
// resolve({
//   card1: [
//     {
//       value: "amount",
//       name: "Amount",
//       content: {
//         label: "Sales",
//         value: 4,
//         change: {
//           value: 12,
//         },
//         yaxis: "orderValue",
//         xaxis: "orderDate",
//         average: 2,
//         data: [
//           {
//             orderDate: "01-04",
//             orderValue: 1,
//           },
//           {
//             orderDate: "02-04",
//             orderValue: 2,
//           },
//           {
//             orderDate: "03-04",
//             orderValue: 3,
//           },
//           {
//             orderDate: "04-04",
//             orderValue: 4,
//           },
//           {
//             orderDate: "05-04",
//             orderValue: 5,
//           },
//           {
//             orderDate: "06-04",
//             orderValue: 6,
//           },
//           {
//             orderDate: "07-04",
//             orderValue: 7,
//           },
//         ],
//       },
//     },
//     {
//       value: "quantity",
//       name: "Quantity",
//       content: {
//         label: "Sales",
//         value: 400,
//         change: {
//           value: 10,
//         },
//         yaxis: "orderValue",
//         xaxis: "orderDate",
//         average: 150,
//         data: [
//           {
//             orderDate: "01-04",
//             orderValue: 172,
//           },
//           {
//             orderDate: "02-04",
//             orderValue: 128,
//           },
//           {
//             orderDate: "03-04",
//             orderValue: 152,
//           },
//           {
//             orderDate: "04-04",
//             orderValue: 101,
//           },
//           {
//             orderDate: "05-04",
//             orderValue: 129,
//           },
//           {
//             orderDate: "06-04",
//             orderValue: 139,
//           },
//           {
//             orderDate: "07-04",
//             orderValue: 118,
//           },
//         ],
//       },
//     },
//   ],
// });
//               })
//               .catch((err) => console.log("err in result data", reject(err)));
//           })
//           .catch((err) => console.log("err access token", reject(err)));

//     }
//     else if(cardContext.type == "refundCard" && cardContext.cognito_cred){
//       const url = cardContext.cognito_cred.client.endpoint;
//         const refreshToken = cardContext.cognito_cred.signInUserSession.refreshToken.token;
//         const clientID = cardContext.cognito_cred.pool.clientId;
//         const params = {
//           AuthFlow: "REFRESH_TOKEN_AUTH",
//           ClientId: clientID,
//           AuthParameters: {
//             REFRESH_TOKEN: refreshToken,
//           },
//         };
//         fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-amz-json-1.1",
//             "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
//           },
//           body: JSON.stringify(params),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data, "fetched access token");

//             const query = `query saleAmountCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//             saleAmountCard(filter: {
//               company: $company,
//               endDate: $endDate,
//               marketplace: $marketplace,
//               startDate: $startDate,
//               type: $type
//             })
//           }`;

//             const query2 = `query saleQuantityCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//             saleQuantityCard(filter: {
//               company: $company,
//               endDate: $endDate,
//               marketplace: $marketplace,
//               startDate: $startDate,
//               type: $type
//             })
//           }`;

//             const query3 = `query realisedAmountCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//             realisedAmountCard(filter: {
//               company: $company,
//               endDate: $endDate,
//               marketplace: $marketplace,
//               startDate: $startDate,
//               type: $type
//             })
//           }`;

//             const variables = {
//               company: "",
//               endDate: "2023-04-30",
//               marketplace: "AMAZON IN",
//               startDate: "2023-04-01",
//               type: "saleQuantityCard",
//             };

//             const url =
//               "https://o4olf5fb4zfqdgg2yag2k2ckmm.appsync-api.ap-south-1.amazonaws.com/graphql";
//             const token = data.AuthenticationResult.AccessToken;
//             const option = {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//               },
//               body: JSON.stringify({
//                 query: query2,
//                 variables,
//               }),
//             };
//             fetch(url, option)
//               .then((res) => res.json())
//               .then((response) => {
//                 console.log(response, "dataaaaaaaa")
//                 const required_response = response;
//                 // const value = JSON.parse(
//                 //   required_response.data.saleQuantityCard
//                 // );
//                 // console.log(value, "result data");
//                 resolve({
//                   card2: [
//                     {
//                       value: "amount",
//                       name: "Amount",
//                       content: {
//                         label: "refundCard",
//                         value: 4,
//                         change: {
//                           value: 12,
//                         },
//                         yaxis: "orderValue",
//                         xaxis: "orderDate",
//                         average: 2,
//                         data: [
//                           {
//                             orderDate: "01-04",
//                             orderValue: 1,
//                           },
//                           {
//                             orderDate: "02-04",
//                             orderValue: 2,
//                           },
//                           {
//                             orderDate: "03-04",
//                             orderValue: 3,
//                           },
//                           {
//                             orderDate: "04-04",
//                             orderValue: 4,
//                           },
//                           {
//                             orderDate: "05-04",
//                             orderValue: 5,
//                           },
//                           {
//                             orderDate: "06-04",
//                             orderValue: 6,
//                           },
//                           {
//                             orderDate: "07-04",
//                             orderValue: 7,
//                           },
//                         ],
//                       },
//                     },
//                     {
//                       value: "quantity",
//                       name: "Quantity",
//                       content: {
//                         label: "Sales",
//                         value: 400,
//                         change: {
//                           value: 10,
//                         },
//                         yaxis: "orderValue",
//                         xaxis: "orderDate",
//                         average: 150,
//                         data: [
//                           {
//                             orderDate: "01-04",
//                             orderValue: 172,
//                           },
//                           {
//                             orderDate: "02-04",
//                             orderValue: 128,
//                           },
//                           {
//                             orderDate: "03-04",
//                             orderValue: 152,
//                           },
//                           {
//                             orderDate: "04-04",
//                             orderValue: 101,
//                           },
//                           {
//                             orderDate: "05-04",
//                             orderValue: 129,
//                           },
//                           {
//                             orderDate: "06-04",
//                             orderValue: 139,
//                           },
//                           {
//                             orderDate: "07-04",
//                             orderValue: 118,
//                           },
//                         ],
//                       },
//                     },
//                   ],
//                 });
//               })
//               .catch((err) => console.log("err in result data", reject(err)));
//           })
//           .catch((err) => console.log("err access token", reject(err)));

//     }

//     // if (cardContext.cognito_cred) {
//       // const url = cardContext.cognito_cred.client.endpoint;
//       // const refreshToken = cardContext.cognito_cred.signInUserSession.refreshToken.token;
//       // const clientID = cardContext.cognito_cred.pool.clientId;
//       // const params = {
//       //   AuthFlow: "REFRESH_TOKEN_AUTH",
//       //   ClientId: clientID,
//       //   AuthParameters: {
//       //     REFRESH_TOKEN: refreshToken,
//       //   },
//       // };
//       // fetch(url, {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/x-amz-json-1.1",
//       //     "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
//       //   },
//       //   body: JSON.stringify(params),
//       // })
//       //   .then((res) => res.json())
//       //   .then((data) => {
//       //     console.log(data, "fetched access token");

//       //     const query = `query saleAmountCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//       //     saleAmountCard(filter: {
//       //       company: $company,
//       //       endDate: $endDate,
//       //       marketplace: $marketplace,
//       //       startDate: $startDate,
//       //       type: $type
//       //     })
//       //   }`;

//       //     const query2 = `query saleQuantityCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//       //     saleQuantityCard(filter: {
//       //       company: $company,
//       //       endDate: $endDate,
//       //       marketplace: $marketplace,
//       //       startDate: $startDate,
//       //       type: $type
//       //     })
//       //   }`;

//       //     const query3 = `query realisedAmountCard($company: String, $endDate: String, $marketplace: String, $startDate: String, $type: String) {
//       //     realisedAmountCard(filter: {
//       //       company: $company,
//       //       endDate: $endDate,
//       //       marketplace: $marketplace,
//       //       startDate: $startDate,
//       //       type: $type
//       //     })
//       //   }`;

//       //     const variables = {
//       //       company: "",
//       //       endDate: "2023-04-30",
//       //       marketplace: "AMAZON IN",
//       //       startDate: "2023-04-01",
//       //       type: "saleQuantityCard",
//       //     };

//       //     const url =
//       //       "https://o4olf5fb4zfqdgg2yag2k2ckmm.appsync-api.ap-south-1.amazonaws.com/graphql";
//       //     const token = data.AuthenticationResult.AccessToken;
//       //     const option = {
//       //       method: "POST",
//       //       headers: {
//       //         "Content-Type": "application/json",
//       //         Authorization: `Bearer ${token}`,
//       //       },
//       //       body: JSON.stringify({
//       //         query: query2,
//       //         variables,
//       //       }),
//       //     };
//       //     fetch(url, option)
//       //       .then((res) => res.json())
//       //       .then((response) => {
//       //         console.log(response, "dataaaaaaaa")
//       //         const required_response = response;
//       //         const value = JSON.parse(
//       //           required_response.data.saleQuantityCard
//       //         );
//       //         console.log(value, "result data");
//       //         // resolve({
//       //         //   card1: [
//       //         //     {
//       //         //       value: "amount",
//       //         //       name: "Amount",
//       //         //       content: {
//       //         //         label: "Sales",
//       //         //         value: 4,
//       //         //         change: {
//       //         //           value: 12,
//       //         //         },
//       //         //         yaxis: "orderValue",
//       //         //         xaxis: "orderDate",
//       //         //         average: 2,
//       //         //         data: [
//       //         //           {
//       //         //             orderDate: "01-04",
//       //         //             orderValue: 1,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "02-04",
//       //         //             orderValue: 2,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "03-04",
//       //         //             orderValue: 3,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "04-04",
//       //         //             orderValue: 4,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "05-04",
//       //         //             orderValue: 5,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "06-04",
//       //         //             orderValue: 6,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "07-04",
//       //         //             orderValue: 7,
//       //         //           },
//       //         //         ],
//       //         //       },
//       //         //     },
//       //         //     {
//       //         //       value: "quantity",
//       //         //       name: "Quantity",
//       //         //       content: {
//       //         //         label: "Sales",
//       //         //         value: 400,
//       //         //         change: {
//       //         //           value: 10,
//       //         //         },
//       //         //         yaxis: "orderValue",
//       //         //         xaxis: "orderDate",
//       //         //         average: 150,
//       //         //         data: [
//       //         //           {
//       //         //             orderDate: "01-04",
//       //         //             orderValue: 172,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "02-04",
//       //         //             orderValue: 128,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "03-04",
//       //         //             orderValue: 152,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "04-04",
//       //         //             orderValue: 101,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "05-04",
//       //         //             orderValue: 129,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "06-04",
//       //         //             orderValue: 139,
//       //         //           },
//       //         //           {
//       //         //             orderDate: "07-04",
//       //         //             orderValue: 118,
//       //         //           },
//       //         //         ],
//       //         //       },
//       //         //     },
//       //         //   ],
//       //         // });
//       //       })
//       //       .catch((err) => console.log("err in result data", reject(err)));
//       //   })
//       //   .catch((err) => console.log("err access token", reject(err)));
//     // }
//   });

//   // console.log(response, "i want to see Response")
//   return response;
// } catch (error) {
//   console.error("Error fetching data:", error);
//   throw error;
// }