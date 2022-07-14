<template>
  <taskList :taskList="taskListData"></taskList>
</template>

<script>
    import {reactive,inject} from 'vue'
    import axios from 'axios'
    import taskList from '@/components/taskList/index.vue'
    export default {
        name: "config",
        components: {
            taskList
        },
        setup(props,content){
          let $get = inject('$get')
            const taskListData = reactive([
               {name:"vue3学习",status:0,desc:"学习vue3同时进行练习",startTime:"2022-07-07 12:12:12",endTime:'2022-07-08 12:12:12',isfinished:1},
              {name:"vue3学习",status:0,desc:"学习vue3同时进行练习",startTime:"2022-07-07 12:12:12",endTime:'2022-07-08 12:12:12',isfinished:1,span:8},
              {name:"vue3学习",status:0,desc:"学习vue3同时进行练习",startTime:"2022-07-07 12:12:12",endTime:'2022-07-08 12:12:12',isfinished:1,span:8},
              {name:"vue3学习",status:0,desc:"学习vue3同时进行练习",startTime:"2022-07-07 12:12:12",endTime:'2022-07-08 12:12:12',isfinished:1,span:8},
              {name:"vue3学习",status:0,desc:"学习vue3同时进行练习",startTime:"2022-07-07 12:12:12",endTime:'2022-07-08 12:12:12',isfinished:1,span:8},
              {name:"vue3学习",status:0,desc:"学习vue3同时进行练习",startTime:"2022-07-07 12:12:12",endTime:'2022-07-08 12:12:12',isfinished:1,span:8},
              {name:"vue3学习",status:0,desc:"学习vue3同时进行练习",startTime:"2022-07-07 12:12:12",endTime:'2022-07-08 12:12:12',isfinished:1,span:8},
            ])
          //获取数据
          $get('user/all',{}).then(res=>{
            console.log(res)
          })


            return {
              taskListData
            }

        }
    }
</script>

<style scoped>

</style>
