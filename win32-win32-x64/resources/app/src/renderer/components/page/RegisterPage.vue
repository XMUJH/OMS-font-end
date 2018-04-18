<template>
	<div class="register">
		<div class="register-side">
			<img src="@/assets/register.jpg">
		</div>
		<div class="register-main">
			<div class="register-header">
				<img  class="logo" src="@/assets/logo.png">
				<h3 class="title3">注册</h3>
			</div>
			<form class="register-horizontal">
				<div class="register-group">
					<el-input v-model="input" placeholder="输入账号"></el-input>
				</div>
				<div class="register-group">
					<el-input v-model="input" placeholder="输入用户名"></el-input>
				</div>
				<div class="register-group">
					<el-input v-model="input" placeholder="输入密码"></el-input>
				</div>
				<div class="register-group">
					<el-input v-model="input" placeholder="确认密码"></el-input>
				</div>
				<div class="register-group">
					<el-select v-model="value" placeholder="选择公司">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					    </el-option>
				    </el-select>
			    </div>
	            <div class="register-group">
		          <router-link to="/outsourcee/homePage">
			          <el-button type="primary" >注册</el-button>
		          </router-link>
		        <p class="register-group-tips">已有账号？点击登录</p>
	            </div>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'register-page',
    data () {
      return {
        input: '',
        options: [{
          value: '选项1',
          label: 'A公司'
        }, {
          value: '选项2',
          label: 'B公司'
        }, {
          value: '选项3',
          label: 'C公司'
        }, {
          value: '选项4',
          label: 'D公司'
        }, {
          value: '选项5',
          label: 'E公司'
        }],
        value: ''
      }
    }
  }
</script>
<style>
.register{
	width:100%;
	height:100%;
}
.register-side{
	display:inline;
	height:100%;
	width: 45%;
	float:left;
	overflow: hidden;
}
.title3{
	font-size: 1.25rem;
	font-family: "微软雅黑light","serif","sans-serif";
	font-weight: 700;
	padding: 1.25rem 0;
	margin-bottom: 1rem;
}
.register-header{
	margin-top:100px;
	vertical-align: center;
}
.logo{
	display: inline;
	width: 100px;
	height:auto;
}
.register-side img{
	height:100%;
	width:auto;

}
.register-main{
	display:inline;
	text-align:center;
	height:100%;
	width: 55%;
	float:left;
}
.register-main-title{

}
.register-horizontal{
	background: #fff;
	padding: 10px 0;
	text-align: center;
}
.register-group{
	padding: 0 40px;
	margin: 0 0 30px 0;
	position: relative;
}
.register-group-tips{
	text-decoration: underline;
	font-size: 12px;
	font-family: "微软雅黑light","serif","sans-serif";
}
.register-group .el-input{
	background-color:#e4153f;
	border-color: #e4153f;
	width:400px;
	border-radius: 25px;
}
.register-group .el-button{
	background-color:#e4153f;
	border-color: #e4153f;
	width:200px;
	border-radius: 25px;
}
.register-group .el-select{
	background-color:#e4153f;
	border-color: #e4153f;
	width:400px;
	border-radius: 25px;
}
</style>