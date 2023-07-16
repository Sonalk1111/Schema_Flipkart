// import createMachine from "../machines/createMachine";
import { createMachine, interpret } from "xstate";

// import { fetchDetails } from "../pages/Background/index";
// import fetch from "cross-fetch";


// interface ActorContext {
//     data: any;
//     error: string | null;
// }

// type ActorEvent = {
//     type: 'FETCH';
//     url: string;
//     method: 'GET' | 'POST' | 'PUT';
//     data?: any;
// };

// fetchDetails()

// console.log(cookiefinder())


const fetchMachine = createMachine({
    id: "fetchData",
    initial: "idle",
    context: {
        data: null,
        err: null
    },
    states: {
        idle: {
            on: {
                FETCH: "fetching"
            }
        },
        fetching: {
            entry: "fetchData",
            on: {
                SUCCESS: "success",
                FAILURE: "failure"
            }
        },
        success: {
            type: 'final'
        },
        failure: {
            type: 'final'
        }
    }
}, {
    actions: {
        fetchData: (context, event) => {
            const { url, method, headers, body } = event;

            const options = {
                headers: headers,
                body: body,
                method: method
            }

            fetch(url, options)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    context.data = data;
                    fetchActorService.send('SUCCESS');
                })
                .catch(error => {
                    console.log(error)
                    context.err = error.message;
                    fetchActorService.send('FAILURE');
                });
            // .then(data => {
            //     const response:any = data
            //     console.log(data.json(), "dataaaa", context)
            //     context.data = response;
            //     fetchActorService.send('SUCCESS');
            // })
            // .catch(error => {
            //     console.log(error)
            //     context.err = error.message;
            //     fetchActorService.send('FAILURE');
            // });
        },
    }
})

export const fetchActorService = interpret(fetchMachine).onTransition((state =>
    console.log('Actor state:', state.value))
).start()

fetchActorService.send({
    type: 'FETCH',
    url: 'http://localhost:3000/data',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: { name: 'John', age: 30 }})
})

// const id = '1503549366'

// fetchActorService.send({
//     type: 'FETCH',
//     url: `https://seller.jiomart.com/ril_users/api/shipments/get_invoice_data.json?_ln=en&numbers%5B%5D=${id}&print_data=%7B%22print_actions%22:%7B%22invoice%22:true%7D,%22dimension%22:%224x6+inch%22%7D`,
//     // cookie: "_sellow_session=514b6e9351d2d31df5662f0894a7f5c5",
//     headers: {
//         "accept": "application/json, text/plain, */*",
//         "accept-language": "en-US,en;q=0.9",
//         "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"Windows\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         "x-requested-with": "XMLHttpRequest",
//         "cookie": "_sellow_session=514b6e9351d2d31df5662f0894a7f5c5",
//         "Referer": "https://seller.jiomart.com/oms/shipments/invoice?numbers=16735465842201296623J&print_data=%7B%22print_actions%22:%7B%22invoice%22:true%7D,%22dimension%22:%224x6%20inch%22%7D",
//         "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     method: 'GET',
//     data: {
//         messgae: "hellooo world"
//     }
// });

// fetchActorService.send({
//     type: 'FETCH',
//     url: "https://supplier.meesho.com/payoutsapi/api/payments/order-info",
//     headers: {
//         "accept": "application/json, text/plain, */*",
//         "accept-language": "en-US,en;q=0.9",
//         "client-type": "d-web",
//         "client-version": "v1",
//         "content-type": "application/json;charset=UTF-8",
//         "identifier": "fkihi",
//         "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"Windows\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         "cookie": "_gcl_aw=GCL.1679994963.CjwKCAjwoIqhBhAGEiwArXT7K2yQhTnHksli11cVNnKzTIflgqG3MBzSaqGEsxJx5DaZK44Clrc6WhoCbHsQAvD_BwE; _gcl_au=1.1.489432199.1679994963; _fbp=fb.1.1679994962853.233039518; _gac_UA-178040899-4=1.1679994963.CjwKCAjwoIqhBhAGEiwArXT7K2yQhTnHksli11cVNnKzTIflgqG3MBzSaqGEsxJx5DaZK44Clrc6WhoCbHsQAvD_BwE; download_button=true; excel_updated=true; hidden_payment_banners=%5B%5D; mobile_search=%5B%5D; highlight_downloads=true; _ga=GA1.1.1430758493.1679994963; mp_60483c180bee99d71ee5c084d7bb9d20_mixpanel=%7B%22distinct_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22%24device_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%221877a3942a710b-091aed911d4326-26031851-144000-1877a3942a8aa9%22%2C%22Is%20Anonymous%22%3A%20%22True%22%2C%22Session%20ID%22%3A%20%2265485b67-2c24-477a-aa8b-18c97463%22%2C%22last%20event%20time%22%3A%201681382794635%7D; _ga_ZB97HR591S=GS1.1.1681382785.1.0.1681382794.51.0.0; __cf_bm=5wH4aFQdCgi4QxD_nR33LdRHXjOLOBhC3cpbQVJrF_I-1682056447-0-AWdfICfR7ASatF/GtomzSAqak7sI95gO2DUskvwpJi/0ztzb4M2tDxdIR4FsNOhMx25bDNZQrzviYfnbO/uYCOs=; __cfruid=1b374e666648e767d98ba43373d495b2dbf9f3e3-1682056447; connect.sid=s%3A6uLV8LRl40SYUMh2YynZJShgbInCnMda.oQGrUQ8jjI8yKAKTJzx7CY2RCotg4Js4XGlMc8AQ51o; s_b=true; mp_a66867feba42257f4b46689d52d48f86_mixpanel=%7B%22distinct_id%22%3A%20%22fkihi%22%2C%22%24device_id%22%3A%20%221872780c450109-085cba7ae7748f-26031851-144000-1872780c451c9b%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22utm_source%22%3A%20%22G-Search-Brand%22%2C%22utm_medium%22%3A%20%22meesho%20seller_c%22%2C%22utm_campaign%22%3A%20%22B-Safe_Search_Brand_New_Users%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%22fkihi%22%2C%22source%22%3A%20%22Direct%22%2C%22medium%22%3A%20%22Direct%22%2C%22campaign%22%3A%20%22Direct%22%2C%22initial_distinct_id%22%3A%20%22Direct%22%2C%22client_type%22%3A%20%22d-web%22%2C%22Supplier_id%22%3A%20727035%2C%22Supplier_tag%22%3A%20%22fkihi%22%2C%22M_Trusted%22%3A%20false%7D",
//         "Referer": "https://supplier.meesho.com/panel/v3/new/payouts/fkihi/payments/search?type=order_suborder&search=496607376881",
//         "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     body: "{\"supplier_id\":727035,\"identifier\":\"fkihi\",\"date\":\"2023-04-17\",\"status\":\"SUCCESS\",\"sub_order_num\":\"496607376881_1\"}",
//     method: "POST",
// })
