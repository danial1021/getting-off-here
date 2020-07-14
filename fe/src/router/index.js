import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
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
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/searchbus',
    name: 'SearchBus',
    component: () => import('../views/SearchBus.vue'),
  },
  {
    path: '/searchstation',
    name: 'SearchStation',
    component: () => import('../views/SearchStation.vue'),
  },
  {
    path: '/secure',
    name: 'Secure',
    component: () => import('../views/Secure.vue'),
    meta: { 
      requiresAuth: true
    }
  },
]

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/login') 
//   } else {
//     next() 
//   }
// })

const router = new VueRouter({
  routes
})

export default router
