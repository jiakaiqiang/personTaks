<template>
  <div class="my-dialogInfo">
    <el-dialog
      v-model="props.visible"
      @close="close"
      :close-on-click-modal="false"
      :draggable="props.draggable"
    >
      <template #header>
        <div class="my-dialogInfo-header">
          {{ title }}
        </div>
      </template>
      <template #footer>
        <div class="my-dialogInfo-footer">
          <el-button
            v-for="item in props.handleList"
            :key="item.label"
            @handleClick="handleClick(item.event)"
          >
            {{ item.label }}
          </el-button>
        </div>
        <div>
          <slot />
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
  handleList: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
console.log(props, "props");

const emits = defineEmits(["update:visible"]);
let close = () => {
  emits("update:visible", false);
};
</script>
<style scoped lang='scss'>
</style>