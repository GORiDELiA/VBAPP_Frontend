import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: { title: 'Title' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('@/views/Catalog.vue')
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;