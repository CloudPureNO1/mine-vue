<template>
<div class="main">
   <el-container class="main-container">
         
        <el-aside :width="asideWidth" :class="['main-asider',amnitCls]" >
            <mtms-menu/>
        </el-aside>
       
        <el-main class="cls-main">
            <el-container class="cls-main-container">
                <el-header class="header" ref="headerRef" >
                    <mtms-header></mtms-header>
                </el-header>
                <el-main class="middler">
                    <mtms-work></mtms-work>
                </el-main>
                 
            </el-container>
        </el-main>
    </el-container>
 
 
</div>
</template>

<script>
 
import NavMenu from '@/components/layout/NavMenu'
import WorkSpace from '@/components/layout/WorkSpace'
import MainHeader from '@/components/layout/MainHeader'
import { mapState } from 'vuex'
export default {
    name: 'Main',
    components: {
        'mtms-menu': NavMenu,
        'mtms-work': WorkSpace,
        'mtms-header': MainHeader
    },
    computed: {
         ...mapState({
             asideWidth:state=>state.layout.asideWidth
         }),
         amnitCls(){
             return this.asideWidth=='17%'?'main-asider-5-17':'main-asider-17-5'
         },
         asiderSpan(){
             return this.asideWidth=='17%'?4:1
         }
        
    },
    created() {
        this.$nextTick(function () {
           this.$refs.headerRef.$el.removeAttribute('style');
            
        })
    }

}
</script>

 
<style lang="scss">
.main {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: 0;

}

.main .el-main {
    padding: 1px;
}

//  .main .el-main,.mian .el-header{
//      padding-left:0px;
//  }
.main .el-menu {
    border-right: 0;
}

.main .el-submenu .el-menu-item {
    min-width: auto;
}

.main .el-menu-item {
    text-align: left;
    //padding-left:10px;
}

.main .el-submenu__title {
    text-align: left;
    //padding-left:10px;
}

.main .el-menu--collapse {
    width: auto;
}

.main .el-menu-item-group__title {
    text-align: left;
}

.main-row {
    height: 100%;
}

.footer-row {
    height: 5%;
}

.content-row {
    height: 85%;
}

.header-row {
    height: 10%;
}

.main .main-container {
    height: 100%;
    border: solid 1px #f3ebeb;
}

.main .main-asider {
    width: 5%;
    height: 100%;
    color: #b8bcd8;
    background-color: #314358;
    
}

.main .main-asider-5-17 {
 
    animation:myfirst-5-17 .5s;
    //transform-origin:0% 0%;
	/* Firefox: */
	-moz-animation:myfirst-5-17 .5s;
   // -moz-transform-origin:0% 0%;
	/* Safari and Chrome: */
	-webkit-animation:myfirst-5-17 .5s;
    //-webkit-transform-origin:0% 0%;
	/* Opera: */
	-o-animation:myfirst-5-17 .5s;
    //-o-transform-origin:0% 0%;
}

@keyframes myfirst-5-17 
{
	// 0% {transform:scaleX(.29);}
	// 100% {transform:scaleX(1);}
    0% {width: 5%;}
    100% {width: 17%;}
}

@-moz-keyframes myfirst-5-17  
{
    0% {width: 5%;}
    100% {width: 17%;}
}

@-webkit-keyframes myfirst-5-17 
{
    0% {width: 5%;}
    100% {width: 17%;}
}

@-o-keyframes myfirst-5-17 
{
    0% {width: 5%;}
    100% {width: 17%;}
}


.main .main-asider-17-5 {
     
    animation:myfirst-17-5 .5s;
    //transform-origin:0% 0%;
	/* Firefox: */
	-moz-animation:myfirst-17-5 .5s;
    //-moz-transform-origin:0% 0%;
	/* Safari and Chrome: */
	-webkit-animation:myfirst-17-5 .5s;
    //-webkit-transform-origin:0% 0%;
	/* Opera: */
	-o-animation:myfirst-17-5 .5s;
    //-o-transform-origin:0% 0%;
}

@keyframes myfirst-17-5
{
	// from {transform:scaleX(3.4);}
	// to {transform:scaleX(1);}
    0% {width: 17%;}
    100% {width: 5%;}
}

@-moz-keyframes myfirst-17-5  
{
    0% {width: 17%;}
    100% {width: 5%;}
}

@-webkit-keyframes myfirst-17-5
{
    0% {width: 17%;}
    100% {width: 5%;}
}

@-o-keyframes myfirst-17-5
{
    0% {width: 17%;}
    100% {width: 5%;}
}

.main .cls-main,
.cls-main-container {
    height: 100%;
    // padding-left:0px;
    padding: 0px 0px 0px 0px;
}

.cls-main-container .header {
   // height: 10%;
    height: auto;
    padding: 0px;
    box-shadow: 0 1px 4px #5b5e6126;
    background-color: #f5f7fa;
}

.cls-main-container .middler {
    min-height: 90%;
    //    border-bottom: solid 1px #dfffff;
    //    border-top: solid 1px #dfffff;
    padding: 1px;
}

 .cls-main-container  .cls-main-container .el-footer{
        line-height: 26px;
 }
 
</style>
