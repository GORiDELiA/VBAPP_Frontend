import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    // meta: { title: 'Title', desc: 'ディスクリプションを記述' }
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
//   {
//     path: '/singin',
//     name: 'SingIn',
//     component: () => import('@/views/SingIn.vue')
//   },
//   {
//     path: '/singup',
//     name: 'SingUp',
//     component: () => import('@/views/SingUp.vue')
//   },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router