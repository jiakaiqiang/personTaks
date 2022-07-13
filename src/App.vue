<template>
    <navs class="task-nav"></navs>
    <div class="task-container-view">
        <router-view></router-view>
    </div>
    <el-button :style="{left:x+'px',top:y+'px',display:display,position:'absolute','z-index':7777,transform: 'translate(-50%, -50%)'}"  @click="handlelock">
     <el-icon><Setting /></el-icon>
        锁定
    </el-button>
    <locks v-if="showModel" @handlelock="handlelock"></locks>
</template>

<script>

    import navs from '@/components/nav/index.vue'
    import locks from '@/components/lock/index.vue'
    import {reactive, toRefs,ref} from "vue";
    import {useStore} from 'vuex'
    export default {
        name: 'App',
        components: {
            navs,
            locks
        },
        setup(props, content) {
            const store = useStore()
            console.log(store)
            let showModel=ref(store.state.app.showModel)
            let pointerXY = reactive({x: 0, y: 0,display:"none"})
            //监听鼠标邮件
            window.addEventListener('contextmenu', (e) => {
             console.log(e,'wew')
                e.preventDefault();
                //根据鼠标的位置显示 屏幕锁定的操作
                let {clientX, clientY} = e
             pointerXY.y = clientY
             pointerXY.display='block'
             pointerXY.x=clientX


            }, false)

            //监听鼠标邮件
            window.addEventListener('click', (e) => {
                pointerXY.display = 'none'


            }, false)
              function handlelock(status){
                  showModel.value = status
                  store.commit('changeModelStatus',status)
             }

            return {
                ...toRefs(pointerXY),
                 handlelock,
                showModel
            }
        }
    }
</script>

<style lang="scss">
    .task-nav {
        width: 100%;
    }

    .flex-grow {
        flex-grow: 1;
    }


</style>
