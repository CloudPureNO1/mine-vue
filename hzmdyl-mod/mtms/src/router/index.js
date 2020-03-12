import Vue from 'vue'
import Router from 'vue-router'
import RbacRouter from './rabc.routers' 
Vue.use(Router)

const Home = resolve => require(['@/views/Home.vue'],resolve);
const Login = resolve => require(['@views/Login'],resolve);

 
const baseRoutes  = [
  {path : '/' , name : 'Home' , component : Home , meta : {title : '首页' , sign : 'Home'}},
  {path : '/login' , name : 'Login' , component : Login , meta : {title : '登录' , sign : 'Login'}} 
]

const routes = baseRoutes.concat(RbacRouter);

export default new Router({
routes
})
