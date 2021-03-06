import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//引入axios
import axios from 'axios'
//配置跨域选项
axios.defaults.withCredentials=true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
//配置到vue的实例中
Vue.prototype.axios=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
