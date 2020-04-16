<template>
    <div class="main">
        <el-row class="main-row">
            <el-col :span="leftGridNum" class="main-row-left">
                <div>
                    <!-- <mtms-collapse/>  -->
                    <mtms-menu :isCollapse="isShow"/>
                </div>
            </el-col>
            <el-col :span="rightGridNum" class="main-row-right">
                <el-row class="header-row">
                    <el-col :span="24" class="content">
                        <div @click="exchange"  style="text-align: left;">
                            <span v-show="isShow"   class="icon iconfont icon-zhankai icon-style"/>
                            <span v-show="!isShow"  class="icon iconfont icon-shouqi icon-style"/>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="content-row">
                    <el-col :span="24" class="content">
                        
                            <mtms-work style="width:100%;"/>
                        
                    </el-col>
                </el-row>
                <el-row class="footer-row">
                    <el-col :span="24" class="content">
                        <div>
                            底部
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import Collapse from '@/components/Collapse'
import NavMenu from '@/components/NavMenu'
import WorkSpace from '@/components/WorkSpace'
export default {
    components:{
        'mtms-collapse':Collapse,
        'mtms-menu':NavMenu,
        'mtms-work':WorkSpace
    },
    data(){
        return {
            leftGridNum:4,//左侧栅格的格数，
            rightGridNum:20,//右侧栅格的格数，element-ui 总格数未24，Bootstrap 中是12
            isShow:false
        }
    },
    methods:{
        exchange(){
            this.isShow=!this.isShow;
            if(this.isShow){
                this.leftGridNum=1;
                this.rightGridNum=23;
            }else{
                this.leftGridNum=4;
                this.rightGridNum=20;
            }
           
            console.log(this.isShow);

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

    .main-row .main-row-left{
        border-left:solid 1px #e6e6e6;
        border-right:solid 1px #e6e6e6;
        height: 100%;
      //  background-color: #303133;
        padding-left:5px;
        background:#545c64;
   }
 
    .main-row .main-row-right{
        //border-left:solid 1px #e6e6e6;
        border-right:solid 1px #e6e6e6;
        height: 100%;
   }

    .content{
        border:solid 1px #e6e6e6;
        height: 100%;
       // background-color: #303133;
   }
   .main .icon-style{
        font-size:30px;
        color:#303133
    }

</style>