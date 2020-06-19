import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
Vue.use(Router)

 
const BaseRouter = [
  { path: '/', name: 'Index', component: Index }
] 

export default new Router({
  BaseRouter
})
