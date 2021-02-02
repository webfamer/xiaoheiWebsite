import request from './request.js'

export function addSoftware(data){
    return request({
        url:'/login',
        method:'post',
        data:data,
    })
}



