import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import toast from "./components/common/toast";
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'
import Mui from 'vue-awesome-mui'

fastclick.attach(document.body)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(vueLazyLoad,{
  preLoad: 1.3,
  loading:require('./assets/image/tabbar/_buycar.png')
})
Vue.use(Mui)

mui.init({
  keyEventBind: {
    backbutton: true, //关闭back按键监听
  }
})
//首页返回键处理
// 处理逻辑： 1s内，连续两次按返回键，则退出应用；
var first = null;
mui.back = function(){
  // 首次按键， 提示 再按一次退出应用
  let checkFirst = location.href.substring(location.href.length-6,location.href.length)
  if(checkFirst === '#/home' || checkFirst === '#/kind' || checkFirst === 'buycar' || checkFirst === 'person') {
    if(!first){
      mui.toast("再按一次退出应用");
      first = new Date().getTime();//记录第一次按下回退键的时间
      setTimeout(function(){
        //1s 后清除
        first = null;
      }, 1000);
    }else{
      if(new Date().getTime() - first < 1000){
        //如果两次按下的时间小于1s
        plus.runtime.quit(); //那么就退出app
      }
    }
  }else{
    history.go(-1); // 回退到上一页
  }

}

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
