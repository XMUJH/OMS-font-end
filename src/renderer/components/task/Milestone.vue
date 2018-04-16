<template>
	<el-main class="maincontent">

      <el-row class="myEl-Row">
        <font class="el-rowText">里程碑目标</font>
      </el-row>
      <div style="height:8%"></div>

      <el-row class="myEl-Row">
        <font class="el-rowText">截止日期</font>
      </el-row>
      <div style="height:8%"></div>

      <el-row class="myEl-Row">
        <font class="el-rowText">查看成果</font>
      </el-row>
      <div style="height:150px; overflow:auto">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="5"
          :on-exceed="handleExceed"
          :file-list="fileList">
            <el-button size="small" type="primary" v-if="userRole=='incharge'">点击上传</el-button>
            <div slot="tip" class="el-upload__tip" v-if="userRole=='incharge'">只能上传rar/zip文件，且不超过500mb</div>
        </el-upload>
      </div>

      <el-row class="myEl-Row">
        <font class="el-rowText">审核进程</font>
      </el-row>

      <div style="margin-left:2%;overflow:auto">
        <div style="height:30px">
          <span class="CheckTime">2018/2/12</span>
          <span>已通过</span>
        </div>

        <div style="height:30px">
          <span class="CheckTime">2018/2/11</span>
          <span>第二次提交</span>
        </div>

        <div style="height:30px">
          <span class="CheckTime">2018/2/1</span>
          <span>未通过</span>
        </div>

        <div style="height:30px">
          <span class="CheckTime">2018/1/31</span>
          <span>第一次提交</span>
        </div>

      </div>

    </el-main>
</template>

<script>
  export default {
    data () {
      return {
        fileList: []
      }
    },
    methods: {
      handleRemove (file, fileList) {
      },
      handlePreview (file) {
      },
      handleExceed (files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove (file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`)
      }
    },
    props: ['userRole']
  }
</script>

<style>
  .CheckTime {
    //height:30px;
    width:90px;
    display:block;
    float:left;
    color:#a5a5a5;
  }
</style>