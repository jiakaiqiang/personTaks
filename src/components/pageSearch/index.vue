<template>
<div>

</div>
</template>

<script setup>
import {ref,reactive} from 'vue'

const props =  defineProps({
    //搜索列

    filterList:{
        type:Array,
        default:()=>{
            return []
        }
    },
    //搜索参数
    query:{
        type:Object,
        default:()=>{
            return {}
        }
    },
    //listTypeInfo
    listTypeInfo:{
       type:Object,
       defalut:()=>{
           return {}
       }
    },
    //是否显示搜索按钮
    showButton:{
        type:Boolean,
        default:true
    },
    //labelWidth
    labelWidth:{
        type:String,
        defalut:'120px'
     }
 

})

const emit  =  defineEmits(['handleEvent','handleClick'])

</script>
<style scoped lang='scss'>
</style>