<template>
  <div class="container">
    <el-container>
        <div class="sidebar"><sidebar2></sidebar2></div>
        <div class="main"><router-view :firstBread="firstBread" @changeFirstBread="getFirstBread"></router-view></div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      input: '',
      firstBread: '',
      userId: ''
    }
  },
  methods: {
    getFirstBread (msg) {
      this.firstBread = msg
    }
  }
}
</script>
