import axios from 'axios'
import qs from 'qs'

const axiosInstance =  axios.create({
    baseURL:"/api",
    timeout:30000,
    headers:{
        'content-type':"application/json"
    }
})

// 请求拦截
axiosInstance.interceptors.request.use(config=>{
    config.headers['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    console.log(config)

    if(['post','put'].includes(config.method)){
        config.data =  qs.stringify(config.data)
    }
    return config
})
//响应拦截器
axiosInstance.interceptors.response.use(config=>{
    console.log('response',config)
    return config
})

export function get(url,params){
   return new Promise((resolve,reject)=>{
       axiosInstance({
           type:"get",
           url,
           params
       }).then(res=>{
           resolve(res.data)
       })
   })     

}
export function post(url,data){
    console.log(data,'wwe')
    return new Promise((resolve,reject)=>{
        axiosInstance({
            type:"post",
            url,
            data
        }).then(res=>{
            resolve(res.data)
        })
    })     
 
}

