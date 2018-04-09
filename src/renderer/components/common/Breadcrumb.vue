   <template>
   <el-header style="height:12.5%">
    	<div class="Breadcrumb">
    		<el-breadcrumb separator-class="el-icon-arrow-right">
  				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  				<el-breadcrumb-item>活动管理</el-breadcrumb-item>
  				<el-breadcrumb-item>活动列表</el-breadcrumb-item>
  				<el-breadcrumb-item>活动详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="checkin">
			<el-button type="text" style="color:#000000">签到</el-button>
		</div>
		<div style="float:left;background-color:#e71740;margin-left:1%;margin-right:1%;margin-top:4.7%;width:1px;height:25%;"></div>
		<div class="checkout">
			<el-button type="text" style="color:#000000">签退</el-button>
		</div>
    </el-header>
  </template>
<style>
  /*面包屑*/
  .Breadcrumb{
    float:left;
    padding:5%;
    height:100;
    width:70%;
  }

  /*“签到”的容器*/
  .checkin{
  	float:left;
	padding-top:2%;
	padding-left:5%;
    height:100;
   // width:15%;
  }

  /*“签退”的容器*/
   .checkout{
  	float:left;
	padding-top:2%;
	//padding-left:5%;
    height:100;
   // width:15%;
  }
</style>