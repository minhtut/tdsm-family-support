import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Programs from '../views/Programs.vue'
import Resource from '../views/Resource.vue'
import Community from '../views/Community.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/programs',
    name: 'Programs',
    component: Programs
  },
  {
    path: '/resource',
    name: 'Resource',
    component: Resource
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
