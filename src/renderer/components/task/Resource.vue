<template>
  
    <el-main class="maincontent">
      <div style="width:50%; height:50px">
        <el-input placeholder="搜索资源" size="mini" prefix-icon="el-icon-search" v-model="input"></el-input>
      </div>
      
      <div style="height:60px">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">人脸识别API</span>
      </div>

      <div style="height:60px">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">相关信息</span>
      </div>

      <div style="height:60px">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">要求说明</span>
      </div>

    </el-main>
 
</template>

<script>
  export default {
    name: 'resource',
    data () {
      return {
        input: ''
      }
    }
  }
</script>