import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入并自己封装的Fetch 方法
import Fetch from './helper/api/fetch'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.Fetch = Fetch

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
