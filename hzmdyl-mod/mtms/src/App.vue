<template>
  <div id="app">
     <transition name="slide-fade" mode="out-in">
       <router-view/>
     </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
 @import url(./assets/css/element.ui.mini.css);

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 html,body,#app{
   height: 100%;
   padding:0;
   margin:0; 
 }
</style>
