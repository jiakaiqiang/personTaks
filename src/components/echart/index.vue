<template>
  <div ref='echarts' class='charts' :style="{width,height}">

   </div>

</template>

<script>
import * as Echarts from 'echarts';

import {ref,reactive,onMounted,onBeforeUnmount,markRaw} from 'vue'
export default {
    name:"index.vue",
    props:{
        width:{
            type:String,
            default:'100%'
        },
        height:{
            type:String,
            default:'100%'
        },
        options:{
            type:Object,
            default:()=>{
                return {}
            }
        }

    },
    setup(props,context){
        console.log(props.options,'-12wewe')
        let timerId=ref('')
        let echarts=ref(null)


        let  myChart=''
        //定义图标的初始化信息
        function initEcharts(){

            myChart=Echarts.init(echarts.value) //echarts.value 获取标签
            myChart.setOption(props.options)
          window.addEventListener('resize',onResize)
        }
        //图标重置
        function onResize(){

        //    if(timerId.value){
        //        clearTimeout(timerId.value)
        //    }
          myChart.resize()
        //  timerId.value=setTimeout(()=>{
        //        myChart.resize()
        //      },1000)

        }
        onMounted(()=>{
            initEcharts()
        })
        //卸载之前
        onBeforeUnmount(()=>{
          timerId.value=''
          window.addEventListener('resize',onResize)


        })
        return{
            echarts,

        }
    }

}
</script>

<style>

</style>
