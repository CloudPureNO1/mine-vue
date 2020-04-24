<template>
<el-row style="height:100%;">
    <el-col :span="20" style="height:100%;"  >
        <el-row style="height:55%;" class="parent-transform">
            <el-col :span="24" class="main-header-title children-transform-vertical" >
                <div class="children-inline-transform-vertical">浙江网新恩普软件有限公司</div>
            </el-col>
        </el-row>
        <el-row style="height:45%;" >
            <el-col :span="24" style="display:flex">
                    <div @click="exchange" class="main-exchange" style="align-self:center;">
                            <span v-show="isShow" class="icon iconfont icon-zhankai icon-style" />
                            <span v-show="!isShow" class="icon iconfont icon-shouqi icon-style" />
                    </div>
                    <!--面包屑-->
                    <mtms-breadcrumb  style="align-self:center;"></mtms-breadcrumb>
            </el-col>
        </el-row>
    </el-col>
    <el-col :span="4" style="height:100%;">
        <mtms-avatar></mtms-avatar>
    </el-col>
</el-row>
</template>

 
<script>
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
    methods: {
        exchange() {
            let paramValue = {};
            this.isShow = !this.isShow;
            paramValue.isShow = this.isShow;
            if (this.isShow) {
                paramValue.asideWidth = '5%';
            } else {
                paramValue.asideWidth = '17%';
            }
            //给父组件传值
            this.$emit('getShow', paramValue);
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
