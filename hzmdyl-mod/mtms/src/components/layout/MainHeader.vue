<template>
<el-row style="height:100%;">
    <el-col :span="20" style="height:100%;">
        <el-row style="height:55%;" class="parent-transform">
            <el-col :span="24" class="main-header-title children-transform-vertical">
                <div class="children-inline-transform-vertical">浙江网新恩普软件有限公司</div>
            </el-col>
        </el-row>
        <el-row style="height:45%;">
            <el-col :span="24" style="display:flex">
                <div @click="exchange" class="main-exchange" style="align-self:center;">
                    <span v-show="this.isCollapse" class="icon iconfont icon-zhankai icon-style" />
                    <span v-show="!this.isCollapse" class="icon iconfont icon-shouqi icon-style" />
                </div>
                <!--面包屑-->
                <mtms-breadcrumb style="align-self:center;"></mtms-breadcrumb>
            </el-col>
        </el-row>
    </el-col>
    <el-col :span="4" style="height:100%;">
        <mtms-avatar></mtms-avatar>
    </el-col>
</el-row>
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
            // // 箭头函数可使代码更简练
            // count: state => state.count,

            // // 传字符串参数 'count' 等同于 `state => state.count`
            // countAlias: 'count',

            // // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            // countPlusLocalState(state) {
            //     return state.count + this.localCount
            // }
            //isCollapse:'isCollapse'
        }),
           isCollapse:{
             get(){
                 return this.$store.state.layout.isCollapse;
             },
             set(nVal){
                 this.$store.state.layout.isCollapse=nVal;
             }
         },
    },
    methods: {
        exchange() {
            this.$store.commit('layout/togleShow');
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
