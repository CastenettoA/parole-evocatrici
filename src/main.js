import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSimpleAlert from "vue-simple-alert";
import VueGtag from "vue-gtag"; //google analitics

Vue.use(VueSimpleAlert);
Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: 'G-RDH96P8321' },
}, router);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
