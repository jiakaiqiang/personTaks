<template>
<div>
    <PageForm :ref-obj='formInfo.ref' :data='formInfo.data'
     :rules="formInfo.rules" :fieldList="formInfo.fieldList"
      @handleClick="handleClick" @handleEvent="handleEvent"
     ></PageForm>
</div>
</template>

<script setup>
import {ref,reactive} from 'vue'
import PageForm from  '@/components/pageForm'
console.log(PageForm,'PageForm')
//创建字段
let formInfo = reactive({
    ref:null,
    rules:{},
     data:{
         taskName:"12",
         taskCreateName:"1313",
         taskCreateTime:""
     },
     fieldList:[{label:"任务名称",type:'input',value:"taskName"},
     {label:"任务创建人",type:"input",value:"taskCreateName"},
     {label:"任务创建时间",type:"date",typeTime:"datetime",value:'taskCreateTime'}]


})
//处理方法
let handleEvent=()=>{

}
let handleClick=()=>{

}

</script>
<style scoped lang='scss'>
</style>