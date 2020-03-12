<template>
  <div>
    <!-- <el-row >
            <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="1">
            <el-col :xs="18" :sm="15" :md="8" :lg="5" :xl="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="6" :sm="9" :md="16" :lg="19" :xl="20"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row >
            <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
        </el-row> -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
           
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="1">
      <el-col :xs="18" :sm="15" :md="8" :lg="5" :xl="4">
        <div >
            <MenuTree></MenuTree>
        </div>
      </el-col>
      <el-col :xs="6" :sm="9" :md="16" :lg="19" :xl="20">
        <div class="grid-content bg-purple-light">
            <TopMenu></TopMenu>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuTree from '@/components/MenuTree'
import NavMenu from '@/components/NavMenu'
import TopMenu from '@/components/TopMenu'
 export default{
    data(){
        return{

        }
    },
    components:{
        MenuTree,
        NavMenu,
        TopMenu
    }
}
</script>


<style lan="scss">
  .el-row {
    margin-bottom: 1px;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>
