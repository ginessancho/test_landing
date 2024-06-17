<template>
  <div class="services">
    <h2>Our Services</h2>
    <div class="service-card" v-for="service in services" :key="service.title">
      <h3>{{ service.title }}</h3>
      <p>{{ service.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'Public Development Bank Consulting',
          description:
            'Specialized in filtering and classifying Public Development Banks (PDBs) to enhance their financing mechanisms for domestic public services.',
        },
        {
          title: 'Corporate Data Solutions',
          description:
            'Reengineering data pipelines and optimizing ERP systems to improve business processes and marketing strategies.',
        },
        {
          title: 'Education Technology and Policy',
          description:
            'Developing web applications and software tools to support national education policies and upskilling efforts.',
        },
        {
          title: 'Public Policy and Infrastructure Projects',
          description:
            'Creating data-driven solutions to optimize public policy initiatives in areas like water, sanitation, and health.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.services {
  padding: 20px;
  background-color: #fff;
  text-align: center;
}

h2 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 20px;
}

.service-card {
  background-color: #f9f9f9;
  padding: 20px;
  margin: 10px auto;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #2c3e50;
  font-size: 1.5em;
}

p {
  color: #34495e;
  font-size: 1.1em;
}
</style>
