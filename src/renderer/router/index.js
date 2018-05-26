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
      path: '/faceRecognition',
      name: 'facerecognition-page',
      component: require('@/components/page/FaceRecognitionPage').default
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/outsourcee/homePage',
      name: 'home-page',
      redirect: '/outsourcee/homePage/task',
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
          path: 'task/edittask',
          component: require('@/components/task/edittask').default
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
            },
            {
              path: 'memberdetail',
              component: require('@/components/task/memberdetail').default
            },
            {
              path: 'milestone',
              component: require('@/components/task/milestone').default
            },
            {
              path: 'addmember',
              component: require('@/components/task/addmember').default
            }
          ]
        }
      ]
    },
    {
      path: '/contractee/homePage',
      name: 'home-page2',
      component: require('@/components/page/homePage2').default,
      children: [
        {
          path: 'task',
          name: 'task2',
          component: require('@/components/task/task2').default
        },
        {
          path: 'task/addtask',
          component: require('@/components/task/addtask').default
        },
        {
          path: 'source',
          component: require('@/components/source/source2').default
        },
        {
          path: 'addsource',
          component: require('@/components/source/addsource').default
        },
        {
          path: 'editsource',
          component: require('@/components/source/editsource').default
        },
        {
          path: 'allunits',
          component: require('@/components/allunits/allunits').default
        },
        {
          path: 'task/detail',
          component: require('@/components/task/Detail2').default,
          children: [
            {
              path: 'progress',
              component: require('@/components/task/progress2').default
            },
            {
              path: 'info',
              component: require('@/components/task/Info2').default
            },
            {
              path: 'resource',
              component: require('@/components/task/resource2').default
            },
            {
              path: 'diary',
              component: require('@/components/task/diary2').default
            },
            {
              path: 'member',
              component: require('@/components/task/member2').default
            },
            {
              path: 'memberdetail',
              component: require('@/components/task/memberdetail2').default
            },
            {
              path: 'milestone',
              component: require('@/components/task/milestone2').default
            }
          ]
        }
      ]
    }
  ]
})
