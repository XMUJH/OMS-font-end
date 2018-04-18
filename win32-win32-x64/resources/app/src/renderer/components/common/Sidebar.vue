<template>
  <div class="nav">
    <img id="logo" src="~@/assets/logo.png" alt="MainLogo" class="leftTopLogo"> 
    <div class="leftCombine">
      <router-link to="/outsourcee/homePage/task">
        <el-button type="text" class="leftTextButton" v-on:click="currentPart=1">我的任务</el-button>
      </router-link>
      <hr v-if="currentPart==1" class="leftLine"/>
    </div>
    <div class="leftCombine">
      <router-link to="/outsourcee/homePage/source">
       <el-button type="text" class="leftTextButton" v-on:click="currentPart=2">参考资源</el-button>
     </router-link>
     <hr v-if="currentPart==2" class="leftLine"/>
   </div>
   <div class="leftCombine">
    <router-link to="/outsourcee/homePage/profile">
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
  height:100%;
  padding: 0 80px 0 0;
  text-align: center;
}
.leftTopLogo {
  height: 60px;
  margin:20px auto 5px;
}

.leftTextButton{
  float:left;
  height: 24px;
  width:100%;
  margin:5px 0 12px 0;
  font-family: "微软雅黑",sans-serif;
  color: black;
  font-size: 1em;
}

.leftLine{
  width:55%;
  margin-bottom: 1%;
  border:1px solid #E41541;
  background-color: #E41541;
}

.leftCombine{
  float:left;
  height: 48px;
  width:140px;
  margin-bottom:20%;
}
</style>