<template>
    <el-main class="maincontent">
      <div style="width:90%;height:140px;display:flex;justify-content:center; align-items:center; border:1px solid #BDC0C4">
        <div style="width:80%; height:100px; float:left">
          <el-input placeholder="输入用户ID" v-model="input0" clearable></el-input>
          <div style="height:20px"/>
          <el-input placeholder="输入职务" v-model="input1" clearable></el-input>
        </div>
      </div>
      <div style="width:90%;height:80px;display:flex;justify-content:center; align-items:center;">
        <el-button type="primary" round @click='handleClick($event)'>确定</el-button>
      </div>
    </el-main>
</template>

<script>
  export default {
    data () {
      return {
        input0: '',
        input1: ''
      }
    },
    methods: {
      handleClick (event) {
        this.$router.push({path: '/outsourcee/homePage/task/detail/member'})
        this.$emit('changeThirdBread', '')
        this.$emit('addNewMember', {name: this.input0, job: this.input1})
      }
    }
  }
</script>