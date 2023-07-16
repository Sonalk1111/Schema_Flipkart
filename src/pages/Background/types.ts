export type Context = {
    checkWebLogin?: boolean,
    marketplaceLogin?: boolean,
    alarmActive?: any,
    cookie?: any,
    data?: any,
    generatedTokens?: any,
    Notifications?: any
}

type cookie_data = {
    id: string,
    cookie: string,
    mail: string
}

export type Events = 
{type: 'ACTIVE'}
| {type: 'LOGIN'; data: any}
| {type: 'COOKIE'; cookie: any}
| {type: 'CHECK_COOKIE'}
| {type: 'A_ACTIVE'}
| {type: 'NOTIFICATION'}
| {type: 'COOKIE_EXISTS'}
| {type: 'COOKIE_NOTEXISTS'}
| {type: 'M_LOGIN' ; cookie: any}
| {type: 'CHECK_NOTI'}
| {type: 'RES_SUCCESS'}
| {type: 'RES_FAILED'}

export type Services = {
    // generateToken: {
    //     res: any
    // }
    orderExternal: {
        data: cookie_data
    },
    getNotification: {
        data: any
    },
    generateToken: {
        data: Promise<any>
    },
    sendCookie: {
        data: any
    }
}