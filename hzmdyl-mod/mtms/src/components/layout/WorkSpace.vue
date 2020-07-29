<template>
    <div :class="sizeType=='mini'?'main-work-mini':'main-work'">
        <transition name="fade-transform" mode="out-in" :appear="true">
           <!-- <router-view :key="key"></router-view>-->
            <mtms-tabs></mtms-tabs>
        </transition>
    </div>
</template>
<script>
import  WorkTabs from "@/components/layout/WorkTabs"
import { mapState } from 'vuex'
export default {
    name:'WorkSpace',
    components:{
        'mtms-tabs':WorkTabs
    },
    data(){
        return{
            key:this.$route.path
        }
    },
    computed:{
        ...mapState({
            sizeType:state=>state.layout.sizeType
        })
    }
}
</script>

<style lang="scss">
  .main-work,.main-work .el-tabs{
      height:100%;
  }
  .main-work {
    .el-tabs__item{
        height: 3rem;
        line-height: 3rem;
    }
  }
  .main-work-mini {
    .el-tabs__item{
        height: 2rem;
        line-height:2rem;
    }
  }

 
</style>
 