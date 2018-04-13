<template>
		<el-container>
			<breadcrumb></breadcrumb>
        <el-header class="header"><tabs></tabs></el-header>
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
						<el-step title="里程碑一" description="2018/2/14" icon="el-icon-success"></el-step>
						<el-step title="里程碑二" description="2018/2/24" icon="el-icon-success"></el-step>
						<el-step title="里程碑三" description="2018/3/10" icon="el-icon-warning"></el-step>
						<el-step title="里程碑四" description="2018/3/22" icon="el-icon-time"></el-step>
					</el-steps>
				</div>

				<div style="height:10%">
					<span style="font-size:20px;font-weight:bold">里程碑三</span>
					<span style="font-size:18px;font-weight:bold;color:#E41541">未通过</span>
				</div>

				<div>
					<span style="font-size:20px;font-weight:bold">原因：</span>
					<span style="font-size:13px;font-weight:bold">人物头像需要能够调整比例，可能需要更合适的图片控件将图片进行处理</span>
				</div>
			</div>
			</el-main>
		</el-container>
</template>

<script>
export default {
  name: 'Task-page',
  data () {
    return {
    }
  }
}
</script>

<style>
.task-progress{
	margin-left: 20px;
}
.hint{
	margin-bottom: 20px;
}
/*任务目标下的一块空间*/
.MissionGoal {
  width:100%;
  height:20%;
}

/*里程碑进度下面的提示符*/
.schedule {
  width:12%;
  height:10%;
}
</style>