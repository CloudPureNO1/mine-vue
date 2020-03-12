<template>
    <div class="mine-collapse">
        <el-collapse accordion>
            <el-collapse-item>
                <!--自定义模板内容，此处自定义了这个折叠板的标题title-->
                <template slot="title">
                    <div class="collapse-title-template">
                        <i class="el-icon-menu" style="color:#409eff;"></i>
                        <span style="margin-left:3px;">权限系统管理 </span>
                    </div>
                </template>

                <div>
                    <ELTree></ELTree>
                </div>
            </el-collapse-item>

            <el-collapse-item title="后台管理">
                <div>
                    后台管理内容
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import ELTree from '@/components/el/Tree'
export default {
    data(){
        return {

        }
    },
    components:{
        ELTree
    }
}
</script>
<style lang="scss" >
    .mine-collapse{
        color:#303133;
    }
    .collapse-title-template{
        font-size: 1.0em;
        font-weight: 600;
    }
 
 .mine-collapse.el-collapse-item__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #FFF;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #EBEEF5;
    font-size: 1.0em;
    font-weight: 500;
    -webkit-transition: border-bottom-color .3s;
    transition: border-bottom-color .3s;
    outline: 0;
}
</style>