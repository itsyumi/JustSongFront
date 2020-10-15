import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/game',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Gaming.vue')
  },
  {
    path: '/setting',
    name: 'Set',
    component: () => import('@/views/SetRoom.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
