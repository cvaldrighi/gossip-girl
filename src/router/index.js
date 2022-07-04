import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import ArticleDetail from '../views/ArticleDetail/ArticleDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/articles/:id',
    name: 'Article Detail',
    component: ArticleDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
