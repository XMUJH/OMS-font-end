<template>
  <div class="container">
    <el-container>
        <div class="sidebar"><sidebar2></sidebar2></div>
        <div class="main"><router-view :firstBread="firstBread" :projectId="projectId" :layersContent="layersContent" @changeFirstBread="getFirstBread" @changeProjectId="getProjectId" @changeLayersContent="getLayersContent"></router-view></div>
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
      projectId: '',
      layersContent: ''
    }
  },
  methods: {
    getFirstBread (msg) {
      this.firstBread = msg
    },
    getProjectId (msg) {
      this.projectId = msg
    },
    getLayersContent (msg) {
      this.layersContent = msg
    }
  }
}
</script>
