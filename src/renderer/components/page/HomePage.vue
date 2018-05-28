<template>
  <div class="container">
    <el-container>
        <div class="sidebar"><sidebar></sidebar></div>
        <div class="main"><router-view :firstBread="firstBread" :userRole="userRole" :userId="userId" @changeFirstBread="getFirstBread" @changeUserRole="getUserRole" @addUserId="getUserId"></router-view></div>
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
      userRole: '',
      userId: ''
    }
  },
  methods: {
    getFirstBread (msg) {
      this.firstBread = msg
    },
    getUserRole (msg) {
      this.userRole = msg
    },
    getUserId (msg) {
      this.userId = msg
    }
  },
  mounted: function() {
    if(this.$route.params.userId) localStorage.setItem('userId',this.$route.params.userId)
    console.log(this.$route.params.userId)
  }
}
</script>
