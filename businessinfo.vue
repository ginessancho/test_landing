<template>
    <div class="business-info">
      <img :src="logo" alt="Alteridad Logo" class="logo"/>
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
      <div class="contact-info">
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Phone:</strong> {{ phone }}</p>
        <p><strong>Location:</strong> {{ location }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Alteridad',
        description: 'Consulting in social policy, corporate finance, and information technology.',
        email: 'contact@alteridad.com',
        phone: '+33 1 23 45 67 89',
        location: 'Paris, France',
        logo: require('@/assets/logo.png') // Place your logo in the assets folder
      };
    }
  };
  </script>
  
  <style scoped>
  .business-info {
    text-align: center;
    padding: 20px;
  }
  
  .logo {
    max-width: 200px;
    margin-bottom: 20px;
  }
  </style>
  