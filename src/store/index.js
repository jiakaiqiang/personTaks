import {createStore} from 'vuex'
import app from './modules/app'
//创建store 实例
const store = createStore({
//数据state
  state(){
    return {
        username:"测试"
    }


  },

//mutations 方法

//actions


//模块
modules:{
    app
}
})
export  default store
