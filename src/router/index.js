import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Swipe from '@/components/Swipe'
import NavBar from '@/components/NavBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Swipe',
      name: 'Swipe',
      component: Swipe
    },
    {
      path: '/NavBar',
      name: 'NavBar',
      component: NavBar
    }
  ]
})
