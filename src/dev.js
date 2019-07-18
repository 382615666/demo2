import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App.vue'


Vue.config.productionTip = false


Vue.use(VueRouter)

let router = new VueRouter({
  routes
})

window.testvue = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

window.testvue.$router.addRoutes([
  {
    path: '/',
    component: () => import('@/app/layout'),
    children: [
      {
        path: 'heihei',
        component: () => import('@/app/heihei')
      }
    ]
  }
])
