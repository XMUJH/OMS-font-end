<template>
	<div class="content">
		<div class="login">
			<img  class="logo" src="@/assets/logo.png">
			<h3 class="title2">虹 软·外 包 管 理 平 台</h3> 					
			<form class="login-horizontal">
				<div class="login-group">
					<el-input v-model="input" placeholder="用户名"></el-input>
				</div>
				<div class="login-group">
					<el-input v-model="input" placeholder="密码"></el-input>
				</div>
				<div class="login-group">
					<router-link to="/facerecognition">
						<el-button type="primary" >登录</el-button>
					</router-link>
				</div>
				<div class="login-group">
				    <router-link to="/register">
					    <p class="login-group-tips">第一次登录？点击注册</p>
					</router-link>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'login-page',
	  data () {
	    return {
	      input: ''
	    }
	  }
	}
</script>
<style>
body{
	width: 100%;
	height:100%;
	background: url(../../assets/login-bg.png)no-repeat right top;	
}
.login{
	margin: 50px 0 0 100px;
	width:380px;
	text-align: center;
}
.title2{
	display: block;
	font-size: 1.25rem;
	font-family: "微软雅黑light","serif","sans-serif";
	font-weight: 700;
	padding: 1.25rem 0;
	margin-bottom: 1.875rem;
}
.logo{
	width: 200px;
}
.login-horizontal{
	background: #fff;
	padding: 60px 0px 30px;
	text-align: center;
	box-shadow: 8px 8px 25px 3px #e7e7e7;

}
.login-group{
	padding: 0 40px;
	margin: 0 0 30px 0;
	position: relative;
}
.login-group-tips{
	text-decoration: underline;
	font-size: 12px;
	font-family: "微软雅黑light","serif","sans-serif";
}
.login-group .el-button{
	background-color:#e4153f;
	border-color: #e4153f;
	width:200px;
	border-radius: 25px;
}
</style>