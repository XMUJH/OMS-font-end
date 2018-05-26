<template>
    <div>
    	<el-container>
        <searchbar :showContent='"请输入要查询的任务名称"'></searchbar>
          <el-main class="maincontent" style="margin-top: 105px;">
                <el-breadcrumb separator-class="el-icon-arrow-right" style="height:30px">
                    <el-breadcrumb-item :to="{ path: '/contractee/homePage/task' }" @click.native="brush">所有项目</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="item in layers">{{item}}</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="el-scrollbar" style="height:500px">
                   <v-contextmenu ref="contextmenuProject" theme="bright">
                        <v-contextmenu-item>打开项目</v-contextmenu-item>
                        <v-contextmenu-item>重命名</v-contextmenu-item>
                        <v-contextmenu-item>设置密码</v-contextmenu-item>
                        <v-contextmenu-item>更改安全等级</v-contextmenu-item>
                        <v-contextmenu-item>新建项目</v-contextmenu-item>
                        <v-contextmenu-item>新建任务</v-contextmenu-item>
                        <v-contextmenu-item>刷新</v-contextmenu-item>
                        <v-contextmenu-submenu title="排序">
                            <v-contextmenu-item>名称</v-contextmenu-item>
                            <v-contextmenu-item>最后修改时间</v-contextmenu-item>
                        </v-contextmenu-submenu>
                        <v-contextmenu-item>删除</v-contextmenu-item>
                  </v-contextmenu>
                  <v-contextmenu ref="contextmenuTask" theme="bright">
                        <v-contextmenu-item>进入任务</v-contextmenu-item>
                        <v-contextmenu-item>重命名</v-contextmenu-item>
                        <v-contextmenu-item>设置密码</v-contextmenu-item>
                        <v-contextmenu-item>新建项目</v-contextmenu-item>
                        <v-contextmenu-item>新建任务</v-contextmenu-item>
                        <v-contextmenu-item>刷新</v-contextmenu-item>
                        <v-contextmenu-submenu title="排序">
                            <v-contextmenu-item>名称</v-contextmenu-item>
                            <v-contextmenu-item>最后修改时间</v-contextmenu-item>
                        </v-contextmenu-submenu>
                        <v-contextmenu-item>删除</v-contextmenu-item>
                  </v-contextmenu>
                  <v-contextmenu ref="contextmenuGeneral" theme="bright">
                        <v-contextmenu-item>新建项目</v-contextmenu-item>
                        <v-contextmenu-item>新建任务</v-contextmenu-item>
                        <v-contextmenu-item>刷新</v-contextmenu-item>
                        <v-contextmenu-submenu title="排序">
                            <v-contextmenu-item>名称</v-contextmenu-item>
                            <v-contextmenu-item>最后修改时间</v-contextmenu-item>
                        </v-contextmenu-submenu>
                  </v-contextmenu>
                  <draggable :move="getdata" @update="datadragEnd">
                        <div class="task" v-for="item in allProjects" :taskName=item.name v-contextmenu:contextmenuProject @dblclick="getIn($event)">
                            <div class="progress-bar">
                                <div class="progress-bar_toper"></div>
                                <div class="progress-bar_outer">
                                    <div class="progress-bar_inner" v-bind:style="{height: item.height}"></div>
                                </div>
                                <font class="progress-bar_text">{{item.percentage}}</font>
                            </div>
                            <font class="taskText2">{{item.name}}</font>
                        </div>
                        <div class="task" v-for="item in allTasks" :taskName=item.name @click="detail($event)" v-contextmenu:contextmenuTask>
                          <el-progress type="circle" :percentage=item.percentage class="myEl-Progress" :color=item.color width=80></el-progress>
                          <p class="taskText">{{item.name}}</p>
                        </div>
                        <div class="task" v-contextmenu:contextmenuGeneral @click="addTask">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve" width="80px" height="80px" class="myPlusIcon">
                            <polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0   222.031,222.031 0,222.031 0,267.969 222.031,267.969 " fill="#a5aaad"/>
                        </svg>
                        </div>
                        <div class="fakeArea" v-contextmenu:contextmenuGeneral>
                        </div>
                    </draggable>
                </div>
          </el-main>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'task2',
  data () {
    return {
      layers: [],
      allProjects: [{name: '互联网+', percentage: '100%', height: '81%'}, {name: '服务外包', percentage: '10%', height: '8%'}],
      allTasks: [{name: 'Vehicle Pro', percentage: 80, color: '#2cd64d'}, {name: '厦门大学校园助手', percentage: 10, color: '#f33232'}, {name: '众包旅游向导平台', percentage: 60, color: '#3f95ce'}, {name: '中间件设计', percentage: 30, color: '#dac606'}, {name: '智能机器人', percentage: 70, color: '#3f95ce'}, {name: '智慧家居平台', percentage: 20, color: '#f33232'}, {name: '前背景智能分离技术', percentage: 80, color: '#2cd64d'}, {name: '办公自动化系统', percentage: 0, color: '#f33232'}, {name: '演示用任务', percentage: 0, color: '#f33232'}]
    }
  },
  methods: {
    detail (event) {
      this.$router.replace('/contractee/homePage/task/detail/progress/')
      this.$emit('changeFirstBread', event.currentTarget.getAttribute('taskName'))
    },
    getIn (event) {
      this.layers.push(event.currentTarget.getAttribute('taskName'))
      this.allProjects = [{name: '吴清强老师项目', percentage: '80%', height: '64%'}]
      this.allTasks = [{name: '今目标平台', percentage: 20, color: '#f33232'}, {name: '智能外包管理平台', percentage: 80, color: '#2cd64d'}, {name: '验证码识别', percentage: 0, color: '#f33232'}]
    },
    getdata (evt) {
      console.log(evt.draggedContext.element.id)
    },
    datadragEnd (evt) {
      console.log('拖动前的索引 :' + evt.oldIndex)
      console.log('拖动后的索引 :' + evt.newIndex)
      console.log(this.tags)
    },
    brush () {
      this.allProjects = [{name: '互联网+', percentage: '100%', height: '81%'}, {name: '服务外包', percentage: '10%', height: '8%'}]
      this.allTasks = [{name: '智能外包管理平台', percentage: 80, color: '#2cd64d'}, {name: '智慧家居平台', percentage: 10, color: '#f33232'}, {name: '智能外包管理平台', percentage: 60, color: '#3f95ce'}, {name: '智慧家居平台', percentage: 30, color: '#dac606'}, {name: '智能外包管理平台', percentage: 70, color: '#3f95ce'}, {name: '智慧家居平台', percentage: 20, color: '#f33232'}, {name: '智能外包管理平台', percentage: 80, color: '#2cd64d'}, {name: '智慧家居平台', percentage: 0, color: '#f33232'}]
      this.layers = []
    },
    addTask () {
      this.$router.replace('/contractee/homePage/task/addTask')
    }
  },
  created: function () {
    this.$http.get('http://localhost:8080/projects/-1/projects').then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error.toString())
        })
  }
}
</script>
<style>
.el-scrollbar{
  height:260px;
  width:100%;
  overflow: auto;
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

.fakeArea{
  float:left;
  width:130px;
  padding:10px 5px;
  margin:5px;
  text-align: center;
  height:120px;
  width:140px;
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
.taskText2{
   font-family: Hiragino Sans GB;
   float:right;
   color:black;
   font-size: 0.875em;
   width:100%;
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
.progress-bar {
   position: relative;
   float:left;
   width: 100px;
   height: 84px;
   margin-left: 7%;
}
  /*文件夹最上面*/
.progress-bar_toper {
    height: 10%;
    width: 15%;
    margin-left:5%;
    border-top: 0.12em solid #979797;
    border-left: 0.12em solid #979797;
    border-right: 0.12em solid #979797;
}

  /*外层进度条*/
.progress-bar_outer{
    float:left;
    width: 100%;
    height: 80%;
    background-color: #fefefe;
    border: 0.12em solid #979797;
    overflow: hidden;
}

  /*内层进度条*/
.progress-bar_inner {
    /* top: 0; */
    position: absolute;
    bottom: 4px;
    margin-bottom: 0%;
    width: 100.5px;
    background-color: #cbcbcb;
    /* border-radius: 100px; */
}

  /*进度条文字*/
.progress-bar_text {
    position: absolute;
    left:33px;
    bottom:30px;
    color: #000;
    font-size: 1em;
    text-align: center;
    /* margin: 0 5px; */
}
</style>
