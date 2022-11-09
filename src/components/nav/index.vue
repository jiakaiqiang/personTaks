<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    router
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <el-image
        style="width: 50px; height: 50px; margin-left: 16px"
        :src="url"
      />
    </el-menu-item>
    <el-menu-item index="0" class="flex-grow"> </el-menu-item>
    <el-menu-item index="" id="message" @click="handleShowMessage">
      <!-- 消息中心 -->
      <el-popover placement="bottom" :width="400" trigger="click" popper-class='messageInfo-details'>
        <template #reference>
          <i class="iconfont icon-xiaoxitongzhi"></i>
        </template>
        <div>
          <el-tabs
            v-model="activeName"
            class="messageInfo-detalis-tab"
        
          >
            <el-tab-pane label="通知" name="notice">
              <template #label>
                  <div class="messageInfo-detalis-label">
                        <span>通知{{messageInfoDetali.notice}}</span>
                  </div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="消息" name="message">
                   <template #label>
                  <div class="messageInfo-detalis-label">
                        <span>消息{{messageInfoDetali.message}}</span>
                  </div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="待办" name="backlog">
                   <template #label>
                  <div class="messageInfo-detalis-label">
                        <span>待办{{messageInfoDetali.backlog}}</span>
                  </div>
              </template>
            </el-tab-pane>
          </el-tabs>
          <div>
               <!-- 通知 -->
               <div class='messageInfo-details-item' v-if="activeName=='notice'">
                   <div>
                       <span><i class='el-icon-'></i></span>
                   </div>
                   <div>
                       <div> 你收到了12封邮件</div>
                       <span>2020-12-12:12-12</span>
                   </div>

               </div>
               <!-- 消息 -->
                 <div class='messageInfo-details-item' v-if="activeName=='message'">

               </div>
               <!-- 待办 -->
                 <div class='messageInfo-details-item' v-if="activeName=='backlog'">

               </div>
          </div>
        </div>
      </el-popover>
    </el-menu-item>
    <el-menu-item index="/taskboard" id="taskboard">任务看板</el-menu-item>
    <el-sub-menu index="/task">
      <template #title>任务</template>
      <el-menu-item index="/task/taskConfig">任务管理</el-menu-item>
      <el-menu-item index="/task/taskAdd">任务新增</el-menu-item>
      <el-menu-item index="/task/settting">系统配置</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="0" id="userInfo">
      <div>{{ userInfo.name }}</div>
    </el-menu-item>
    <div style="margin-right: 30px"></div>
  </el-menu>
</template>

<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "index",
  setup(props, content) {
    const store = useStore();
    let imgurl = require("@/images/taskLogo.png");
    const url = ref(imgurl);
    const activeIndex = ref("1");
    let handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };

    //用户信息
    let userInfo = reactive(store.state.user.userInfo);

    //显示提示信息
    let messageInfo = reactive({
      title: "消息中心",
      visible: false,
    });
    let messageNumber = ref(0);
    let handleShowMessage = () => {
      messageInfo.visible = true;
      console.log(messageInfo, "MESASGE");
    };

///消息详情
   const messageInfoDetali= reactive({
       notice:12,
       message:232,
    backlog:2323
   })
   let activeName =  ref('notice')

    return {
      activeIndex,
      handleSelect,
      handleShowMessage,
      url,
      userInfo,
      messageNumber,
      messageInfo,
      messageInfoDetali,
      activeName
    };
  },
};
</script>

<style lang="scss">
.messageInfo-details{
    
    .el-tabs{
//         .el-tabs__nav-scroll{
//   width: 260px;
//         margin: 0 auto;
//         }
      
    }
}
</style>
