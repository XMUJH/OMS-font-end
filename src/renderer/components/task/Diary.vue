<template>
  
    <el-main class="maincontent">
      <div style="width:50%;height:10%;margin:0 0 10px 0;">
      </div>

      <el-table :data="tableData3" height="400" borderstyle="width: 100%" header-cell-style="color:#000000;background-color:#f3f3f3">
        <el-table-column prop="name" label="序号" width=140></el-table-column>
        <el-table-column prop="begintime" label="签到时间" width=180></el-table-column>
        <el-table-column prop="endtime" label="签退时间" width=180></el-table-column>
        <el-table-column prop="lasttime" label="工作时长" width=150></el-table-column>
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
          name: '1',
          begintime: '2018-04-16 10:00',
          endtime: '2018-04-16 12:00',
          lasttime: '02:00',
          address: '工作日志'
        }, {
          name: '2',
          begintime: '2018-04-16 14:00',
          endtime: '2018-04-16 116:00',
          lasttime: '04:00',
          address: '工作日志'
        }, {
          name: '3',
          begintime: '2018-04-15 10:25',
          endtime: '2018-04-15 22:00',
          lasttime: '11:35',
          address: '工作日志'
        }, {
          name: '4',
          begintime: '2018-04-14 10:00',
          endtime: '2018-04-14 18:30',
          lasttime: '08:30',
          address: '工作日志'
        }, {
          name: '5',
          begintime: '2018-04-13 18:30',
          endtime: '2018-04-13 22:00',
          lasttime: '03:30',
          address: '工作日志'
        }, {
          name: '6',
          begintime: '2018-04-11 10:00',
          endtime: '2018-04-11 17:20',
          lasttime: '07:20',
          address: '工作日志'
        }, {
          name: '7',
          begintime: '2018-04-10 14:30',
          endtime: '2018-04-10 22:00',
          lasttime: '07:30',
          address: '工作日志'
        }]
      }
    }
  }
</script>

