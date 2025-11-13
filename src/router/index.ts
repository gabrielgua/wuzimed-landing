import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') }],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
