<template>
    <div class="el-home-outer">
        <el-row class="header-row">
            <el-col :span="24" class="el-col-contentDiv-header">
                <div>
                    头部
                </div>
            </el-col>
        </el-row>
        <el-row class="main-row">
            <el-col :span="leftGridNum" class="el-col-contentDiv-left">
                <div>
                    <mtms-collapse/> 
                </div>
            </el-col>
            <el-col :span="rightGridNum" class="el-col-contentDiv-right">
                <div>右侧</div>
            </el-col>
        </el-row>
        <el-row class="footer-row">
            <el-col :span="24" class="el-col-contentDiv-footer">
                <div>
                    底部
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Collapse from '@/components/Collapse'
export default {
    components:{
        'mtms-collapse':Collapse
    },
    data(){
        return {
            leftGridNum:5,//左侧栅格的格数，
            rightGridNum:19//右侧栅格的格数，element-ui 总格数未24，Bootstrap 中是12
        }
    } 

}
</script>

 <style lang="scss" scoped>
    .el-home-outer{
        width:100%;
        height: 100%;
        padding: 0;
        margin:0;
        border:0;
    }

    .el-col-contentDiv-header{
        border:1px solid #99bbe8;
        height: 100%;
        
   }
    .el-col-contentDiv-footer{
        border:1px solid #99bbe8;
        height: 100%;
        
   }
    .el-col-contentDiv-left{
        border-left:1px solid #99bbe8;
        height: 100%;
        
   }
    .el-col-contentDiv-right{
        border-right:1px solid #99bbe8;
        border-left:1px solid #99bbe8;
        height: 100%;
        
   }
   .main-row{
       height: 85%;
   }
   .footer-row{
       height: 5%;
   }
   .header-row{
       height:10%;
   }
</style>