<template>
   <div class="main">
       <el-row>
           <el-col :span="span">
               <el-menu 
                :collapse="isCollapse"
                background-color="#545c64"
                active-text-color="#ffd04b"
                text-color="#ffffff"
                :default-active="this.$route.path"
                @open="handleOpen"
                @select="handleSelect"
                > 
                   <nav-menu-item :menuDatas="navDatas"></nav-menu-item>  
               </el-menu>
           </el-col>
       </el-row>
   </div> 
</template>
<script>
import axios from 'axios'
import nav from '@/mock/nav.js'
import NavMenuItem from '@/components/layout/NavMenuItem'
export default {
    name:'NavMenu',
    components:{
        'nav-menu-item':NavMenuItem
    },
    props:{
        isCollapse:{
            type:Boolean,
            required:true
        }
    },
    data(){
        return{
            span:24,
            navDatas:[]  
        }
    },
    methods:{
        handleOpen(index,indexPath){
            //console.log('open：>>>>index='+index+'>>>>indexPath='+indexPath);
            this.loadNavData(index); 
            //console.log(this.navDatas);
             
        },
        handleSelect(index,indexPath){
            console.log('select：>>>>index='+index+'>>>>indexPath='+indexPath);
            this.$router.push(index);
        },
        handleUrl(url){
           // window.location.href=url;
           let rm=this.$router.resolve(url);
           let matched=rm.resolved.matched;//如果在路由中有配置，那么这个数组大于0，否则为0
           if(matched.length>0){
               this.$router.push(url);
           }else{
                window.open(url,'_blank');
           }
        },
        loadNavData(nodeId){
            let params={};
            params.nodeId=nodeId;
            axios.post('/mtms/api/loadNavData',params)
            .then((resp)=>{
                if(resp.data.code=='0'){
                    let subData=resp.data.body;
                    if(!Array.isArray(subData)){
                        this.$alert('数据格式有误');
                        return;
                    }
                    if(subData==null||subData=='undefined'||subData.length<1){
                        this.$alert('没有子节点');
                        return;
                    }
                    if(nodeId=='root'){
                        this.navDatas=subData;
                    }else{
                        this.navDatas=this.navDatas.map((item)=>{
                                            if(item.nodeId==nodeId){
                                                item.children=subData;
                                            }
                                            return item;
                                        });
                    }
                }else{
                    this.$alert(resp.data.msg, '温馨提示');
                }
            })
            .catch((err)=>{
                this.$alert(err,"错误");
            });
             
        }
    },
    created(){
        this.loadNavData('root');
    }
}
</script>
