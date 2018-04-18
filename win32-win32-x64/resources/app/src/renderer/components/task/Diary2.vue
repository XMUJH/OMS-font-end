<template>
  
    <el-main class="maincontent">
      <div style="width:50%;height:10%;margin:0 0 10px 0;">
        <el-input placeholder="搜索资源"  size="mini" prefix-icon="el-icon-search" v-model="input"></el-input>
      </div>

      <el-table :data="tableData3" height="400" borderstyle="width: 100%" header-cell-style="color:#000000;background-color:#f3f3f3">
        <el-table-column prop="name" label="用户名" width=180></el-table-column>
        <el-table-column prop="begintime" label="签到时间" width=180></el-table-column>
        <el-table-column prop="endtime" label="签退时间" width=180></el-table-column>
        <el-table-column prop="address" label="工作日志"></el-table-column>
      </el-table>

    </el-main>
 
</template>
<script>
  export default {
    name: 'diary',
    data () {
      return {
        input: '',
        tableData3: [{
          name: '邓帅',
          begintime: '2016-05-03 10:01',
          endtime: '2016-05-03 22:01',
          address: '工作日志'
        }, {
          name: '陈童',
          begintime: '2016-05-03 10:01',
          endtime: '2016-05-03 22:01',
          address: '工作日志'
        }, {
          name: '邓帅',
          begintime: '2016-05-03 10:01',
          endtime: '2016-05-03 22:01',
          address: '工作日志'
        }, {
          name: '邓帅',
          begintime: '2016-05-03 10:01',
          endtime: '2016-05-03 22:01',
          address: '工作日志'
        }, {
          name: '陈童',
          begintime: '2016-05-03 10:01',
          endtime: '2016-05-03 22:01',
          address: '工作日志'
        }, {
          name: '邓帅',
          begintime: '2016-05-03 10:01',
          endtime: '2016-05-03 22:01',
          address: '工作日志'
        }, {
          name: '邓帅',
          begintime: '2016-05-03 10:01',
          endtime: '2016-05-03 22:01',
          address: '工作日志'
        }]
      }
    }
  }
</script>

