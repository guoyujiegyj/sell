// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局样式


Vue.config.productionTip = false

// 引入mint-ui全部组件
import Mint from 'mint-ui'
Vue.use(Mint)
import '../node_modules/mint-ui/lib/style.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
