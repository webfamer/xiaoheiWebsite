import request from './request.js'

export function addSoftwareApi(data){
    return request({
        url:'/add',
        method:'post',
        data:data,
    })
}



