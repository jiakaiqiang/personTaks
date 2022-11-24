
import {format}  from './index.js'
import {get,post} from '@/request/index'
let prototypeMap = {'format':format,'get':get,post:post}

console.log(format,'formatsss')
export function handlePrototype(app){
  console.log(app,'app')

for(const [key,value] of Object.entries(prototypeMap)){   
   app.config.globalProperties[key] =  value
    app.provide(`$${key}`,app.config.globalProperties[key])




}
 console.log(app.config.globalProperties,';11')

}