<template>
  <title> {{ pageTitle }} </title>
  <div>
    <HeaderComponents />
    <router-view />
  </div>
</template>

<script>
import HeaderComponents from './components/HeaderComponents.vue'

export default {
  name: 'App',
  components: {
    HeaderComponents,
  },
  data(){
    return{
    // 変数宣言
    pageTitle: 'VBApp',
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
