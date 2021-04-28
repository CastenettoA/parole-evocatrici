import Vue from 'vue'
import VueRouter from 'vue-router'

import Tecnica from '../views/docs/Tecnica.vue'
import Metodi from '../views/docs/Metodi.vue'
import Leggi from '../views/docs/Leggi.vue'

import Home from '../views/Home.vue'
import Word from '../views/Word.vue'
import NewWord from '../views/NewWord.vue'
import Random from '../views/Random.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },

  { path: '/tecnica', name: 'Tecnica', component: Tecnica },
  { path: '/metodi', name: 'Metodi', component: Metodi },
  { path: '/leggi-psicologiche', name: 'Leggi', component: Leggi },

  { path: '/random', name: 'Random', component: Random },
  { path: '/newWord', name: 'NewWord', component: NewWord },
  { path: '/word/:word', name: 'Word', component: Word },

  { path: "*", name: 'pagenotfound', component: Home } // make page not found component
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
