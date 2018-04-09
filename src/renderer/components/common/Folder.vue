	<template>
  <div class="progress-bar">
    		<div class="progress-bar_toper"></div>
    		<div class="progress-bar_outer">
    			<div class="progress-bar_inner" style="height:80%;">
    				<div class="progress-bar_text">80%</div>
    			</div>
    		</div>
    		<div class="progress-bar_bottomtext">项目名称</div>
    	</div>
  </template>

<style>
  /*项目（包括文件夹与项目名字）*/
  .progress-bar {
   float:left;
  // margin: 5%;
   padding: 5%;
  	//padding-left: 5%;
    //padding-right: 5%;
   // padding-top:5%;
   // padding-bottom:5%;
    width: 14%;
    height: 20%;
    //text-align: right;
    line-height: 3;
    //margin-right: -55px;
    //-webkit-box-sizing: border-box;
    //box-sizing: border-box;
  }

   .progress-bar:hover {
   float:left;
  // margin: 5%;
   padding: 5%;
  	//padding-left: 5%;
    //padding-right: 5%;
   // padding-top:5%;
   // padding-bottom:5%;
    width: 14%;
    height: 20%;
    //text-align: right;
    line-height: 3;
    //margin-right: -55px;
    //-webkit-box-sizing: border-box;
    //box-sizing: border-box;
    background-color: #ebebeb;
  }

  /*文件夹最上面*/
  .progress-bar_toper{
  	height: 10%;
  	width: 15%;
  	margin-left:5%;
  	border-top: 1.2px solid #979797;
  	border-left: 1.2px solid #979797;
  	border-right: 1.2px solid #979797;
  }

  /*外层进度条*/
  .progress-bar_outer{
    height: 80%;
    background-color: #fefefe;
    overflow: hidden;
    position: relative;
    border: 1.2px solid #979797;
    //vertical-align: middle;
  }

  /*内层进度条*/
  .progress-bar_inner{
    position: absolute;
  
    left: 0.5px;
    /* top: 0; */
    bottom: 0;
    width: 99%;
    background-color: #cbcbcb;
    text-align: right;
    /* border-radius: 100px; */
    line-height: 1;
  }

  /*进度条文字*/
  .progress-bar_text{
    color: #000;
    font-size: 15px;
    text-align: center;
    /* margin: 0 5px; */
   // text-align: center;
   // display: inline-block;
    //vertical-align: middle;
  }

  /*项目名称*/
  .progress-bar_bottomtext{
  	color: #000;
    font-size: 15px;
    height:10%;
    //display: inline-block;
    vertical-align: middle;
    text-align: center;
  }
</style>