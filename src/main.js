import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import toast from "./components/common/toast";
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

fastclick.attach(document.body)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)
Vue.use(vueLazyLoad,{
  preLoad: 1.3,
  loading:require('./assets/image/tabbar/_buycar.png')
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
