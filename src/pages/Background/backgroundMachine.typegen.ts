
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.backgrundActor.getAccessToken:invocation[0]": { type: "done.invoke.backgrundActor.getAccessToken:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "generateToken": "done.invoke.backgrundActor.getAccessToken:invocation[0]";
"getNotification": "done.invoke.backgrundActor.getNotification:invocation[0]";
"sendCookie": "done.invoke.backgrundActor.sendCookie:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "sendCookieAction": "done.invoke.backgrundActor.getAccessToken:invocation[0]";
"storeCookie": "COOKIE" | "M_LOGIN";
"storeCredentials": "LOGIN";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          "findCookie": "CHECK_COOKIE";
"findNotification": "CHECK_NOTI";
        };
        eventsCausingServices: {
          "generateToken": "CHECK_NOTI";
"getNotification": "A_ACTIVE";
"sendCookie": "done.invoke.backgrundActor.getAccessToken:invocation[0]";
        };
        matchesStates: "alarm" | "checkNotification" | "cookie" | "getAccessToken" | "getNotification" | "idle" | "loggedIn" | "loggedOut" | "loginMarketplace" | "sendCookie";
        tags: never;
      }
  