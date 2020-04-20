<template>
    <div class="main">
        <el-container class="main-container">
            <el-aside :width="asideWidth" class="main-asider">
                <mtms-menu :isCollapse="isShow"/>
            </el-aside>
            <el-main class="cls-main">
                <el-container class="cls-main-container">
                    <el-header class="header" style="text-align:right;"  ref="headerRef">
                        <section @click="exchange"  style="text-align: center; float:left;width:40px;height:100%; background-color:#dfffff;display: flex;">
                            <span v-show="isShow"   class="icon iconfont icon-zhankai icon-style" style="align-self: center;"/>
                            <span v-show="!isShow"  class="icon iconfont icon-shouqi icon-style" />
                        </section>
                        <section style="float:left;height:100%;display: flex;">
                            <el-breadcrumb separator-class="el-icon-arrow-right" style="align-self: center;">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                            </el-breadcrumb>
                        </section>
                        <section style="height:100%;">
                             <section style="float:right;height:100%;">
                                <section style="height:50%;"> 
                                    <el-dropdown>
                                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                                        <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>查看</el-dropdown-item>
                                        <el-dropdown-item>新增</el-dropdown-item>
                                        <el-dropdown-item>删除</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                 </section>
                                 <section style="height:50%;" >
                                    <el-dropdown>
                                        <i class="el-icon-caret-bottom" style="margin-right: 15px"></i>
                                        <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>查看</el-dropdown-item>
                                        <el-dropdown-item>新增</el-dropdown-item>
                                        <el-dropdown-item>删除</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                 </section>
                            </section>
                            <section style="float:right;padding-right:10px;height:100%;">
                                <el-avatar shape="circle" :size="avatarSize" :fit="fit" :src="avatarData.url"></el-avatar>
                            </section>
                        </section>
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
            isShow:false,
            fit:'fill',
            avatarSize:40,//默认
            avatarData:{
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
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
        },
    },
    created(){
        this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered
            this.avatarSize = Number.parseFloat(this.$refs.headerRef.height.replace('px',''))-5;
        })
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
      // padding-left:0px;
        padding:0px 0px 0px 0px;
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