<template>
	<el-main class="maincontent">

      <el-row class="myEl-Row">
        <font class="el-rowText">里程碑目标</font>
      </el-row>
      <p>{{info}}</p>
      <div style="height:8%"></div>

      <el-row class="myEl-Row">
        <font class="el-rowText">截止日期</font>
      </el-row>
      <p>{{endtime}}</p>
      <div style="height:8%"></div>

      <el-row class="myEl-Row">
        <font class="el-rowText">查看成果</font>
      </el-row>
      <div style="height:150px; overflow:auto">
          <el-table
        :data="tableData" max-height="130" 
        border
        style="width: 700px;overflow:auto">
          <el-table-column
            fixed
            prop="date"
            label="日期"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="type"
            label="格式"
            width="120">
          </el-table-column>
          <el-table-column
            prop="size"
            label="大小"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">下载</el-button>
            </template>
          </el-table-column>
      </el-table>
      </div>

<!--
      <el-row class="myEl-Row" v-if="condition==0">
        <font class="el-rowText">审核</font>
      </el-row>
      
      <div style="margin-left:2%;overflow:auto" v-if="condition==0">
        <div style="width:90%;height:80px;display:flex;justify-content:center; align-items:center;">
            <el-button type="primary" round>通过</el-button>
            <div style="width:100px"/>
            <el-button round @click="dialogShow=true">不通过</el-button>
        </div>
      </div>
!-->

      <el-row class="myEl-Row">
        <font class="el-rowText">审核进程</font>
      </el-row>

      <el-table :data="tableData2" :show-header='false' max-height="200" style="width: 100%">
        <el-table-column label="日期" width="130">
          <template slot-scope="scope">
            <span style="margin-left: 10px;color:#a5a5a5">{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态"  width="150">
          <template slot-scope="scope">
            <el-popover v-if="scope.row.status==='未通过'" trigger="hover" placement="top">
              <p>原因: {{ scope.row.reason }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium" style="color:red">{{ scope.row.status }}</el-tag>
              </div>
            </el-popover>
            <el-tag v-if="scope.row.status==='已提交'" size="medium">{{ scope.row.status }}</el-tag>
            <el-tag v-if="scope.row.status==='已通过'" style="color:green" size="medium">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="审核"  width="120">
          <template slot-scope="scope" v-if="scope.row.status=='已提交'&&scope.row.rank==1">
            <el-button type="success" icon="el-icon-check" circle  @click="shenHe0"/>
            <el-button type="danger" icon="el-icon-error" circle   @click="dialogShow=true"/>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="不通过的理由" :visible.sync="dialogShow">
                <el-input v-model="input" auto-complete="off" type="textarea"></el-input>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogShow = false">取 消</el-button>
                    <el-button type="primary" @click="shenHe">提 交</el-button>
                </div>
      </el-dialog>  

    </el-main>
</template>

<script>
  export default {
    mounted(){
      this.init()
    },
    data () {
      return {
        info:'',
        input:'',
        endtime:'',
        fileList: [],
        tableData: [],
        condition: 0,
        dialogShow: false,
        fileList: [],
        tableData: [{
          date: '2016-05-03',
          name: '需求规格说明1.0',
          type: 'doc',
          size: '19.3k'
        }, {
          date: '2016-05-02',
          name: '需求规格说明1.0',
          type: 'doc',
          size: '19.3k'
        }, {
          date: '2016-05-02',
          name: '需求规格说明1.0',
          type: 'doc',
          size: '19.3k'
        }, {
          date: '2016-05-01',
          name: '需求规格说明1.0',
          type: 'doc',
          size: '19.3k'
        }],
        tableData2:[{time:'2015-01-01',status:'已提交',reason:'',rank:1},{time:'2015-01-01',status:'未通过',reason:'aaa',rank:2},
        {time:'2015-01-01',status:'已提交',reason:'',rank:3}]
      }
    },
    methods: {
      init(){
        var myDate = new Date()
        console.log(myDate.toLocaleString())
        this.$http.get(
          HOST + '/milestones/' + localStorage["milestoneId"],
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            //console.log(response.data);
            this.info = response.data.info;
            this.endtime = response.data.endTime.slice(0,10);
          }).catch(error=>{
            console.log(error);
          });
        this.$http.get(
          HOST + '/milestones/' + localStorage["milestoneId"] + '/milestoneHistories',
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            //console.log(response.data);
            this.tableData2 = []
            for(var i=response.data.length-1;i>=0;i--)
            {
              var sta;
              if (response.data[i].status == -1)
                sta = '未通过'
              else if (response.data[i].status == 0)
                sta = '已提交'
              else if (response.data[i].status == 1)
                sta = '已通过'
              this.tableData2.push({
                time: response.data[i].createTime.slice(0,10),
                status: sta,
                reason: response.data[i].reason,
                rank: response.data.length-i
              })
            }
          }).catch(error=>{
            console.log(error);
          });
      },
      shenHe0 () {
        var myDate = new Date()
        this.dialogShow = false
        this.$http.patch(          
          HOST + '/milestones/'+localStorage['milestoneId'], 
          JSON.stringify({
            "status":"PASS",
            "reason":this.input,
            "date": myDate
          }),
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            //console.log(123)
            //vm.inChargeTasks=response.data
            this.init()
            console.log(response.data)
            //that.$router.replace('/facerecognition')
          }).catch(error=>{
            //console.log(456)
            console.log(error);
        });
      },
      shenHe () {
        var myDate = new Date()
        this.dialogShow = false
        this.$http.patch(          
          HOST + '/milestones/'+localStorage['milestoneId'], 
          JSON.stringify({
            "status":"NOTPASS",
            "reason":this.input,
            "date": myDate
          }),
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            //console.log(123)
            //vm.inChargeTasks=response.data
            this.init()
            console.log(response.data)
            //that.$router.replace('/facerecognition')
          }).catch(error=>{
            //console.log(456)
            console.log(error);
        });
      }
    }
  }
</script>

<style>
  .CheckTime {
    //height:30px;
    width:90px;
    display:block;
    float:left;
    color:#a5a5a5;
  }
</style>