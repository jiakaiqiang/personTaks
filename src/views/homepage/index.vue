<template>
    <dv-full-screen-container>
        <div class="task-board" id="homepage">
            <div class="disk-board-title">
                <dv-decoration-11 style="width:200px;height:60px;">任务看板</dv-decoration-11>
                <div class="disk-board-fullscreen">
                    <i v-if="isFulleScreen" class="iconfont  icon-suoxiao " @click="toggleFullScreen()"></i>
                    <i v-else class="iconfont icon-fangda " @click="toggleFullScreen()"></i>
                </div>
            </div>
            <taskCard :taskList="taskList" :refresh="refresh" class="task-card"></taskCard>
        </div>
    </dv-full-screen-container>

</template>

<script>
    import {liquidFillOption,weekTaskData} from '@/common/js/config.js'
    import echarts from "@/components/echart/index.vue";
    import {ref, reactive, toRefs, computed, nextTick} from "vue";
    import userInfo from "@/hooks/useInfo.js";
    import {useStore} from "vuex"
    import taskCard from '@/components/taskCard/index.vue'
    import * as screenfull from "screenfull";

    export default {
        name: "index",
        components: {
            echarts,
            taskCard
        },
        setup(porps, context) {

            const echartInfo = reactive({
                width: "800px",
                height: "500px",
            });
            const store = useStore();
            console.log(store,'wewe--')


            let chartOptions = reactive({
                option: {
                    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
                    background: "",
                    xAxis: {
                        type: "category",
                        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        axisLine: {
                            lineStyle: {
                                color: 'white' //轴线颜色
                            }
                        }
                    },
                    yAxis: {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: 'white'  //轴线颜色
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'white'   //分割线颜色
                            }
                        }
                    },
                    series: [
                        {
                            data: [150, 230, 224, 218, 135, 147, 260],
                            type: "line",
                            lineStyle: {
                                color: 'pink'
                            }
                        },
                    ],
                },
            });
            //任务看板的数据
            const dataList = reactive({
                taskList: [
                       {
                       reportList: [{reportId: 1, option: chartOptions['option'], name: "周任务", span: 12, height: '400px'},
                                {reportId: 2, option: chartOptions['option'], name: "月度任务", span: 12, height: '400px'}]
                      },
                    {reportList: [{reportId: 3, option: liquidFillOption, name: "月度任务完成情况", span: 12, height: '400px'},
                            {reportId: 4, option: {
                                    header: ['列1', '列2', '列3'],
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
                                }, name: "周任务统计列表", span: 12, height: '400px'}]},



                ],
                refresh: Math.random()
            })

            //是否全屏显示
            let isFulleScreen = ref(false)

            function toggleFullScreen() {
                if (screenfull.default.isEnabled) {
                    if (screenfull.default.isFullscreen) {
                        nextTick(() => {
                            isFulleScreen.value = false
                        })
                    } else {
                        nextTick(() => {
                            isFulleScreen.value = true
                        })
                    }
                    console.log(isFulleScreen.value, screenfull.default.isFullscreen, 'wewjka')
                    screenfull.default.toggle();
                }
            }

            return {
                ...toRefs(echartInfo),
                ...toRefs(chartOptions),
                ...toRefs(dataList),
                isFulleScreen,
                toggleFullScreen
            };
        },
    };
</script>
<style lang='scss' scoped>
    .disk-board-title {
        width: 100%;
        display: flex;
        justify-content: center;
        height: 120px;
        align-items: center;
        font-size: 20px;

        .disk-board-fullscreen {
            position: absolute;
            right: 50px;
            top: 50px;

            i {
                font-size: 30px
            }
        }
    }

    .task-board {
        margin: 8px;
        border: 1px solid #aaa;
        height: calc(100vh - 120px);
        color: white;
        border-radius: 10px;
        background-image: url('@/images/homepageBg.png');
    }
    #dv-full-screen-container{
        top:80px
    }

</style>

