<template>
		<el-container>
			<breadcrumb :currentFirstBread="firstBread" :currentSecondBread="secondBread" :currentThirdBread="thirdBread" @changeThirdBread="getThirdBread" @changeDialogShow="getDialogShow"></breadcrumb>
      <el-header class="header"><tabs @changeSecondBread="getSecondBread" @changeThirdBread="getThirdBread"></tabs></el-header>
      <router-view @changeThirdBread="getThirdBread" @addNewMember="getNewMember" :userRole="userRole" :newMember="newMember"></router-view>
		  <el-dialog title="请填写工作日志" :visible.sync="dialogShow">
                <el-input v-model="input" auto-complete="off" type="textarea"></el-input>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogShow = false">取 消</el-button>
                    <el-button type="primary" @click="finishJob2">提 交</el-button>
                </div>
      </el-dialog>  
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
    },
    getNewMember (msg) {
      this.newMember = msg
    },
    getDialogShow (msg) {
      this.dialogShow = msg
    },
    finishJob2 () {
      this.dialogShow = false
      this.$message({
        message: '签退成功',
        type: 'success'
      })
    }
  },
  props: ['firstBread', 'userRole']
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