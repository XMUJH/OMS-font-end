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
 <!--       <el-table-column label="Logo" width=170>
          <template slot-scope="scope">
            <img id="logo" :src="scope.row.pic" class="portrait">
          </template>
        </el-table-column>
 -->
        <el-table-column label="公司名称" width=120>
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="联系方式" width=130>
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="邮箱" width=160>
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="网址" width=150>
          <template slot-scope="scope">
            <span>{{ scope.row.site }}</span>
          </template>
        </el-table-column>

        <el-table-column label="评分" width=110>
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

        <el-table-column label="删除" width=80>
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
    mounted(){
      this.init()
    },
    data () {
      return {
        showContent: '请输入要查询的公司名称',
        activeName: 'fifth',
        input: '',
        companyOrMember: 0,
        layers: [],
        tableData: [],
        tableData2: []
      }
    },
    methods: {
      init() {
        this.$http.get(
          HOST + '/companies',
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            //console.log(response.data);
            for(var i=0;i<response.data.length;i++)
            {             
              this.tableData.push({
                id: response.data[i].id,
                name: response.data[i].name,
                phone: response.data[i].phone,
                email: response.data[i].email,
                site: response.data[i].site,
                point: response.data[i].grade
              })
            }
          }).catch(error=>{
            console.log(error);
          });
      },
      brush () {
        this.layers = []
        this.companyOrMember = 0
      },
      open_DS (rows, index) {
        event.stopPropagation()
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
      },
      handleClick (event) {
        var companyId = event.id
        this.tableData2 = []
        this.companyOrMember = 1
        //console.log(companyId)
        this.$http.get(
          HOST + '/companies/'+companyId,
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            //console.log(response.data);
            for(var i=0;i<response.data.length;i++)
            {             
              this.tableData2.push({
                id: response.data[i].id,
                pic: global.HOST+'/'+response.data[i].photoUrl,
                name: response.data[i].name,
                company: response.data[i].company.name
              })
            }
          }).catch(error=>{
            console.log(error);
          });
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