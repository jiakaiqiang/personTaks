<template>
  <div class="create-dask-button">
    <el-button @click="createTask">创建任务</el-button>
  </div>
  <el-scrollbar
    :native="false"
    wrapStyle=""
    wrapClass=""
    viewClass=""
    viewStyle=""
    noresize="false"
    tag="section"
  >
    <taskList :taskList="taskListData"></taskList>
  </el-scrollbar>
  <pageDialog
    v-model:visible="creatDialogInfo.visible"
    :title="creatDialogInfo.title"
    :handleList="creatDialogInfo.btList"
    @handleEvent="handleEvent"
    @handleClick="handleClick"
  >
    <pageForm
      v-model:refObj="createTaskFormInfo.ref"
      :data="createTaskFormInfo.data"
      v-if="creatDialogInfo.visible"
      :labelWidth="createTaskFormInfo.labelWidth"
      :listTypeInfo="listTypeInfo"
      :fieldList="createTaskFormInfo.filedList"
    >
    </pageForm>
  </pageDialog>
</template>

<script>
import { ElMessage } from "element-plus";
import { reactive, inject, watch } from "vue";
import axios from "axios";
import taskList from "@/components/taskList/index.vue";
import pageDialog from "@/components/pageDialog";
import pageForm from "@/components/pageForm";
export default {
  name: "config",
  components: {
    taskList,
    pageDialog,
    pageForm,
  },
  setup(props, content) {
     let $get = inject('$get')
     let $post = inject('$post')
    let $format = inject("$format");
    console.log($format, "format");
    const taskListData = reactive([
      {
        name: "测试",
        status: 0,
        desc: "测试藐视",
        startTime: "2022-07-07 12:12:12",
        endTime: "2022-07-08 12:12:12",
        isfinished: 1,
      },
      {
        name: "测试",
        status: 0,
        desc: "测试藐视",
        startTime: "2022-07-07 12:12:12",
        endTime: "2022-07-08 12:12:12",
        isfinished: 1,
      },
      {
        name: "测试",
        status: 0,
        desc: "测试藐视",
        startTime: "2022-07-07 12:12:12",
        endTime: "2022-07-08 12:12:12",
        isfinished: 1,
      },
      {
        name: "测试",
        status: 0,
        desc: "测试藐视",
        startTime: "2022-07-07 12:12:12",
        endTime: "2022-07-08 12:12:12",
        isfinished: 1,
      },
      {
        name: "测试",
        status: 0,
        desc: "测试藐视",
        startTime: "2022-07-07 12:12:12",
        endTime: "2022-07-08 12:12:12",
        isfinished: 1,
      },
      {
        name: "测试",
        status: 0,
        desc: "测试藐视",
        startTime: "2022-07-07 12:12:12",
        endTime: "2022-07-08 12:12:12",
        isfinished: 1,
      },
    ]);
    //获取数据
    $get('task/list',{}).then(res=>{
      console.log(res)
    })
    let listTypeInfo = reactive({
      taskDutyPersonList: [
        { label: "张三", value: "zhangsan" },
        { label: "李四", value: "李四" },
      ],
    });
    //创建任务
    let createTaskFormInfo = reactive({
      ref: null,
      labelWidth: "120px",
      data: {
        taskName: "",
        taskDesc: "",
        taskTime: "",
        taskCreateUser: "",
        taskDutyPerson: "",
      },
      filedList: [
        { label: "任务名称", value: "taskName", type: "input" },
        {
          label: "任务描述",
          value: "taskDesc",
          type: "textarea",
          type: "input",
        },
        {
          label: "任务时间",
          value: "taskTime",
          type: "date",
          typeTime: "datetimerange",
        },
        { label: "任务创建人", value: "taskCreateUser", type: "input" },
        {
          label: "任务责任人",
          value: "taskDutyPerson",
          type: "select",
          list: "taskDutyPersonList",
        },
      ],
    });
    //弹框
    let creatDialogInfo = reactive({
      title: "创建任务",
      visible: false,

      btList: [
        { label: "提交", event: "save", show: true },
        { label: "取消", event: "cancel", show: true },
      ],
    });
    //弹窗的监听
  watch(()=>creatDialogInfo.visible,(val)=>{
    if(!val){
     for(let key  in  createTaskFormInfo.data){
       createTaskFormInfo.data[key]=''
     }
     //清除验证
    }
  })



    const handleEvent = (event, data) => {
      switch (event) {
        case "create":
          creatDialogInfo.visible = true;
      }
    };
    const handleClick = (event, data) => {
      switch (event) {
        case "cancel":
          creatDialogInfo.visible = false;
          break;
        case "save":
          saveTaskData();
          break;
      }
    };
    ///处理参数
    let handleParams = (data) => {
      let param = {};
      for (let [key, value] of Object.entries(data)) {
        if (key == "taskTime"&&value) {
          param["taskCreateTime"] = $format(value[0], "time");

          param["taskEndTime"] = $format(value[1], "time");
        } else {
          param[key] = value;
        }
      }
      return param;
    };

    //创建任务
    let saveTaskData = () => {
      console.log(handleParams(createTaskFormInfo.data), "da");
      let params = handleParams(createTaskFormInfo.data);
     console.log(params)
      $post("task/addTask", params).then((res) => {
        //进行数据的添加
        if (res && res.statusCode == 0) {
          ElMessage({
            message: "创建任务成功",
            type: "success",
          });
        } else {
          ElMessage({
            message: "创建任务失败",
            type: "error",
          });
        }
        creatDialogInfo.visible = false;
      });
       creatDialogInfo.visible = false;
    };
    const createTask = () => {
      creatDialogInfo.visible = true;
    };

    return {
      taskListData,
      createTaskFormInfo,
      creatDialogInfo,
      handleEvent,
      createTask,
      handleClick,
      listTypeInfo,
    };
  },
};
</script>

<style  lang='scss'>
.el-scrollbar__view {
  height: calc(100vh - 120px);
}
</style>
<style scoped lang='scss'>
.create-dask-button {
  line-height: 40px;
  margin-left: 20px;
}
</style>
