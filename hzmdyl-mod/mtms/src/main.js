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

//引入v-chars  echars 的封装
import VCharts from 'v-charts'
Vue.use(VCharts)
/** 
 * v-charts的每种图表组件，都已经单独打包到lib文件夹下了

|- lib/
    |- line.common.js  -------------- 折线图
    |- bar.common.js  --------------- 条形图
    |- histogram.common.js  --------- 柱状图
    |- pie.common.js  --------------- 饼图
    |- ring.common.js  -------------- 环图
    |- funnel.common.js  ------------ 漏斗图
    |- waterfall.common.js  --------- 瀑布图
    |- radar.common.js  ------------- 雷达图
    |- map.common.js  --------------- 地图
    |- sankey.common.js  ------------ 桑基图
    |- heatmap.common.js  ----------- 热力图
    |- scatter.common.js  ----------- 散点图
    |- candle.common.js  ------------ k线图
    |- gauge.common.js  ------------- 仪表盘
    |- tree.common.js  -------------- 树图
    |- bmap.common.js  -------------- 百度地图
    |- amap.common.js  -------------- 高德地图
 * 
 *使用时，可以直接将单个图表引入到项目中
 * import VeLine from 'v-charts/lib/line.common'
 * Vue.component(VeLine.name, VeLine)
*/


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

/**全局引入方法1 ,直接用 this.$axiosGet 调用， */
import {$get,$post,$postForm,$postformData} from '@/utils/axios_util.js'
Vue.prototype.$axiosGet=$get;
Vue.prototype.$axiosPost=$post;
Vue.prototype.$axiosPostform=$postForm;
Vue.prototype.$axiospostformData=$postformData;

//引入全屏js
import {$launchFullScreen,$exitFullScreen} from '@/utils/browser.js'
Vue.prototype.$launchFullScreen=$launchFullScreen;
Vue.prototype.$exitFullScreen=$exitFullScreen;

// //引入全局方法2
import GlobleFun from '@/utils/global_fun.js'
Vue.use(GlobleFun);

//引入全局变量
import GlobleVariable from '@/utils/global_variable.js'
Vue.prototype._$G_VARIABLE=GlobleVariable;

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
