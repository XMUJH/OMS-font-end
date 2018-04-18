<template>
  <div class="profile-container">
    <el-header class="searchbar" height=50>
      <h3 style="display:inline-block;width:100px;font-weight: normal;">个人信息</h3>
      <router-link to="/login">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 475.085 475.085" style="enable-background:new 0 0 475.085 475.085;" xml:space="preserve" class="exiticon"><g><g>
        <g>
          <path d="M237.545,255.816c9.899,0,18.468-3.609,25.696-10.848c7.23-7.229,10.854-15.799,10.854-25.694V36.547    c0-9.9-3.62-18.464-10.854-25.693C256.014,3.617,247.444,0,237.545,0c-9.9,0-18.464,3.621-25.697,10.854    c-7.233,7.229-10.85,15.797-10.85,25.693v182.728c0,9.895,3.617,18.464,10.85,25.694    C219.081,252.207,227.648,255.816,237.545,255.816z" data-original="#000000" class="active-path" data-old_color="#858585" fill="#9B9A9A"/>
          <path d="M433.836,157.887c-15.325-30.642-36.878-56.339-64.666-77.084c-7.994-6.09-17.035-8.47-27.123-7.139    c-10.089,1.333-18.083,6.091-23.983,14.273c-6.091,7.993-8.418,16.986-6.994,26.979c1.423,9.998,6.139,18.037,14.133,24.128    c18.645,14.084,33.072,31.312,43.25,51.678c10.184,20.364,15.27,42.065,15.27,65.091c0,19.801-3.854,38.688-11.561,56.678    c-7.706,17.987-18.13,33.544-31.265,46.679c-13.135,13.131-28.688,23.551-46.678,31.261c-17.987,7.71-36.878,11.57-56.673,11.57    c-19.792,0-38.684-3.86-56.671-11.57c-17.989-7.71-33.547-18.13-46.682-31.261c-13.129-13.135-23.551-28.691-31.261-46.679    c-7.708-17.99-11.563-36.877-11.563-56.678c0-23.026,5.092-44.724,15.274-65.091c10.183-20.364,24.601-37.591,43.253-51.678    c7.994-6.095,12.703-14.133,14.133-24.128c1.427-9.989-0.903-18.986-6.995-26.979c-5.901-8.182-13.844-12.941-23.839-14.273    c-9.994-1.332-19.085,1.049-27.268,7.139c-27.792,20.745-49.344,46.442-64.669,77.084c-15.324,30.646-22.983,63.288-22.983,97.927    c0,29.697,5.806,58.054,17.415,85.082c11.613,27.028,27.218,50.34,46.826,69.948c19.602,19.603,42.919,35.215,69.949,46.815    c27.028,11.615,55.388,17.426,85.08,17.426c29.693,0,58.052-5.811,85.081-17.426c27.031-11.604,50.347-27.213,69.952-46.815    c19.602-19.602,35.207-42.92,46.818-69.948s17.412-55.392,17.412-85.082C456.809,221.174,449.16,188.532,433.836,157.887z" data-original="#000000" class="active-path" data-old_color="#858585" fill="#9B9A9A"/>
        </g>
      </g></g> </svg>
    </router-link>
      <hr style="border:1px solid #eee;background-color:#eee;"/>
    </el-header>
    <div class="profile-main">
      <div class="profile-head">    
       <img class="avatar" alt="头像" src="static/photo-ds2.png">
       <span class="profile-title">邓帅</span>
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
</div>
</template>

<script>
  export default {
    name: 'profile-page',
    data () {
      return {
      }
    },
    method: {
      handleClick (event) {
        this.$router.push({path: '/'})
      }
    }
  }
</script>
<style>
.profile-main{
  margin-top:120px;
}
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
.searchbar{
  position: fixed;
  top:30px;
  left:220px;
  margin: 40px 0 0 0;
  right:0;
}
.myEl-input{
  float: left;
  margin-right: 10px;
  width:40%;
}
.exiticon{
  float: right;
  margin:12px 0 12px 20px;
}
.searchbar-avatar{
  float: right;
  height:40px;
  width:40px;
  border-radius: 40px;
}
.searchIcon{
  float:left;
}
</style>
