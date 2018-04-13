<template>
  <el-header class="searchbar">
    <el-input v-model="input" placeholder="请输入要查询的任务名称">
    </el-input>
    <el-button icon="el-icon-search" class="searchIcon"></el-button>
  </el-header>
</template>

<script>
  export default {
    data () {
      return {
        input: ''
      }
    }
  }
</script>

<style>
.searchbar{
  position: fixed;
  top:35px;
  left:220px;
  margin: 40px 0 0 0;
  right:0;
}
.el-input{
  float: left;
  margin-right: 10px;
  width:70%;
}

.searchIcon{
  float:left;
}
</style>
