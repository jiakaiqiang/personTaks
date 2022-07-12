import {createRouter,createWebHashHistory} from 'vue-router'
console.log(createRouter,'-wewe')
//路由配置
const routes=[
    {
        path:"/",
        title:'首页',
        component:()=>import('@/views/homepage/index.vue')
    },{
        path:"/taskAdd",
        title:"任务添加",
        component:()=>import('@/views/task/add.vue')
    }
]
const router=  createRouter({
    history:createWebHashHistory(),
    routes,
})
export default router