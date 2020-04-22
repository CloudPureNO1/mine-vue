// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/** 此处引入，解决报错问题，新版中已经修复*/
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 
Vue.config.productionTip = false

//引入阿里矢量图标
import './assets/iconfont/iconfont.css'

//引入Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//虚拟标签
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

//全局引入css
import '@/assets/css/home.css'
import './styles/index.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
