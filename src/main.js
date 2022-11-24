import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import * as echarts from 'echarts'  //引入echarts
import 'echarts-liquidfill'
import 'element-plus/dist/index.css'
import './iconfont/iconfont.css'
import 'normalize.css/normalize.css'
import {get} from '@/request/index'
//加载全局的css
import '@/style/index.scss'
const app = createApp(App)
//引入所有的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.config.globalProperties.get=get
app.provide('$get',app.config.globalProperties.get)

app.use(router)
    .use(echarts)
    .use(store)
    .use(ElementPlus)
    .mount('#app')
