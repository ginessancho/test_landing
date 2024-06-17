<template>
  <div class="home">
    <img :src="logo" alt="Alteridad Logo" class="logo" />
    <h1>Welcome to Alteridad</h1>
    <p>Data solutions for business and public policy</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      logo: require('@/assets/alteridad-2.png'),
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 20px;
}

.logo {
  max-width: 200px;
  margin-bottom: 20px;
}
</style>
