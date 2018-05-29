<template>
	<div>
		<el-container>
			<searchbar :showContent='"请输入要查询的资源名称"'></searchbar>
			<el-main class="maincontent" style="margin-top: 105px;">
      <div class="video" style="display: none;">
      <video id="video" autoplay="" width="400" height="400"></video>
      </div>
      <canvas id="canvas" class="facePic-DS" width="400" height="400" style="display: none;"></canvas>
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
            width="160">
          </el-table-column>
          <el-table-column
            prop="task"
            label="所属任务"
            width="120">
          </el-table-column>
          <el-table-column
            prop="type"
            label="格式"
            width="100">
          </el-table-column>
          <el-table-column
            prop="size"
            label="大小"
            width="100">
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
	</el-container>
</div>
</template>
<script>
	export default {
		name: 'source-page',
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
			var userId=localStorage.getItem('userId')
			this.$http.get(HOST+'/users/'+userId+'/resources').then(response=>{
				console.log(response.data)
				response.data.forEach(e=>{
					console.log(e)
					var resource={
						date:e.resource.commit.substr(0,10),
						name:e.resource.name.split('.')[0],
						task:e.task.name,
						type:e.resource.name.split('.')[1],
						size:e.resource.size,
						level:e.resource.safety
					}
					vm.tableData.push(resource);
			  });
			}).catch(error=>{
			});
		},
		downloadResource (index) {
        if(this.tableData[index].level=='A'||this.tableData[index].level=='B')
      {
          this.$message('正在进行人脸识别');
          this.init3(index)
      }
      else
      {
        let iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = HOST+'/download/resources/'+this.tableData[index].name+'.'+this.tableData[index].type
        iframe.onload = function () {
          document.body.removeChild(iframe)
        }
        document.body.appendChild(iframe)
      }
      },
      checkResource (index) {
      	if(this.tableData[index].level=='A'||this.tableData[index].level=='B')
        {
          this.$message('正在进行人脸识别');
          this.init2(index)
        }
        else
        {
          if(this.tableData[index].type=='pdf'){
            window.open("static/pdf/web/viewer.html?file="+HOST+"/resource/"+this.tableData[index].name+".pdf")
          }else{
            console.log(this.tableData[index].name)
            window.open(HOST+"/resource/"+this.tableData[index].name+"."+this.tableData[index].type)
          }
        }
      },
       init2(index){
        var video=document.getElementById("video") 
        //var context=canvas.getContext("2d")
        let vm = this
        let context = document.getElementById("canvas").getContext('2d')
          // 浏览器兼容
          let mediaDevices = navigator.mediaDevices.getUserMedia({ audio: false, video })
          mediaDevices
          .then(mediaStream => {
            video.src = window.URL.createObjectURL(mediaStream)
            video.onloadedmetadata = (e) => {
              video.play()
            }
            vm.canvas=document.getElementById("canvas")
            vm.video = video
            vm.track = mediaStream.getTracks()[0]
          })
          .catch(err => {
            console.log('err.message' + err.name)
          })
          setTimeout(function(){
            vm.timer=setInterval(function(){ 
              vm.photo2(index);
            },1000)
      },3000)
        },
        photo2(index){
          let vm=this;
          //console.log(vm.timer)
          let context=document.getElementById("canvas").getContext('2d')
          context.drawImage(vm.video,0,0,400,400)
          //导出base64格式的图片数据  
          var imgData = document.getElementById("canvas").toDataURL("image/jpg");
          //封装blob对象  
          var blob = vm.dataURItoBlob(imgData);  
          //组装formdata  
          var fd = new FormData(); 
          fd.append('img', blob)
          console.log(123)
          console.log(this.$route)
          this.$http.post(HOST+'/faceRecognition/'+localStorage['userId'], fd).then(response=>{
            if(response.data.success ===true){
              console.log(response)
              clearInterval(vm.timer)
              vm.track.stop()
              this.$message({
                message: '恭喜你，人脸认证成功',
                type: 'success'
              });
              if(this.tableData[index].type=='pdf'){
                window.open("static/pdf/web/viewer.html?file="+HOST+"/resource/"+this.tableData[index].name+".pdf")
              }else{
                console.log(this.tableData[index].name)
                window.open(HOST+"/resource/"+this.tableData[index].name+"."+this.tableData[index].type)
              }
              setTimeout(function(){
                if(response.data.userRole=='RECEIVER')
                  vm.$router.replace({ name:'outsourcee',params:{userId}})
                else{
                  vm.$router.replace({ name:'contractee',params:{userId}})
                }
              },3000);
              
            }
          }).catch(error=>{
            console.log(error.toString())
          })
      },
      init3(index){
        var video=document.getElementById("video") 
        //var context=canvas.getContext("2d")
        let vm = this
        let context = document.getElementById("canvas").getContext('2d')
          // 浏览器兼容
          let mediaDevices = navigator.mediaDevices.getUserMedia({ audio: false, video })
          mediaDevices
          .then(mediaStream => {
            video.src = window.URL.createObjectURL(mediaStream)
            video.onloadedmetadata = (e) => {
              video.play()
            }
            vm.canvas=document.getElementById("canvas")
            vm.video = video
            vm.track = mediaStream.getTracks()[0]
          })
          .catch(err => {
            console.log('err.message' + err.name)
          })
          setTimeout(function(){
            vm.timer=setInterval(function(){ 
              vm.photo3(index);
            },1000)
      },3000)
        },
        photo3(index){
          let vm=this;
          //console.log(vm.timer)
          let context=document.getElementById("canvas").getContext('2d')
          context.drawImage(vm.video,0,0,400,400)
          //导出base64格式的图片数据  
          var imgData = document.getElementById("canvas").toDataURL("image/jpg");
          //封装blob对象  
          var blob = vm.dataURItoBlob(imgData);  
          //组装formdata  
          var fd = new FormData(); 
          fd.append('img', blob)
          console.log(123)
          console.log(this.$route)
          this.$http.post(HOST+'/faceRecognition/'+localStorage['userId'], fd).then(response=>{
            if(response.data.success ===true){
              console.log(response)
              clearInterval(vm.timer)
              vm.track.stop()
              this.$message({
                message: '恭喜你，人脸认证成功',
                type: 'success'
              });
             let iframe = document.createElement('iframe')
             iframe.style.display = 'none'
             iframe.src = HOST+'/download/resources/'+this.tableData[index].name+'.'+this.tableData[index].type
             iframe.onload = function () {
               document.body.removeChild(iframe)
             }
             document.body.appendChild(iframe)
              setTimeout(function(){
                if(response.data.userRole=='RECEIVER')
                  vm.$router.replace({ name:'outsourcee',params:{userId}})
                else{
                  vm.$router.replace({ name:'contractee',params:{userId}})
                }
              },3000);
              
            }
          }).catch(error=>{
            console.log(error.toString())
          })
      },
      dataURItoBlob (base64Data) {  
        var byteString;  
        if (base64Data.split(',')[0].indexOf('base64') >= 0)  
          byteString = atob(base64Data.split(',')[1]);  
        else  
          byteString = unescape(base64Data.split(',')[1]);  
        var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];  
        var ia = new Uint8Array(byteString.length);  
        for (var i = 0; i < byteString.length; i++) {  
          ia[i] = byteString.charCodeAt(i);  
        }  
        return new Blob([ia], {type: mimeString});  
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