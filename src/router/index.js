import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import CreateArticle from '../views/Articles/CreateArticle/CreateArticle.vue'
import ArticleDetail from '../views/Articles/ArticleDetail/ArticleDetail.vue'
import Login from '../views/Auth/Login/Login.vue'
import Register from '../views/Auth/Register/Register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/create-article',
    name: 'create-article',
    component: CreateArticle
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: ArticleDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
