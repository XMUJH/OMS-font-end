<template>
    	<el-container>
        <searchbar :showContent='"请输入要查询的任务名称"'></searchbar>
          <el-main class="maincontent" style="margin-top: 105px;">
                <el-row class="myEl-Row"><font class="el-rowText">我负责的任务</font></el-row>
                <v-contextmenu ref="contextmenuTaskMini" theme="bright">
                        <v-contextmenu-item>进入任务</v-contextmenu-item>
                        <v-contextmenu-item @click="edit">编辑里程碑</v-contextmenu-item>
                </v-contextmenu>
                <div class="el-scrollbar">
                    <div class="task" v-for="item in inChargeTasks" :taskName=item.name @click="detail1($event)" v-contextmenu:contextmenuTaskMini>
                        <el-progress type="circle" :percentage=item.percentage class="myEl-Progress" :color=item.color width=80></el-progress>
                        <p class="taskText">{{item.name}}</p>
                    </div>
                    <div class="task">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve" width="80px" height="80px" class="myPlusIcon" @click="open1">
                            <polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0   222.031,222.031 0,222.031 0,267.969 222.031,267.969 " fill="#a5aaad"/>
                        </svg>
                    </div>
                </div>
                <el-row class="myEl-Row"><font class="el-rowText">我参与的任务</font></el-row>
                <div class="el-scrollbar">
                    <div class="task" v-for="item in inTasks" :taskName=item.name @click="detail2($event)">
                        <el-progress type="circle" :percentage=item.percentage class="myEl-Progress" :color=item.color width=80></el-progress>
                        <p class="taskText">{{item.name}}</p>
                    </div>
                </div>
            </el-main>
        </el-container>
</template>

<script>
export default {
  mounted() {
    this.init()
  },
  data () {
    return {
      inChargeTasks: [{name: '智能外包管理平台', percentage: 80, color: '#2cd64d'}, {name: '考勤管理系统', percentage: 20, color: '#f33232'}, {name: '演示用任务', percentage: 0, color: '#f33232'}],
      inTasks: [ {name: 'Vehicle Pro', percentage: 30, color: '#dac606'}, {name: '厦门大学校园助手', percentage: 70, color: '#3f95ce'}, {name: '智能机器人', percentage: 20, color: '#f33232'}, {name: '办公自动化系统', percentage: 80, color: '#2cd64d'}, {name: '智慧家居平台', percentage: 0, color: '#f33232'}]
    }
  },
  methods: {
    init() {
        this.$http.post(
          HOST + '/users/2/tasks', 
          JSON.stringify({
            "choice":"LEADER"
          }),
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(function (response){
            console.log(123)
          console.log(response)
          //that.$router.replace('/facerecognition')
        }).catch(function (error) {
          console.log(456)
          console.log(error);
      });
    },
    open1 () {
      this.$prompt('请输入授权码', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '任务添加成功'
        })
        this.$router.replace('/outsourcee/homePage/task/edittask/')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '输入已取消'
        })
      })
    },
    detail1 (event) {
      this.$router.replace('/outsourcee/homePage/task/detail/progress/')
      this.$emit('changeFirstBread', event.currentTarget.getAttribute('taskName'))
      this.$emit('changeUserRole', 'incharge')
    },
    detail2 (event) {
      this.$router.replace('/outsourcee/homePage/task/detail/progress/')
      this.$emit('changeFirstBread', event.currentTarget.getAttribute('taskName'))
      this.$emit('changeUserRole', 'participate')
    },
    edit (vm, event) {
      this.$router.replace('/outsourcee/homePage/task/edittask/')
    }
  }
}
</script>
<style>
.el-scrollbar{
  height:260px;
  width:100%;
  overflow: auto;
}
.el-container{
  width:100%;
  height:100%;
}
.myPlusIcon{
  height:100px; 
  margin:0;
}

.task{
  float:left;
  width:130px;
  padding:10px 5px;
  margin:5px;
  text-align: center;
}

.myEl-Progress{
  margin:auto;
}

.taskText{
  font-family: Hiragino Sans GB;
  color:black;
  text-align: center;
  font-size: 0.875em;
  margin:0;
}
.task:hover{   
  float:left;
  padding:10px 5px;
  border-radius: 3px;
  border-style: 1px solid rgb(198, 47, 47);
  background-color: rgba(198, 47, 47,0.05);
  top: 2px; /**向下偏移2px **/
}
.task:active{   
  float:left;
  padding:10px 5px;
  border-radius: 3px;
  border-style: 1px solid rgb(198, 47, 47);
  background-color: rgba(198, 47, 47,0.1);
  top: 2px; /**向下偏移2px **/
}
</style>
