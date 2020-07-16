import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import Vuemq from 'vue-mq'
// import VeeValidate from 'vee-validate';

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Vuemq, {

  breakpoints: {
    mobile: 500,
    desktop: Infinity,
  }

})

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
