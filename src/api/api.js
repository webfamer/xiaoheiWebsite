import request from './request.js'

function getSoftware(data){
    return request({
        url:'/unClassfied',
        method:'get',
        data:data,
    })
}



export default{
    getSoftware
}