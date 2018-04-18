<template>
	<el-main class="maincontent">

      <el-row class="myEl-Row">
        <font class="el-rowText">里程碑目标</font>
      </el-row>
      <p>随着公司业务的发展以及在 AI 和人工智能领域的持续深入，需要把部分工作外包。外包可以更加有效的利用社会资源，优化资源利用率。但在外包实践中，我们遇到诸如任务跟踪，人员管理，资源访问控制的问题，我们希望能够有一套众包管理平台，更好的管理人员和任务。</p>
      <div style="height:8%"></div>

      <el-row class="myEl-Row">
        <font class="el-rowText">截止日期</font>
      </el-row>
      <p>2018年4月20日</p>
      <div style="height:8%"></div>

      <el-row class="myEl-Row">
        <font class="el-rowText">查看成果</font>
      </el-row>
      <div style="height:200px; overflow:auto">
          <el-table
        :data="tableData"
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

      <el-row class="myEl-Row" v-if="condition==1">
        <font class="el-rowText">审核进程</font>
      </el-row>

      <div style="margin-left:2%;overflow:auto" v-if="condition==1">
        <div style="height:30px">
          <span class="CheckTime">2018/2/12</span>
          <span>已通过</span>
        </div>

        <div style="height:30px">
          <span class="CheckTime">2018/2/11</span>
          <span>第二次提交</span>
        </div>

        <div style="height:30px">
          <span class="CheckTime">2018/2/1</span>
          <span>未通过</span>
        </div>

        <div style="height:30px">
          <span class="CheckTime">2018/1/31</span>
          <span>第一次提交</span>
        </div>

        <div style="width:90%;height:80px;display:flex;justify-content:center; align-items:center;">
            <el-button type="primary" round @click="condition=0">重新审核</el-button>
        </div>
       </div>

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
    data () {
      return {
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
        }]
      }
    },
    methods: {
      shenHe () {
        this.dialogShow = false
        this.condition = 1
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