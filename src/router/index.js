import { createRouter, createWebHistory } from 'vue-router';
import BusinessInfo from '@/components/BusinessInfo.vue';
import ContactForm from '@/components/ContactForm.vue';

const routes = [
  { path: '/', component: BusinessInfo },
  { path: '/contact', component: ContactForm }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
