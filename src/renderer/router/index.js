import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login-page',
      component: require('@/components/page/loginPage').default
    },
    {
      path: '/register',
      name: 'register-page',
      component: require('@/components/page/registerPage').default
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
        },
        {
          path: 'task/progress',
          component: require('@/components/task/progress').default
        },
        {
          path: 'task/info',
          component: require('@/components/task/Info').default
        },
        {
          path: 'task/resource',
          component: require('@/components/task/resource').default
        },
        {
          path: 'task/diary',
          component: require('@/components/task/diary').default
        },
        {
          path: 'task/member',
          component: require('@/components/task/member').default
        }
      ]
    }
  ]
})
