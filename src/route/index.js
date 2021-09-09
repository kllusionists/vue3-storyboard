import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/dashboard.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue'),
    },
    {
      path: '/test',
      component: () => import('@/views/test/test.vue'),
    },
    {
      path: '/test0',
      component: () => import('@/views/test/test0.vue'),
    },
    {
      path: '/test1',
      component: () => import('@/views/test/test1.vue'),
    },
    {
      path: '/test2',
      component: () => import('@/views/test/test2.vue'),
    }
  ]
})

router.afterEach((to, from) => {
  console.log(to)
  console.log(from)
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  // if (to.path === '/') {
  //   to.meta.transition = 'fade'
  // } else {
  //   to.meta.transition = toDepth < fromDepth ? 'fade' : 'rotate-clockwise-top-left'
  // }
  const animations = ['rotate-clockwise-top-left',
    'rotate-clockwise-top-right',
    'rotate-clockwise-bottom-left',
    'rotate-clockwise-bottom-right',
    'transform-left-right',
    'transform-right-left',
    'transform-top-bottom',
    'transform-bottom-top'
  ]

  const index = parseInt(Math.random() * 8 + 0, 10)
  console.log(index)
  to.meta.transition = animations[index]
})

export default router