import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageNotFound from '@/views/404'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Container from  '@/components/Container'


Vue.use(Router)

//引入其他路由文件
import BaseRouter from '@/router/el/Base'
import NavigationRouter from '@/router/el/Navigation' 
import DataRouter from '@/router/el/Data.js'
import Others from '@/router/el/Others'


 const baseRoutes  = [
    { path: '/container', name: 'Container', component: Container },
    { path: '/hello', name: 'HelloWorld', component: HelloWorld },
    { path: '/404', name: 'PageNotFound', component: PageNotFound },
    { path: '/login',name: 'Login',component: Login},
    { path: '/',name: 'Home' ,component:Home}
  ]

  const routes = baseRoutes.concat(BaseRouter,NavigationRouter,DataRouter,Others);
  

export default new Router({
  routes
})
