<template>
    <el-main class="maincontent">
       <v-contextmenu ref="contextmenuAgreement" theme="bright">
                        <v-contextmenu-item @click="checkTaskFile1">查看</v-contextmenu-item>
                        <v-contextmenu-item @click="downloadTaskFile1">下载</v-contextmenu-item>
       </v-contextmenu>
       <v-contextmenu ref="contextmenuContract" theme="bright">
                        <v-contextmenu-item @click="checkTaskFile2">查看</v-contextmenu-item>
                        <v-contextmenu-item @click="downloadTaskFile2">下载</v-contextmenu-item>
       </v-contextmenu>
       <el-row class="myEl-Row">
        <font class="el-rowText">合同信息</font>
      </el-row>
      <div style="height:10px"></div>
      <div style="height:80px">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">
          <a color="#000"><img src="static/file.png" style="cursor:pointer" @click="checkTaskFile1" v-contextmenu:contextmenuAgreement></a>
        </span>
      </div>

      <el-row class="myEl-Row">
        <font class="el-rowText">保密协议</font>
      </el-row>
      <div style="height:10px"></div>
      <div style="height:80px">
        <span style="margin-left:2%;margin-right:5%;text-decoration:underline;font-weight:bold">
          <a color="#000"><img src="static/file.png" style="cursor:pointer" @click="checkTaskFile2" v-contextmenu:contextmenuContract></a>
        </span>
      </div>
    </el-main>

</template>
<script>
  export default {
    name: 'info',
    data () {
      return {
      }
    },
    methods: {
      checkTaskFile1(){
        this.$http.get(HOST+'/tasks/'+localStorage['taskId']).then(response=> {
          console.log(response)
          window.open("static/pdf/web/viewer.html?file="+HOST+'/'+response.data.agreementUrl)
        }).catch(error=> {
          console.log(error.toString())
        })
      },
      downloadTaskFile1(){
        this.$http.get(HOST+'/tasks/'+localStorage['taskId']).then(response=> {
          console.log(response)
          let iframe = document.createElement('iframe')
          iframe.style.display = 'none'
          iframe.src = HOST+'/download/taskFiles/'+response.data.agreementUrl.split('/')[1]
          iframe.onload = function () {
            document.body.removeChild(iframe)
          }
          document.body.appendChild(iframe)
        }).catch(error=> {
          console.log(error.toString())
        })
      },
      checkTaskFile2(){
        this.$http.get(HOST+'/tasks/'+localStorage['taskId']).then(response=> {
          console.log(response)
          window.open("static/pdf/web/viewer.html?file="+HOST+'/'+response.data.contractUrl)
        }).catch(error=> {
          console.log(error.toString())
        })
      },
      downloadTaskFile2(){
        this.$http.get(HOST+'/tasks/'+localStorage['taskId']).then(response=> {
          console.log(response)
          let iframe = document.createElement('iframe')
          iframe.style.display = 'none'
          iframe.src = HOST+'/download/taskFiles/'+response.data.contractUrl.split('/')[1]
          iframe.onload = function () {
            document.body.removeChild(iframe)
          }
          document.body.appendChild(iframe)
        }).catch(error=> {
          console.log(error.toString())
        })
      }
    }
  }
</script>

