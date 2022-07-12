<template>
    <div class="task-card">

         <el-row v-for="(item,index) in taskList" :key="index">

             <el-col :span="itemChildren.span" v-for="itemChildren in item.reportList">

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

                             <dv-scroll-board v-if="[4,'4'].includes(itemChildren.reportId)" :config="config" height="400px" />
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
           let  config =reactive({
               header: ['任务名称', '完成时长', '总时长'],
               data: [
                   ['行1列1', '行1列2', '行1列3'],
                   ['行2列1', '行2列2', '行2列3'],
                   ['行3列1', '行3列2', '行3列3'],
                   ['行4列1', '行4列2', '行4列3'],
                   ['行5列1', '行5列2', '行5列3'],
                   ['行6列1', '行6列2', '行6列3'],
                   ['行7列1', '行7列2', '行7列3'],
                   ['行8列1', '行8列2', '行8列3'],
                   ['行9列1', '行9列2', '行9列3'],
                   ['行10列1', '行10列2', '行10列3']
               ]
           })
            return{
                config
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
