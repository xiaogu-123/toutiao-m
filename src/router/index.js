import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue')
},
{
  path: '/',
  // name: 'Layout', // 如果父路由有默认子路由，那他的 name 没有意义
  component: () => import('@/views/layout/index.vue'),
  children: [
    {
      path: '', // 默认子路由，只能有一个
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/qa',
      name: 'qa',
      component: () => import('@/views/qa/index.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/views/video/index.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/my/index.vue')
    }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
