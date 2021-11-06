import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component:() => import('../views/Login.vue')
  },
  {
    path: '/loading',
    name: 'Loading',
    component:() => import('../views/Loading.vue'),
    props:true,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/review',
    name: 'Review',
    component: () => import('../views/Review.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue')
  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import('../views/Graph.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
