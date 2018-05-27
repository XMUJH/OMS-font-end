<template>
	<div>
		<el-container>
      <font style="font-weight:bold;position:fixed;left:250px;top:90px;width:130px">新建任务</font>
			<el-main class="maincontent" style="margin-top: 105px;">

      <el-row class="myEl-Row">
        <font class="el-rowText">任务名称</font>
      </el-row>
      <el-input type="textarea" :rows="1" placeholder="请输入内容" v-model="taskName">
      </el-input>

      <div style="height:5px"></div>
			<el-row class="myEl-Row">
        <font class="el-rowText">任务目标</font>
      </el-row>
      <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="taskInfo">
      </el-input>

      <div style="height:5px"></div>
      <el-row class="myEl-Row">
        <font class="el-rowText">合同信息</font>
      </el-row>
      <el-upload ref="upload1" class="upload-demo" :action=url :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :file-list="fileList" :auto-upload="false" :before-upload="beforeUpload1">
      <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>

      <div style="height:5px"></div>
      <el-row class="myEl-Row">
        <font class="el-rowText">保密协议</font>
      </el-row>
      <el-upload ref="upload2" class="upload-demo" :action=url :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :file-list="fileList" :auto-upload="false" :before-upload="beforeUpload2">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>

      <div style="height:5px"></div>
      <!--
      <el-row class="myEl-Row">
        <font class="el-rowText">设置安全等级</font>
      </el-row>
      <div class="block">
        <el-rate v-model="value1"></el-rate>
      </div>
      -->

      <div style="height:7px"></div>
      <!--
      <el-row class="myEl-Row">
        <font class="el-rowText">任务授权码</font>
      </el-row>
      <el-button id="one" size="small" type="primary" style="display:" @click="exchange_DS()">点击生成</el-button>
      <span id="two" style="display:none">{{code}}</span>
      -->

       <div style="width:90%;height:80px;display:flex;justify-content:center; align-items:center;">
            <el-button type="primary" round @click="add">确定</el-button>
            <div style="width:100px"/>
            <router-link to="/contractee/homePage/task">
            <el-button round>取消</el-button>
            </router-link>
       </div>
    	</el-main>
		</el-container>
	</div>
</template>
<script>
export default {
  data () {
    return {
      taskInfo: '',
      taskName: '',
      value1: null,
      url: HOST+"/upload/taskFiles",
      fileList: []
    }
  },
  methods: {
    add () {
      var tool=this.projectId
      var fd={
        name: this.taskName,
        info: this.taskInfo,
        agreementUrl: 'taskfile/'+this.$refs.upload1.uploadFiles[0].name,
        contractUrl: 'taskfile/'+this.$refs.upload2.uploadFiles[0].name,
        completion: 0,
        total: 0,
        changeCount: 0,
        projectId: tool
      }
      this.$http.post(HOST+'/tasks', fd).then(response=> {
        this.$refs.upload1.submit();
        this.$refs.upload2.submit();
        this.$confirm('请记录此任务的激活码：'+response.data.code, '注意:任务激活码只出现这一次', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '新建成功!'
          })
          this.$router.replace('/contractee/homePage/task')
        }).catch(() => {    
        })
      }).catch(error=> {
        console.log(error.toString())
      })
    },
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
    beforeUpload1: function (file) {
        console.log(file)
        // 这里是重点，将文件转化为formdata数据上传
        let fd = new FormData()
        fd.append('file', file)
        this.$http.post(HOST+'/upload/taskFiles', fd).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error.toString())
        })
    },
    beforeUpload2: function (file) {
        console.log(file)
        // 这里是重点，将文件转化为formdata数据上传
        let fd = new FormData()
        fd.append('file', file)
        this.$http.post(HOST+'/upload/taskFiles', fd).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error.toString())
        })
    }
  },
  props: ['projectId']
}
</script>