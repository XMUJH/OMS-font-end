<template>
	<el-main style="height:560px">

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="任务进度" name="first"></el-tab-pane>
        <el-tab-pane label="外包信息" name="second"></el-tab-pane>
        <el-tab-pane label="任务资源" name="third"></el-tab-pane>
        <el-tab-pane label="考勤日志" name="fourth"></el-tab-pane>
        <el-tab-pane label="成员信息" name="five"></el-tab-pane>
      </el-tabs>

      <el-row class="myEl-Row">
        <font class="el-rowText">里程碑目标</font>
      </el-row>
      <div style="height:8%"></div>

      <el-row class="myEl-Row">
        <font class="el-rowText">截止日期</font>
      </el-row>
      <div style="height:8%"></div>

      <el-row class="myEl-Row">
        <font class="el-rowText">查看成果</font>
      </el-row>
      <div style="height:8%;padding-top:8%">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">需求规格说明书1.0</span>
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">需求规格说明书2.0</span>
      </div>

      <el-row class="myEl-Row">
        <font class="el-rowText">审核进程</font>
      </el-row>
      <div style="height:8%"></div>

      <div style="margin-left:2%">
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

      </div>

    </el-main>
</template>

<style>
  .CheckTime {
    //height:30px;
    width:90px;
    display:block;
    float:left;
    color:#a5a5a5;
  }
</style>