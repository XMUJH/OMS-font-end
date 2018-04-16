<template>
        <el-main class="maincontent">
        
				<el-row class="myEl-Row">
					<p class="el-rowText">任务目标</p>
				</el-row>
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
					<el-steps :active="2" align-center>
						<el-step style="cursor:pointer" titleName='里程碑一' title="里程碑一" description="2018/2/14" icon="el-icon-success" @click.native='handleClick($event)'></el-step>
						<el-step style="cursor:pointer" titleName='里程碑二' title="里程碑二" description="2018/2/24" icon="el-icon-success" @click.native='handleClick($event)'></el-step>
						<el-step style="cursor:pointer" titleName='里程碑三' title="里程碑三" description="2018/3/10" icon="el-icon-warning" @click.native='handleClick($event)'></el-step>
						<el-step style="cursor:pointer" titleName='里程碑四' title="里程碑四" description="2018/3/22" icon="el-icon-time" @click.native='handleClick($event)'></el-step>
					</el-steps>
				</div>
			</div>
			</el-main>
</template>

<script>
export default {
  name: 'Task-page',
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (event) {
      this.$router.push({path: '/contractee/homePage/task/detail/milestone'})
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