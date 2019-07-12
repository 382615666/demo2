import Vue from 'vue'

import ElementUi from 'element-ui'
import MintUI from 'mint-ui'

import 'element-ui/lib/theme-chalk/index.css'

import 'mint-ui/lib/style.css'

Vue.use(ElementUi)
Vue.use(MintUI)

if(process.env.NODE_ENV === 'production'){
  require('./build')
} else {
  require('./dev')
}
