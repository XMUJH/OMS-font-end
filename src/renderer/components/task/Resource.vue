<template>
  <div>
   <el-container>
    <breadcrumb></breadcrumb>
    <el-header class="header"><tabs></tabs></el-header>
    <el-main class="maincontent">
      <div style="width:50%;height:10%">
        <el-input placeholder="搜索资源"  size="mini" prefix-icon="el-icon-search"v-model="input21"></el-input>
      </div>
      
      <div style="height:8%">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">人脸识别API</span>
      </div>

      <div style="height:8%">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">相关信息</span>
      </div>

      <div style="height:8%">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">要求说明</span>
      </div>

    </el-main>
  </el-container>
</div>
</template>

<script>
  export default {
    name: 'resource',
    data () {
      return {
      }
    }
  }
</script>