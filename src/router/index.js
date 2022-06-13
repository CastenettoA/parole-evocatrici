import { createRouter, createWebHistory } from 'vue-router'

// docs
import Tecnica from '../views/docs/Tecnica.vue'
import Metodi from '../views/docs/Metodi.vue'
import Leggi from '../views/docs/Leggi.vue'
import Help from '../views/docs/Help.vue'

// dynamic pages
import Home from '../views/Home.vue'
import Word from '../views/Word.vue'
import NewWord from '../views/NewWord.vue'
import Random from '../views/Random.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },

  // docs
  { path: '/tecnica', name: 'Tecnica', component: Tecnica },
  { path: '/metodi', name: 'Metodi', component: Metodi },
  { path: '/leggi-psicologiche', name: 'Leggi', component: Leggi },
  { path: '/help', name: 'Help', component: Help },

  // dynamic pages
  { path: '/random', name: 'Random', component: Random },
  { path: '/newWord', name: 'NewWord', component: NewWord },
  { path: '/word/:word', name: 'Word', component: Word },

  // page not found component
  {  path: '/:pathMatch(.*)*', name: 'pagenotfound', component: Home } 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
