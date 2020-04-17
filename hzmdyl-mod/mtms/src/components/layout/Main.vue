<template>
    <div class="main">
        <el-container class="main-container">
            <el-aside :width="asideWidth" class="main-asider">
                <mtms-menu :isCollapse="isShow"/>
            </el-aside>
            <el-main class="cls-main">
                <el-container class="cls-main-container">
                    <el-header class="header">
                        <div @click="exchange"  style="text-align: left;">
                            <span v-show="isShow"   class="icon iconfont icon-zhankai icon-style"/>
                            <span v-show="!isShow"  class="icon iconfont icon-shouqi icon-style"/>
                        </div>
                    </el-header>
                    <el-main class="middler">
                         <mtms-work/>
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
export default {
    name:'Main',
    components:{
        'mtms-menu':NavMenu,
        'mtms-work':WorkSpace
    },
    data(){
        return {
            asideWidth:'20%', 
            isShow:false
        }
    },
    methods:{
        exchange(){
            this.isShow=!this.isShow;
            if(this.isShow){
                this.asideWidth='5%';
            }else{
                this.asideWidth='20%';
            }
        }
    } 
}
</script>

 <style lang="scss" >

    .main{
        width:100%;
        height: 100%;
        padding: 0;
        margin:0;
        border:0;
        
    }
    //  .main .el-main,.mian .el-header{
    //      padding-left:0px;
    //  }
     .main .el-menu{
        border-right: 0;
    }

    .main .el-submenu .el-menu-item {
        min-width: auto;
    }
    .main .el-menu-item{
        text-align: left;
        //padding-left:10px;
    }
    .main .el-submenu__title{
        text-align: left;
        //padding-left:10px;
    }
    .main .el-menu--collapse{
        width:auto;
    }
    .main .el-menu-item-group__title{
        text-align: left;
    }
   .main-row{
       height: 100%;
   }
   .footer-row{
       height: 5%;
   }
   .content-row{
       height:85%;
   }
   .header-row{
       height:10%;
   }
  
   .main .main-container{
       height:100%;
       border:solid 1px #f3ebeb;
   }
   .main .main-asider{
       height:100%;
       background-color:#545c64;
   }
   .main .cls-main,.cls-main-container{
       height:100%;
       padding-left:0px;
   }
   .cls-main-container .header{
       height:10%;
       padding:0px;
   }
   .cls-main-container .middler{
       height:85%;
       border-bottom: solid 1px #dfffff;
       border-top: solid 1px #dfffff;
       padding:20px;
   }
   .cls-main-container .footer{
       height: 5%;
   }
   .main .icon-style{
        font-size:30px;
        color:#303133
    }

</style>