import { interpret } from "xstate";
import { describe, it, expect, test, vi, assert, beforeEach, afterEach } from "vitest";
import { backgroundMachine } from "../pages/Background/backgroundMachine";

const actions = {
  storeCredentials: (context: any, event: any) => {
    context.data = event.data
  },
  storeCookie: (context: any, event: any) => {
    context.cookie = event.cookie
  },
}

const data = {
  Session: null,
  attributes: {
  // custom:clientId: "{ \"alarm\" : 1800,  \"team\": [         {             \"name\": \"RSNPL\",             \"id\": \"RSNPL\"         },         {             \"name\": \"RSTPL\",             \"id\": \"RSTPL\"         },         {             \"name\": \"VIPL\",             \"id\": \"VIPL\"         }     ],     \"client\": {         \"name\": \"Unique\",         \"id\":  153  } }",
  email: "mahesh@deepinsight.tech",
  email_verified: true,
  sub: "a806e0fd-814a-4614-ba55-3e08111f38f6",
  },
  authenticationFlowType: "USER_SRP_AUTH",
  client: {
  endpoint: "https://cognito-idp.ap-south-1.amazonaws.com/",
  fetchOptions: {}
  },
  pool: {
      clientId: "42ve7kg7ccfmstt9e1lf3ha645",
  },
  signInUserSession: {
      accessToken: {
          jwtToken: "eyJraWQiOiJVNEsycndRT2dQXC9HVzdQSGVNanplMFhzUHNDREFOZ0RCM3U4Vm9oNUxRQT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhODA2ZTBmZC04MTRhLTQ2MTQtYmE1NS0zZTA4MTExZjM4ZjYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzhoYVNKc29zRyIsImNsaWVudF9pZCI6IjQydmU3a2c3Y2NmbXN0dDllMWxmM2hhNjQ1Iiwib3JpZ2luX2p0aSI6ImE1M2FmYzg3LTg1ZGEtNGNlYy1iZjcxLWE0NDI3ZWQ5MmFjZiIsImV2ZW50X2lkIjoiZjY5MjIyN2YtYTEyYS00YWEwLThhYzQtYjk5NTM1ZDI4YTI0IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY4NDkwODM1MiwiZXhwIjoxNjg0OTA4NjUyLCJpYXQiOjE2ODQ5MDgzNTIsImp0aSI6IjM1NzFjYjYzLWU5NjItNDUyYy04YmExLTNmNzc5NGVmZWM2OSIsInVzZXJuYW1lIjoibWFoaSJ9.QYHiIxkXPme6_tJ35LJboMRtlDKrE7adWVnY5GcGTXV8HdEA_zqqbwKu5O3ULnJ7a34BD82MK99Hn8L1S4CVKMnfNeKuPdUMDBVloEUhAxmsvKsHVJ5lGiV5P-3xJxqUz8JFEl6xAPf73ipNH6yqWxpO9-fgcWDUW3E3XtefRv78mKMn40k2Qm0Cq6aKWkAZtuYWYQlx5_srUf8wOJ60M8gPodkHv0C8odkCKUeMMsSNkDZhCKvgF_QhUL1DB4GbzyD7gloQ_vZyl4WsDDADj1R8RpXlWRsoWVzer-GQ2VtqexYyOo0qDc8bsLm1462xpFAvVWlQDAj1txDi9ICIag"
      },
      idToken: {
          jwtToken:"eyJraWQiOiJ1ZGo3TnpHREd1bCtPY2orNlFtbUc2VVRcL2NGbUxnVFwvTGZCZjl3SjFaNlE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhODA2ZTBmZC04MTRhLTQ2MTQtYmE1NS0zZTA4MTExZjM4ZjYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOmNsaWVudElkIjoieyBcImFsYXJtXCIgOiAxODAwLCAgXCJ0ZWFtXCI6IFsgICAgICAgICB7ICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJTTlBMXCIsICAgICAgICAgICAgIFwiaWRcIjogXCJSU05QTFwiICAgICAgICAgfSwgICAgICAgICB7ICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJTVFBMXCIsICAgICAgICAgICAgIFwiaWRcIjogXCJSU1RQTFwiICAgICAgICAgfSwgICAgICAgICB7ICAgICAgICAgICAgIFwibmFtZVwiOiBcIlZJUExcIiwgICAgICAgICAgICAgXCJpZFwiOiBcIlZJUExcIiAgICAgICAgIH0gICAgIF0sICAgICBcImNsaWVudFwiOiB7ICAgICAgICAgXCJuYW1lXCI6IFwiVW5pcXVlXCIsICAgICAgICAgXCJpZFwiOiAgMTUzICB9IH0iLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzhoYVNKc29zRyIsImNvZ25pdG86dXNlcm5hbWUiOiJtYWhpIiwib3JpZ2luX2p0aSI6ImE1M2FmYzg3LTg1ZGEtNGNlYy1iZjcxLWE0NDI3ZWQ5MmFjZiIsImF1ZCI6IjQydmU3a2c3Y2NmbXN0dDllMWxmM2hhNjQ1IiwiZXZlbnRfaWQiOiJmNjkyMjI3Zi1hMTJhLTRhYTAtOGFjNC1iOTk1MzVkMjhhMjQiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY4NDkwODM1MiwiZXhwIjoxNjg0OTA4NjUyLCJpYXQiOjE2ODQ5MDgzNTIsImp0aSI6ImY0OTYzYTQwLTkyOTMtNGUxZi04NDIzLTUwZGVhMWExN2QzYyIsImVtYWlsIjoibWFoZXNoQGRlZXBpbnNpZ2h0LnRlY2gifQ.JBYZLc1BpsOUoIYRNBBc8tQDTDTAeSzd-ANInJol86bHVDr44OSIuCBNauLsdeACgmn-Oema_xAG9K40m7XEiM3FUkyE4C0CszLTG9TAr_kyYC6CcPCVmY8EfoWUO4T07Q3wOztpKYvWSjfCdsA8o2Vk7l594P9QMN2atbHxakJs1mesP_PA90ITaWVbnuUOYHHOtiIeKtcrt8HjGEObSAeQkZwjVoRp47v1ndB7D-WXAVCvib4CyH5tq4WGCDEOzuUFwtg9kvS3_dy3_w1-yYp5Uny8_kHGwluUhIxhmkJFLrc8FbQxsygxO7bcDQouZPoAwO-Ia6S5sWML-EvX8Q" 
      },
      refreshToken: {
          token: "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.i7iSQlMLhUjGdHg9-p_CeSJT_uzg0k0B1EfH3Zl7BAj_sXTnf3fo3yKxrowUaiOhPHqO3xkCqQObM7iM8ViHyrY5RQRqj1sCDzrn_eDKOEIUD570Q8u9w2zm2hWcWPADXJ7NjpjlJ9d3khzq_ggJdVBCqhhtjgpaj5APkDbk466XK9rFmOR7H7VNYrvw-uwJCFHJhidXF0D_LJlqbIJfaiyPgZK-p07ZURQmnDuJCjoQVgOTonX8KARSsWZoMb1Q8WP5LF2JxwuSW0Ni4I-Fqjz1taQ2ad-dLnRKiV4eYoET4f75RIXYpbpcNq_Y89fgCzI17kgxFapOFr1X4Z47PA.E9SYennjqUvyJz6r.PCM6Bjg0-RfUVl0VKGv5Jk_hZnkoaJAz7jFVTd_n97Qi0GSsqJNjWUmgkhuRMAYBFbNineMP8g37JXEP4HfcgRW9I0WOgT5z63Jylh1jOKxHxv0RyOyB_CGc-bTOBDe4ZzEDM8Cd17E86B8m52uAvNn5nRE2Tn3NF5RT8g4erUwl1ZEVddjLeDXxR7ic73_wjsFBObK0kjlwjtypf7LyPlXc5fKST39LB_tfYT0tBIiUZ6Cmy7OjGGFvDzMEmVtKPuolk4BAKlH3GiVvKrMYceD7w9eZxVteBisBDlwBQEpTExD3GGMzHiLQnToDs-XqwYiquRoWzp8WXW1XRAjaKtfPRuPVhrWh43WJf0KUE5yxs6O-o13CZ6AMeYyB-utJqIVUBNy2ku7I_arf1zogE-GmAsajVOYGLka0LOsqQDLcRwUioZEJmYWTkllQ6WdIe7nQrSUWq3UoUfYVjtcBLykZ8g0WYmFlg0GfGhB1aGRkmWAfJOjtkwOBUImvdRu6ZWz_G5L-rB1JZMADu8IW_2576Dy9D-j2z7D_LL1bpfSNfaDtE5K7QIm441lAjfbA4z3eR_dYGLFgQc6rrQeS4dQ-ZkleQG3pcVCHz2RUfAs_u07YKJWXFS4R50PzjKNN7FDkSzUX40xQiUhFVxQwXyNr6ompQ3VdV6BlQtlfh__qAOHOCf9DEfSNoA7HcmLmQnln52rHtEMlee9cRdcWICC0wZvPwBmYMkgm0xwJiPeLI42tWNseIqteRGwIKYbG8gu-hF9G_ETI66FNXcHGFbGC5ZbB-gltYgt-jGBJlobOGxCbgjQz3RQ65ELHETQTXl_ZjE_wX1PmH81oRdEtXsC41sUWqAlE3POwN9RerUnCJu7_Ka2oVNyy_F53Ih19fv-e9FpjyLcCggzDA-0hglB6lVGEcNHcUB1Xq9tj2rXMrwirOpRKjbkjisQu_Q25bUlBIHcjtdSbMk84FQAsmsvAOhH28E9u6dEYI9jbz-ZD1W0o9CXAflr_89JrNUTZlPH42iURxh_grGQSol4vgvYb_0WJGk-A08dtymToefciJ_cL7h_9f4N0F-IStqgNP9LVtteCNe8khai1PPDysAPHSqwUw5d8Wg37xmqP2xOmUHLW-w2NAZxAqn4LmraHVjxXVyeOKqRaqEzla0p8mFVfzberzNv1yOa0cOldWXGxDjjHbjpOmP2gGfLAMqtMh-8QAbd_TpsjLn_aE71rrXwZO-xEYki9PhxL7trltcVIVFVFS3mFK_6Qvp72fP90NRqB8g.EE6kzsRCLt-tD7hImIYjAg"
      },
  },
  userDataKey: "CognitoIdentityServiceProvider.42ve7kg7ccfmstt9e1lf3ha645.mahi.userData",
  username: "mahi"
}

const cookie = {
  cookie: [
      {
          domain: "identity.seller.jiomart.com",
          expirationDate: 1684846510.436709,
          hostOnly: true,
          httpOnly: true,
          name: "_user_reg_session",
          path:"/",
          sameSite: "no_restriction",
          secure: true,
          session: false,
          storeId: "0",
          value: "54ff093ab80d1e657af297d7e4e7a806"
      }
  ],
  userInfo: {
      email: "sonalk@deepecom.com",
      id: "109094540273837825168"
  }
}

describe('machine happy path', () => {
  let service:any
    beforeEach(() => {
      const machine = backgroundMachine.withConfig({
        actions,
      })
      service = interpret(machine)
    })
    afterEach(() => {
      service.stop()
    })

    test('start from idle state and update context with web credentials', () => {
      service.start()
      service.send({
        type: 'ACTIVE',
      })
      service.send({ type: 'LOGIN', data: data })

      assert(service.state.matches('loggedIn'))
      expect(service.state.context.data).equal(data)
    })
  
    test('check if the cookie exists', () => {
      service.start('loggedIn')
      service.send({ type: 'COOKIE', cookie: cookie })
      // assert(service.context.cookie.matches(cookie))
      expect(service.state.context.cookie).equal(cookie)
    })
  
    test('if alarm is active check for getAcesstoken state', () => {
      service.start('checkNotification')
      service.send({ type: 'CHECK_NOTI' })

      // console.log(service.state.context)
    })
  
    test('if notifications exists send Respective cookie', () => {

    })

    test('Test For Success Response and Wait for Next Alarm', () => {

    })

    test('should transition to "loggedOut" state when receiving "ACTIVE" event in "idle" state', (t) => {

    });

    test('should transition to "loggedIn" state when receiving "LOGIN" event in "loggedOut" state', (t) => {

    });

    test('should transition to "cookie" state when receiving "COOKIE" event in "loggedIn" state', (t) => {

    });

    test('should transition to "alarm" state when condition "findCookie" is true in "cookie" state', (t) => {
  
    });

    test('should transition to "alarm" state when receiving "A_ACTIVE" event in "alarm" state', (t) => {
  
    });

    test('should transition to "checkNotification" state when "getNotification" service call is successful in "getNotification" state', (t) => {

    });

    test('should transition to "getAccessToken" state when condition "findNotification" is true in "checkNotification" state', (t) => {
 

    });

    test('should transition to "sendCookie" state when "generateToken" service call is successful in "getAccessToken" state', (t) => {

    });

    test('should transition to "loggedOut" state when receiving "LOGOUT" event in "loggedIn" state', (t) => {

    });

    test('should transition to "idle" state when receiving "INACTIVE" event in "loggedIn" state', (t) => {

    });

    test('should transition to "idle" state when receiving "LOGOUT" event in "cookie" state', (t) => {

    });
    
    test('should transition to "loggedOut" state when receiving "LOGOUT" event in "loginMarketplace" state', (t) => {
    
    });
    
    test('should transition to "idle" state when receiving "INACTIVE" event in "alarm" state', (t) => {
    
    });
  })
  
  describe('machine failsafe', () => {
    let service: any
    beforeEach(() => {
      const machine = backgroundMachine.withConfig({
        actions,
      })
      service = interpret(machine)
    })
  
    afterEach(() => {
      service.stop()
    })
  
    test('if Cookie not exits - Login to Marketplace', () => {
      service.start('cookie')
      service.send({ type: 'CHECK_COOKIE'})
      expect(service.state.matches('loginMarketplace'))

    })
  
    test('if Final Response Failed - Get Web Credentials', async (done) => {
      service.start()
    })

    test('should transition to "loginMarketplace" state when condition "findCookie" is false in "cookie" state', (t) => {
  
    });

    test('should transition to "alarm" state when condition "findNotification" is false in "checkNotification" state', (t) => {
  
    });

    test('should transition to "alarm" state when "generateToken" service call fails in "getAccessToken" state', (t) => {

    });
    
    test('should transition to "alarm" state when "sendCookie" service call fails in "sendCookie" state', (t) => {
    
    });
  })
