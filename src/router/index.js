import { createRouter, createWebHistory } from 'vue-router';
import Animals from '../components/Animals/Animals.vue';
import AnimalDetail from '../components/Animals/AnimalDetail.vue';

const routes = [
    {
      path: '/',
      name: 'Animals',
      component: Animals, // This is the homepage showing the Animals component
    },
    {
      path: '/animalDetail/:animal',
      name: 'AnimalDetail',
      component: AnimalDetail, // This is the dynamic route for animal details
      props: true, // Pass route params as props
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;