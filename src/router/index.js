import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import NewListPage from '@/pages/NewListPage'
import NewInfoPage from '@/pages/NewInfoPage'
import CommentPage from '@/pages/CommentPage'
import HospitalPage from '@/pages/HospitalPage'
import PersonalPage from '@/pages/PersonalPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'


/* 子路由 */
import Hospitainfo from '@/pages/Hospitainfo'
import HospitalTips from '@/pages/HospitalTips'
import Hospitalmap from '@/pages/Hospitalmap'

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
      component: HospitalPage,
      children: [
        {
          path: 'Hospitainfo',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'Hospitainfo',
          component: Hospitainfo
        },
        {
          path: 'HospitalTips',
          name: 'HospitalTips',
          component: HospitalTips
        },
        {
          path: 'Hospitalmap',
          name: 'Hospitalmap',
          component: Hospitalmap
        },

      ]
    },
    {
      path: '/PersonalPage',
      name: 'PersonalPage',
      component: PersonalPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    }
  ]
})
