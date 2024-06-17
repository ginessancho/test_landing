<template>
  <div class="business-info">
    <img :src="logo" alt="Alteridad Logo" class="logo" />
    <h1>{{ name }}</h1>
    <p class="description">{{ description }}</p>
    <button @click="navigateToContact" class="contact-button">Contact</button>
  </div>
</template>

<script>
export default {
  name: 'BusinessInfo',
  data() {
    return {
      name: 'Alteridad',
      description: 'Data solutions for business and public policy.',
      logo: require('@/assets/alteridad-2.png'),
    }
  },
  methods: {
    navigateToContact() {
      this.$router.push('/contact')
    },
  },
}
</script>

<style scoped>
.business-info {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  max-width: 200px;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
}

.description {
  font-size: 1.2em;
  color: #34495e;
  margin: 20px 0;
}

.contact-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: #2980b9;
}
</style>
