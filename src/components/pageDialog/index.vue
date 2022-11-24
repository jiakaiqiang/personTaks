<template>
  <div class="my-dialogInfo">
    <el-dialog
      v-model="props.visible"
      @close="close"
      :close-on-click-modal="false"
      :draggable="props.draggable"
      :width='props.width'
    >
      <template #header>
        <div class="my-dialogInfo-header">
          {{ title }}
        </div>
      </template>
       <div>
          <slot />
        </div>
      <template #footer>
        <div class="my-dialogInfo-footer">
          <el-button
            v-for="item in props.handleList"
            :key="item.label"
            @click="handleClick(item.event)"
          >
            {{ item.label }}
          </el-button>
        </div>
       
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  visible: { type: Boolean, default: false },
  //   showClose: { type: Boolean, defalut: true },
  title: { type: String, defalut: "" },
  draggable: { type: Boolean, defalut: true },
  fullscreen: { type: Boolean, default: false },
  width:{type:String,default:"600px"},
  handleList: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const emits = defineEmits(["update:visible",'handleClick']);
let close = () => {
  emits("update:visible", false);
};
const handleClick=(event)=>{
  emits('handleClick',event)
}
</script>
<style  lang='scss'>
.my-dialogInfo{
  .el-dialog__header{
    background:#409EFF;
    color:white;
    margin-right:0px;
    .el-dialog__close{
      color:white
    }
    .el-dialog__headerbtn{
      top:0px
    }
  }
}
</style>