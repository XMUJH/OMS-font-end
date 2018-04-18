<template>
    <el-main class="maincontent">
      <div style="width:50%; height:50px">
        <el-input placeholder="搜索资源" size="mini" prefix-icon="el-icon-search" v-model="input"></el-input>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 700px;overflow:auto">
          <el-table-column
            fixed
            prop="date"
            label="日期"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="type"
            label="格式"
            width="120">
          </el-table-column>
          <el-table-column
            prop="size"
            label="大小"
            width="120">
          </el-table-column>
          <el-table-column
            prop="level"
            label="安全等级"
            width="300">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">下载</el-button>
            </template>
          </el-table-column>
      </el-table>

    </el-main>
 
</template>

<script>
  export default {
    name: 'resource',
    data () {
      return {
        input: '',
        tableData: [{
          date: '2018-04-03',
          name: '需求规格说明模板',
          type: 'doc',
          size: '19.3k',
          level: 'A'
        }, {
          date: '2018-04-03',
          name: '虹软人脸识别API使用手册',
          type: 'pdf',
          size: '69.3k',
          level: 'B'
        }, {
          date: '2016-05-02',
          name: '详细设计说明书模板',
          type: 'doc',
          size: '19.3k',
          level: 'C'
        }, {
          date: '2016-05-01',
          name: '代码规范',
          type: 'doc',
          size: '19.3k',
          level: 'D'
        }]
      }
    }
  }
</script>