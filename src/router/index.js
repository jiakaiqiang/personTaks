import {createRouter, createWebHashHistory} from 'vue-router'
//路由配置
const routes = [
    {
        path:"/",
        redirect:"/taskboard"
    },
    {
        path: "/taskboard",
        title: '任务看板',
        component: () => import('@/views/homepage/index.vue')
    },
    {
        path: "/task",
        title: "任务",
        children: [
            {
                path: "taskConfig",
                title: "任务配置",
                component: () => import('@/views/task/config.vue')
            },
            {
                path: "taskAdd",
                title: "新增任务",
                component: () => import('@/views/task/add.vue')
            },
            {
                path: "tackDetails",
                title: "任务详情",
                component: () => import('@/views/task/details.vue')
            },
            {
                path:'settings',
                title:"设置",
                component:()=>import('@/views/task/settings.vue')

            }

        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
