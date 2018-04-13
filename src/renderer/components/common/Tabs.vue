  <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="任务进度" name="first"></el-tab-pane>
        <el-tab-pane label="外包信息" name="second"></el-tab-pane>
        <el-tab-pane label="任务资源" name="third"></el-tab-pane>
        <el-tab-pane label="考勤日志" name="fourth"></el-tab-pane>
        <el-tab-pane label="成员信息" name="fifth"></el-tab-pane>
      </el-tabs>
  </template>  

<script>
  export default {
    data () {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick (tab, event) {
        if (tab.name === 'first') this.$router.push({path: '/outsourcee/homePage/task/detail/' + 'progress'})
        else if (tab.name === 'second') this.$router.push({path: '/outsourcee/homePage/task/detail/' + 'info'})
        else if (tab.name === 'third') this.$router.push({path: '/outsourcee/homePage/task/detail/' + 'resource'})
        else if (tab.name === 'fourth') this.$router.push({path: '/outsourcee/homePage/task/detail/' + 'diary'})
        else this.$router.push({path: '/outsourcee/homePage/task/detail/' + 'member'})
      }
    }
  }
</script>


/*添加标签页需要单独再放一个el-header，不然标签页宽度显示不正常，目前未解决这个问题*/