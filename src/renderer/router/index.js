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
      redirect: '/outsourcee/homepage/task'
    },
    {
      path: '/outsourcee/homePage',
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
          path: 'task/detail',
          component: require('@/components/task/Detail').default,
          children: [
            {
              path: 'progress',
              component: require('@/components/task/progress').default
            },
            {
              path: 'info',
              component: require('@/components/task/Info').default
            },
            {
              path: 'resource',
              component: require('@/components/task/resource').default
            },
            {
              path: 'diary',
              component: require('@/components/task/diary').default
            },
            {
              path: 'member',
              component: require('@/components/task/member').default
            }
          ]
        }
      ]
    }
  ]
})
