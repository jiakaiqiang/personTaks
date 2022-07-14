<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            router
            @select="handleSelect"
    >
        <el-menu-item index="0">
            <el-image style="width: 50px; height: 50px;margin-left:16px" :src="url"  />
        </el-menu-item>
        <el-menu-item index="0" class="flex-grow">
        </el-menu-item>
        <el-menu-item index="" id="message">消息通知</el-menu-item>
        <el-menu-item index="/taskboard" id="taskboard">任务看板</el-menu-item>
        <el-sub-menu index="/task">
            <template #title>任务</template>
            <el-menu-item index="/task/taskConfig">任务管理</el-menu-item>
            <el-menu-item index="/task/settting">系统配置</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="0" id="userInfo">
            <div>{{userInfo.name}}</div>
        </el-menu-item>
        <div style="margin-right:30px"></div>
    </el-menu>
</template>

<script>
    import {ref,reactive} from 'vue'
    import {useStore} from 'vuex'
    export default {
        name: "index",
         setup(props,content){
            const store = useStore()
            let imgurl=  require('@/images/taskLogo.png')
            const url =  ref(imgurl)
             const activeIndex = ref('1')
             let  handleSelect = (key, keyPath) => {
                 console.log(key, keyPath)
             }
             //用户信息
             let userInfo= reactive(store.state.user.userInfo)
             return {
                 activeIndex,
                 handleSelect,
                 url,
                 userInfo
             }
         }
    }
</script>

<style scoped>

</style>
