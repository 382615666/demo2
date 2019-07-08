import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/app/layout'),
    redirect: 'test',
    children: [
      {
        path: 'test',
        component: () => import('@/app/index')
      }
    ]
  }
]

window.demo2routes = routes

export default new VueRouter({
  routes
})
