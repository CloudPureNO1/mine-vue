<template>
  <div class="rbac-resource-tree-main">
    <el-tree 
      :data="roleResourceTreeData"
      node-key="nodeId"
      :show-checkbox="showCheckbox"
      :default-expanded-keys="defaultExpandedKeys" 
      :default-checked-keys="defaultCheckedKeys"
      :props="defaltProps"
      :highlight-current="true"
      :check-on-click-node="true" 
    >
    
        <!-- 自定义树节点 -->
            <span class="custom-tree-node" slot-scope="{node,data}">
                <div>
                    <span :class="data.icon"></span>
                     <span>{{ node.label }}</span>
                </div>              
            </span>
 
    </el-tree>
  </div>
</template>

<script>
import axios from 'axios'
import TreeMock from '@/mock/tree'
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
        showCheckbox:true,
        defaultExpandedKeys:[2,3],
        defaultCheckedKeys:[5],
        defaltProps: {
            label: "nodeName",
            children: "children",
            isLeaf: "isLeaf"  
        },
        roleResourceTreeData: [] ,
        params:{
            nodeId:''
        }
    };
  },
  mounted(){
      this.loadTreeNode();
  },
  methods:{
      loadTreeNode(){
                this.params.nodeId=null;
                 axios.post('/mtms/api/loadAllTree',this.params)
                 .then((resp)=>{
                    if(resp.data.code!=0){
                        this.$alert(resp.data.msg,'提示');
                        return false;
                    }else{
                        this.roleResourceTreeData=resp.data.body;
                    }
                 })
                 .catch((err)=>{
                     this.$alert(err,'提示');
                     return false;
                 });
            }
      } 
};
</script>

<style scoped>
  .rbac-resource-tree-main{
   /* border-right: 1px solid #b9ceec;*/
    height: calc(84vh);
    width: 100%;
    padding:4px 0 0 0; 
  }
</style>
 