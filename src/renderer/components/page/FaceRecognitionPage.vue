<template>
	<div class="content">
		<div class="faceRec-DS">
			<img  class="logo-DS" src="@/assets/logo.png"> 		
			<img  class="facePic-DS" src="@/assets/face-recognition2.png"> 
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'facerecognition-page'
	}
</script>
<style>
body{
	width: 100%;
	height:100%;
	//background: url(../../assets/face-recognition.png)no-repeat;
	background-size:100% 100%; 	
}
.faceRec-DS{
	margin: 130px 0 0 100px;
	width:380px;
	text-align: center;
}
.facePic-DS{
	width:300px;
	height:300px;
	text-align: center;
}
.logo-DS{
	width: 200px;
	margin: 0 0 20px 0;
}
</style>