<template>
    <div>
        <el-tree
            :data="data"
            accordion
            default-expand-all >
            <span class="custom-tree-node" slot-scope="{ node, data }">
                <i class="el-icon-s-management"></i><span>{{ node.label }}</span>
            </span>
        </el-tree>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        data: [{
          label: '医共体一',
          children: [
              { id:'99999999',label: '浙江网新恩普软件有限公司99999999'},
              { id:'88888888',label: '浙江网新博创科技有限公司88888888'},
              { id:'77777777',label: '浙江华通云数据科技有限公司77777777'},
              { id:'66666666',label: '浙江网新系统工程有限公司66666666'},
              { id:'55555555',label: '杭州普吉投资管理有限公司55555555'},
              { id:'44444444',label: '网新(香港)国际投资有限公司44444444'},
              { id:'33333333',label: '浙大网新系统工程有限公司33333333'}
          ]  
        }]
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>