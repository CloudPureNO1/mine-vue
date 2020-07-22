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

 
 // 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

//引入xlsx-style  \node_modules\xlsx-style\dist\cpexcel.js 807行 的 var cpt = require(’./cpt’ + ‘able’); 改成 var cpt = cptable;
import XLSX from 'xlsx-style'
Vue.prototype.$XLSX = XLSX;

//全局引入css
import '@/assets/css/home.css'
import './styles/index.scss'

//引入Element UI  默认中文
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
//自定义主题样式
import '@/styles/themes/element-mini-theme.scss'
Vue.use(ElementUI);


// 完整引入 Element
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'

// Vue.use(ElementUI, { locale })

//Element 兼容 vue-i18n@5.x，搭配使用能更方便地实现多语言切换。
// import VueI18n from 'vue-i18n'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import localeElement from 'element-ui/lib/locale'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

// Vue.use(VueI18n)
// Vue.use(Element)

// Vue.config.lang = 'zh-cn'
// Vue.locale('zh-cn', zhLocale)
// Vue.locale('en', enLocale)
// const i18n = new VueI18n({
//   locale: localStorage.lang || 'cn',
//    messages:{
//      'en':{...en,...enLocale},
//        'zh':{...zh,...zhLocale}
//     }
//   })
//   localeElement.i18n((key, value) => i18n.t(key, value)) //重点：为了实现element插件的多语言切换

//虚拟标签
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

//引入 fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

/* 上面提到 Font Awosome 为我们提供了三种免费的样式，使用时分别对应不同的前缀。
solid 样式，前缀为：fas
regular 样式，前缀为：far
brands 样式，前缀为：fab
（2）它们提供的所有图标可以进入官方的图标搜索页进行查看：
https://fontawesome.com/icons?d=gallery&m=free */



/**全局引入方法1 ,直接用 this.$axiosGet 调用， */
import {$get,$post,$postForm,$postformData} from '@/utils/axios_util.js'
Vue.prototype.$axiosGet=$get;
Vue.prototype.$axiosPost=$post;
Vue.prototype.$axiosPostform=$postForm;
Vue.prototype.$axiospostformData=$postformData;

//引入全屏js
import {$launchFullScreen,$exitFullScreen,toggleFullScreen} from '@/utils/browser.js'
Vue.prototype.$launchFullScreen=$launchFullScreen;
Vue.prototype.$exitFullScreen=$exitFullScreen;
Vue.prototype.$toggleFullScreen=toggleFullScreen;


//引入全局方法2  
import GlobleFun from '@/utils/global_fun.js'
Vue.use(GlobleFun);

//引入全局变量
import GlobleVariable from '@/utils/global_variable.js'
Vue.prototype._$G_VARIABLE=GlobleVariable;

//查看vue.js api
Vue.config.devtools = true
//指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.log('err:',err,vm,info);
}
//给 v-on 自定义键位别名。
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  mediaPlayPause: 179,// camelCase 不可用
  "media-play-pause": 179,// 取而代之的是 kebab-case 且用双引号括起来
  up: [38, 87]
}
//<input type="text" @keyup.media-play-pause="method">

import 'default-passive-events'

//Vuex 
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//这个store  store下面的index.js  Vuex
  components: { App },
  template: '<App/>'
})