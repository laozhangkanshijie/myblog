import Vue from 'vue'
import VueRouter from 'vue-router'

import { Auth } from '@/helper/api/auth'

// import Home from '../views/Home.vue'
const Home = () => import(/* webpackChunkName: "group-foo" */ '../views/Home.vue')
// import Article from '../views/Article.vue'
const Article = () => import(/* webpackChunkName: "group-foo" */ '../views/Article.vue')
// import Login from '../views/Login.vue'
const Login = () => import(/* webpackChunkName: "group-foo" */ '../views/Login.vue')
// import My from '../views/My.vue'
const My = () => import(/* webpackChunkName: "group-foo" */ '../views/My.vue')
// import Category from '../views/Category.vue'
const Category = () => import(/* webpackChunkName: "group-foo" */ '../views/Category.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/article/:id',
    props: true,
    name: 'Article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Article
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/my',
    name: 'my',
    component: My,
    meta: {
      role: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  if (to.path === '/login') return next()
  if (to.meta.role) {
    if (Auth.isAuth) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
