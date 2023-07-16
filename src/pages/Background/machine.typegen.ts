
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.backgrundActor.getAccessToken:invocation[0]": { type: "done.invoke.backgrundActor.getAccessToken:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "generateToken": "done.invoke.backgrundActor.getAccessToken:invocation[0]";
"sendCookie": "done.invoke.backgrundActor.sendCookie:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "AlarmStatus": "ALARM_ACTIVE";
"storeCookie": "LOGIN" | "UPDATE";
"storeCredentials": "CREDENTIALS";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          "findCookie": "CHECK_COOKIE";
        };
        eventsCausingServices: {
          "generateToken": "NOTIFICATION";
"sendCookie": "done.invoke.backgrundActor.getAccessToken:invocation[0]";
        };
        matchesStates: "checkAlarm" | "checkNotification" | "cookie" | "getAccessToken" | "getWebCredentials" | "idle" | "loginMarketplace" | "sendCookie" | "updateCookie";
        tags: never;
      }
  