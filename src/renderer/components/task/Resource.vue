<template>
    <el-main class="maincontent">
      <div style="width:50%; height:50px">
        <el-input placeholder="搜索资源" size="mini" prefix-icon="el-icon-search" v-model="input"></el-input>
      </div>
      <el-table
        :data="tableData"
        stripe=true
        style="width:800px;overflow:auto">
          <el-table-column
            prop="date"
            label="日期"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="资源名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="type"
            label="格式"
            width="130">
          </el-table-column>
          <el-table-column
            prop="size"
            label="大小"
            width="120">
          </el-table-column>
          <el-table-column
            prop="level"
            label="安全等级"
            width="100">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button v-if="scope.row.type=='pdf'||scope.row.type=='txt'||scope.row.type=='jpg'||scope.row.type=='png'" type="text" size="small" @click="checkResource(scope.$index)">查看</el-button>
              <el-button type="text" size="small" @click="downloadResource(scope.$index)">下载</el-button>
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
        tableData: []
      }
    },
    mounted(){
    this.init()
  },
  methods:{
    init(){
      var vm=this
      var taskId=1
      this.$http.get(HOST+'/tasks/'+taskId+'/resources').then(response=>{
        console.log(response.data)
        response.data.forEach(e=>{
          console.log(e)
          var resource={
            date:e.commit.substr(0,10),
            name:e.name,
            type:e.type,
            size:e.size,
            level:e.safety
          }
          vm.tableData.push(resource);
        });
      }).catch(error=>{
      });
    },
    downloadResource (index) {
        let iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = HOST+'/download/resources/'+this.tableData[index].name+'.'+this.tableData[index].type
        iframe.onload = function () {
          document.body.removeChild(iframe)
        }
        document.body.appendChild(iframe)
      },
      checkResource (index) {
        if(this.tableData[index].type=='pdf'){
          window.open("static/pdf/web/viewer.html?file="+HOST+"/resource/"+this.tableData[index].name+".pdf")
        }else{
          console.log(this.tableData[index].name)
          window.open(HOST+"/resource/"+this.tableData[index].name+"."+this.tableData[index].type)
        }
      }
  }
  }
</script>