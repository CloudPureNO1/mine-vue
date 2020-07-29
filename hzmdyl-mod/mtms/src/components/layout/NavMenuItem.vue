<template>
    <fragment>
        <fragment v-for="item in menuDatas" :key="item.nodeId">
            <el-menu-item v-if="item.isLeaf" :index="item.url" :class="sizeType=='mini'?'submenu-item-mini-cls':''">
                <template slot="title">
                    <span :class="sizeType=='mini'?'nav-menu-cls':''">
                        <i :class="[item.icon,sizeType=='mini'?'nav-menu-cls':'']"></i>
                        <span>{{item.nodeTitle}}</span>
                    </span>
                </template>
            </el-menu-item>
            <el-submenu  v-else :index="item.nodeId" :class="closeMiniSubTitle">
                <template slot="title">
                    <i :class="[item.icon,sizeType=='mini'?'nav-menu-cls-node':'']"></i>
                    <span :class="sizeType=='mini'?'nav-menu-cls-node':''">{{item.nodeTitle}}</span>
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
import { mapState } from 'vuex';
 
export default {
    name:'nav-menu-item',
    props:{
        menuDatas:{
            type:Array,
            required:true
        }
    },
    // created(){
    //     this.$nextTick(function(){
    //         let eles=document.getElementsByClassName('el-submenu__title');
    //         for(let i=0;i<eles.length;i++){
    //            if(this.isCollapse&&this.sizeType=='mini'){
    //                eles[i].style.padding='0!important';
    //            } 
    //         }
    //     })
    // },
    computed:{
        ...mapState({
            sizeType:state=>state.layout.sizeType,
            isCollapse:state=>state.layout.isCollapse
        }),
        closeMiniSubTitle(){
            return (this.isCollapse&&this.sizeType=='mini')?'submenu-item-title-close-cls':'';
        }
    } ,
    methods:{
      // 是否有子菜单
      hasChild (item){
          let chd=item.children;
          let len=0;
          if(chd){
              len=chd.length;
          }
          //console.log('>>>>>>>>>>>'+(len>0));
        return  len>0
      }
    }
    ,
    watch:{
        //应用类型
        menuDatas:{
            handler(newVal, oldVal) {
                //console.info('改变后的值：');
                //console.info(newVal);
            },
            deep: true
        } 
    }
}
</script>

<style  scoped>
.nav-menu-cls{
    font-size:0.8rem!important;
}
.nav-menu-cls-node{
    font-size:0.9rem!important;
}
.nav-menu-cls-node-icon{
    width: auto!important;
    position: absolute!important;
    top: 50%!important;
    left: 50%!important;
    transform: translate(-50%,-50%)!important;
}
.submenu-item-mini-cls {
    height: 2.95rem!important;
    line-height: 2.95rem!important;
}

.menu-item-mini-cls{
    height: 3rem!important;
    line-height: 3rem!important;
}
</style>

<style lang="scss"  >
.submenu-item-title-close-cls{
    .el-submenu__title{
        padding: 0!important;
    }
}
</style>