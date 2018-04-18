<template>
<div>
  <el-container>
    <searchbar :showContent='showContent'></searchbar>
    <el-main class="maincontent" style="margin-top: 105px;">
     <el-breadcrumb separator-class="el-icon-arrow-right" style="height:30px">
                    <el-breadcrumb-item :to="{ path: '/contractee/homePage/allunits' }" @click.native="brush">所有公司</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="item in layers">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary" style="margin:0 0 10px 0;" round size="mini" v-if="companyOrMember==0">添加外包单位</el-button>

      <el-table :data="tableData" border style="width:100%" height="500" header-cell-style="color:#000000;background-color:#f3f3f3" @cell-click="handleClick($event)" v-if="companyOrMember==0">
        <el-table-column label="Logo" width=170>
          <template slot-scope="scope">
            <img id="logo" :src="scope.row.pic" class="portrait">
          </template>
        </el-table-column>

        <el-table-column label="公司名称">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="人员数量">
          <template slot-scope="scope">
            <span>{{ scope.row.number }}</span>
          </template>
        </el-table-column>

        <el-table-column label="评分" width=170>
          <template slot-scope="scope">
            <div v-if="scope.row.point=== 1">
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-off"/>
              <i class="el-icon-star-off"/>
              <i class="el-icon-star-off"/>
              <i class="el-icon-star-off"/>
            </div>
            <div v-if="scope.row.point=== 2">
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-off"/>
              <i class="el-icon-star-off"/>
              <i class="el-icon-star-off"/>
            </div>
            <div v-if="scope.row.point=== 3">
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-off"/>
              <i class="el-icon-star-off"/>
            </div>
            <div v-if="scope.row.point=== 4">
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-off"/>
            </div>
            <div v-if="scope.row.point=== 5">
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-on" style="color:#E6A23C"/>
              <i class="el-icon-star-on" style="color:#E6A23C"/>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="删除" width=170px>
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" circle @click="open_DS(tableData,scope.$index)">
            </el-button>
          </template>
        </el-table-column>
      </el-table>


      <el-table :data="tableData2" border style="width:650px" height="500" header-cell-style="color:#000000;background-color:#f3f3f3" v-if="companyOrMember==1">
        <el-table-column label="头像" width=170>
          <template slot-scope="scope">
            <img id="logo" :src="scope.row.pic" class="portrait">
          </template>
        </el-table-column>

        <el-table-column label="用户名" width=170>
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="所属公司" width=170>
          <template slot-scope="scope">
            <span>{{ scope.row.company }}</span>
          </template>
        </el-table-column>

        <el-table-column label="删除" width=140>
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" circle @click="open_DS(tableData,scope.$index)">
            </el-button>
        </template>
        </el-table-column>
      </el-table>


    </el-main>
  </el-container>
</div>
</template>
<script>
  export default {
    data () {
      return {
        showContent: '请输入要查询的公司名称',
        activeName: 'fifth',
        input: '',
        companyOrMember: 0,
        layers: [],
        tableData: [{
          pic: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=7358d673d11373f0f13f689d940f4b8b/1e30e924b899a901ee13153e1d950a7b0208f590.jpg',
          name: '江南软件公司',
          number: 5,
          point: 5
        }, {
          pic: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=7358d673d11373f0f13f689d940f4b8b/1e30e924b899a901ee13153e1d950a7b0208f590.jpg',
          name: '江北软件公司',
          number: 3,
          point: 4
        }, {
          pic: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=7358d673d11373f0f13f689d940f4b8b/1e30e924b899a901ee13153e1d950a7b0208f590.jpg',
          name: '江西软件公司',
          number: 6,
          point: 3
        }, {
          pic: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=7358d673d11373f0f13f689d940f4b8b/1e30e924b899a901ee13153e1d950a7b0208f590.jpg',
          name: '江东软件公司',
          number: 4,
          point: 2
        }],
        tableData2: [{
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523536608980&di=b26485e16e2445f986cd2ee9aa4521d4&imgtype=0&src=http%3A%2F%2Fwww.youstyle.com.cn%2Fupload%2F20150922%2F201509221057033505.jpg',
          name: '陈丽萍',
          company: '江南软件公司'
        }, {
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523536557728&di=98305e92498611466a09e0eb62ba3c42&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Db3b66290a2014c080d3620e563036764%2F08f790529822720e56610dc370cb0a46f21fab58.jpg',
          name: '刘亚',
          company: '江南软件公司'
        }, {
          pic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1525015608,3271699351&fm=27&gp=0.jpg',
          name: '汪洋',
          company: '江南软件公司'
        }, {
          pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1415330652,124770955&fm=11&gp=0.jpg',
          name: '郑哲',
          company: '江南软件公司'
        }]
      }
    },
    methods: {
      handleClick (event) {
        this.companyOrMember = 1
        this.layers.push('江南软件公司')
        this.showContent = '请输入要查询的人员名称'
      },
      brush () {
        this.layers = []
        this.companyOrMember = 0
      },
      open_DS (rows, index) {
        this.$confirm('此操作将删除该公司及内部所有成员信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          rows.splice(index, 1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
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