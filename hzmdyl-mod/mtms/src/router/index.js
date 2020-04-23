import Vue from 'vue'
import Router from 'vue-router'
import RbacRouter from './rabc.routers' 
Vue.use(Router)

const Home = resolve => require(['@/views/Home.vue'],resolve);
const Login = resolve => require(['@/views/Login'],resolve);
const NotFound = resolve => require(['@/views/404'],resolve);
 
const baseRoutes  = [
  {path:  '/', redirect: '/home' },
  {path : '/Home' , name : 'Home' , component : Home , meta : {title : '首页' , sign : ['Home']},children:RbacRouter},
  {path : '/login' , name : 'Login' , component : Login , meta : {title : '登录' , sign : ['Login']}}
]
const notFoundRouter=[
  {path : '/404' , name : 'NotFound' , component : NotFound , meta : {title : 'NotFound', sign : ['404']}},
  {path : '*' ,redirect: "/404"}
]
const routes = baseRoutes.concat(notFoundRouter);
export default new Router({
  mode: 'history',
  routes
})
