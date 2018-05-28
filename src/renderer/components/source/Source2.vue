<template>
	<div>
		<el-container>
			<searchbar :showContent='"请输入要查询的资源名称"'></searchbar>
			<el-main class="maincontent" style="margin-top: 105px;">
				<el-button type="primary" style="margin:0 0 10px 0;" round size="mini" @click="addSource">添加资源</el-button>

      <el-table :data="tableData" border style="width:100%" header-cell-style="color:#000000;background-color:#f3f3f3">

        <el-table-column label="资源名称" width=180>
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="所属任务">
          <template slot-scope="scope">
            <div v-if="scope.row.num=== 1">
              <span>{{ scope.row.mission }}</span>
            </div>
            <div v-if="scope.row.num=== 2">
              <span>{{ scope.row.mission[0] }}</span>
              <span>{{ scope.row.mission[1] }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="安全等级" width=180>
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

        <el-table-column label="编辑" width=75>
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-edit" circle @click="editSource" >
            </el-button>
          </template>
        </el-table-column>

        <el-table-column label="删除" width=75>
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
  name: 'source-page',
  data () {
    return {
      activeName: 'fifth',
      input: '',
      tableData: []
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      this.$http.get(HOST+'/resources')
      .then(response=>{
        console.log(response.data)
        response.data.forEach(e=>{
          console.log(e)
          var count=0;
          var safetyLevel;
          switch(e.safetyLevel){
            case 'A':safetyLevel=5;break;
            case 'B':safetyLevel=4;break;
            case 'C':safetyLevel=3;break;
            case 'D':safetyLevel=2;break;
            case 'E':safetyLevel=1;break;
          }
          for(x in e.belong)
            count++;
          var mission=[];
          for(var y=0;y<e.belong.length;y++){
            missions.push(e.belong[y])
          }
          var resource={
            name:e.resourceName,
            point:safetyLevel,
            num:count,
            mission:missions
          }
          this.tableData.push(resource);
        });
      })
      .catch(error=>{

      })
    },
    handleClick (event) {
    },
    addSource () {
      this.$router.replace({path: '/contractee/homePage/addsource'})
    },
    editSource () {
      this.$router.replace({path: '/contractee/homePage/editsource'})
    },
    open_DS (rows, index) {
      this.$confirm('此操作将删除该资源', '提示', {
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
.source-title{
  padding:5px 0;
  height:20px;
  background-color: #d3dce6;
  margin-bottom: 10px;
}
.source-item{
	padding:20px 0;
  border: 1px solid #eee;
  margin-bottom: 10px;
}
.source-item:hover{
	padding:20px 0;
  border: 1px solid #e51c23;
  margin-bottom: 10px;
}
.el-col {
  	padding-left: 10px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>