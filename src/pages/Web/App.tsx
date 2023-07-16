// import './App.css';
import React, { useEffect, useRef, useState } from "react";
import {Amplify, Auth} from "aws-amplify";
// import { Amplify, Auth } from "aws-amplify";
import dotenv from "dotenv"
import { useForm } from "react-hook-form";
import { createMachine, interpret } from "xstate";

// import { lookup } from "../../actor/Actor";
// import { sendRequest } from "../../actor/requestResponse";
// import { Actor, hookup, lookup } from "../../actor/Actor";

// import { BehaviorSubject, Observable, of, MonoTypeOperatorFunction, from } from "rxjs";
// import {map, catchError, tap, shareReplay, switchMap } from "rxjs/operators"


// export function localStorageReplay<T>(storageKey: string, useStore$: BehaviorSubject<boolean>): MonoTypeOperatorFunction<T> {
//     return (input$: Observable<T>): Observable<T> => {
//       // Observable for parsed stored value, fallsback to input stream.
//       const storedValue$= of(localStorage.getItem(`stream-${storageKey}`)).pipe(
//         map(str => (str === 'undefined' ? undefined : JSON.parse(str!))),
//         catchError(() => input$)
//       );
//       // if useStore is true set then replay localStorage value
//       return useStore$.pipe(
//         switchMap(useStore =>
//           useStore ? storedValue$ : input$.pipe(tap(val => {
//             console.log(val, "myValueeeeee")
//             localStorage.setItem(`stream-${storageKey}`, JSON.stringify(val)
//           )}))
//         ),
//         // shareReplay()
//       );
//     };
//   }

// const numbers$: Observable<number> = new Observable<number>(subscriber => {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     subscriber.complete();
//   })

// const useStore$ = new BehaviorSubject<boolean>(true);

// const storageKey = 'myDataKey'
// const data$ = of('Hello, world!'); // Your data stream
// const modifiedStream$ = data$.pipe(
//   localStorageReplay<string>(storageKey, useStore$)
// );


// const modifiedStream$ = numbers$.pipe(
//   localStorageReplay<number>(`sonallllllllll`, useStore$)
// );

// modifiedStream$.subscribe((value) => {
//     console.log('Receivedddddddddddd value:', value);
// });


// class UIActor extends Actor<'ui'> {
//   onMessage(message: string) {
//     console.log('On Message recieved - ui', message);
//     // window.postMessage({ type: "communicationStatus", message: message }, '*')
//   }

// }
  
// class BackgroundActor extends Actor<'ui'> {
//   onMessage(message: string) {
//     console.log('On Message recieved for background', message);
//     window.postMessage({ type: "chromeMessage", message: message }, '*')
//   }
// }

// hookup("background", new BackgroundActor())
// hookup("ui", new UIActor())

// const request = {
//   name: 'myRequest',
//   data: {
//     message: "hello"
//   }
// };

// sendRequest(myActorHandle, request)


export const websiteActorMachine = createMachine({
  id: 'websiteActor',
  initial: 'loggedOut',
  states: {
    loggedOut: {
      on: {
        LOGIN: 'loggedIn'
      }
    },
    loggedIn: {
      on: {
        LOGOUT: 'loggedOut'
      }
    }
  }
});

export const webMachineService = interpret(websiteActorMachine).start()

webMachineService.onTransition((state) => {
  console.log('webActor aaaaaaa state:', state.value)
})


Amplify.configure({
  ssr: true,
  Auth: {
    mandatorySignIn: false,
    region: process.env.REGION,
    userPoolId: process.env.USER_POOL_ID,
    identityPoolId: process.env.IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_WEB_CLIENT_ID
  },
  // API: {
  //   aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_APPSYNC_URL,
  //   aws_appsync_region: process.env.NEXT_PUBLIC_APP_REGION,
  //   aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  //   endpoints: [
  //     {
  //       name: 'noAuth',
  //       region: process.env.NEXT_PUBLIC_APP_REGION,
  //       endpoint: process.env.NEXT_PUBLIC_NOAUTH_ENDPOINT,
  //     },
  //   ],
  // },
})


const App = () => {
  // const [extensionInstalled, setExtensionInstalled] = useState(false);
  // const [userLoggedIn, setUserLoggedIn] = useState(false)
  // const inpRef = useRef(null);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const username = "mahi"
  async function signOut() {
    try {
      await Auth.signOut({ global: true });
      console.log("user is logged out")
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const onSubmit = (data: any) => {
    Auth.signIn(data.username, data.password).then((user) => {
      console.log(user)
      chrome.runtime.sendMessage("lfdajjpiobfbjkihhkiopefadohmoeha", {userInfo: user}, function(res){
        if(res){
          console.log(res, "responseeeeeeeeeeeeeee")
        }
      })
      // const mutation = `query listInfo($company: String!, $endDate: String!, $marketplace: String!, $startDate: String!, $type: String!) {
      //   listInfo(filter: {
      //     company: $company,
      //     endDate: $endDate,
      //     marketplace: $marketplace,
      //     startDate: $startDate,
      //     type: $type
      //   })
      // }`
      

      // const token = "da2-hxd25y4nyjg2pbixmb5cxl7zqe"
      // // user.signInUserSession.accessToken.jwtToken
      // const url = "https://o4olf5fb4zfqdgg2yag2k2ckmm.appsync-api.ap-south-1.amazonaws.com/graphql"
      // const options = {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     'Authorization': `Bearer ${token}`
      //   },
      //   body: JSON.stringify({
      //     query: mutation,
      //   })
      // }

      // fetch(url, options).then((res) => res.json()).then((data) => {console.log(data, "server data")}).catch((err) => {console.log(err, "error")})
      // webMachineService.send('LOGIN')
      
    }).catch((err) => {
      console.log(err)
      chrome.runtime.sendMessage("lfdajjpiobfbjkihhkiopefadohmoeha", {Error: err}, function(res){
        if(res){
          console.log(res, "errrrrrrrrrrrrrrrrr")
        }
      })
    })
  };

  
  // var data1

  // useEffect(() => {
  //   setTimeout(() => {

  //   const eventHandler = (event: any) => {
  //     // console.log(event, "sonallllll")
  //     if (event.source !== window) {
  //       return;
  //     }

  //     if(event.data.message){
  //       data1= event.data.meessage
  //     }

  //     if (event.data.type === "DeepEcomExtensionReady") {
  //       // Handle the message
  //       setExtensionInstalled(true);
  //     }
  //     else{
  //       setExtensionInstalled(false);
  //     }

  //     if(event.data.type == 'PostMessage'){
  //       console.log(event.data)
  //     }
  //   }

  //   setExtensionInstalled(false)

  //   window.addEventListener("message", eventHandler);

  //   return () => window.removeEventListener("message", eventHandler)
  // }, [])

  return (
    <div id="AppInfo_container" className="App">
      <p>from App sonal</p>
      {/* <div>Hello 
        {data1}
      </div> */}

      {/* <input ref={inpRef} /> */}

      {/* <button onClick={() =>
        //  
        // @ts-expect-error value doestn exists
        lookup("background").send(inpRef.current?.value || "")
      }>Send Message</button> */}

      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="mahi" {...register("username", { required: true })} />
        {errors.username && <span>This field is required</span>}
        
        {/* include validation with required or other standard HTML validation rules */}
        <input type="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        
        <button type="submit">Login</button>
        
      </form>
      <div>
        <span>sonalllllllll</span>
      <button onClick={() => {
        Auth.currentAuthenticatedUser()
        .then((user) => {
          return Auth.changePassword(user, 'Password@123', 'Password@321');
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      }}> Change Password </button>
      
      <button onClick={() => {
        Auth.currentAuthenticatedUser().then(async (user) => {
          console.log(user, "userrrr")
          return Auth.setupTOTP(user)
        }).then((data) => {
          console.log(data, "data")
        }).catch(err => {
          console.log(err, "sonal")
        })
      }}> Forgot Password </button>
      </div>
      {/* <div id='status'>
      {userLoggedIn === true ?(extensionInstalled == true) ? "You Have Installed the Extension" : "Please Install The Extension" : "" }
      </div> */}
    </div>
  );
};


export default App;


// const type = 'FETCH'
// const url = 'http://localhost:3000/data'
// const method = 'POST'
// const headers = {
//   'Content-Type': 'application/json'
// }
// const body = JSON.stringify({data: { name: 'John', age: 30 }})

// memlepmkdbblhgnmbbfknhiggdkopmbj

// const extensionId = 'memlepmkdbblhgnmbbfknhiggdkopmbj';
// const extensionOrigin = 'chrome-extension://' + extensionId;

// window.postMessage({
//   type: type,
//   url: url,
//   method: method,
//   headers: headers,
//   body: body
// }, extensionOrigin);
