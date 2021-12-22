<template>
  <div>
    <HeaderComponents/>
    <router-view />
  </div>
</template>

<script>
import HeaderComponents from './components/HeaderComponents.vue'

export default {
  name: 'App',
  components: {
    HeaderComponents,
  }
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
