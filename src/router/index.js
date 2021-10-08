import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Meetup from '../views/Meetup.vue'
import compositionApi from '../views/compositionApi.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetup',
    name: 'Meetup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Meetup
  },
  {
    path: '/compositionApi',
    name: 'compositionApi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: compositionApi
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
