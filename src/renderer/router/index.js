import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login-page',
      component: require('@/components/loginPage').default
    },
    {
      path: '/register',
      name: 'register-page',
      component: require('@/components/registerPage').default
    },
    {
      path: '/',
      name: 'home-page',
      component: require('@/components/page/homePage').default,
      children: [
        {
          path: 'task',
          component: require('@/components/task/task').default
        },
        {
          path: 'source',
          component: require('@/components/source/source').default
        },
        {
          path: 'profile',
          component: require('@/components/profile/profile').default
        }
      ]
    }
  ]
})
