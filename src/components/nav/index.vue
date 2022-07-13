<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
    >
        <el-menu-item index="0">
            <el-image style="width: 50px; height: 50px;margin-left:16px" :src="url"  />
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name: "index",
         setup(props,content){
            let imgurl=  require('@/images/taskLogo.png')
            const url =  ref(imgurl)
             const activeIndex = ref('1')
             let  handleSelect = (key, keyPath) => {
                 console.log(key, keyPath)
             }
             //
             return {
                 activeIndex,
                 handleSelect,
                 url
             }
         }
    }
</script>

<style scoped>

</style>
