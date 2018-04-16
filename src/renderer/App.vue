<template>
  <div id="app">
  	<Mytitle/>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'oms',
    data () {
      return {
      }
    }
  }
</script>

<style>
#app{
  height:100%;
}
</style>
