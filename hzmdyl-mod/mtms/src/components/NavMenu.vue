<template>
   <div class="main">
       <el-row>
           <el-col :span="span">
               <el-menu 
                :collapse="isCollapse"
                background-color="#545c64"
                active-text-color="#ffd04b"
                text-color="#ffffff"
                :default-active="$route.path"
                > 
 
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">系统管理</span>
                        </template>
                        <el-menu-item index="1-1" @click="handleUrl('/rbacUsers')">
                            <template slot="title">
                                <i class="el-icon-s-custom"></i>
                                <span slot="title">用户管理</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="1-2" @click="handleUrl('/rbacRoles')">
                            <template slot="title">
                                <i class="el-icon-s-data"></i>
                                <span slot="title">角色管理</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="1-3" @click="handleUrl('http://www.baidu.com')">
                            <template slot="title">
                                <i class="el-icon-s-data"></i>
                                <span slot="title">外部链接</span>
                            </template>
                        </el-menu-item>
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
    methods:{
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
