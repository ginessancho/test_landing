<template>
  <div class="case-studies">
    <h2>Case Studies</h2>
    <div
      class="case-study-card"
      v-for="caseStudy in caseStudies"
      :key="caseStudy.title"
    >
      <h3>{{ caseStudy.title }}</h3>
      <p>{{ caseStudy.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseStudies: [
        {
          title: 'ECOPSIS',
          description:
            'Generated recommendations and case studies disseminated by the Water Finance Coalition to help PDBs innovate effectively.',
        },
        {
          title: 'Casa de las Baterias',
          description:
            'Reengineered data pipeline and ERP deployment, enhancing accuracy and impacting marketing strategy for 1 million clients.',
        },
        {
          title: 'Centauri Technologies Corporation',
          description:
            'Developed web applications for upskilling educators, supporting national education policies.',
        },
        {
          title: 'IDIAP',
          description:
            'Created a data application to analyze relationships among food crops and insect species, aiding pesticide alternative development.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.case-studies {
  padding: 20px;
  background-color: #fff;
  text-align: center;
}

h2 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 20px;
}

.case-study-card {
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
