<template>
	<div>
		<div class="register-container">
			<img class="register-side" src="@/assets/register.jpg">
		</div>
		<div class="register-main">
			<div class="header">
				<img  class="logo" src="@/assets/logo.png">
				<h3 class="title">注册</h3>
			</div>
			<form class="login-horizontal">
				<div class="login-group">
					<el-input v-model="input" placeholder="输入账号"></el-input>
				</div>
				<div class="login-group">
					<el-input v-model="input" placeholder="输入用户名"></el-input>
				</div>
				<div class="login-group">
					<el-input v-model="input" placeholder="输入密码"></el-input>
				</div>
				<div class="login-group">
					<el-input v-model="input" placeholder="确认密码"></el-input>
				</div>
				<div class="login-group">
					<el-select v-model="value" placeholder="选择公司">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</div>
			<el-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value">
		</el-option>
	</el-select>

	<div class="login-group">
		<router-link to="/register">
			<el-button type="primary" >注册</el-button>
		</router-link>
		<p class="login-group-tips">已有账号？点击登录</p>
	</div>
	<div class="login-group">
		
	</div>
</form>
</div>
</div>
</template>
<script>
	export default {
  name: 'register-page'
	}
</script>
<style>
body{
	background: url();
}
.register-container{
	display:inline;
	width: 45%;
	float:left;
	overflow: hidden;
}
.title{
	display: inline;
	font-size: 1.25rem;
	font-family: "微软雅黑light","serif","sans-serif";
	font-weight: 700;
	padding: 1.25rem 0;
	margin-bottom: 1.875rem;
}
.header{
	padding: 60px 0 0 80px;
	height:100px;
	vertical-align: center;
}
.logo{
	display: inline;
	width: 100px;
}
.register-side{
	height:100%;
	width:auto;

}
.register-main{
	display:inline;
	width: 55%;
	float:left;
}
.register-main-title{

}
.login-horizontal{
	background: #fff;
	padding: 30px 0px 30px;
	text-align: center;
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
.login-group .el-input{
	background-color:#e4153f;
	border-color: #e4153f;
	width:400px;
	border-radius: 25px;
}
.login-group .el-button{
	background-color:#e4153f;
	border-color: #e4153f;
	width:200px;
	border-radius: 25px;
}
.login-group .el-select{
	background-color:#e4153f;
	border-color: #e4153f;
	width:400px;
	border-radius: 25px;
}
</style>