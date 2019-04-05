import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Secure from '@/components/Secure'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure
    }
  ]
})
