import Vue from 'vue'
import Router from 'vue-router'

/* Patient模块相关的页面 */
import IndexPage from '@/pages/Patient/IndexPage'
import NewListPage from '@/pages/Patient/NewListPage'
import NewInfoPage from '@/pages/Patient/NewInfoPage'
import CommentPage from '@/pages/Patient/CommentPage'
import HospitalPage from '@/pages/Patient/HospitalPage'
import PersonalPage from '@/pages/Patient/PersonalPage'
import RegisterPage from '@/pages/Patient/RegisterPage'
import UserInfo from '@/pages/Patient/UserInfo'

/* 公共模块相关页面 */
import LoginPage from '@/pages/LoginPage'



/* 子路由 */
import Hospitainfo from '@/pages/Patient/Hospitainfo'
import HospitalTips from '@/pages/Patient/HospitalTips'
import Hospitalmap from '@/pages/Patient/Hospitalmap'

Vue.use(Router)

export default new Router({
  routes: [
    /* 注册Patient模块页面 -------------------------------------------*/
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
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo
    },

    /* 注册公共模块页面 -------------------------------------------*/
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})
