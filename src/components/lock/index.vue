<template>
    <div class="task-lock">
        <div>已锁定</div>
        <div>{{currentDate}}</div>
        <div>
            {{lockedTime}}
        </div>

        <el-button @click="unlock">解除锁定</el-button>
    </div>
</template>

<script>
    import {useStore} from 'vuex'
    import {format} from '@/common/js/until.js'


    export default {
        name: "index",
        props:{

        },
        emits:['handlelock'],
        setup(props,content){
            console.log(content,'we')
            const store =  useStore();
            console.log(store.state.app.showModel)

            const unlock=()=>{
                content.emit('handlelock',false)
                store.commit('changeModelStatus',false)
            }
            //计算时间
             let currentDate=ref(format(new Date))
            return{
                unlock,
                currentDate
            }

        }
    }
</script>

<style scoped lang="scss">
    .task-lock{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:white;
        z-index:9999
    }

</style>
