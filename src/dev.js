import Vue from 'vue'
import routes from './router'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes
})

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')