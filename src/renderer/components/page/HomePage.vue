<template>
    <el-container v-bind:style="{height: myHeight, width: myWidth}">
        <el-aside style="width:20%"><sidebar></sidebar></el-aside>
        <el-container>
            <el-header style="height:12.5%"></el-header>
            <el-main style="height:87.5%">
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      input: '',
      myHeight: (window.innerHeight) - 20 + 'px',
      myWidth: (window.innerWidth) - 20 + 'px'
    }
  }
}
</script>
