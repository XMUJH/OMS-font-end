<template>
		<el-container>
			<breadcrumb></breadcrumb>
        <el-header class="header"><tabs></tabs></el-header>
       
	        <router-view></router-view>
		    
		</el-container>
</template>

<script>
export default {
  name: 'detail-page',
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