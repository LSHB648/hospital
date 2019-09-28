import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Swipe from '@/components/Swipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Swipe',
      name: 'Swipe',
      component: Swipe
    }
  ]
})
