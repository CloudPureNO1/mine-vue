<template>
    <fragment>
        <fragment v-for="item in menuDatas" :key="item.nodeId">
            <el-menu-item v-if="item.isLeaf" :index="item.url">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.nodeTitle}}</span>
                </template>
            </el-menu-item>
            <el-submenu  v-else :index="item.nodeId">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.nodeTitle}}</span>
                </template>
                <!--递归调用自身 调用的是组件的 name  -->
               
                <span v-if="hasChild(item)">
                    <nav-menu-item :menuDatas="item.children"></nav-menu-item>      
                </span>
            </el-submenu>
        </fragment>
    </fragment>
</template>

<script>
 
export default {
    name:'nav-menu-item',
    props:{
        menuDatas:{
            type:Array,
            required:true
        }
    },
    methods:{
      // 是否有子菜单
      hasChild (item){
          let chd=item.children;
          let len=0;
          if(chd){
              len=chd.length;
          }
          console.log('>>>>>>>>>>>'+(len>0));
        return  len>0
      }
    }
    ,
    watch:{
        //应用类型
        menuDatas:{
            handler(newVal, oldVal) {
                console.info('改变后的值：');
                console.info(newVal);
            },
            deep: true
        } 
    }
}
</script>