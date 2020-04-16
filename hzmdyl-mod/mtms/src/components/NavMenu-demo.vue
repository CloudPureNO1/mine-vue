<template>
    <div class="main">
        <el-row >
          <el-col :span="span" >
              <el-menu
                default-active="2"
                background-color="#545c64"
                text-color="#ffffff"
                active-text-color="#ffd04b"
                :collapse="isCollapse"
              >
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                        <template slot="title">分组1</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2" >
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </template>
                        <el-menu-item index="2-1" @click="handleUrl('http://www.baidu.com')">百度</el-menu-item>
                        <el-submenu index="2-1">
                           <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">详情</span>
                          </template>
                          <el-menu-item index="2-1-1">detail</el-menu-item>
                        </el-submenu>
                    </el-submenu>
              </el-menu>
          </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
      props:{
          isCollapse:{
            type:Boolean,
            required:true
          }
      },
      data(){
          return{
             span:24
          }
      },
      methods: {
        handleUrl(url){
           // window.location.href=url;
           let rm=this.$router.resolve(url);
           let matched=rm.resolved.matched;//如果在路由中有配置，那么这个数组大于0，否则为0
           if(matched.length>0){
               this.$router.push(url);
           }else{
                window.open(url,'_blank');
           }
        }
      }
  }
</script>