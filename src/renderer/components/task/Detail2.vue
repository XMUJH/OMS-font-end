<template>
		<el-container>
			<breadcrumb2 :currentFirstBread="firstBread" :currentSecondBread="secondBread" :currentThirdBread="thirdBread" @changeThirdBread="getThirdBread"></breadcrumb2>
      <el-header class="header"><tabs2 @changeSecondBread="getSecondBread" @changeThirdBread="getThirdBread"></tabs2></el-header>
      <router-view @changeThirdBread="getThirdBread"></router-view>
		</el-container>
</template>

<script>
export default {
  name: 'detail-page',
  data () {
    return {
      input: '',
      secondBread: '任务进度',
      thirdBread: '',
      newMember: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      dialogShow: false
    }
  },
  methods: {
    getSecondBread (msg) {
      this.secondBread = msg
    },
    getThirdBread (msg) {
      this.thirdBread = msg
    }
  },
  props: ['firstBread']
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