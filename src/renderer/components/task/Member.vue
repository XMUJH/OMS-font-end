<template>
 
   
    
    <el-main class="maincontent">
       <div style="width:50%;height:10%;margin:0 0 10px 0;">
        <el-input placeholder="搜索成员"  size="mini" prefix-icon="el-icon-search" v-model="input21"></el-input>
      </div>
      <el-table :data="tableData" style="width:100%" height="500" header-cell-style="color:#000000;background-color:#f3f3f3">
        <el-table-column label="头像" width=180>
          <template slot-scope="scope">
            <img id="logo" :src="scope.row.pic" class="portrait">
          </template>
        </el-table-column>

        <el-table-column label="姓名" width=180>
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="职务" width=180>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.job }}</span>
          </template>
        </el-table-column>

        <el-table-column label="审核情况">
          <template slot-scope="scope">
            <span v-if="scope.row.check=== 1">已通过</span>
            <span v-if="scope.row.check=== 2" style="color: red">添加待审核</span>
            <span v-if="scope.row.check=== 3" style="color: red">删除待审核</span>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
</template>
<script>
  export default {
    data () {
      return {
        activeName: 'fifth',
        input: '',
        tableData: [{
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523536608980&di=b26485e16e2445f986cd2ee9aa4521d4&imgtype=0&src=http%3A%2F%2Fwww.youstyle.com.cn%2Fupload%2F20150922%2F201509221057033505.jpg',
          name: '陈丽萍',
          job: '项目负责人',
          check: 1
        }, {
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523536557728&di=98305e92498611466a09e0eb62ba3c42&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Db3b66290a2014c080d3620e563036764%2F08f790529822720e56610dc370cb0a46f21fab58.jpg',
          name: '刘亚',
          job: '前端开发',
          check: 1
        }, {
          pic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1525015608,3271699351&fm=27&gp=0.jpg',
          name: '汪洋',
          job: '交互设计师',
          check: 2
        }, {
          pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1415330652,124770955&fm=11&gp=0.jpg',
          name: '郑哲',
          job: '需求分析',
          check: 3
        }, {
          pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1415330652,124770955&fm=11&gp=0.jpg',
          name: '郑哲',
          job: '需求分析',
          check: 3
        }]
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
<style>
  .portrait {
    height:70px;
  }
  .table{
    width:100%;
  }
</style>
