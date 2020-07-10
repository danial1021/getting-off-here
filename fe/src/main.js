import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import * as VeeValidate from 'vee-validate';

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VeeValidate)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
