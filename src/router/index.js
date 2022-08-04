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

// blog & blog pages (I know..)
import Blog from '../views/blog/Blog.vue'
import BlogPWA1 from '../views/blog/article/BlogPWA1.vue'
import Post1 from '../views/blog/article/PostFrasiRoberto-1.vue'
import PrivacyPolicy from '@/views/blog/article/PrivacyPolicy.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },

  // docs
  { path: '/spiegazione-tecnica-parole-evocatrici', name: 'Tecnica', component: Tecnica },
  { path: '/metodi', name: 'Metodi', component: Metodi },
  { path: '/leggi-psicologiche', name: 'Leggi', component: Leggi },
  { path: '/help', name: 'Help', component: Help },

  // dynamic pages
  { path: '/random', name: 'Random', component: Random },
  { path: '/newWord', name: 'NewWord', component: NewWord },
  { path: '/word/:word', name: 'Word', component: Word },

  // page not found component
  {  path: '/:pathMatch(.*)*', name: 'pagenotfound', component: Home },

  // blog & blog pages
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy }, //Blog-title-postNumber 
  // { path: '/blog:ppost', name: 'Blog', component: Blog }, // sub-routes
  { path: '/blog/parole-evocatrici.com-e-una-pwa', name: 'BlogPWA1', component: BlogPWA1 }, //Blog-title-postNumber 
  { path: '/blog/frasi-roberto-assagioli', name: 'Post1', component: Post1 }, //Blog-title-postNumber 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
