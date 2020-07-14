import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: ifNotAuthenticated
    // nested route
    // children: [
    //   {
    //     path: '/login',
    //     name: 'Login',
    //     component: () => import('../components/Login.vue')
    //   },
    //   {
    //     path: '/sign',
    //     name: 'Sign',
    //     component: () => import('../components/Sign.vue')
    //   }
    // ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/searchbus',
    name: 'SearchBus',
    component: () => import('../views/SearchBus.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/searchstation',
    name: 'SearchStation',
    component: () => import('../views/SearchStation.vue'),
    beforeEnter: ifAuthenticated
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
