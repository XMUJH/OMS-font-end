<template>
  <div class="container">
    <el-container>
        <div class="sidebar"><sidebar></sidebar></div>
        <div class="main"><router-view :firstBread="firstBread" :userRole="userRole" @changeFirstBread="getFirstBread" @changeUserRole="getUserRole"></router-view></div>
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
      userRole: ''
    }
  },
  methods: {
    getFirstBread (msg) {
      this.firstBread = msg
    },
    getUserRole (msg) {
      this.userRole = msg
    }
  }
}
</script>
