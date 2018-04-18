<template>
	<div>
		<el-container>
      <el-button type="primary" round @click="goBack" style="position:fixed;right:20px;top:75px;width:130px">返回</el-button>
      <font style="font-weight:bold;position:fixed;left:240px;top:80px;width:130px">编辑里程碑</font>

			<el-main class="maincontent" style="margin-top: 105px;">
				    <el-row class="myEl-Row">
        			<font class="el-rowText">任务名称</font>
      			</el-row>
            <p class="goal">课程管理系统</p>
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
        			<span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">合同信息</span>
      			</div>
            <div style="height:13px"/>
      			<el-row class="myEl-Row">
        			<font class="el-rowText">保密协议</font>
      			</el-row>
      			<div style="height:30px">
        			<span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">保密协议</span>
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
      goal: '随着公司业务的发展以及在 AI 和人工智能领域的持续深入，需要把部分工作外包。外包可以更加有效的利用社会资源，优化资源利用率。但在外包实践中，我们遇到诸如任务跟踪，人员管理，资源访问控制的问题，我们希望能够有一套众包管理平台，更好的管理人员和任务。',
      changeIndex: '',
      allStones: [
        {
          name: '需求分析',
          time: '2018/3/14'
        },
        {
          name: '详细设计',
          time: '2018/3/20'
        },
        {
          name: '界面设计',
          time: '2018/4/20'
        },
        {
          name: '数据库设计',
          time: '2018/4/25'
        }]
    }
  },
  methods: {
    finishAdd () {
      this.a = Number(this.value1.getMonth()) + Number(1)
      if (this.changeIndex === '') {
        this.allStones.push({
          name: this.input0,
          time: this.value1.getFullYear() + '/' + this.a + '/' + this.value1.getDate()
        })
      }
      if (this.changeIndex !== '') {
        this.allStones[this.changeIndex] = {
          name: this.input0,
          time: this.value1.getFullYear() + '/' + this.a + '/' + this.value1.getDate()
        }
      }
      this.dialogShow = false
      if (this.changeIndex !== '') this.changeIndex = ''
    },
    goBack () {
      this.$router.replace('/outsourcee/homePage/task/')
    },
    handleClick (event) {
      this.dialogShow = true
      this.changeIndex = event.currentTarget.getAttribute('titleIndex')
    }
  }
}
</script>
<style>
.goal {
  width:100%;
  margin:15px 0;
}
</style>