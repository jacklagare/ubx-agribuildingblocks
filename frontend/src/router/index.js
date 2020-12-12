import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        auth: false,
        title: 'AgriBuildingBlocks > Home'
    }
  },

  {
    path: '/suppliers',
    name: 'Suppliers',
    component: () => import('@/views/Suppliers.vue'),
    meta: {
        title: 'AgriBuildingBlocks > Suppliers'
    }
  },

  {
    path: '/inspectors',
    name: 'Inspectors',
    component: () => import('@/views/Inspectors.vue'),
    meta: {
        title: 'AgriBuildingBlocks > Inspectors'
    }
  },

  {
    path: '/laboratories',
    name: 'Laboratories',
    component: () => import('@/views/Laboratories.vue'),
    meta: {
        title: 'AgriBuildingBlocks > Laboratories'
    }
  },

 
]

const router = new VueRouter({
  mode: 'history',
  base: 'http://localhost:3000',
  routes
})

export default router
