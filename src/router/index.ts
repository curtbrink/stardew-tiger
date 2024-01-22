// Composables
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: {
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {

});

export default router;
