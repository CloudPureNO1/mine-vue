<template>
    <div >
        <el-breadcrumb separator-class="el-icon-arrow-right" >
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="item in levelList" :key="item.name">
                    <a v-if="isLeafPath(item)" @click.prevent="handleLink(item)">
                        <span :class="breadCrumbSize">{{ item.meta.title }}</span>
                    </a>
                    <span v-else  :class="breadCrumbSize">{{item.meta.title }}</span>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: 'Navbar',
        data() {
            return {
                levelList: []
            }
        },
        watch: {
            $route() {
                this.getData()
            }
        },
        created(){
            this.getData()
        },
        computed:{
            ...mapState({
                sizeType:state=>state.layout.sizeType
            }),
            breadCrumbSize(){
                return 'bread-crumb-cls-'+(this.sizeType=='small'?'nomal':'small')
            }
        },
        methods:{
            getData() {
                this.levelList=[];
                let flag=false;
                let matched=this.$route.matched.filter(item=>item.name);//去掉name为空的路由
                this.$route.matched.forEach((item,index) => {
                    if(item.name.trim()!=='Home'){
                         if(index===0){
                            this.levelList.push({'path':'/Home','name':'Home','meta':{'title':'首页'}});
                         }
                         let metaData=item.meta.data;
                         if(metaData){
                            if(!flag){//取第一个meta.data 不为空的路由，添加对应的非叶子节点到面包屑中，后面的就不需要了
                                metaData.forEach(nodeItem=>{
                                    this.levelList.push({'path':'','name':'Name'+nodeItem,'meta':{'title':nodeItem}});
                                });
                                flag=true;//设置为true,后面的路由不需要
                            }
                            //继续添加后面的路由
                         }
                     }
                     this.levelList.push(item);
                })
            },
            isLeafPath(item){
                if(!item.path){
                    return false;
                }else{
                    return true;
                }
            },
            handleLink(item) {
                this.$router.push(item.path);
            }
        }
    }
</script>
 

 <style scoped>
 .box{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.item{
   align-self:center;

}
 </style>

 
 