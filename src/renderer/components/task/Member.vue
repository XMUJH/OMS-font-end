<template>
    <el-main class="maincontent">
       <div style="position:relative;width:100%;height:40px;margin:0 0 10px 10px;">
        <el-input style="width:50%" placeholder="搜索成员"  size="mini" prefix-icon="el-icon-search" v-model="input"></el-input>
        <el-button style="float: right;margin-right: 10px;" v-if="userRole=='incharge'" type="primary" round @click="addClick">添加成员</el-button>
      </div>
      
      <el-table :data="tableData" style="width:100%" height="530" header-cell-style='color:#000000;background-color:#f3f3f3' @cell-click="handleClick(tableData,$event)">
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
            <span v-if="scope.row.check=== 'NORMAL'">已通过</span>
            <span v-if="scope.row.check=== 'ADD_CHECK'" style="color: red">添加待审核</span>
            <span v-if="scope.row.check=== 'DELETE_CHECK'" style="color: red">删除待审核</span>
            <span v-if="scope.row.check=== 'NOTPASS'" style="color: red">审核没通过</span>
          </template>
        </el-table-column>

        <el-table-column label="删除" width=120 v-if="userRole=='incharge'">
          <template slot-scope="scope">
            <el-button v-if="scope.row.check=== 'NORMAL'&&scope.row.role!='LEADER'" type="danger" icon="el-icon-delete" circle @click="open_DS(tableData,scope.$index,$event)">
            </el-button>
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
      handleClick (rows, event) {
        var user = event
        console.log(user)
        this.$router.replace({name: 'memberdetail',params:{user}})
        //console.log(event)
        //this.$router.push({path: '/outsourcee/homePage/task/detail/memberdetail'})
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
          rows[index].check = 'DELETE_CHECK'
          this.$http.patch(          
          HOST + '/tasks/'+localStorage["taskId"]+'/users/'+rows[index].id, 
          JSON.stringify({
            "choice":"DELETE_CHECK"
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
            message: '已取消删除'
          })
        })
      }
    },
    props: ['userRole', 'newMember']
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
