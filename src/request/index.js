import axios from 'axios'

const axiosInstance =  axios.create({
    baseURL:"",
    timeout:30000,
    headers:{
        'content-type':"application/json"
    }
})

// 请求拦截
axiosInstance.interceptors.request.use(config=>{
    console.log(config)
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

