<template>
  <div class="leftTree">
    <el-tree
      :data="data"
      node-key="nodeId"
      :props="defaltProps"
      :highlight-current="true"
      :check-on-click-node="true" 
      lazy
      :load="loadTreeNode"
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
export default {
  data() {
    return {
      defaltProps: {
        label: "nodeName",
        children: "children",
        isLeaf: "isLeaf"  
      },
      data: [] ,
      params:{
          nodeId:''
      }
    };
  },
  methods:{
      loadTreeNode(node, resolve){
            console.log(">>>>>>>>>>start>>>>>>>>>>>>");
            console.log(">>>>node.level="+node.level);
             
            if(node.level==0){//根root
                this.params.nodeId=null;
                 axios.post('/mtms/api/loadTree',this.params)
                 .then((resp)=>{
                    if(resp.data.code!=0){
                        this.$alert(resp.data.msg,'提示');
                        return false;
                    }else{
                        return resolve(resp.data.data);
                    }
                 })
                 .catch((err)=>{
                     this.$alert(err,'提示');
                     return false;
                 });
            }
            if(node.level>0){
                 let isLeaf=node.data.isLeaf;
                 let nodeId=node.data.nodeId;
                 if(!isLeaf){
                     this.params.nodeId=nodeId;
                     axios.post('/mtms/api/loadTree',this.params)
                     .then((resp)=>{
                         if(resp.data.code!='0'){
                             this.$alert(resp.data.msg,'提示');
                             return false;
                         }else{
                            return resolve(resp.data.data);
                         }
                     })
                     .catch((err)=>{
                         this.$alert(err,'提示');
                         return false;
                     });
                 }else{
                     this.$alert('是叶子节点','提示');
                     return false;
                 }
            }
 
            console.log('>>>>>>>>>>>>end>>>>>>>>>>>>')
      } 
  }
};
</script>

<style lang="scss">
  .leftTree .el-tree-node__expand-icon.expanded{
    // 旋转90度
    // -webkit-transform: rotate(90deg); 
    //  transform: rotate(90deg);
     -webkit-transform: rotate(0deg); 
     transform: rotate(0deg);
  }
</style>