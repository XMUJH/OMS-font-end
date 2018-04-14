   <template>
     <div class="breadcrumb-wrap">
       <div class="Breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>智能外包管理平台</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="signbox">
        <div class="checkin">
         <el-button class="checkin-btn" type="text" style="color:#000000">签到</el-button>
       </div>
       <div class="line">  
       </div>
       <div class="checkout">
         <el-button class="checkout-btn" type="text" style="color:#000000">签退</el-button>
       </div>
     </div>
   </div>
 </template>
 <style>
 .breadcrumb-wrap{
  position:fixed;
  right:0;
  left:220px;
  background-color:#fff;
  z-index: 100;

}
/*面包屑*/
.signbox{
  position: absolute;
  padding:40px 20px 0 0;
  right:0px;
  top:0;
}
.Breadcrumb{
  float:left;
  width:100%;
  margin:40px 0 38px 20px;
  box-sizing: border-box;
}
.line{
  float:left;
  background-color:#e71740;
  width:2px;
  height:15px;
  margin: 0 10px;

}

/*“签到”的容器*/
.checkin{
 float:left;
 line-height: 13px;
}
.checkin-btn,.checkout-btn{
  padding: 0;
  margin:0;
}

/*“签退”的容器*/
.checkout{
 float:left;
 height:100;
 line-height: 13px;
}
</style>