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
	width:100%;
  height:100%;
}
</style>
