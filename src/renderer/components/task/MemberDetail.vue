<template>
    <el-main class="maincontent">
      <div style="margin-left:4%;margin-top:3%;width:90%;height:100px">
        <img src="static/photo-ds.png" style="height:80px">
      </div>

      <div style="width:180;height:50px">
        <span class="descriptionOne">邓帅</span>
        <span class="descriptionTwo">项目负责人</span>
      </div>

      <div style="width:40%;height:20px;float:left;">
        <el-row class="myEl-Row_Two">
          <font>用户名</font>
        </el-row>
        <span class="descriptionThree">邓帅</span>
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
    padding-top:5%;
    padding-left:7%;
    font-size:15px;
  }

  .myEl-Row_Two {
    background-color:#d3dce6;
    width:200px;
  }
</style>