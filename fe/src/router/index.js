import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login.vue')
      },
      {
        path: '/sign',
        name: 'Sign',
        component: () => import('../components/Sign.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
