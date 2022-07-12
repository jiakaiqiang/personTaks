import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'

import ElementPlus from 'element-plus'
import echarts from 'echarts'  //引入echarts
import 'echarts-liquidfill'
import 'element-plus/dist/index.css'
import './iconfont/iconfont.css'
import 'normalize.css/normalize.css'
import dataV from '@jiaminghi/data-view'

createApp(App)
    .use(router)
    .use(echarts)
    .use(store)
    .use(dataV)
    .use(ElementPlus)
    .mount('#app')
