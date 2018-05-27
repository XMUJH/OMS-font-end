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
            <span v-if="scope.row.check=== 'NORMAL'">已通过</span>
            <span v-if="scope.row.check=== 'ADD_CHECK'" style="color: red">添加待审核</span>
            <span v-if="scope.row.check=== 'DELETE_CHECK'" style="color: red">删除待审核</span>
            <span v-if="scope.row.check=== 'NOTPASS'" style="color: red">审核没通过</span>
          </template>
        </el-table-column>

        <el-table-column label="操作" width=120>
          <template slot-scope="scope">
            <el-button v-if="scope.row.check=== 'ADD_CHECK'" type="success" icon="el-icon-check" circle @click="open_DS0(tableData,scope.$index,$event)"/>
            <el-button v-if="scope.row.check=== 'ADD_CHECK'" type="danger" icon="el-icon-error" circle @click="open_DS1(tableData,scope.$index,$event)"/>
            <el-button v-if="scope.row.check=== 'DELETE_CHECK'" type="success" icon="el-icon-check" circle @click="open_DS2(tableData,scope.$index,$event)"/>
            <el-button v-if="scope.row.check=== 'DELETE_CHECK'" type="danger" icon="el-icon-error" circle @click="open_DS3(tableData,scope.$index,$event)"/>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
</template>
<script>
  export default {
    mounted() {
      this.init()
    },  
    data () {
      return {
        activeName: 'fifth',
        input: '',
        tableData: []
      }
    },
    methods: {
      init() {
        this.$http.get(          
          HOST + '/tasks/' + localStorage["taskId"] + '/users', 
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            var me = localStorage["userId"]
            for(var i=0;i<response.data.length;i++){
              if(response.data[i].user.id == me)
              {
                this.tableData.push({
                  id:response.data[i].user.id,
                  pic:global.HOST+'/'+response.data[i].user.photoUrl,
                  name:response.data[i].user.name+'（我）',
                  job:response.data[i].job,
                  check:response.data[i].status,
                  role:response.data[i].userTaskRole,
                  account:response.data[i].user.account,
                  company:response.data[i].user.company.name,
                  phone:response.data[i].user.phone,
                  Email:response.data[i].user.email
                })
                break
              }
            }
            for(var i=0;i<response.data.length;i++){
              if(response.data[i].user.id != me)
              {
                this.tableData.push({
                  id:response.data[i].user.id,
                  pic:global.HOST+'/'+response.data[i].user.photoUrl,
                  name:response.data[i].user.name,
                  job:response.data[i].job,
                  check:response.data[i].status,
                  role:response.data[i].userTaskRole,
                  account:response.data[i].user.account,
                  company:response.data[i].user.company.name,
                  phone:response.data[i].user.phone,
                  Email:response.data[i].user.email
                })
              }
            }
          }).catch(error=>{
            console.log(error);
        });
      },

      handleClick (event) {
        this.$router.push({path: '/contractee/homePage/task/detail/memberdetail'})
      },

      open_DS0 (rows, index, event) {
        event.stopPropagation()
        this.$confirm('确定添加成员', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '添加成功'
          })
          rows[index].check = 'NORMAL'
          this.$http.patch(          
          HOST + '/tasks/'+localStorage["taskId"]+'/users/'+rows[index].id, 
          JSON.stringify({
            "choice":"NORMAL"
          }),
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            //console.log(123)
            
            console.log(response.data)
            //that.$router.replace('/facerecognition')
          }).catch(error=>{
            //console.log(456)
            console.log(error);
          });
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
          this.$http.delete(          
          HOST + '/tasks/'+localStorage["taskId"]+'/users/'+rows[index].id,
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            //console.log(123)
            
            console.log(response.data)
            //that.$router.replace('/facerecognition')
          }).catch(error=>{
            //console.log(456)
            console.log(error);
          });
          rows.splice(index,1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消审核'
          })
        })
      },
      open_DS2 (rows, index, event) {
        event.stopPropagation()
        this.$confirm('确定删除成员', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.$http.delete(          
          HOST + '/tasks/'+localStorage["taskId"]+'/users/'+rows[index].id,
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            //console.log(123)
            
            console.log(response.data)
            //that.$router.replace('/facerecognition')
          }).catch(error=>{
            //console.log(456)
            console.log(error);
          });
          rows.splice(index,1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消审核'
          })
        })
      },
      open_DS3 (rows, index, event) {
        event.stopPropagation()
        this.$confirm('不通过此次人员变动？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '审核完成'
          })
          rows[index].check = 'NORMAL'
          this.$http.patch(          
          HOST + '/tasks/'+localStorage["taskId"]+'/users/'+rows[index].id, 
          JSON.stringify({
            "choice":"NORMAL"
          }),
          {headers: {'Content-Type': 'application/json;charset=utf-8'}}
          ).then(response=>{
            //console.log(123)
            
            console.log(response.data)
            //that.$router.replace('/facerecognition')
          }).catch(error=>{
            //console.log(456)
            console.log(error);
          });
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
