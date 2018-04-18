<template>
    <div class="breadcrumb-wrap">
        <div class="Breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="height:30px">
                <el-breadcrumb-item :to="{ path: '/contractee/homepage/task' }">项目管理</el-breadcrumb-item>
                <el-breadcrumb-item style="cursor:pointer" @click.native='handleClick' v-if="currentFirstBread!=''">{{currentFirstBread}}</el-breadcrumb-item>
                <el-breadcrumb-item style="cursor:pointer" @click.native='handleClick' v-if="currentSecondBread!=''">{{currentSecondBread}}</el-breadcrumb-item>
                <el-breadcrumb-item style="cursor:pointer" v-if="currentThirdBread!=''">{{currentThirdBread}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      handleClick () {
        if (this.currentSecondBread === '任务进度') this.$router.push({path: '/contractee/homePage/task/detail/progress'})
        if (this.currentSecondBread === '外包信息') this.$router.push({path: '/contractee/homePage/task/detail/info'})
        if (this.currentSecondBread === '任务资源') this.$router.push({path: '/contractee/homePage/task/detail/resource'})
        if (this.currentSecondBread === '考勤日志') this.$router.push({path: '/contractee/homePage/task/detail/diary'})
        if (this.currentSecondBread === '成员信息') this.$router.push({path: '/contractee/homePage/task/detail/member'})
        this.$emit('changeThirdBread', '')
      },
      callInRoll () {
        const h = this.$createElement
        this.$notify({
          title: '签到成功',
          message: h('i', {style: 'color: rgb(198, 47, 47)'}, '祝您工作愉快'),
          type: 'success',
          offset: 100
        })
      },
      finishJob () {
        this.$emit('changeDialogShow', true)
      }
    },
    props: ['currentFirstBread', 'currentSecondBread', 'currentThirdBread']
  }
</script>

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