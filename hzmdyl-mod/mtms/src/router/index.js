import Vue from 'vue'
import Router from 'vue-router'
import RbacRouter from './rabc.tabs' 
Vue.use(Router)

const Home = resolve => require(['@/views/Home.vue'],resolve);
const Login = resolve => require(['@/views/Login'],resolve);
const NotFound = resolve => require(['@/views/404'],resolve);

const homeChildrenRoutes=[
  {path : '/404' , name : 'NotFound' , component : NotFound , meta : {title : '页面丢失', sign : ['404']}}
].concat(RbacRouter);

const baseRoutes  = [
  {path : '/', redirect: '/home' },
  {path : '/welcome' ,name:'Welcome', redirect : '/home'},
  {path : '/Home' , name : 'Home' , component : Home , meta : {title : '首页' , sign : ['home']},children:homeChildrenRoutes},
  {path : '/login' , name : 'Login' , component : Login , meta : {title : '登录' , sign : ['Login']}}
]
const notFoundRouter=[
  {path : '*' ,redirect: "/404"}
]
const routes = baseRoutes.concat(notFoundRouter);
export default new Router({
  mode: 'history',
  routes
})
