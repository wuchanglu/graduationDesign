import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import login from '@/page/login/index'
import entry from '@/page/entry/index'
import personHealth from '@/page/personHealth/index'
import registe from '@/page/registe/index'
import relativesList from '@/page/relativesList/index'
import resetMessage from '@/page/resetMessage/index'
import resetPassword from '@/page/resetPassword/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/entry',
      name: 'entry',
      component: entry
    },
    {
      path: '/personHealth',
      name: 'personHealth',
      component: personHealth
    },
    {
      path: '/registe',
      name: 'registe',
      component: registe
    },
    {
      path: '/relativesList',
      name: 'relativesList',
      component: relativesList
    },
    {
      path: '/resetMessage',
      name: 'resetMessage',
      component: resetMessage
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: resetPassword
    }
  ]
})
