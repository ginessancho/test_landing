import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Services from '@/components/Services.vue';
import CaseStudies from '@/components/CaseStudies.vue';
import Contact from '@/components/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
