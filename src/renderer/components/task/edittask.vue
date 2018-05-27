<template>
	<div>
		<el-container>
      <el-button type="primary" round @click="goBack" style="position:fixed;right:20px;top:75px;width:130px">返回</el-button>
      <font style="font-weight:bold;position:fixed;left:240px;top:80px;width:130px">编辑里程碑</font>
      <v-contextmenu ref="contextmenuAgreement" theme="bright">
                        <v-contextmenu-item @click="downloadTaskFile1">下载</v-contextmenu-item>
       </v-contextmenu>
       <v-contextmenu ref="contextmenuContract" theme="bright">
                        <v-contextmenu-item @click="downloadTaskFile2">下载</v-contextmenu-item>
       </v-contextmenu>
			<el-main class="maincontent" style="margin-top: 105px;">
				    <el-row class="myEl-Row">
        			<font class="el-rowText">任务名称</font>
      			</el-row>
            <p class="goal">{{name}}</p>
            <el-row class="myEl-Row">
              <font class="el-rowText">任务目标</font>
            </el-row>
      			<div>
        			<p class="goal">{{goal}}</p>
      			</div>
            <div style="height:13px"/>
       			<el-row class="myEl-Row">
        			<font class="el-rowText">合同信息</font>
      			</el-row>
      			<div style="height:30px">
        			<span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold;cursor:pointer" @click="checkTaskFile1" v-contextmenu:contextmenuAgreement>合同信息</span>
      			</div>
            <div style="height:13px"/>
      			<el-row class="myEl-Row">
        			<font class="el-rowText">保密协议</font>
      			</el-row>
      			<div style="height:30px">
        			<span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold;cursor:pointer" @click="checkTaskFile2" v-contextmenu:contextmenuContract>保密协议</span>
      			</div>
            <div style="height:13px"/>
      			<el-row class="myEl-Row">
        			<font class="el-rowText">里程碑</font>
      			</el-row>
            <div style="height:13px"/>
				    <div style="margin:10px 0 10px;">
					      <el-steps :active=allStones.length align-center size="mini">
						    <el-step style="cursor:pointer" v-for="(item, index) in allStones" :titleIndex=index :title=item.name :description=item.time icon="el-icon-time" @click.native='handleClick($event)'></el-step>
					      </el-steps>
				    </div>
            <div style="height:13px"/>
      			<div style="height:30px">
      				<el-button type="primary" size="mini" round @click="dialogShow=true">添加</el-button>
      			</div>
            <el-dialog title="请输入里程碑信息" :visible.sync="dialogShow">
                  <el-input placeholder="输入里程碑名称" v-model="input0" size="small" clearable></el-input>
                  <div style="height:5px"/>
                  <el-input placeholder="输入里程碑目标" v-model="input1" size="small" clearable type="textarea"></el-input>
                  <div style="height:5px"/>
                  <div class="block">
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="small"></el-date-picker>
                  </div>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogShow = false">取 消</el-button>
                    <el-button type="primary" @click="finishAdd">确 定</el-button>
                </div>
           </el-dialog>
    	</el-main>
		</el-container>
	</div>
</template>
<script>
export default {
  data () {
    return {
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      a: '',
      value1: '',
      dialogShow: false,
      input0: '',
      input1: '',
      goal: '',
      name:'',
      changeIndex: '',
      allStones: [
      ]
    }
  },
  methods: {
    finishAdd () {
      this.a = Number(this.value1.getMonth()) + Number(1)
      if (this.changeIndex === '') {
        var tag=[{
          name: this.input0,
          info: this.input1,
          endTime: this.value1,
          status: 2
        }]
        this.$http.post(HOST+'/tasks/'+localStorage['taskId']+'/milestones',tag).then(response=> {
          this.allStones=[]
          this.$http.get(HOST+'/tasks/'+localStorage['taskId']+'/milestones').then(response=> {
            var a
            for(var i=0;i<response.data.length;i++)
            {
              a=Number(new Date(response.data[i].endTime).getMonth()) + Number(1)
              this.allStones.push({
                id: response.data[i].id,
                name: response.data[i].name,
                time: new Date(response.data[i].endTime).getFullYear()+'/'+a+'/'+new Date(response.data[i].endTime).getDate()
              })
            }
          }).catch(error=> {
            console.log(error.toString())
          })
          console.log(response)
        }).catch(error=> {
          console.log(error.toString())
        })
      }
      if (this.changeIndex !== '') {
        var tag={
          name: this.input0,
          info: this.input1,
          endTime: this.value1
        }
        this.$http.post(HOST+'/milestones/'+this.allStones[this.changeIndex].id,tag).then(response=> {
          this.allStones=[]
          this.$http.get(HOST+'/tasks/'+localStorage['taskId']+'/milestones').then(response=> {
            var a
            for(var i=0;i<response.data.length;i++)
            {
              a=Number(new Date(response.data[i].endTime).getMonth()) + Number(1)
              this.allStones.push({
                id: response.data[i].id,
                name: response.data[i].name,
                time: new Date(response.data[i].endTime).getFullYear()+'/'+a+'/'+new Date(response.data[i].endTime).getDate()
              })
            }
          }).catch(error=> {
            console.log(error.toString())
          })
        }).catch(error=> {
            console.log(error.toString())
        })
      }
      this.dialogShow = false
      this.input0=''
      this.input1=''
      this.value1=''
      if (this.changeIndex !== '') this.changeIndex = ''
    },
    goBack () {
      this.$router.replace('/outsourcee/homePage/task/')
    },
    handleClick (event) {
      this.dialogShow = true
      this.changeIndex = event.currentTarget.getAttribute('titleIndex')
      this.input0=this.allStones[this.changeIndex].name
    },
    checkTaskFile1(){
        this.$http.get(HOST+'/tasks/'+localStorage['taskId']).then(response=> {
          console.log(response)
          window.open("static/pdf/web/viewer.html?file="+HOST+'/'+response.data.agreementUrl)
        }).catch(error=> {
          console.log(error.toString())
        })
    },
    downloadTaskFile1(){
        this.$http.get(HOST+'/tasks/'+localStorage['taskId']).then(response=> {
          console.log(response)
          let iframe = document.createElement('iframe')
          iframe.style.display = 'none'
          iframe.src = HOST+'/download/taskFiles/'+response.data.agreementUrl.split('/')[1]
          iframe.onload = function () {
            document.body.removeChild(iframe)
          }
          document.body.appendChild(iframe)
        }).catch(error=> {
          console.log(error.toString())
        })
    },
    checkTaskFile2(){
        this.$http.get(HOST+'/tasks/'+localStorage['taskId']).then(response=> {
          console.log(response)
          window.open("static/pdf/web/viewer.html?file="+HOST+'/'+response.data.contractUrl)
        }).catch(error=> {
          console.log(error.toString())
        })
    },
    downloadTaskFile2(){
        this.$http.get(HOST+'/tasks/'+localStorage['taskId']).then(response=> {
          console.log(response)
          let iframe = document.createElement('iframe')
          iframe.style.display = 'none'
          iframe.src = HOST+'/download/taskFiles/'+response.data.contractUrl.split('/')[1]
          iframe.onload = function () {
            document.body.removeChild(iframe)
          }
          document.body.appendChild(iframe)
        }).catch(error=> {
          console.log(error.toString())
        })
    }
  },
  created: function () {
    this.$http.get(HOST+'/tasks/'+localStorage['taskId']).then(response=> {
      this.name=response.data.name
      this.goal=response.data.info
      this.$http.get(HOST+'/tasks/'+localStorage['taskId']+'/milestones').then(response=> {
        var a
        for(var i=0;i<response.data.length;i++)
        {
          a=Number(new Date(response.data[i].endTime).getMonth()) + Number(1)
          this.allStones.push({
            id: response.data[i].id,
            name: response.data[i].name,
            time: new Date(response.data[i].endTime).getFullYear()+'/'+a+'/'+new Date(response.data[i].endTime).getDate()
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
</script>
<style>
.goal {
  width:100%;
  margin:15px 0;
}
</style>