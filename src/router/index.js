import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/login.vue')
  },
  {
    path:'/softWare',
    name:'softWare',
    component:()=>import('../pages/software.vue')
  },
  {
    path:'/manage',
    name:'manage',
    component:()=>import('../pages/manage.vue')
  },
  {
    path:'/test',
    name:'test',
    component:()=>import('../pages/test.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
