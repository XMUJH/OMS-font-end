<template>
	<div>
		<el-container>
			<searchbar :showContent='"请输入要查询的资源名称"'></searchbar>
			<el-main class="maincontent" style="margin-top: 105px;">
       <el-row class="myEl-Row">
        <font class="el-rowText">上传资源</font>
      </el-row>
      <el-upload 
      class="upload-demo"
      ref="upload"
      action="http://localhost:8080/upload/"
      :on-preview="handlePreview"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :auto-upload="false"
      multiple
      :limit="5"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">选取文件</el-button>
    </el-upload>

    <div style="height:5px"></div>
    <el-row class="myEl-Row">
      <font class="el-rowText">设置安全等级</font>
    </el-row>
    <div class="block">
      <el-rate v-model="value1"></el-rate>
    </div>

    <div style="height:7px"></div>
    <el-row class="myEl-Row">
      <font class="el-rowText">分配资源</font>
    </el-row>
    <el-tree :data="data2" show-checkbox node-key="id" :default-expanded-keys="[]" :default-checked-keys="[]" :props="defaultProps">
    </el-tree>
    <div style="width:90%;height:80px;display:flex;justify-content:center; align-items:center;">
      <el-button type="primary" round @click="submitUpload">确定</el-button>
      <div style="width:100px"/>
      <router-link to="/contractee/homePage/source">
        <el-button round>取消</el-button>
      </router-link>
    </div>
  </el-main>
</el-container>
</div>
</template>

<script>
  export default {
    name: 'source-page',
    data () {
      return {
        value1: null,
        data2: [{
          id: 1,
          label: '虹软系统项目',
          children: [{
            id: 4,
            label: '智能外包管理平台'
          }, {
            id: 9,
            label: 'ppp项目'
          }]
        }, {
          id: 2,
          label: '智慧城市建设项目',
          children: [{
            id: 5,
            label: '智慧城市任务一'
          }, {
            id: 6,
            label: '智慧城市任务二'
          }]
        }, {
          id: 3,
          label: '智能语音系统',
          children: [{
            id: 7,
            label: '智能语音任务一'
          }, {
            id: 8,
            label: '智能语音任务二'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
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
        this.$http.post(HOST+'/upload', fd).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error.toString())
        })
      },
      submitUpload(){
        this.$refs.upload.submit();
      }
    }
  }
</script>