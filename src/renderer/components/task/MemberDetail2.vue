<template>
    <el-main class="maincontent">
      <div style="margin-left:4%;margin-top:3%;width:90%;height:100px">
        <img :src="pic" style="height:80px">
      </div>

      <div style="width:180;height:50px">
        <span class="descriptionOne">{{name}}</span>
        <span class="descriptionTwo">{{job}}</span>
      </div>

      <div style="width:40%;height:20px;float:left;">
        <el-row class="myEl-Row_Two">
          <font>账号</font>
        </el-row>
        <span class="descriptionThree">{{account}}</span>
      </div>

      <div style="width:40%;height:20%;float:left;">
        <el-row class="myEl-Row_Two">
          <font>所属公司</font>
        </el-row>
        <span class="descriptionThree">{{company}}</span>
      </div>

      <div style="width:40%;height:20%;float:left;">
        <el-row class="myEl-Row_Two">
          <font>联系方式</font>
        </el-row>
        <span class="descriptionThree">{{phone}}</span>
      </div>

      <div style="width:40%;height:20%;float:left;">
        <el-row class="myEl-Row_Two">
          <font>电子邮箱</font>
        </el-row>
        <span class="descriptionThree">{{Email}}</span>
      </div>

    </el-main>
</template>



<script>
  export default {
    mounted() {
      this.init()
    },  
    data () {
      return {
        pic:'',
        name:'',
        job:'',
        account:'',
        company:'',
        phone:'',
        Email:''
      }
    },
    methods: {
      init() {
        this.pic = this.$route.params.user.pic,
        this.name = this.$route.params.user.name.split('（')[0],
        this.job = this.$route.params.user.job,
        this.account = this.$route.params.user.account,
        this.company = this.$route.params.user.company,
        this.phone = this.$route.params.user.phone,
        this.Email = this.$route.params.user.Email
      }
    }
  }
</script>

<style>
  .descriptionOne {
    display:block;
    float:left;
    width:8%;
    padding-left:1%;
    font-weight:bold;
  }

  .descriptionTwo {
    display:block;
    float:left;
    width:12%;
    font-weight:bold;
    padding-top:0.07%;
    font-size:15px;
  }

  .descriptionThree {
    display:block;
    width:200px;
    font-weight:bold;
    padding-top:5%;
    padding-left:7%;
    font-size:15px;
  }

  .myEl-Row_Two {
    background-color:#d3dce6;
    width:200px;
  }
</style>