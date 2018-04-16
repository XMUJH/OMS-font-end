<template>
  <div class="container">
    <el-container>
        <div class="sidebar"><sidebar2></sidebar2></div>
        <div class="main"><router-view :firstBread="firstBread" :newTask="newTask" @changeFirstBread="getFirstBread" @addNewTask="getNewTask"></router-view></div>
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
      newTask: ''
    }
  },
  methods: {
    getFirstBread (msg) {
      this.firstBread = msg
    },
    getNewTask (msg) {
      this.newTask = msg
    }
  }
}
</script>
