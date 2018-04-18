<template>
        <el-main class="maincontent">
        
				<el-row class="myEl-Row">
					<p class="el-rowText">任务目标</p>
				</el-row>
				<p class="task-goal">{{taskGoal}}</p>
				<div class="MissionGoal"></div>
				<el-row class="myEl-Row">
					<p class="el-rowText">里程碑进度</p>
				</el-row>
				<div class="task-progress">
				<div class="hint">
					<span class="schedule">
						<i class="el-icon-success" style="color:#E41541;"></i>
						<span>已通过</span>
					</span>

					<span class="schedule">
						<i class="el-icon-warning" style="color:#000000;"></i>
						<span>待审核</span>
					</span>

					<span class="schedule">
						<i class="el-icon-time" style="color:#707070;"></i>
						<span>未开始</span>
					</span>
				</div>

				<div style="height:25%;margin:20px 0 60px;">
					<el-steps :active="1" align-center>
						<el-step style="cursor:pointer" titleName='需求分析' title="需求分析" description="2018/4/18" icon="el-icon-success" @click.native='handleClick($event)'></el-step>
						<el-step style="cursor:pointer" titleName='详细设计' title="详细设计" description="2018/4/19" icon="el-icon-success" @click.native='handleClick($event)'></el-step>
						<el-step style="cursor:pointer" titleName='界面设计' title="界面设计" description="2018/4/20" icon="el-icon-warning" @click.native='handleClick($event)'></el-step>
						<el-step style="cursor:pointer" titleName='数据库设计' title="数据库设计" description="2018/4/25" icon="el-icon-time" @click.native='handleClick($event)'></el-step>
					</el-steps>
				</div>

				<el-row class="myEl-Row">
					<p class="el-rowText">审核情况</p>
				</el-row>

				<div style="height:40px">
					<span style="font-size:20px;font-weight:bold">详细设计</span>
					<span style="font-size:18px;font-weight:bold;color:#E41541">未通过</span>
				</div>

				<div>
					<span style="font-size:20px;font-weight:bold">原因：</span>
					<span style="font-size:13px;font-weight:bold">数据库设计过于复杂</span>
				</div>
			</div>
			</el-main>
</template>

<script>
export default {
  name: 'Task-page',
  data () {
    return {
      activeName: 'first',
      taskGoal: '随着公司业务的发展以及在 AI 和人工智能领域的持续深入，需要把部分工作外包。外包可以更加有效的利用社会资源，优化资源利用率。但在外包实践中，我们遇到诸如任务跟踪，人员管理，资源访问控制的问题，我们希望能够有一套众包管理平台，更好的管理人员和任务。'
    }
  },
  methods: {
    handleClick (event) {
      this.$router.push({path: '/outsourcee/homePage/task/detail/milestone'})
      this.$emit('changeThirdBread', event.currentTarget.getAttribute('titleName'))
    }
  }
}
</script>

<style>
.task-progress{
	margin-left: 0px;
}
.hint{
	margin-bottom: 20px;
}
/*任务目标下的一块空间*/
.MissionGoal {
  width:100%;
  height:80px;
}

/*里程碑进度下面的提示符*/
.schedule {
  width:12%;
  height:10%;
}
</style>