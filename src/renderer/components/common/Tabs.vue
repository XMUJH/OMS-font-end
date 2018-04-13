  <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="任务进度" name="progress"></el-tab-pane>
        <el-tab-pane label="外包信息" name="info"></el-tab-pane>
        <el-tab-pane label="任务资源" name="resource"></el-tab-pane>
        <el-tab-pane label="考勤日志" name="diary"></el-tab-pane>
        <el-tab-pane label="成员信息" name="member"></el-tab-pane>
      </el-tabs>
  </template>  

<script>
  export default {
    data () {
      return {
        activeName: 'second'
      }
    },
    methods: {
      handleClick (tab, event) {
        this.$router.push({path: '/task/' + tab.name})
      }
    }
  }
</script>


/*添加标签页需要单独再放一个el-header，不然标签页宽度显示不正常，目前未解决这个问题*/