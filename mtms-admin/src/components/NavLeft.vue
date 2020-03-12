 
                <!-- vue  中 v-for 的优先级高于 v-if ，不建议在同一元素中同时使用
                采用外层嵌套的方式 利用其它元素，此处 采用label -->
                <template >
                    <div >
                        <div   v-for="menu in menuList" v-bind:key="menu.id" :class="{oneLine:isFirst}">

                            <el-menu-item v-if="menu.isLeaf=='0'" :index="menu.id" @click="handleUrl(menu.url)" >
                                <!-- {{menu.title}} -->
                                <i :class="menu.icon"></i>
                                <span slot="title"  >{{menu.title}}</span>
                                </el-menu-item>
                            <el-submenu v-else  :index="menu.id" class="item">
                                <template slot="title">
                                   <i :class="menu.icon"></i>
                                    <span slot="title" >{{menu.title}}</span>
                                </template>
                                <!-- 递归调用自己 -->
                                <NavLeft :menuList="menu.children" :isFirst="false"></NavLeft>
                            </el-submenu>
                        </div>
                    </div>
                </template>
 

<script>
import NavLeft from '@/components/NavLeft'

export default {
    name:'NavLeft',
    props: ['menuList',"isFirst" ],
    data(){
        return{
             
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
    },
    components:{
        NavLeft
    }
   
}
</script>

<style scoped>
.oneLine{
    display: inline-block;
    
}
 
.titleHide {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
</style>
 