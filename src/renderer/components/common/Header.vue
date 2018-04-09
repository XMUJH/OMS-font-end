<template>
<el-header style="height:12.5%">
                <el-input v-model="input" placeholder="请输入要查询的任务名称">
		</el-input>
		<el-button icon="el-icon-search" class="searchIcon"></el-button>
</el-header>
</template>

<script>
export default {
  data () {
    return {
      input: '',
    }
  }
}
</script>

<style>
.el-input{
  margin-top:5%;
  margin-left:4%;
  width:70%;
}

 .searchIcon{
  float:right;
  margin-right:15%;
  margin-top:5%;
 }
</style>
