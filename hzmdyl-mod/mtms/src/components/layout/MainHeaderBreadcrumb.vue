<template>
    <div class="main-breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <fragment v-for="(item,index) in levelList" :key="index">
                <el-breadcrumb-item v-if="isLeafPath(item)" :to="{path:item.path}">
                    <fragment v-if="item.meta.data">
                        <fragment v-for="(subTitle,i) in  item.meta.data" :key="i">
                            {{subTitle}}
                            <i class="el-icon-arrow-right" style="color: #C0C4CC;"></i>
                        </fragment>
                    </fragment>
                    {{item.meta.title}}
                </el-breadcrumb-item>
                <el-breadcrumb-item v-else>{{item.meta.title}}</el-breadcrumb-item>
            </fragment>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                levelList: []
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        created(){
            this.getBreadcrumb()
        },
        methods:{
            getBreadcrumb() {
                this.levelList=[];
                let flag=false;
                let matched=this.$route.matched.filter(item=>item.name);//去掉name为空的路由
                // this.$route.matched.forEach((item,index) => {
                //      if(item.name.trim()!=='Home'){
                //          let metaData=item.meta.data;
                //          if(metaData){
                //             if(!flag){//取第一个meta.data 不为空的路由，添加对应的非叶子节点到面包屑中，后面的就不需要了
                //                 metaData.forEach(nodeItem=>{
                //                     this.levelList.push({'path':'','name':'Name'+nodeItem,'meta':{title:nodeItem}});
                //                 });
                //                 flag=true;//设置为true,后面的路由不需要
                //             }
                //             //继续添加后面的路由
                //          }
                //          this.levelList.push(item);
                //      }
                // })
                let first=matched[0];
                if(first.name.trim()!=='Home'){
                    matched=[{'path':'/','name':'Home','meta':{'title':'首页'}}].concat(matched);
                }
               if(!matched[0].path){
                   matched[0].path='/';
               }
               this.levelList=matched;
            },
            isLeafPath(item){
                if(!item.path){
                    return false;
                }else{
                    return true;
                }
            }
        }
    }
</script>
 