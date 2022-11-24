<template>
  <div class="page-form">
    <el-form :model="data" :rules="rules" ref="form" :label-width="labelWidth">
      <template v-for="item in filterFieldList" :key="item.value">
        <!--slot -->
        <template v-if="item.type == 'itemSlot'">
          <slot :name="'form-' + item.value" :data="{ item }"> </slot>
        </template>
        <!--输入框 -->
        <el-form-item v-else :label="item.label" :prop="item.value">
          <slot
            v-if="item.type == 'slot'"
            :name="'form-' + item.value"
            :data="{ item }"
          ></slot>
          <el-input
            v-if="item.type == 'input' || item.type == 'password'"
            v-model="data[item.value]"
            :type="item.type"
            :placeholder="getPlaceholder(item)"
          />
          <!--选择框 -->
          <el-select
            v-if="item.type == 'select' || item.type == 'moreSelct'"
            v-model="data[item.value]"
            :placeholder="getPlaceholder(item)"
            :multiple="item.type == 'moreSelect' ? true : false"
            :disabled="item.disabled ?? false"
            :clearable="item.clearable ?? true"
            @change="handleEvent(item.event, data[item.value])"
          >
            <el-option
              v-for="option in listTypeInfo[item.list]"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
          <!-- 文本框 -->
        <el-input v-if="item.type=='textarea'" type='textarea' :placeholder="getPlaceholder(item)" 
        :autosize="{ minRows: item.minRows??2, maxRows: item.maxRows??6 }"
        ></el-input>
          <!--时间选择 -->
          <el-date-picker
            v-if="item.type == 'date'"
            :key="item.value"
            v-model="data[item.value]"
            :type="item.typeTime"
            :placeholder="getPlaceholder(item)"
             :format="item.format??'YYYY/MM/DD HH:mm:ss'"
             :teleported='false'

            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive ,watchEffect,toRefs} from "vue";

const props = defineProps({
  //绑定的数据data
  data: {
    type: Object,
    default: () => {
      return {};
    },
  },
  fieldList: {
    type: Array,
    default: () => {
      return [];
    },
  },
  refObj: {
    type: Object,
    default: () => {
      return null;
    },
  },
  labelWidth: {
    type: String,
    default: "120px",
  },
  rules: {
    type: Object,
    defalut: () => {
      return {};
    },
  },
  listTypeInfo: {
    type: Object,
    defalut: () => {
      return {};
    },
  },
  size: {
    type: String,
    defalut: "small",
  },
});

//处理字段
let filterFieldList = props.fieldList.filter(
  (item) =>
    (item.hasOwnProperty("show") && item.show == true) ||
    !item.hasOwnProperty("show")
);
console.log(filterFieldList, "filterFieldList",props.data);
//处理提示语
let getPlaceholder = (row) => {
  let placeholder = "";
  switch (row.type) {
    case "input":
    case "textarea":
      placeholder = "请输入" + row.label;
      break;
    case "select":
    case "moreSelect":
    case "date":
      placeholder = "请选择" + row.label;
      break;
  }
  return placeholder;
};
const {data,refObj,fieldList,listTypeInfo,size,labelWidth} = toRefs(props)
console.log(data,'datas')
const emit = defineEmits(["handleClick", "handleEvent"]);
let   handleEvent=(event,data)=>{
   emit('handleEvent',event,data)

}
</script>
<style scoped lang='scss'>
</style>