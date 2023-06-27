import DAuth from "@dauth/core"

export const dauth = new DAuth({
    baseURL: 'https://dev-api.dauth.network/dauth/sdk/v1.1/',
    clientID: 'demo',
})

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))