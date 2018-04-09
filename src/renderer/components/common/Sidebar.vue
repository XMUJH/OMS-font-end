<template>
<div class="nav">
            <img id="logo" src="~@/assets/logo.png" alt="MainLogo" class="leftTopLogo"> 
            <div class="leftCombine">
              <router-link to="/task">
            <el-button type="text" class="leftTextButton" v-on:click="currentPart=1">我的任务</el-button>
          </router-link>
	        <hr v-if="currentPart==1" class="leftLine"/>
            </div>
            <div class="leftCombine">
              <router-link to="/source">
	        <el-button type="text" class="leftTextButton" v-on:click="currentPart=2">我的资源</el-button>
          </router-link>
	        <hr v-if="currentPart==2" class="leftLine"/>
            </div>
            <div class="leftCombine">
              <router-link to="/profile">
	        <el-button type="text" class="leftTextButton" v-on:click="currentPart=3">个人信息</el-button>
        </router-link>
	        <hr v-if="currentPart==3" class="leftLine"/>
            </div>
</div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      currentPart: 1
    }
  },
  methods: {
    goTo: function (path) {
      this.$router.replace(path)
    }
  }
}
</script>


<style>
.nav{
  text-align: center;
}
.leftTopLogo {
  height:14%;
  width: 80%;
  margin:auto;
 }

.leftTextButton{
  height: 50%;
  width:90%;
  font-family: Hiragino Sans GB;
  color: black;
  font-size: 1.25em;
  float:left;
  margin-left:3%;
  margin-bottom: .5rem;
  margin-top: 1%;
 }

.leftLine{
  border-color: #d52525;
  color: #d52525;
  background-color: #d52525;
  width:50%;
  float:left;
  margin-left: 23%;
  margin-bottom: 1%;
 }

.leftCombine{
  float:left;
  height: 3rem;
  width:100%;
  margin-top:10%;
}
</style>