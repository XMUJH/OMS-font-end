<template>
    <div>
    	<el-container>
        <searchbar2 :showContent='"请输入要查询的任务名称"'></searchbar2>
          <el-main class="maincontent" style="margin-top: 105px;">
                <el-breadcrumb separator-class="el-icon-arrow-right" style="height:30px">
                    <el-breadcrumb-item :to="{ path: '/contractee/homePage/task' }" @click.native="brush">所有项目</el-breadcrumb-item>
                    <el-breadcrumb-item style="cursor:pointer" v-for="item in layers" :taskId=item.id :breadName=item.name @click.native="jump">{{item.name}}</el-breadcrumb-item>
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
                        <div class="task" v-for="item in allProjects" :taskId=item.id :taskName=item.name v-contextmenu:contextmenuProject @dblclick="getIn($event)">
                            <div class="progress-bar">
                                <div class="progress-bar_toper"></div>
                                <div class="progress-bar_outer">
                                    <div class="progress-bar_inner" v-bind:style="{height: item.height}"></div>
                                </div>
                                <font class="progress-bar_text">{{item.percentage}}</font>
                            </div>
                            <font class="taskText2">{{item.name}}</font>
                        </div>
                        <div class="task" v-for="item in allTasks" :taskId=item.id :taskName=item.name @click="detail($event)" v-contextmenu:contextmenuTask>
                          <el-progress type="circle" :percentage=item.percentage class="myEl-Progress" :color=item.color width=80></el-progress>
                          <p class="taskText">{{item.name}}</p>
                        </div>
                    </draggable>
                    <div class="task" v-contextmenu:contextmenuGeneral @click="addTask">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve" width="80px" height="80px" class="myPlusIcon">
                            <polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0   222.031,222.031 0,222.031 0,267.969 222.031,267.969 " fill="#a5aaad"/>
                        </svg>
                        </div>
                        <div class="fakeArea" v-contextmenu:contextmenuGeneral>
                        </div>
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
      allProjects: [],
      allTasks: []
    }
  },
  methods: {
    detail (event) {
      localStorage.setItem('taskId',event.currentTarget.getAttribute('taskId'))
      this.$router.replace('/contractee/homePage/task/detail/progress/')
      this.$emit('changeFirstBread', event.currentTarget.getAttribute('taskName'))
    },
    getIn (event) {
      this.layers.push({
        name: event.currentTarget.getAttribute('taskName'),
        id: event.currentTarget.getAttribute('taskId')
      })
      this.$emit('changeProjectId', event.currentTarget.getAttribute('taskId'))
      this.$emit('changeLayersContent',this.layers)
      this.projectId=event.currentTarget.getAttribute('taskId')
      this.allProjects=[]
      this.$http.get(HOST+'/projects/'+this.projectId+'/projects').then(response=> {
          for(var i=0;i<response.data.length;i++)
          {
            this.allProjects.push({
              id: response.data[i].id,
              name: response.data[i].name,
              percentage: parseInt(response.data[i].completion*100/response.data[i].total)+'%',
              height: (response.data[i].completion*100/response.data[i].total)*0.8+'%'
            })
            if(response.data[i].total==0) this.allProjects[i].percentage='0%'
          }
        }).catch(error=> {
          console.log(error.toString())
        })
    this.allTasks=[]
    this.$http.get(HOST+'/projects/'+this.projectId+'/tasks').then(response=> {
          for(var i=0;i<response.data.length;i++)
          {
            this.allTasks.push({
              id: response.data[i].id,
              name: response.data[i].name,
              percentage: response.data[i].percentage,
              color: response.data[i].taskColor
            })
          }
        }).catch(error=> {
          console.log(error.toString())
        })
    },
    getdata (evt) {
    },
    datadragEnd (evt) {
      console.log('拖动前的索引 :' + evt.oldIndex)
      console.log('拖动后的索引 :' + evt.newIndex)
      if(evt.newIndex<=this.allProjects.length-1)
      {
        // 项目拖入项目
        if(evt.oldIndex<=this.allProjects.length-1)
        {
          var target={
            id: this.allProjects[evt.newIndex].id
          }
          this.$http.patch(HOST+'/projects/'+this.allProjects[evt.oldIndex].id+'/', target).then(response=> {
            this.allProjects=[]
            this.allTasks=[]
            this.$http.get(HOST+'/projects/'+this.projectId+'/projects').then(response=> {
            for(var i=0;i<response.data.length;i++)
            {
              this.allProjects.push({
                id: response.data[i].id,
                name: response.data[i].name,
                percentage: parseInt(response.data[i].completion*100/response.data[i].total)+'%',
                height: (response.data[i].completion*100/response.data[i].total)*0.8+'%'
              })
              if(response.data[i].total==0) this.allProjects[i].percentage='0%'
            }
          }).catch(error=> {
            console.log(error.toString())
          })
          this.$http.get(HOST+'/projects/'+this.projectId+'/tasks').then(response=> {
            for(var i=0;i<response.data.length;i++)
            {
              this.allTasks.push({
                id: response.data[i].id,
                name: response.data[i].name,
                percentage: response.data[i].percentage,
                color: response.data[i].taskColor
              })
            }
          }).catch(error=> {
            console.log(error.toString())
          })
          }).catch(error=> {
            console.log(error.toString())
          })
        }
        else// 任务拖进项目
        {
          var target={
            id: this.allProjects[evt.newIndex].id
          }
          this.$http.patch(HOST+'/tasks/'+this.allTasks[evt.oldIndex-this.allProjects.length].id+'/', target).then(response=> {
            this.allProjects=[]
            this.allTasks=[]
            this.$http.get(HOST+'/projects/'+this.projectId+'/projects').then(response=> {
            for(var i=0;i<response.data.length;i++)
            {
              this.allProjects.push({
                id: response.data[i].id,
                name: response.data[i].name,
                percentage: parseInt(response.data[i].completion*100/response.data[i].total)+'%',
                height: (response.data[i].completion*100/response.data[i].total)*0.8+'%'
              })
              if(response.data[i].total==0) this.allProjects[i].percentage='0%'
            }
            }).catch(error=> {
              console.log(error.toString())
            })
            this.$http.get(HOST+'/projects/'+this.projectId+'/tasks').then(response=> {
            for(var i=0;i<response.data.length;i++)
            {
              this.allTasks.push({
                id: response.data[i].id,
                name: response.data[i].name,
                percentage: response.data[i].percentage,
                color: response.data[i].taskColor
              })
            }
          }).catch(error=> {
            console.log(error.toString())
          })
          }).catch(error=> {
            console.log(error.toString())
          })
        }
      }
    },
    brush () {
      this.allProjects = []
      this.allTasks = []
      this.layers = []
      this.projectId=-1
      this.$emit('changeProjectId',-1)
      this.$emit('changeLayersContent',this.layers)
      this.$http.get(HOST+'/projects/'+this.projectId+'/projects').then(response=> {
          for(var i=0;i<response.data.length;i++)
          {
            this.allProjects.push({
              id: response.data[i].id,
              name: response.data[i].name,
              percentage: parseInt(response.data[i].completion*100/response.data[i].total)+'%',
              height: (response.data[i].completion*100/response.data[i].total)*0.8+'%'
            })
            if(response.data[i].total==0) this.allProjects[i].percentage='0%'
          }
        }).catch(error=> {
          console.log(error.toString())
        })
      this.$http.get(HOST+'/projects/'+this.projectId+'/tasks').then(response=> {
          for(var i=0;i<response.data.length;i++)
          {
            this.allTasks.push({
              id: response.data[i].id,
              name: response.data[i].name,
              percentage: response.data[i].percentage,
              color: response.data[i].taskColor
            })
          }
        }).catch(error=> {
          console.log(error.toString())
        })
    },
    jump (evt) {
      for(;;)
      {
        if(this.layers[this.layers.length-1].name!=evt.currentTarget.getAttribute('breadName'))
          this.layers.pop()
        else break
      }
      this.allProjects=[]
      this.allTasks=[]
      this.projectId=evt.currentTarget.getAttribute('taskId')
      this.$emit('changeProjectId',evt.currentTarget.getAttribute('taskId'))
      this.$emit('changeLayersContent',this.layers)
      this.$http.get(HOST+'/projects/'+this.projectId+'/projects').then(response=> {
          for(var i=0;i<response.data.length;i++)
          {
            this.allProjects.push({
              id: response.data[i].id,
              name: response.data[i].name,
              percentage: parseInt(response.data[i].completion*100/response.data[i].total)+'%',
              height: (response.data[i].completion*100/response.data[i].total)*0.8+'%'
            })
            if(response.data[i].total==0) this.allProjects[i].percentage='0%'
          }
        }).catch(error=> {
          console.log(error.toString())
        })
      this.$http.get(HOST+'/projects/'+this.projectId+'/tasks').then(response=> {
          for(var i=0;i<response.data.length;i++)
          {
            this.allTasks.push({
              id: response.data[i].id,
              name: response.data[i].name,
              percentage: response.data[i].percentage,
              color: response.data[i].taskColor
            })
          }
        }).catch(error=> {
          console.log(error.toString())
        })
    },
    addTask () {
      this.$router.replace('/contractee/homePage/task/addTask')
    }
  },
  created: function () {
    for(var i=0;i<this.layersContent.length;i++)
    {
      this.layers.push({
        name: this.layersContent[i].name,
        id: this.layersContent[i].id
      })
    }
    if(this.projectId=='') 
    {
      this.projectId=-1;
      this.$emit('changeProjectId',-1)
    }
    this.$http.get(HOST+'/projects/'+this.projectId+'/projects').then(response=> {
          for(var i=0;i<response.data.length;i++)
          {
            this.allProjects.push({
              id: response.data[i].id,
              name: response.data[i].name,
              percentage: parseInt(response.data[i].completion*100/response.data[i].total)+'%',
              height: (response.data[i].completion*100/response.data[i].total)*0.8+'%'
            })
            if(response.data[i].total==0) this.allProjects[i].percentage='0%'
          }
        }).catch(error=> {
          console.log(error.toString())
        })
    this.$http.get(HOST+'/projects/'+this.projectId+'/tasks').then(response=> {
          for(var i=0;i<response.data.length;i++)
          {
            this.allTasks.push({
              id: response.data[i].id,
              name: response.data[i].name,
              percentage: response.data[i].percentage,
              color: response.data[i].taskColor
            })
          }
        }).catch(error=> {
          console.log(error.toString())
        })
  },
  props: ['projectId', 'layersContent']
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
