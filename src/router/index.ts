import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('views/frameLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('views/home/home.vue')
      },
      {
        path: '/attr',
        name: 'attr',
        component: () => import('views/attr/attr.vue')
      },
      {
        path: '/emit',
        name: 'emit',
        component: () => import('views/emit/emit.vue')
      },
      {
        path: '/expose',
        name: 'expose',
        component: () => import('views/expose/expose.vue')
      },
      {
        path: '/props',
        name: 'props',
        component: () => import('views/props/props.vue')
      },
      {
        path: '/setup',
        name: 'setup',
        component: () => import('views/setup/setup.vue')
      },
      {
        path: '/vModel',
        name: 'vModel',
        component: () => import('views/vModel/vModel.vue')
      },
      {
        path: '/watch',
        name: 'watch',
        component: () => import('views/watch/watch.vue')
      },
      {
        path: '/router',
        name: 'router',
        component: () => import('views/router.vue')
      },
      {
        path: '/module_id',
        name: 'module_id',
        meta: {
          hiddenNav: true
        },
        component: () => import('views/module_id/module_id.vue')
      },
      {
        path: '/vnodeOptimize',
        name: 'vnodeOptimize',
        component: () => import('views/vnodeOptimize/vnodeOptimize.vue')
      },
      {
        path: '/vnodeNormal',
        name: 'vnodeNormal',
        component: () => import('@/views/vnodeOptimize/normal.vue')
      },
      {
        path: '/vnodeOld',
        name: 'vnodeOld',
        component: () => import('@/views/vnodeOptimize/old.vue')
      },
      {
        path: '/companyDetail',
        name: 'companyDetail',
        component: () => import('@/views/companyDetail/companyDetail.vue')
      },
      {
        path: '/gaode',
        meta: {
          hiddenNav: true
        },
        component: () => import('views/gaode/gaode.vue')
      },
      {
        path: '/drag',
        meta: {
          hiddenNav: true
        },
        component: () => import('views/drag/drag.vue')
      },
      {
        path: '/drag2',
        meta: {
          hiddenNav: true
        },
        component: () => import('views/drag/drag2.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
