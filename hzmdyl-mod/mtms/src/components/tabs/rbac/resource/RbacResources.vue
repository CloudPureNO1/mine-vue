<template>
    <div class="rbac-resource-main">
        <el-row>
          <el-col :span="5"> 
            <el-card shadow="never">
                <mtms-rbac-resources-tree></mtms-rbac-resources-tree>
            </el-card>
          </el-col>
          <el-col :span="19">
            <el-card shadow="never">
                <mtms-rbac-resources-edit></mtms-rbac-resources-edit>
            </el-card>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import RbacResourcesTree from './RbacResourcesTree';
import RbacResoucesEdit from './RbacResoucesEdit';
import {mapActions, mapState} from 'vuex'
export default {
    components:{
        'mtms-rbac-resources-tree':RbacResourcesTree,
        'mtms-rbac-resources-edit':RbacResoucesEdit
    },
 
    created() {
        this.setNodeData({})
    }, 
    computed:{
        ...mapState({
            tabContentHeight:state=>state.layout.tabContentHeight,
        }),
        maxHeight(){
            return this.tabContentHeight;
        }
    },
    methods:{
      ...mapActions({
        setNodeData:'resource/setNodeData'
      }),
    }
}
</script>

<style scoped>
    .rbac-resource-main{
        height:100%;
    }
     
</style>