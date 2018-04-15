<template>
    <div class="profile-container">
    <div class="profile-head">    
     <img class="avatar" alt="头像" src="@/assets/login-bg.png">
      <span class="profile-title">陈丽萍</span>
    </div>
      <div class="table">
           <div class="row">
        <span class="tdname">账号</span>
        <span>609490912@qq.com</span>
      </div>
      <div class="row">
        <span class="tdname">账号密码</span>
         <el-button class="change-btn" type="primary">修改密码</el-button>

      </div>
      <div class="row">
        <span class="tdname">联系方式</span>
        <span>18859272731</span>
      </div>
      <div class="row">
        <span class="tdname">人脸信息</span>
         <el-button class="change-btn" type="primary">修改人脸信息</el-button>
      </div class="row">
      <div class="row">
        <span class="tdname">用户名</span>
        <span>用户XXX</span>
      </div>
      <div class="row">
        <span class="tdname">所属公司</span>
        <span>江南软件公司</span>
      </div>
      <div class="row">
        <span class="tdname">电子邮箱</span>
        <span>609490912@qq.com</span>
      </div>

    </div>
    </div>
</template>

<script>
export default {
  name: 'profile-page',
  data () {
    return {
    }
  }
}
</script>
<style>
.change-btn{
  height:36px;
}
.profile-head{
  height:100px;
  vertical-align: center;
}
.profile-title{
  float: left;
  padding:40px;
  text-align: center;
  font-size: 28px;
  font-family: sans-serif;
  color: #444;
}
.table{
  padding: 20px 0;
  margin: 40px 20px 0 0;
}
.th{
  height: 100px;
  margin-bottom: 40px;
}
.row{
  height:60px;
}
.tdname{
  display: inline-block;
  width:100px;
  margin-right: 20px;
  text-align:right;
  color:#757575;
}
.profile-container{
  margin-top:20px;
}
.avatar{
  width:100px;
  height:100px;
  float: left;
  border-radius: 100px;
}
</style>
