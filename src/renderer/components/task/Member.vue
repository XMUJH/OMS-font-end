<template>
    <el-main class="maincontent">
       <div style="position:relative;width:100%;height:40px;margin:0 0 10px 10px;">
        <el-input style="width:50%"placeholder="搜索成员"  size="mini" prefix-icon="el-icon-search" v-model="input"></el-input>
        <el-button style="float: right;margin-right: 10px;" v-if="userRole=='incharge'" type="primary" round @click="addClick">添加成员</el-button>
      </div>
      
      <el-table :data="tableData" style="width:100%" height="530" header-cell-style='color:#000000;background-color:#f3f3f3' @cell-click="handleClick($event)">
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
            <span v-if="scope.row.check=== 4" style="color: red">审核没通过</span>
          </template>
        </el-table-column>

        <el-table-column label="删除" width=120 v-if="userRole=='incharge'">
          <template slot-scope="scope">
            <el-button v-if="scope.row.check=== 1" type="danger" icon="el-icon-delete" circle @click="open_DS(tableData,scope.$index,$event)">
            </el-button>
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
          pic: 'static/photo-ds.png',
          name: '邓帅',
          job: '项目负责人',
          check: 1
        }, {
          pic: 'static/photo-ct.jpg',
          name: '陈童',
          job: 'UI设计',
          check: 1
        }, {
          pic: 'static/photo-hjh.jpg',
          name: '胡江海',
          job: '研发工程师',
          check: 2
        }, {
          pic: 'static/photo-zyp.jpg',
          name: '张渝萍',
          job: '研发工程师',
          check: 3
        }, {
          pic: 'static/photo-dhd.jpg',
          name: '邓荟丹',
          job: '研发工程师',
          check: 3
        }]
      }
    },
    methods: {
      handleClick (event) {
        this.$router.push({path: '/outsourcee/homePage/task/detail/memberdetail'})
      },
      addClick () {
        this.$router.push({path: '/outsourcee/homePage/task/detail/addmember'})
        this.$emit('changeThirdBread', '添加成员')
      },
      open_DS (rows, index, event) {
        event.stopPropagation()
        this.$confirm('此操作将删除该成员', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '等待发包方审核'
          })
          rows[index].check = 3
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    props: ['userRole', 'newMember'],
    created: function () {
      if (this.newMember !== '') {
        this.tableData.push({
          pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1415330652,124770955&fm=11&gp=0.jpg',
          name: this.newMember.name,
          job: this.newMember.job,
          check: 2
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
