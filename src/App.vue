<template>
    <navs class="task-nav" id="nav"></navs>
    <!-- <el-button @click.prevent.stop="handleGuide()">新手引导</el-button> -->
    <div class="task-container-view">
        <router-view></router-view>
    </div>
    <el-button :style="{left:x+'px',top:y+'px',display:display,position:'absolute','z-index':7777,transform: 'translate(-50%, -50%)'}"  @click="handlelock">
     <!-- <el-icon><Setting /></el-icon> -->
        锁定
    </el-button>


    <locks v-if="showModel" @handlelock="handlelock"></locks>
</template>

<script>

    import navs from '@/components/nav/index.vue'
    import locks from '@/components/lock/index.vue'
    import {reactive, toRefs,ref,onMounted} from "vue";
    import {useStore} from 'vuex'
    import Driver from 'driver.js'
    import 'driver.js/dist/driver.min.css'

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

            const steps = reactive([
                {
                    element: '#nav', // DOM 节点
                    stageBackground: 'pink', // 内容的背景颜色样式
                    popover: { // 分步内容的主体
                        title: '任务操作栏', // HTML 标签 title
                        description: '你可以点击对应的菜单进行任务的操作', // 分步引导中的描述部分
                        position: 'right' // 相对于高亮的部分，分步内容的位置
                    }
                },
                {
                    element: '#message',
                    popover: {
                        title: '消息中心',
                        description: '展示任务完成，未完成，到期等任务信息',
                        position: 'left'
                    }
                },
                {
                    element: '#taskboard',
                    popover: {
                        title: '任务看板',
                        description: '以图表的方式进行任务的展示',
                        position: 'left'
                    }
                } ,{
                    element: '#userInfo',
                    popover: {
                        title: '用户信息',
                        description: '当前用户的用户信息',
                        position: 'left'
                    }
                }
            ])

            const driver = new Driver({
                className: 'scoped-class', // 包装类名
                animate: true, // 是否开启动画
                stageBackground: '#fff', // 突出显示元素的背景颜色
                opacity: 0.75, // 遮罩层不透明度（0表示仅弹出且不覆盖）
                padding: 0, // 边距
                allowClose: false, // 点击遮罩层是否关闭
                overlayClickNext: false, // 叠加点击时是否移动到下一步
                doneBtnText: '完成', // 结束按钮文字
                closeBtnText: '跳过', // 关闭按钮的文字
                nextBtnText: '下一步', // 下一步按钮的文字
                prevBtnText: '上一步', // 上一步按钮的文字
                keyboardControl: true, // 允许通过键盘进行控制（esc 退出，箭头键移动）,

            })
            const handleGuide = () => {
                driver.defineSteps(steps)
                driver.start()
            }



            return {
                ...toRefs(pointerXY),
                handleGuide,
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
