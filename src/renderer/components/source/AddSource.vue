<template>
	<div>
		<el-container>
			<searchbar :showContent='"请输入要查询的资源名称"'></searchbar>
			<el-main class="maincontent" style="margin-top: 105px;">
			    <el-row class="myEl-Row">
            <font class="el-rowText">上传资源</font>
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
                <font class="el-rowText">分配资源</font>
              </el-row>
              <el-tree :data="data2" show-checkbox node-key="id" :default-expanded-keys="[]" :default-checked-keys="[]" :props="defaultProps">
              </el-tree>

          <div style="width:90%;height:80px;display:flex;justify-content:center; align-items:center;">
            <el-button type="primary" round>确定</el-button>
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
  }
}
</script>