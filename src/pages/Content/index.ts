// import { printLine } from './modules/print';
import { log, runPromise } from '@effect/io/Effect';

runPromise(log('Hello from Content Scripts'));

console.log("hello from content.jsssssssssss")
// chrome.runtime.sendMessage({ action: 'messagefromBg' }, function (response) {
//   if(response){
//     window.postMessage({ type: 'PostMessage', res: response });
//   }
// });

chrome.storage.local.set({ flipkart: localStorage.getItem("__appData") })

// window.addEventListener('message', (event) => {
//   // console.log(event);
//   if (event.source !== window) return;
//   // console.log(event)
//   if (event.data.type === 'LOGIN_STATUS') {
//     chrome.runtime.sendMessage({ loggedIn: event.data });
//     chrome.runtime.sendMessage(
//       { action: 'getExtensionDetails' },
//       function (response) {
//         if (response) {
//           window.postMessage({ type: 'DeepEcomExtensionReady' });
//         }
//       }
//     );

//     if(event.data.loggedIn){
//       chrome.storage.local.set({ userDetails: event.data.userDetails })
//     }

//   }
//   // if (event.data.type === 'communicationStatus') {
//   //   // console.log(event.data);
//   //   chrome.runtime.sendMessage({ message: event.data });
//   // }
//   if (event.data.type === 'chromeMessage') {
//     console.log('Sending Message to background', event.data);
//     chrome.runtime.sendMessage({ message: event.data });
//   }

// });


// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(request)
//   // if(request && request.userSession == "tokenExpired"){
//   //   backgroundMachineService.onTransition((state) => {
//   //     sendResponse({response: state.value})
//   //   })
//   //   // backgroundMachineService.send('USERLOGIN')
//   //   return true
//   // }
// })

// chrome.runtime.sendMessage({ machineState: 'userStatus' })

// chrome.runtime.sendMessage({  }, function (response) {
//   console.log(response);
  // fetch('http://localhost:3000/data', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     message: 'Hello, server!',
  //     cookie: response.cookie[0].value ? response.cookie[0].value : '',
  //     emailID: response.userInfo ? response.userInfo.email : '',
  //     userID: response.userInfo ? response.userInfo.id : '',
  //     time: currentTime,
  //   }),
  // })
  //   .then((res) => res.json())
  //   // .then(data => console.log(data, "sonalllllllll"))
  //   .catch((error) => console.error(error));
// });


// chrome.runtime.onMessage.addListener((message) => {
//   // console.log('In Content Script');
// });

// window.addEventListener('message', function(event) {

//   if (event.source !== window) return;

//   if(event.data.type == 'FETCH'){
//     this.chrome.runtime.sendMessage({ fetchCall: event.data })
//   }
// });
// chrome.storage.local.set({ fromStorage: 'Hello from the website' });


// import { lookup } from '../../actor/Actor';
// import { Actor, hookup, lookup, initializeQueues } from "../../actor/Actor";

// export class contentActor extends Actor<'content'> {
//   onMessage(message: string) {
//     console.log("content -----", message)
//     chrome.runtime.sendMessage({ type: "SONAL" , reqRes: message })
//   }
// }

// hookup("content", new contentActor())

// initializeQueues().then((x) => {
//   console.log(x)
// })

// hookup("content", new contentActor())

// console.log("Sending Message to web")

// lookup("ui").send("Hi from UI actor")

// chrome.runtime.sendMessage({action: "getCookie"}, function(response) {
//   var actorWindow = window.open("./popup.html");
//   actorWindow?.addEventListener("load", function() {
//     actorWindow?.postMessage({action: "sendCookieToActor", cookie: response.cookie.value}, "*");
//   });
// });

// const fetchDetails = async() => {
//   const res = await fetch("https://supplier.meesho.com/payoutsapi/api/payments/order-info", {
//     "headers": {
//       "accept": "application/json, text/plain, */*",
//       "accept-language": "en-US,en;q=0.9",
//       "client-type": "d-web",
//       "client-version": "v1",
//       "content-type": "application/json;charset=UTF-8",
//       "identifier": "fkihi",
//       "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"Windows\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-origin",
//       "cookie": "_gcl_aw=GCL.1679994963.CjwKCAjwoIqhBhAGEiwArXT7K2yQhTnHksli11cVNnKzTIflgqG3MBzSaqGEsxJx5DaZK44Clrc6WhoCbHsQAvD_BwE; _gcl_au=1.1.489432199.1679994963; _fbp=fb.1.1679994962853.233039518; _gac_UA-178040899-4=1.1679994963.CjwKCAjwoIqhBhAGEiwArXT7K2yQhTnHksli11cVNnKzTIflgqG3MBzSaqGEsxJx5DaZK44Clrc6WhoCbHsQAvD_BwE; download_button=true; excel_updated=true; hidden_payment_banners=%5B%5D; mobile_search=%5B%5D; highlight_downloads=true; _ga=GA1.1.1430758493.1679994963; mp_60483c180bee99d71ee5c084d7bb9d20_mixpanel=%7B%22distinct_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22%24device_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22Is%20Anonymous%22%3A%20%22True%22%2C%22Session%20ID%22%3A%20%2265485b67-2c24-477a-aa8b-18c97463%22%2C%22last%20event%20time%22%3A%201681382794635%7D; _ga_ZB97HR591S=GS1.1.1681382785.1.0.1681382794.51.0.0; __cf_bm=5wH4aFQdCgi4QxD_nR33LdRHXjOLOBhC3cpbQVJrF_I-1682056447-0-AWdfICfR7ASatF/GtomzSAqak7sI95gO2DUskvwpJi/0ztzb4M2tDxdIR4FsNOhMx25bDNZQrzviYfnbO/uYCOs=; __cfruid=1b374e666648e767d98ba43373d495b2dbf9f3e3-1682056447; connect.sid=s%3A6uLV8LRl40SYUMh2YynZJShgbInCnMda.oQGrUQ8jjI8yKAKTJzx7CY2RCotg4Js4XGlMc8AQ51o; s_b=true; mp_a66867feba42257f4b46689d52d48f86_mixpanel=%7B%22distinct_id%22%3A%20%22fkihi%22%2C%22%24device_id%22%3A%20%221872780c450109-085cba7ae7748f-26031851-144000-1872780c451c9b%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22utm_source%22%3A%20%22G-Search-Brand%22%2C%22utm_medium%22%3A%20%22meesho%20seller_c%22%2C%22utm_campaign%22%3A%20%22B-Safe_Search_Brand_New_Users%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%22fkihi%22%2C%22source%22%3A%20%22Direct%22%2C%22medium%22%3A%20%22Direct%22%2C%22campaign%22%3A%20%22Direct%22%2C%22initial_distinct_id%22%3A%20%22Direct%22%2C%22client_type%22%3A%20%22d-web%22%2C%22Supplier_id%22%3A%20727035%2C%22Supplier_tag%22%3A%20%22fkihi%22%2C%22M_Trusted%22%3A%20false%7D",
//       // "_gcl_aw=GCL.1679994963.CjwKCAjwoIqhBhAGEiwArXT7K2yQhTnHksli11cVNnKzTIflgqG3MBzSaqGEsxJx5DaZK44Clrc6WhoCbHsQAvD_BwE; _gcl_au=1.1.489432199.1679994963; _fbp=fb.1.1679994962853.233039518; _gac_UA-178040899-4=1.1679994963.CjwKCAjwoIqhBhAGEiwArXT7K2yQhTnHksli11cVNnKzTIflgqG3MBzSaqGEsxJx5DaZK44Clrc6WhoCbHsQAvD_BwE; download_button=true; excel_updated=true; hidden_payment_banners=%5B%5D; mobile_search=%5B%5D; highlight_downloads=true; _ga=GA1.1.1430758493.1679994963; mp_60483c180bee99d71ee5c084d7bb9d20_mixpanel=%7B%22distinct_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22%24device_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22Is%20Anonymous%22%3A%20%22True%22%2C%22Session%20ID%22%3A%20%2265485b67-2c24-477a-aa8b-18c97463%22%2C%22last%20event%20time%22%3A%201681382794635%7D; _ga_ZB97HR591S=GS1.1.1681382785.1.0.1681382794.51.0.0; __cf_bm=IGHHbmW.M_6M5XW4k8Pf.ekVgVpXmoVLemfDBEkcpuU-1681903776-0-AZnHnf2mWjMKfQHR0f4Wm6CH9b9ZDSNe55q4lyZt/VLapZgQ81qAn42yCO0big5w66aWvbsno2CcyXKzKrEcPrs=; __cfruid=95a5c9d21386fb2f4224dc6f53d5931b67ef606f-1681903776; connect.sid=s%3Aa5-rV1B2SzDWxBZEBZKHb3F7tRmWt8P6.GbO%2BpTH3dPcNQE3TWOdMXyjmWtgAcdYGVdLO3rHbrfo; s_b=true; mp_a66867feba42257f4b46689d52d48f86_mixpanel=%7B%22distinct_id%22%3A%20%22fkihi%22%2C%22%24device_id%22%3A%20%221872780c450109-085cba7ae7748f-26031851-144000-1872780c451c9b%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22utm_source%22%3A%20%22G-Search-Brand%22%2C%22utm_medium%22%3A%20%22meesho%20seller_c%22%2C%22utm_campaign%22%3A%20%22B-Safe_Search_Brand_New_Users%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%22fkihi%22%2C%22source%22%3A%20%22Direct%22%2C%22medium%22%3A%20%22Direct%22%2C%22campaign%22%3A%20%22Direct%22%2C%22initial_distinct_id%22%3A%20%22Direct%22%2C%22client_type%22%3A%20%22d-web%22%2C%22Supplier_id%22%3A%20727035%2C%22Supplier_tag%22%3A%20%22fkihi%22%2C%22M_Trusted%22%3A%20false%7D; deferred-registration=true; enable_inbound_calling=true; allow_supplier_signature=true",
//       "Referer": "https://supplier.meesho.com/panel/v3/new/payouts/fkihi/payments/search?type=order_suborder&search=496607376881",
//       "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": "{\"supplier_id\":727035,\"identifier\":\"fkihi\",\"date\":\"2023-04-17\",\"status\":\"SUCCESS\",\"sub_order_num\":\"496607376881_1\"}",
//     "method": "POST"
//   }).then(r => r.json()).catch(err => err)
//   console.log(res)
//   chrome.storage.local.set({"fetchMeeshoDetails": res})
//   return res
// }

// fetchDetails()
// // console.log(fetchDetails("496607376881"))

// console.log(fetchDetails())

// fetch("https://supplier.meesho.com/payoutsapi/api/payments/order-info", {
//     "headers": {
//       "accept": "application/json, text/plain, */*",
//       "accept-language": "en-US,en;q=0.9",
//       "client-type": "d-web",
//       "client-version": "v1",
//       "content-type": "application/json;charset=UTF-8",
//       "identifier": "fkihi",
//       "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"Windows\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-origin",
//       "cookie": "_gcl_aw=GCL.1679994963.CjwKCAjwoIqhBhAGEiwArXT7K2yQhTnHksli11cVNnKzTIflgqG3MBzSaqGEsxJx5DaZK44Clrc6WhoCbHsQAvD_BwE; _gcl_au=1.1.489432199.1679994963; _fbp=fb.1.1679994962853.233039518; _gac_UA-178040899-4=1.1679994963.CjwKCAjwoIqhBhAGEiwArXT7K2yQhTnHksli11cVNnKzTIflgqG3MBzSaqGEsxJx5DaZK44Clrc6WhoCbHsQAvD_BwE; download_button=true; excel_updated=true; hidden_payment_banners=%5B%5D; mobile_search=%5B%5D; highlight_downloads=true; _ga=GA1.1.1430758493.1679994963; mp_60483c180bee99d71ee5c084d7bb9d20_mixpanel=%7B%22distinct_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22%24device_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22Is%20Anonymous%22%3A%20%22True%22%2C%22Session%20ID%22%3A%20%2265485b67-2c24-477a-aa8b-18c97463%22%2C%22last%20event%20time%22%3A%201681382794635%7D; _ga_ZB97HR591S=GS1.1.1681382785.1.0.1681382794.51.0.0; __cf_bm=IGHHbmW.M_6M5XW4k8Pf.ekVgVpXmoVLemfDBEkcpuU-1681903776-0-AZnHnf2mWjMKfQHR0f4Wm6CH9b9ZDSNe55q4lyZt/VLapZgQ81qAn42yCO0big5w66aWvbsno2CcyXKzKrEcPrs=; __cfruid=95a5c9d21386fb2f4224dc6f53d5931b67ef606f-1681903776; connect.sid=s%3Aa5-rV1B2SzDWxBZEBZKHb3F7tRmWt8P6.GbO%2BpTH3dPcNQE3TWOdMXyjmWtgAcdYGVdLO3rHbrfo; s_b=true; mp_a66867feba42257f4b46689d52d48f86_mixpanel=%7B%22distinct_id%22%3A%20%22fkihi%22%2C%22%24device_id%22%3A%20%221872780c450109-085cba7ae7748f-26031851-144000-1872780c451c9b%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22utm_source%22%3A%20%22G-Search-Brand%22%2C%22utm_medium%22%3A%20%22meesho%20seller_c%22%2C%22utm_campaign%22%3A%20%22B-Safe_Search_Brand_New_Users%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%22fkihi%22%2C%22source%22%3A%20%22Direct%22%2C%22medium%22%3A%20%22Direct%22%2C%22campaign%22%3A%20%22Direct%22%2C%22initial_distinct_id%22%3A%20%22Direct%22%2C%22client_type%22%3A%20%22d-web%22%2C%22Supplier_id%22%3A%20727035%2C%22Supplier_tag%22%3A%20%22fkihi%22%2C%22M_Trusted%22%3A%20false%7D; deferred-registration=true; enable_inbound_calling=true; allow_supplier_signature=true",
//       "Referer": "https://supplier.meesho.com/panel/v3/new/payouts/fkihi/payments/search?type=order_suborder&search=496607376881",
//       "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": "{\"supplier_id\":727035,\"identifier\":\"fkihi\",\"date\":\"2023-04-17\",\"status\":\"SUCCESS\",\"sub_order_num\":\"496607376881_1\"}",
//     "method": "POST"
//   }).then(r => r.json()).then(console.log)

// const a = fetch("https://supplier.meesho.com/payoutsapi/api/payments/search/order-suborder", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9",
//     "client-type": "d-web",
//     "client-version": "v1",
//     "content-type": "application/json;charset=UTF-8",
//     "identifier": "fkihi",
//     "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "cookie": "_gcl_aw=GCL.1679994963.CjwKCAjwoIqhBhAGEiwArXT7K2yQhTnHksli11cVNnKzTIflgqG3MBzSaqGEsxJx5DaZK44Clrc6WhoCbHsQAvD_BwE; _gcl_au=1.1.489432199.1679994963; _fbp=fb.1.1679994962853.233039518; _ga=GA1.2.1430758493.1679994963; _gac_UA-178040899-4=1.1679994963.CjwKCAjwoIqhBhAGEiwArXT7K2yQhTnHksli11cVNnKzTIflgqG3MBzSaqGEsxJx5DaZK44Clrc6WhoCbHsQAvD_BwE; download_button=true; excel_updated=true; hidden_payment_banners=%5B%5D; mobile_search=%5B%5D; highlight_downloads=true; __cfruid=39cafce03fd5ab9f792f54028ebea6f0cd20aea5-1681365085; s_b=true; __cf_bm=s9VlQI3ArZBL.2anj2ihxET3_Ze4T6fJRryGuy6dYb4-1681376818-0-AesmLNlCxtMayQ98+Q3J1HOlUwK4VdQmcJhxNkiwzNzCiCU8lrkaG6EN3J/3FRi000VHq+tbqN1LgwEUnFz1g3E=; connect.sid=s%3AniZMwGBlxW6WcCG3eJ3aWREywFLbp10s.3By6C0LMjH9D06hgPCe6l%2FvD1cCuSNhQH%2BkBvQQIpms; mp_a66867feba42257f4b46689d52d48f86_mixpanel=%7B%22distinct_id%22%3A%20%22fkihi%22%2C%22%24device_id%22%3A%20%221872780c450109-085cba7ae7748f-26031851-144000-1872780c451c9b%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22utm_source%22%3A%20%22G-Search-Brand%22%2C%22utm_medium%22%3A%20%22meesho%20seller_c%22%2C%22utm_campaign%22%3A%20%22B-Safe_Search_Brand_New_Users%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%22fkihi%22%2C%22source%22%3A%20%22Direct%22%2C%22medium%22%3A%20%22Direct%22%2C%22campaign%22%3A%20%22Direct%22%2C%22initial_distinct_id%22%3A%20%22Direct%22%2C%22client_type%22%3A%20%22d-web%22%2C%22Supplier_id%22%3A%20727035%2C%22Supplier_tag%22%3A%20%22fkihi%22%2C%22M_Trusted%22%3A%20false%7D; deferred-registration=true; enable_inbound_calling=true; allow_supplier_signature=false",
//     "Referer": "https://supplier.meesho.com/panel/v3/new/payouts/fkihi/payments/search?type=order_suborder&search=496607376881",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "{\"supplierIdentifier\":\"fkihi\",\"supplier_id\":727035,\"searchType\":\"order\",\"request\":\"496607376881\"}",
//   "method": "POST"
// }).then(r => r.json()).then(console.log)

// runPromise(
//   log("Hello from Content Scripts")
// )

// chrome.runtime.sendMessage(
//   { text: "Hello from the website" }, function(response){
//     console.log(response)
//     window.postMessage({message: "hello from website app.txs"}, "*")
//   }
// );

// printLine("Using the 'printLine' function from the Print Module");
