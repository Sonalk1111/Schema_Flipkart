import { createMachine,interpret,assign } from "xstate";
// import {Events, Context, Services} from "./types"

interface Context {
  cookie: any,
  data: any,
  generatedTokens: any,
  alarmActive: any
}

export const backgroundMachine1 = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QCMCGBjA1lATgVwDsIBBdAFwHscA6ASwgBswBiYgYQBUBJANQFEA2gAYAuolAAHCrFplaFAuJAAPRACYhAVgCM1IQHZNa4wA4AnJs0AWfQBoQAT0SaAzADZqmoSZdXtbzTN9MyCAX1D7NCxcQhJyKmoYMgB1MGQ2HEgwAjlUBlhmNgAlPgARPgA5bmIAGQBlYTEkECkZOQUlVQQ1KyEPEzc1Q3MXE38reycEFzM1ajUfXxdvKy8rN3DIjGx8IlJKGjwJCFQyMDYKCkxaFgBVAAVS4g5BUSVW2XlFZq6e5b0TPogaN-NptGpNJNEGNPEI4d4zKsXL4dJsQFEdrF9gl0Jdriw2AAJPhsADSAH02AB5KmkrivJqSaSfDo-RD+OZueEGYxuFxqQYuKHTMwuahWCFw-TmEyaNxgtEYmJ7eI0XFXG6FYlkyk0umCbSMlrM9rfUBdDnULnw-S8-mC4U9MzzbmitT2wIuRXbZVxA7UBgUKC0AgAWVQOEwYDIEgYGBYNSpAHEuBVGu8TV9Ooh5fpqPyvJofNorGNjI6IdRbV4DEY+mozG59N7ors-TiABZgLDEOM4AC2rBqxCKofJ7G4-HTzQ+puzCERuj8EKBQhmWgmjkQLmlemRvjcZhMGn0WhbmJV-vQXZ7fcHtRHY-KE94DIzbSzbIQw3mO7lwVFOE1G0YVkRMcUnRMEx1n0dYdCsc9fWxNUb0wCoKDkAAzWh0FOL5mAqKluAAMS4Nhni4Kk0zeGdM1Zc12QWKxxR3QZgjlAwhS3BBel0LwfFLaUbD6QxELbZDEmjUh0DgWAOCubJmAgBQwDoAgADcFOoJVxNVSSyGk2T5KjAgEBDTTcNNRppyZD96JUdk3D5fM4W0fQmwCQw7G4hY81mKwQlc9xTxLMSsT0pJDNgOSFIIZgwBwHAEljU5MKofttJ9XT-Ui9AZOi4zsjMjSKEsr5rJo2yWTNByEH8ZzliENyPM0LzhT8PMIR8GsnJ6CEEIidEsvC-1YGyCALg1FhlIIVTzK0nSRoSMaiEm-FiosvCFAqo1Z0-Bi6rcGF4W0AYzCEXoBk3KYeiECCeuPAJLCBMLL2W8a1s1BKkpoFKyDSgdMtbJaaBWia8RuDbSq2ggdvfar5w0HQ9EMYwFgsaxvJu2DYR8IQQkBUYBsGggKAgOAlEWt6cHhucvwAWjcYV6c0agQnZgYFmg7QQi9QaqfbGh6CYWn9tqnnVnFVHtDlQ9jBA7jXDzOFi1a2ChGAzRXsF-TUnSTJyZyWg8ngWi7Jq35jDFRq-iBIwAna-x5iLFweaCtjtYko4TjOT6wFF+zflajx4QWXxEWWCFHbups1n0EsZiLExPb09V8QDi3EAlUCfD0AKgj6bq3CsPmtmB6mAyDENw0jaMUpkjP5ysZurUMC79B3WDAUhHyAqtDmli76UU6vVDewjftG6-aUxRlvltH5V3SxL0DRTZyCNHBaUGy1-nhor69uzQjDaGwsr7L2wP2TBO7Zh0DWoJCI72o1vRvH5dHzAWDY9-LnXcvyjFEyU8DollLHoCEJYuSikjljbcu5+IuFapKPovgR7vVWhDf2ZsEZflOq4WEGsNbuBLOWHyXg36PRlkQx6fNwhAA */
    id: 'backgrundActor',
    context: { 
      cookie: null, 
      data: null ,
      generatedTokens: null,
      alarmActive: null
    },
    // tsTypes: {} as import("./machine.typegen").Typegen0,
    schema: {
      context: {} as Context,
      // events: {} as Events,
      // services: {} as Services
    },
    initial: 'idle',
    states: {
      idle: {
        on: {
          ACTIVE: {
            target: 'getWebCredentials'
          }
        }
      },
  
      getWebCredentials: {
        on: {
          CREDENTIALS: {
            actions: 'storeCredentials',
            target: 'updateCookie'
          }
        }
      },
  
      updateCookie: {
        on: {
          UPDATE: {
            actions: 'storeCookie',
            target: 'cookie'
          }
        }
      },
  
      cookie: {
        on: {
          CHECK_COOKIE: [
            {
              cond: 'findCookie',
              target: 'checkAlarm'
            },
            {
              target: 'loginMarketplace'
            }
          ]
        }
      },
  
      loginMarketplace: {
        on: {
          LOGIN: {
            actions: 'storeCookie',
            target: 'checkAlarm'
          }
        }
      },
  
      checkAlarm: {
        on: {
          ALARM_ACTIVE: {
            actions: 'AlarmStatus',
            target: 'checkNotification'
          },
  
          ALARM_DEACTIVE: {
            target: 'checkAlarm'
          }
        }
      },
  
      checkNotification: {
        on: {
          NOTIFICATION: {
            target: 'getAccessToken'
          }
        }
      },
  
      getAccessToken: {
        invoke: {
          src: "generateToken",
          onDone: [
            {
              // actions: 'getAccesToken',
              target: 'sendCookie'
            }
          ],
          onError: [
            {
              target: 'getWebCredentials'
            }
          ]
        }
      },
  
      sendCookie: {
        invoke: {
          src: "sendCookie",
          onDone: [
            {
              target: 'checkAlarm'
            }
          ],
          onError: [
            {
              target: 'getWebCredentials'
            }
          ]
        }
      }
    },
  },{
    services: {
      generateToken: async (context, event) => {
        const clientId = context.data.pool.clientID;
        const refreshToken = context.data.signInUserSession.refreshToken.token
        const params = {
          AuthFlow: 'REFRESH_TOKEN_AUTH',
          ClientId: clientId,
          AuthParameters: {
            REFRESH_TOKEN: refreshToken,
          },
        };
  
        return fetch(`${context.data.client.endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-amz-json-1.1',
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
          },
          body: JSON.stringify(params),
        })
        .then((response) => response.json() as any)
        .then((data) => {
          context.generatedTokens = data
        })
      },
      sendCookie: () => {
        return Promise.resolve({
          data: '2'
        })
      }
      // sendCookie: () => {
      //   return Promise.resolve({
      //     data: {
      //       id: 1
      //     }
      //   })
      // },
    },
    actions: {
      // getAccesToken: (context, event) => {
      //   console.log(context, "sonal")
      // },
      AlarmStatus: (context, event) => {
        context.alarmActive = event.alarm
      },
      storeCredentials: (context, event) => {
        context.data = event.data
      },
      storeCookie: (context, event) => {
        context.cookie = event.cookie
      }
    },
    guards: {
      findCookie: (context) => {
        return context.cookie.cookie[0].domain == "identity.seller.jiomart.com"
      }
      // context.cookie.find((x:any) => x.domain == 'identity.seller.jiomart.com')
    }
  })
  
  
  
  // const service = interpret(backgroundMachine).onTransition((state) => {
  //   console.log(state.value)
  //   if(state.value == 'getAccessToken'){
  //     console.log(backgroundMachine.machine.context, "myContexttttttt")
  //   }
  // }).start()