<template>  
    <el-main class="maincontent">
       <div style="width:50%;height:8%;margin:0 0 10px 0;">
        <el-input placeholder="搜索成员"  size="mini" prefix-icon="el-icon-search" v-model="input"></el-input>
      </div>
      <el-table :data="tableData" style="width:100%" height="500" header-cell-style='color:#000000;background-color:#f3f3f3' @cell-click="handleClick($event)">
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

        <el-table-column label="职务" width=150>
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.job }}</span>
          </template>
        </el-table-column>

        <el-table-column label="审核情况">
          <template slot-scope="scope">
            <span v-if="scope.row.check=== 1">已通过</span>
            <span v-if="scope.row.check=== 2" style="color: red">添加待审核</span>
            <span v-if="scope.row.check=== 3" style="color: red">删除待审核</span>
            <span v-if="scope.row.check=== 4" style="color: red">审核没通过</span>
          </template>
        </el-table-column>

        <el-table-column label="操作" width=120>
          <template slot-scope="scope">
            <el-button v-if="scope.row.check=== 2" type="success" icon="el-icon-check" circle @click="open_DS0(tableData,scope.$index,$event)"/>
            <el-button v-if="scope.row.check=== 2" type="danger" icon="el-icon-error" circle @click="open_DS1(tableData,scope.$index,$event)"/>
            <el-button v-if="scope.row.check=== 3" type="success" icon="el-icon-check" circle @click="open_DS0(tableData,scope.$index,$event)"/>
            <el-button v-if="scope.row.check=== 3" type="danger" icon="el-icon-error" circle @click="open_DS1(tableData,scope.$index,$event)"/>
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
          pic: '/static/photo-ds.png',
          name: '邓帅',
          job: '项目负责人',
          check: 1
        }, {
          pic: '/static/photo-ct.jpg',
          name: '陈童',
          job: 'UI设计',
          check: 1
        }, {
          pic: '/static/photo-hjh.jpg',
          name: '胡江海',
          job: '研发工程师',
          check: 2
        }, {
          pic: '/static/photo-zyp.jpg',
          name: '张渝萍',
          job: '研发工程师',
          check: 3
        }, {
          pic: '/static/photo-dhd.jpg',
          name: '邓荟丹',
          job: '研发工程师',
          check: 3
        }]
      }
    },
    methods: {
      handleClick (event) {
        this.$router.push({path: '/contractee/homePage/task/detail/memberdetail'})
      },
      open_DS0 (rows, index, event) {
        event.stopPropagation()
        this.$confirm('确定通过审核', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '审核通过'
          })
          rows[index].check = 1
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消审核'
          })
        })
      },
      open_DS1 (rows, index, event) {
        event.stopPropagation()
        this.$confirm('不通过此次人员变动？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '审核完成'
          })
          rows[index].check = 4
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消审核'
          })
        })
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
