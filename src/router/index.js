import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Metodo from '../views/Metodo.vue'
import Word from '../views/Word.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },

  { path: '/metodo', name: 'Metodo', component: Metodo },
  { path: '/p/:word', name: 'Word', component: Word },

  { path: "*", name: 'pagenotfound', component: Home } // make page not found component
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
