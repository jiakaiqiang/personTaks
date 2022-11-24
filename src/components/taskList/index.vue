<template>
    <div class="task-list-config">
        <template v-for="(item,index) in taskList" :key="index">
            <el-card class="task-config-item" @click="handleClick('taskDetails',item)" >
                <template #header>
                    <div class="task-config-header">
                        <div>
                            {{item.name}}
                        </div>
                        <div>
                            <div>
                                <el-tag :type="handleTypeStatus(item.status)">
                                    {{handleStatus(item.status)}}
                                </el-tag>
                            </div>

                            <el-button type="text" @click="handleClick('endtask',item)" class="iconfont icon-jieshu">

                            </el-button>
                        </div>
                    </div>
                </template>

                <div class="task-config-content">
                    <!--任务详情-->
                    <div class="task-config-content-desc">
                        {{item.desc}}

                    </div>
                    <div class="task-config-content-time">
                        <div v-if="item.isfinished===1">
                            <span><el-tag type="success">完成时间</el-tag>:<span>{{item.finishTime}}</span></span>
                        </div>
                        <div v-else>
                            <span><el-tag type="">开始时间</el-tag>:<span>{{item.startTime}}</span></span>
                            <span><el-tag type="">结束时间</el-tag>:<span>{{item.endTime}}</span></span>
                        </div>

                    </div>
                </div>


            </el-card>
        </template>
    </div>

</template>

<script>
    import {ref, reactive} from 'vue'

    export default {
        props: {
            taskList: {
                type: Array,
                default: () => []
            }

        },
        name: "index.vue",
        setup(props, content) {
            //处理任务状态
            const handleStatus = (type) => {
                let status = '未开始'
                switch (type) {
                    case 0:
                        status = '未开始'
                        break;
                    case 1:
                        status = '进行中'
                        break;
                    case 2:
                        status = '其他事务影响'
                        break;
                    case 3:
                        status = '个人原因'
                        break;

                }
                return status

            }
            //任务状态类型
            const handleTypeStatus = (type) => {
                let typeStatus = 'info'
                switch (type) {
                    case 0:
                        typeStatus = 'info'
                        break;
                    case 1:
                        typeStatus = ''
                        break;
                    case 2:
                        typeStatus = 'success'
                        break;
                    case 3:
                        typeStatus = 'warning'
                        break;
                    case 4:
                        typeStatus = 'danger'
                        break
                }
            }
            const handleClick=(event,data)=>{
                switch(event){
                    case 'taskDetails':
                           console.log(data,'wewe')
                        break;
                        case 'endtask':
                           


                            break;

                }
            }
            return {
                handleStatus,
                handleTypeStatus,
                handleClick
            }


        }
    }

</script>

<style scoped lang="scss">
    .task-list-config {
        display: flex;
        flex-wrap: wrap;
        .task-config-item {
            width: 23.5vw;
            margin: 16px;

            .task-config-header {
                display: flex;
                justify-content: space-between;

                & > div:last-child {
                    display: flex;
                    align-items: center;

                }
            }
        }
        .task-config-content{
            height:300px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            .task-config-content-time{
                &>div{
                    span{

                        .el-tag{
                            font-size:14px;
                        }

                    }
                    &>span>span{
                        font-size:16px;
                        font-weight:800
                    }
                }
                &>div:last-child{
                  display: flex;
                    justify-content: space-between;
                }
            }
        }

    }


</style>
