<template>
    <el-main class="maincontent">
       <el-row class="myEl-Row">
        <font class="el-rowText">合同信息</font>
      </el-row>
      <div style="height:10px"></div>
      <div style="height:80px">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">
          <a href="/static/合同信息.docx" download="合同信息" color="#000"><img src="/static/file.png"></a></span>
      </div>

      <el-row class="myEl-Row">
        <font class="el-rowText">保密协议</font>
      </el-row>
      <div style="height:10px"></div>
      <div style="height:80px">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold"><a href="/static/合同信息.docx" download="合同信息" color="#000"><img src="/static/file.png"></a></span>
      </div>
    </el-main>

</template>
<script>
  export default {
    name: 'info',
    data () {
      return {
      }
    }
  }
</script>

