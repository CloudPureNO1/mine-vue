<template>
  <el-row style="height:100%;">
    <el-col :span="20" style="height:100%;">
      <el-row style="height:70%;">
        <el-col :span="24" class="main-header-title">
          <span>浙江网新恩普软件有限公司</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div @click="exchange" class="main-exchange" >
            <span v-show="isShow" class="icon iconfont icon-zhankai icon-style" />
            <span v-show="!isShow" class="icon iconfont icon-shouqi icon-style"  />
          </div>
          <!--面包屑-->
          <mtms-breadcrumb></mtms-breadcrumb>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="4" style="height:100%;">
      <div style="float:right;height:100%;padding:5px;">
        <div style="height:50%;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div style="height:50%;">
          <el-dropdown>
            <i class="el-icon-caret-bottom" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div style="float:right;padding-right:10px;height:100%;display:flex;">
        <el-avatar
          shape="circle"
          :size="avatarSize"
          :fit="fit"
          :src="avatarData.url"
          style="align-self:center;"
        ></el-avatar>
      </div>
    </el-col>
  </el-row>
</template>

 <script>
 import MainHeaderBreadcrumb from '@/components/layout/MainHeaderBreadcrumb' 
 export default {
     components:{
       'mtms-breadcrumb':MainHeaderBreadcrumb
     },
     data(){
         return{
             isShow:false,
             fit:'fill',
             avatarSize:40,//默认
             avatarData:{
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
             }
         }
     },
     methods:{
        exchange(){
            let paramValue={};
            this.isShow=!this.isShow;
            paramValue.isShow=this.isShow;
            if(this.isShow){
                paramValue.asideWidth='5%';
            }else{
                paramValue.asideWidth='20%';
            }
            //给父组件传值
            this.$emit('getShow',paramValue);
        }
     }
 }
 </script>

<style>
   .main-exchange{
    float:left;
    margin-right: 10px;
    height:100%;
  }
   .main-exchange:hover{
    background-color:#dfffff;
  }
</style>