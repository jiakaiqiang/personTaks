<!--  -->
<template>
<div> 
    左侧
</div>
</template>

<script>
import { reactive,ref,watch,onMounted,onBeforeMount} from 'vue'
export default {
    name: '',
      setup() {
          onBeforeMount(() => {
              console.log('2.组件挂载页面之前执行----onBeforeMount')
          })
          onMounted(() => {
              console.log('3.-组件挂载到页面之后执行-------onMounted')
          })

      }
  };
</script>
<style lang='scss' scoped>
</style>