<template>
    <div class="mine-collapse">
        <el-collapse accordion>
            <el-collapse-item>
                <!--自定义模板内容，此处自定义了这个折叠板的标题title-->
                <template slot="title">
                    <div class="collapse-title-template">
                        <i class="el-icon-menu" style="color:#409eff;"></i>
                        <span class="title" style="color:#409eff;">权限系统管理 </span>
                    </div>
                </template>

                <div>
                    <mtms-tree/>
                </div>
            </el-collapse-item>

            <el-collapse-item>
                <!--自定义模板内容，此处自定义了这个折叠板的标题title-->
                <template slot="title">
                    <div class="collapse-title-template">
                        <i class="el-icon-menu" style="color:#ffa500;"></i>
                        <span class="title" style="color:#ffa500;">用户管理</span>
                    </div>
                </template>
                 <div>
                    <mtms-tree/>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import Tree from '@/components/Tree'
export default {
    
    components:{
        'mtms-tree':Tree
    },
    data(){
        return{
            
        }
    }

}
</script>
<style >
    .mine-collapse{
        color:#303133;
    }
    .collapse-title-template{
        font-size: 1.5em;
        font-weight: 600;
    }
    .collapse-title-template .title{
        margin-left:3px;
    }
    .collapse-title-template .title:hover{
        margin-left:3px;
        background-color:#38393d;
    }
 
 .mine-collapse .el-collapse-item__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #303133;
    color: #ffffff;
    cursor: pointer;
    border-bottom: 1px solid #303133;
    font-size: 1.0em;
    font-weight: 500;
    -webkit-transition: border-bottom-color .3s;
    transition: border-bottom-color .3s;
    outline: 0;
}

.mine-collapse .el-collapse-item__content {
    padding-bottom: 25px;
    font-size: 13px;
    color: #ffffff;
    background-color:#303133
}

.mine-collapse .el-collapse-item__wrap {
    will-change: height;
    background-color: #303133;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #303133;
}
.mine-collapse .el-collapse {
    /* border-top: 1px solid #EBEEF5; */
    /* border-bottom: 1px solid #EBEEF5; */
    border:0px;
}
</style>