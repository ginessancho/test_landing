<template>
  <div id="app">
    <BusinessInfo />
  </div>
</template>

<script>
import BusinessInfo from './components/BusinessInfo.vue';

export default {
  name: 'App',
  components: {
    BusinessInfo
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

