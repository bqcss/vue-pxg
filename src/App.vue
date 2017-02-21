<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to='hello'>hello组件</router-link>
    <router-link to='vuxtest'>vuxTest 组件</router-link>
    <router-link to='axiostest'>axiosTest 组件</router-link>
    <router-link to='vuextest'>vuexTest 组件</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='less'>
@import '~vux/src/styles/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
