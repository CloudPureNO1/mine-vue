# mtms

> 一个基于Vue.js Element UI 框架的后台管理系统

## 开发流程
mtms
  --src
    --views    // 路由界面
      --rbac   //权限系统







Vue监听页面刷新和关闭功能
 
我在做项目的时候，有一个需求，在离开（跳转或者关闭）购物车页面或者刷新购物车页面的时候向服务器提交一次购物车商品数量的变化。这篇文章主要介绍了vue监听页面刷新和关闭功能,需要的朋友可以参考下

 
我在做项目的时候，有一个需求，在离开（跳转或者关闭）购物车页面或者刷新购物车页面的时候向服务器提交一次购物车商品数量的变化。

将提交的一步操作放到 beforeDestroy 钩子函数中。
 
beforeDestroy() { console.log('销毁组件'）
 this.finalCart()},
但是发现  beforeDestroy 只能监听到页面间的跳转，无法监听到页面刷新和关闭标签页。

所以还是要借助 onbeforeunload 事件。

顺便复习了一下 JavaScript 中的一些加载，卸载事件：

页面加载时只执行 onload 事件。
页面关闭时，先 onbeforeunload 事件，再 onunload 事件。
页面刷新时先执行 onbeforeunload 事件，然后 onunload  事件，最后 onload  事件。
Vue中监听页面刷新和关闭

1. 在methods中定义事件方法：

 
methods: {
 beforeunloadFn(e) {
  console.log('刷新或关闭')
  // ...
 }
}
2. 在created 或者 mounted 生命周期钩子中绑定事件

 
created() {
 window.addEventListener('beforeunload', e => this.beforeunloadFn(e))
}
3. 在 destroyed 钩子卸载事件

 
destroyed() {
 window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
}
测试了页面刷洗和关闭都能监听到。

回到我自己的项目，可以使用 onbeforeunload 事件和 beforeDestroy 钩子函数结合：

 
created() {
 this.initCart()
 window.addEventListener('beforeunload', this.updateHandler)
},
beforeDestroy() {
 this.finalCart() // 提交购物车的异步操作},
destroyed() {
 window.removeEventListener('beforeunload', this.updateHandler)},
methods: {
 updateHandler() {
  this.finalCart()
 },
 finalCart() {
  // ...
 }
}
总结

以上所述是小编给大家介绍的Vue监听页面刷新和关闭功能，希望对大家有所帮助，如果大家有任何疑问欢迎给我留言，小编会及时回复大家的！







## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
