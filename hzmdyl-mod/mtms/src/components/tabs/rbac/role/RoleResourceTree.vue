<template>
  <div class="rbac-resource-tree-main" :style="{height:treeMaxHeight}">
    <el-tree ref="roleResourceTree"
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
  computed:{
    ...mapState({
      tabContentHeight:state=>state.layout.tabContentHeight
    }),
    treeMaxHeight(){
      return this.tabContentHeight;
    }
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
    width: 100%;
    padding:4px 0 0 0;
    overflow:auto; 
  }
  .rbac-resource-tree-main .custom-tree-node span{
    font-size:1.10rem;
    font-weight: 400;
    color: #3e89e6;
  }
</style>
 