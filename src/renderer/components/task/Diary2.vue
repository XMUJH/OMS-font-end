<template>
  
    <el-main class="maincontent">
      <el-table :data="tableData3" height="400" borderstyle="width: 100%" header-cell-style="color:#000000;background-color:#f3f3f3">
        <el-table-column prop="name" label="序号" width=140></el-table-column>
        <el-table-column prop="begintime" label="签到时间" width=180></el-table-column>
        <el-table-column prop="endtime" label="签退时间" width=180></el-table-column>
        <el-table-column prop="lasttime" label="工作时长" width=150></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
              <el-button type="text" size="small" @click="checkResource(scope.$index,$event)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="工作日志"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <span>{{contains}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-main>
 
</template>
<script>
  export default {
    name: 'diary2',
    data () {
      return {
        input: '',
        tableData3: [],
        contains: '',
        centerDialogVisible: false
      }
    },
    methods: {
      calculateTime(faultDate,completeTime) {  
        var stime = Date.parse(new Date(faultDate));  
        var etime = Date.parse(new Date(completeTime));  
        var usedTime = etime - stime;  //两个时间戳相差的毫秒数  
        var days=Math.floor(usedTime/(24*3600*1000));  
        //计算出小时数  
        var leave1=usedTime%(24*3600*1000);    //计算天数后剩余的毫秒数  
        var hours=Math.floor(leave1/(3600*1000));  
        //计算相差分钟数  
        var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数  
        var minutes=Math.floor(leave2/(60*1000));  
        var time = days + "天"+hours+"时"+minutes+"分";  
        return time;  
      },
      checkResource(index, event) {
        this.contains=this.tableData3[index].content
        this.centerDialogVisible=true
      }  
    },
    created: function () {
        this.$http.get('http://localhost:8080/tasks/'+1+'/records').then(response=> {
          console.log(response.data)
          var a;
          var b;
          for(var i=0;i<response.data.length;i++)
          {
            a=Number(new Date(response.data[i].attendance.beginTime).getMonth()) + Number(1)
            b=Number(new Date(response.data[i].attendance.endTime).getMonth()) + Number(1)
            this.tableData3.push({
              name: i+1,
              begintime: new Date(response.data[i].attendance.beginTime).getFullYear()+'/'+a+'/'+new Date(response.data[i].attendance.beginTime).getDate()+'/'+new Date(response.data[i].attendance.beginTime).getHours()+'点'+new Date(response.data[i].attendance.beginTime).getMinutes()+'分',
              endtime: new Date(response.data[i].attendance.endTime).getFullYear()+'/'+b+'/'+new Date(response.data[i].attendance.endTime).getDate()+'/'+new Date(response.data[i].attendance.endTime).getHours()+'点'+new Date(response.data[i].attendance.endTime).getMinutes()+'分',
              lasttime: this.calculateTime(response.data[i].attendance.beginTime,response.data[i].attendance.endTime),
              content: response.data[i].content
            })
          }
        }).catch(error=> {
          console.log(error.toString())
        })
    }
  }
</script>

