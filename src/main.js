import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag"; //google analitics
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.use(VueGtag, {
  config: { id: 'G-RDH96P8321' },
}, router);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
