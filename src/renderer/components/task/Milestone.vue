<template>
	<el-main class="maincontent">

      <el-row class="myEl-Row">
        <font class="el-rowText">里程碑目标</font>
      </el-row>
      <p>界面能够轻松吸引用户眼球并使之具有实效性、灵活性、风格多样性、易操作性。以功能实现为基础的界面设计。交互设计界面最基本的性能是具有功能性与使用性，通过界面设计，让用户明白功能操作，并将作品本身的信息更加顺畅的传递给使用者，即用户，是功能界面存在的基础与价值，但由于用户的知识水平和文化背景具有差异性，因此界面应以更国际化，客观化的体现作品本身的信息。</p>
      <div style="height:20px"></div>

      <el-row class="myEl-Row">
        <font class="el-rowText">截止日期</font>
      </el-row>
      <p>2018年4月20日</p>
      <div style="height:20px"></div>

      <el-row class="myEl-Row">
        <font class="el-rowText">查看成果</font>
      </el-row>
      <div style="height:150px; overflow:auto">
        <el-upload
          class="upload-demo"
          action="http://localhost:8080/upload/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          multiple
          :limit="5"
          :on-exceed="handleExceed"
          :file-list="fileList">
            <el-button size="small" type="primary" v-if="userRole=='incharge'">选择文件</el-button>
            <div slot="tip" class="el-upload__tip" v-if="userRole=='incharge'">只能上传rar/zip文件，且不超过500mb</div>
        </el-upload>
      </div>

      <el-row class="myEl-Row">
        <font class="el-rowText">审核进程</font>
      </el-row>

      <div style="margin-left:2%;overflow:auto">
        <div style="height:30px">
          <span class="CheckTime">2018/4/18</span>
          <span>未通过</span>
        </div>

        <div style="height:30px">
          <span class="CheckTime">2018/4/17</span>
          <span>第二次提交</span>
        </div>

        <div style="height:30px">
          <span class="CheckTime">2018/4/1</span>
          <span>未通过</span>
        </div>

        <div style="height:30px">
          <span class="CheckTime">2018/4/1</span>
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
      },
      beforeUpload: function (file) {
        console.log(file)
        // 这里是重点，将文件转化为formdata数据上传
        let fd = new FormData()
        fd.append('file', file)
        this.$http.post('http://localhost:8080/upload/', fd).then(function (response) {
          if (response.data.code === 403) return true
        }).catch(function (error) {
          alert('上传成功')
          console.log(error.toString())
        })
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