import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import axios from 'axios'

const requireAuth = (to, from, next) => {
  axios.post('/token/check', { token: store.token })
  .then(resp => {
    const token_val = resp.data.success
    console.log(token_val)
    if(token_val) return next()
    else {
      store.getters.isAuthenticated = false
      next('/login')
      console.log(store.getters.isAuthenticated)
    }
  })
  .catch(err => {
    console.log(err.message)
  })
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    // beforeEnter: ifNotAuthenticated
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
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/searchbus',
    name: 'SearchBus',
    component: () => import('../views/SearchBus.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/searchstation',
    name: 'SearchStation',
    component: () => import('../views/SearchStation.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/using',
    name: 'Using',
    component: () => import('../views/Using.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
