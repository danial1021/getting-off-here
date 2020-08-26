import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import axios from 'axios'

const requireAuth = (to, from, next) => {
  axios.post('/token/check', { token: store.state.token })
  .then(resp => {
    const token_val = resp.data.success
    console.log(token_val)
    if(token_val) return next()
    else {
      store.dispatch('logout')
      .then(() => {
        next('/login')
      })
      
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
    path: '/find',
    name: 'Find',
    component: () => import('../views/Find.vue')
  },
  {
    path: '/idsearch',
    name: 'IdSearch',
    component: () => import('../views/IdSearch.vue')
  },
  {
    path: '/pwsearch',
    name: 'PwSearch',
    component: () => import('../views/PwSearch.vue')
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
    path: '/busspec',
    name: 'BusSpec',
    component: () => import('../views/BusSpec.vue'),
    beforeEnter: requireAuth,
    // children: [
    //   {
    //     path: '/stationspec',
    //     name: 'StationSpec',
    //     component: () => import('../views/spec/StationSpec.vue')
    //   },
    //   {
    //     path: '/up',
    //     name: 'Up',
    //     component: () => import('../views/spec/Up.vue')
    //   },
    //   {
    //     path: '/down',
    //     name: 'Down',
    //     component: () => import('../views/spec/Down.vue')
    //   }
    // ]
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/Book.vue')
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
