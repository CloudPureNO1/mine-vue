<template>
    <div class="main-work">
        <transition name="fade-transform" mode="out-in" :appear="true">
           <!-- <router-view :key="key"></router-view>-->
            <mtms-tabs></mtms-tabs>
        </transition>
    </div>
</template>
<script>
import  WorkTabs from "@/components/layout/WorkTabs"
export default {
    name:'WorkSpace',
    components:{
        'mtms-tabs':WorkTabs
    },
    data(){
        return{
            key:this.$route.path
        }
    }
}
</script>

<style>
  .main-work,.main-work .el-tabs{
      height:100%;
  }
  .main-work .el-tabs__item{
      height: 30px;
      line-height: 30px;
  }
</style>
 