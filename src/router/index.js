import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '@/views/Profile'
import Features from '@/views/Features'
import Ultimate from '@/views/Ultimate'
import Vote from '@/views/Vote'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ana Sayfa',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profil',
    component: Profile
  },
  {
    path: '/features',
    name: 'Özellikler',
    component: Features
  },
  {
    path: '/ultimate',
    name: 'Ultimate',
    component: Ultimate
  },
  {
    path: '/vote',
    name: 'Oy Ver',
    component: Vote
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
