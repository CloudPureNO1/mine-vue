<template>
    <div class="mtms-home" >
        <mtms-main/>
    </div>
</template>

<script>
import Mian from '@/components/layout/Main'
export default {
    components:{
        'mtms-main':Mian
    }
}
</script>

<style scoped lang="scss">
  .mtms-home {
    font-size:  0.75rem;
    height:100%;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {

    min-width: 200px;
    min-height: 400px;
  }
</style>