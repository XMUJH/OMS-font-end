<template>
	<div class="content">
		<div class="faceRec-DS" @click="handleClick">
			<img  class="logo-DS" src="@/assets/logo.png"> 	<video id="video" autoplay="" width="400" height="400"></video>  
			<canvas id="canvas" class="facePic-DS" width="400" height="400"></canvas>
			<!-- <img  class="facePic-DS" src="@/assets/face-recognition2.png">  -->
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'facerecognition-page',
	  mounted () {
	    this.init()
	  },
	  methods: {
	    init () {
	      var video = document.getElementById('video')
	      // var context=canvas.getContext("2d")
	      let vm = this
	      let context = canvas.getContext('2d')
      		// 浏览器兼容
      		let mediaDevices = navigator.mediaDevices.getUserMedia({ audio: false, video })
      		mediaDevices
      		.then(mediaStream => {
      			video.src = window.URL.createObjectURL(mediaStream)
      			video.onloadedmetadata = (e) => {
      				video.play()
      			}
      			vm.canvas = canvas
      			vm.video = video
      			vm.track = mediaStream.getTracks()[0]
      		})
      		.catch(err => {
      			console.log('err.message' + err.name)
      		})
      		vm.timer = setInterval(function () {
      			vm.photo()
      		}, 1000)
      	},
      	photo () {
      		let vm = this
      		// console.log(vm.timer)
      		let context = vm.canvas.getContext('2d')
      		context.drawImage(vm.video, 0, 0, 400, 400)
      		// 导出base64格式的图片数据
      		var imgData = vm.canvas.toDataURL('image/jpg')
      		// 封装blob对象
      		var blob = vm.dataURItoBlob(imgData)
		    // 组装formdata
		    var fd = new FormData()
		    fd.append('img', blob)
			    console.log(123)
			    console.log(this.$route)
			    this.$http.post(HOST+'/faceRecognition/'+vm.$route.params.userId, fd).then(response=>{
			    	console.log("success")
				    console.log(response)
			    	if(response.data.success ===true){
				    	clearInterval(vm.timer)
				    	vm.track.stop()
				    	var userId=vm.$route.params.userId;
				    	if(response.data.userRole=='RECEIVER')
				    		this.$router.replace({ name:'outsourcee-task',params:{userId}})
				    	else
				    		this.$router.replace({ name:'contractee-task',params:{userId}})
			    	}
			    }).catch(error=>{
			    	console.log(error.toString())
			    })
			  },
			  dataURItoBlob (base64Data) {
			  	var byteString
		  	if (base64Data.split(',')[0].indexOf('base64') >= 0) { byteString = atob(base64Data.split(',')[1]) } else { byteString = unescape(base64Data.split(',')[1]) }
			  	var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0]
		  	var ia = new Uint8Array(byteString.length)
		  	for (var i = 0; i < byteString.length; i++) {
			  		ia[i] = byteString.charCodeAt(i)
		  	}
			  	return new Blob([ia], {type: mimeString})
		  }
	  }
	}
</script>
<style>
.content{
	width: 100%;
	height:100%;
	background: url(../../assets/face-recognition.png)no-repeat;
	background-size:100% 100%; 	
}
video{
	background: url(../../assets/face-recognition2.png);
	background-size: 450px 450px;
}
.faceRec-DS{
	padding-left: 120px;
	padding-top: 100px;
	width:400px;
	height: 400px;
	text-align: center;
}
.facePic-DS{
	display: none;
	position: fixed;
	right:0;
	top:40px;
}
.logo-DS{
	width: 80px;
	margin: 0 0 20px 0;
}
</style>