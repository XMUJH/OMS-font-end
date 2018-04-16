<template>
  <el-header class="searchbar">
    <el-input v-model="input" class='myEl-input' :placeholder=showContent>
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
    },
    props: ['showContent']
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
.myEl-input{
  float: left;
  margin-right: 10px;
  width:70%;
}

.searchIcon{
  float:left;
}
</style>
