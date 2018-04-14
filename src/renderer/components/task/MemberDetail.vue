<template>
    <el-main style="height:560px">

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="任务进度" name="first"></el-tab-pane>
        <el-tab-pane label="外包信息" name="second"></el-tab-pane>
        <el-tab-pane label="任务资源" name="third"></el-tab-pane>
        <el-tab-pane label="考勤日志" name="fourth"></el-tab-pane>
        <el-tab-pane label="成员信息" name="five"></el-tab-pane>
      </el-tabs>

      <div style="margin-left:4%;margin-top:3%;width:90%">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523536608980&di=b26485e16e2445f986cd2ee9aa4521d4&imgtype=0&src=http%3A%2F%2Fwww.youstyle.com.cn%2Fupload%2F20150922%2F201509221057033505.jpg" style="height:80px">
      </div>

      <div style="width:100%;height:7%">
        <span class="descriptionOne">陈丽萍</span>
        <span class="descriptionTwo">项目负责人</span>
      </div>

      <div style="width:40%;height:20%;float:left;">
        <el-row class="myEl-Row_Two">
          <font>用户名</font>
        </el-row>
        <span class="descriptionThree">陈丽萍</span>
      </div>

      <div style="width:40%;height:20%;float:left;">
        <el-row class="myEl-Row_Two">
          <font>所属公司</font>
        </el-row>
        <span class="descriptionThree">江南软件公司</span>
      </div>

      <div style="width:40%;height:20%;float:left;">
        <el-row class="myEl-Row_Two">
          <font>联系方式</font>
        </el-row>
        <span class="descriptionThree">14329380002</span>
      </div>

      <div style="width:40%;height:20%;float:left;">
        <el-row class="myEl-Row_Two">
          <font>电子邮箱</font>
        </el-row>
        <span class="descriptionThree">43433434@qq.com</span>
      </div>

      <div style="width:40%;height:20%;float:left;">
        <el-row class="myEl-Row_Two">
          <font>人脸信息</font>
        </el-row>
      </div>
    </el-main>
</template>

<style>
  .descriptionOne {
    display:block;
    float:left;
    width:8%;
    padding-left:1%;
    font-weight:bold;
  }

  .descriptionTwo {
    display:block;
    float:left;
    width:12%;
    font-weight:bold;
    padding-top:0.07%;
    font-size:15px;
  }

  .descriptionThree {
    display:block;
    width:200px;
    font-weight:bold;
    padding-top:7%;
    padding-left:7%;
    font-size:15px;
  }

  .myEl-Row_Two {
    background-color:#d3dce6;
    width:200px;
  }
</style>