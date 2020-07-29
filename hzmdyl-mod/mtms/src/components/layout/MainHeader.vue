<template>
 <span @dblclick="toggleFullScreen">
<el-row class="box">
    <el-col :span="20" class="item">
         <span class="box">
            <span @click="exchange" :class="['icon iconfont', collapse ,isCollapseImgSize,'item']" ></span>
             <span class="item">&nbsp;&nbsp;&nbsp;</span>
            <mtms-breadcrumb class="item"></mtms-breadcrumb>
        </span>
    </el-col>
    <el-col :span="4" >
        <mtms-avatar></mtms-avatar>
    </el-col>
</el-row>
 </span>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import MainHeaderBreadcrumb from '@/components/layout/MainHeaderBreadcrumb'
import MainHeaderAvatar from '@/components/layout/MainHeaderAvatar'
export default {
    components: {
        'mtms-breadcrumb': MainHeaderBreadcrumb,
        'mtms-avatar': MainHeaderAvatar
    },
    data() {
        return {
            isShow: false
        }
    },
    computed: {
        ...mapState({
             isFullScreen:state=>state.layout.isFullScreen,
             isCollapse:state=>state.layout.isCollapse,
             sizeType:state=>state.layout.sizeType
        }),
        // isCollapse:{
        //      get(){
        //          return this.$store.state.layout.isCollapse;
        //      },
        //      set(nVal){
        //          this.$store.state.layout.isCollapse=nVal;
        //      }
        //  },
        collapse(){
            return this.isCollapse?'icon-zhankai':'icon-shouqi';
        },
        isCollapseImgSize(){
            return 'iconfont-'+(this.sizeType=='mini'?'small':'medium');
        },
        titleSize(){
            return 'main-header-title-'+this.sizeType;
        }
    },
    // created(){
    //     let _this=this;
    //     this.$nextTick(()=>{
    //        let dHeader = document.getElementsByClassName('el-header header')[0];
    //        dHeader.addEventListener('dblclick', function (ev) {
    //             _this.toggleFullScreen();
    //         });
    //     });
    // },
    methods: {
         ...mapActions({
            toggleIsFullScreen:'layout/toggleIsFullScreen'
        }),
        exchange() {
            this.$store.commit('layout/togleShow');
            this.$store.dispatch('layout/setAsideWidth');
        },
       toggleFullScreen(){
           this.$toggleFullScreen(this.isFullScreen);
           this.toggleIsFullScreen();
       }
    }
}
</script>

<style>
.main-exchange {
    float: left;
    margin-right: 10px;
    height: 100%;
}

.main-exchange:hover {
    background-color: #dfffff;
}
 
</style>
