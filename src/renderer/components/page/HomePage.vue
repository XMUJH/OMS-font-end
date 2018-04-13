<template>
  <div class="container">
    <el-container>
        <div class="sidebar"><sidebar></sidebar></div>
        <div class="main"><router-view></router-view></div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      input: ''
    }
  }
}
</script>
