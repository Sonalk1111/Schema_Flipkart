import React, {useEffect, useState} from 'react';
// @ts-ignore
import logo from '../../assets/img/logo.svg';
import './Popup.css';
// import { Alert } from "@deepui/alert"
// import ThemeController from "../../../../app/src/themes/theme-controller"
// import ThemeController from '../../themes/theme-controller';

const Popup = () => {

  // console.log(Alert)

  // const [machineStatus, setMachineStatus] = useState(false);
  // const [cookie , setCookie] = useState(false)

  // useEffect(() => {
  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     if(tabs[0].url == "https://identity.seller.jiomart.com/seller_profile/company_profile/pan"){
  //       chrome.cookies.getAll({url: tabs[0].url}, function(cookie) {
  //         if(cookie.length > 0){
  //           setCookie(true)
  //         }
  //         // chrome.identity.getProfileUserInfo(function (userInfo) {
  //         // })
  //       });
  //     }
  //     else{
  //       setCookie(false)
  //     }
  //   });

  //   chrome.runtime.sendMessage({ machineStatus: "getStatus" }, function(response) {
  //     if(response.actorState == 'loggedOUT'){
  //       setMachineStatus(false)
  //     }
  //     else{
  //       setMachineStatus(true)
  //     }
  //     // if(response.actorState){
  //     //   setMachineStatus(false)
  //     // }
  //     // else{
  //     //   setMachineStatus(true)
  //     // }
  //   })

  // }, []);

  return (
      <div>
      {/* <Alert color="red" variant="solid">"Please Login To JIOMART"</Alert> */}
      {/* {machineStatus ?  */}
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='w-10'>
          Edit <code>src/pages/Popup/Popup.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <br></br>
      <div>------------------divide------------------------</div>
      <div style={{background: "white"}}>
        <p>Hello/Hiiiiiiiiiii</p>  
        {/* <div id="display">{cookie ? "fetch The Cookie" : "please Log In To JioMART"}</div>   */}
        {/* <div>{machineStatus ? "machine is active ": "machine is inactive"}</div> */}
        <div id="popup-status"></div>
        <p  id="signIn" ><a href="https://identity.seller.jiomart.com/sso/login" target="_blank">JIOMART</a></p>
      </div>
      
    </div>
    
    {/* : <div>Please Log In to The Website First</div>} */}
    </div>
  );
};


// chrome.runtime.sendMessage({ popupStatus: "PopupActive" }, function(response) {
    //   console.log(response)
    //   if (response && response.response == 'active') {
    //     console.log(true)
    //     chrome.runtime.sendMessage({ loggedin: true })
    //     // setMachineStatus(true)
    //   }
    //   // if(response.response == 'inactive'){
    //   //   console.log(false)
    //   //   setMachineStatus(false)
    //   // }

    // });
    // console.log('in popupppppppppppp')
    // chrome.runtime.sendMessage({ machineStatus: "getStatus" }, function(response) {
    //   console.log("sonalllll")
    //   console.log(response, "sonalllllllll")
    //   if(response.actorState == "loggedOUT"){
    //     // console.log(response)
    //     setMachineStatus(false)
    //   }
    //   else{
    //     console.log(response, "current state")        
    //     setMachineStatus(true)
    //   }
    // })

    // if(machineStatus == true){
      // chrome.runtime.sendMessage({ loggedin: true })
    // }

// const message = {
//   cookie: "please log in to Jiomart",
//   addon: "please login through website first"
// }

// function getCookieDisplayed(callback: any) {
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     if(tabs[0].url == "http://localhost:8000/"){
//       callback(message.cookie);
//     }
//     chrome.cookies.getAll({url: tabs[0].url}, function(cookie) {
//       callback(cookie[0].value);
//     });
//   });
// }
// getCookieDisplayed(function(result: any) {
//   // console.log(result)
//   if(result == "please log in to Jiomart"){
//     document.getElementById("display")!.innerHTML = result;
//   }
//   else {
//     document.getElementById("display")!.innerHTML = result;
//     document.getElementById("signIn")!.style.display = "none"
//   }
// });


      

// let result = getCookieDisplayed()
// console.log(result, "hye finallyyyyyyy")

// var tab = chrome.tabs.query({active: true, currentWindow: true});

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.scripting.executeScript({
//     target: { tabId: tabs[0].id! },
//     function : connectURL
//   })
// })

// function connectURL() {
//   console.log("i m in URLLLLL")
// }


export default Popup;