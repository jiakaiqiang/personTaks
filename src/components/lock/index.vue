<template>
    <div class="task-lock">
       <div>
           <div>已锁定</div>
           <div>{{currentDate}}</div>
           <div>
               {{lockedTime}}
           </div>

           <el-button @click="unlock">解除锁定</el-button>
       </div>
    </div>
</template>

<script>
    import {useStore} from 'vuex'
    import {ref,onMounted ,onUnmount} from 'vue'
    import {format} from '@/common/js/until.js'


    export default {
        name: "index",
        props:{

        },
        emits:['handlelock'],
        setup(props,content){

            const store =  useStore();


            const unlock=()=>{
                content.emit('handlelock',false)
                store.commit('changeModelStatus',false)
            }
            let currentDate=ref(format(new Date))
            onMounted(()=>{
                setInterval(()=>{
                     currentDate.value=format(new Date)
                },1000)
            })
            //计算时间
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
        background:black;
        opacity: 0.9;
        z-index:9999;
        display:flex;
        justify-content:center;
        align-items:center;
        &>div{
            width:500px;
            height:500px;
            color:white;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &>div{
                margin-bottom:16px;
            }

            &>div:nth-child(2){
                font-size:20px;
            }
        }
    }

</style>
