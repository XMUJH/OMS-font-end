<template>
	<div>
		<el-container>
      <font style="font-weight:bold;position:fixed;left:250px;top:90px;width:130px">新建任务</font>
			<el-main class="maincontent" style="margin-top: 105px;">
			<el-row class="myEl-Row">
        <font class="el-rowText">任务目标</font>
      </el-row>
      <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea">
      </el-input>

      <div style="height:5px"></div>
      <el-row class="myEl-Row">
        <font class="el-rowText">合同信息</font>
      </el-row>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>

      <div style="height:5px"></div>
      <el-row class="myEl-Row">
        <font class="el-rowText">保密协议</font>
      </el-row>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
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
        <font class="el-rowText">任务授权码</font>
      </el-row>
      <el-button id="one" size="small" type="primary" style="display:" @click="exchange_DS()">点击生成</el-button>
      <span id="two" style="display:none">asraetgere897qweafa</span>

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
      value1: null
    }
  },
  methods: {
    exchange_DS () {
      console.log('1')
      document.getElementById('one').style.display = 'none'
      document.getElementById('two').style.display = ''
    },
    add () {
      this.$emit('addNewTask', {name: 'hahaha', percentage: 0, color: '#f33232'})
      this.$router.replace('/contractee/homePage/task')
    }
  }
}
</script>