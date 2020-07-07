import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// import PageTitle from './components/PageTitle'

Vue.config.productionTip = false

// Vue.component('page-title', {
//   template: 
// `
// <template>
//   <div>
//     <v-layout row wrap>
//       <v-flex sm4>
//           <v-btn 
//           icon
//           @click="$router.go('1')"
//           style="float:right"
//           >
//               <v-icon>arrow_back</v-icon>
//           </v-btn>
//       </v-flex>
      
//       <v-flex sm4>
//           <h1 align="center">{{ title }}</h1>
//       </v-flex>
      
//       <v-flex sm4>
//           <v-btn 
//             icon
//             @click="$router.go('-1')"
//           >
//               <v-icon>arrow_forward</v-icon>
//           </v-btn> 
//       </v-flex>
//     </v-layout>
//   </div>
// </template>
// `,
// data: function() {
//   return {
//     title: document.URL
//   }
// }
// });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
