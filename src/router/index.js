import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import NewListPage from '@/pages/NewListPage'
import NewInfoPage from '@/pages/NewInfoPage'
import CommentPage from '@/pages/CommentPage'
import HospitalPage from '@/pages/HospitalPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/IndexPage'
    },
    {
      path: '/IndexPage',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/NewListPage',
      name: 'NewListPage',
      component: NewListPage
    },
    {
      path: '/NewListPage/NewInfoPage/:id',
      name: 'NewInfoPage',
      component: NewInfoPage
    },
    {
      path: '/CommentPage',
      name: 'CommentPage',
      component: CommentPage
    },
    {
      path: '/HospitalPage',
      name: 'HospitalPage',
      component: HospitalPage
    }
  ]
})
