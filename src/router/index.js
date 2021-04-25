import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tecnica from '../views/Tecnica.vue'
import Metodi from '../views/Metodi.vue'
import Word from '../views/Word.vue'
import Random from '../views/Random.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },

  { path: '/tecnica', name: 'Tecnica', component: Tecnica },
  { path: '/metodi', name: 'Metodi', component: Metodi },

  { path: '/random', name: 'Random', component: Random },
  { path: '/p/:word', name: 'Word', component: Word },

  { path: "*", name: 'pagenotfound', component: Home } // make page not found component
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
