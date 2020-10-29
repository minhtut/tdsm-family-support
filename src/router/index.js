import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Programs from '../views/Programs.vue'
import Resource from '../views/Resource.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/contact',
    name: 'Contace',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
