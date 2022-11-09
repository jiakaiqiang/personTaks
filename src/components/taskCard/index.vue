<template>
    <div class="task-card">

         <el-row v-for="(item,index) in taskList" :key="index">

             <el-col :span="itemChildren.span" v-for="itemChildren in item.reportList"  :key='itemChildren.name'>

                 <el-card class="box-card">
                     <template #header>
                         <div class="task-header">
                             <div>
                                 {{itemChildren.name}}
                             </div>
                             <el-button @click="handleClick('expand',itemChildren)">
                                 <i class="iconfont icon-fangda"></i>
                             </el-button>
                         </div>
                     </template>
                     <div>
                         <dv-border-box-11 :title="itemChildren.name">

                             <dv-scroll-board v-if="[4,'4'].includes(itemChildren.reportId)" :config="itemChildren.option" height="400px" />
                             <echart v-else  :options="itemChildren.option" :height="itemChildren.height" ></echart>
                             <!--月度任务完成度-->
                         </dv-border-box-11>

                         <!---->
                     </div>

                 </el-card>

             </el-col>
         </el-row>


    </div>
</template>

<script >
    import { ref,reactive} from 'vue'
    import  echart from '@/components/echart/index.vue'

    /*任务看板*/
    export default {
        name: "index.vue",
        components:{
            echart
        },
        props:{
            taskList:{
                type:Array,
                default:()=>{
                    return []
                }
            },
            refresh:{
                type:Number,
                default:0,
            }
        },
        setup(props,content){
            console.log(props.taskList)

            return{

            }

        }

    }
</script>

<style scoped lang="scss">
    @import '@/style/mixin.scss';
    .task-card{
        .task-header{
            @include flexBox;
            @include justifyBetween;
            color:white;
            .el-button{
                background: transparent;
            }
            .icon-fangda{
                color:white
            }

        }
        .box-card{
            margin:10px;
        }
        .dv-scroll-board .rows .row-item{
            height:100px;
        }

    }


</style>
<style lang="scss">
    .task-card{
        //background-color:pink;
        .el-card{
            background-color:transparent
        }
    }

</style>
