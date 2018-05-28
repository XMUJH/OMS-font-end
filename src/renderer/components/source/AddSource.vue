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
    <el-tree 
    :data="data2" 
    show-checkbox 
    node-key="id"
    ref="tree"
    :default-expanded-keys="[]" 
    :default-checked-keys="[]" 
    :props="defaultProps">
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
        fileList:[],
        value1:0,
        layers: [],
        data2: [],
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
        var vm=this;
        console.log(file)
        // 这里是重点，将文件转化为formdata数据上传
        let fd = new FormData()
        fd.append('file', file)
        this.$http.post(HOST+'/upload/resources', fd).then(function (response) {
          console.log(response)
          console.log(response.data)
          vm.resourceId=parseInt(response.data);
        }).catch(function (error) {
          console.log(error.toString())
        })
      },
      submitUpload(){
        var vm=this;
        console.log('hahahha'+vm.resourceId)
        this.$refs.upload.submit();
        this.$http.post(HOST+'/resources/'+vm.resourceId+'/allot', JSON.stringify(vm.$refs.tree.getCheckedNodes()),
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}).then(function (response) {
          console.log(response)
          resourceId=response.data;
        }).catch(function (error) {
          console.log(error.toString())
        })
      }
    },
    created: function () {
      console.log(12)
      this.$http.get(HOST+'/projects').then(response=> {
        for(var i=0;i<response.data.length;i++)
        {
          this.data2.push(response.data[i])
        }
      }).catch(error=> {
        console.log(error.toString())
      })

    }
  }
</script>