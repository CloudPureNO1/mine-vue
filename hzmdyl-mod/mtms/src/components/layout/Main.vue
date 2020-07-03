<template>
<div class="main">
    <el-container class="main-container">
        <el-aside :width="asideWidth" class="main-asider">
            <mtms-menu/>
        </el-aside>
        <el-main class="cls-main">
            <el-container class="cls-main-container">
                <el-header class="header" ref="headerRef" style="line-height:auto;">
                    <mtms-header></mtms-header>
                </el-header>
                <el-main class="middler">
                    <mtms-work></mtms-work>
                </el-main>
                <!-- <el-footer class="footer">底部</el-footer> -->
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
         asideWidth:{
             get(){
                 return this.$store.state.layout.asideWidth;
             },
             set(nVal){
                 this.$store.state.layout.asideWidth=nVal;
             }
         } 
    },
    created() {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            this.avatarSize = Number.parseFloat(this.$refs.headerRef.height.replace('px', '')) - 5;
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
    height: 100%;
    color: #b8bcd8;
    background-color: #314358;
}

.main .cls-main,
.cls-main-container {
    height: 100%;
    // padding-left:0px;
    padding: 0px 0px 0px 0px;
}

.cls-main-container .header {
    height: 10%;
    padding: 0px;
    box-shadow: 0 1px 4px #5b5e6126;
    background-color: #f5f7fa;
}

.cls-main-container .middler {
    height: 95%;
    //    border-bottom: solid 1px #dfffff;
    //    border-top: solid 1px #dfffff;
    padding: 1px;
}

 .cls-main-container .el-header ,.cls-main-container .el-footer{
        line-height: 26px;
 }
 
</style>
