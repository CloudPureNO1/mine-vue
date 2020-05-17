<template>
<!--div 超出内容时自动滚动，设置height 和 overflow:auto-->
<div class="group-add-main" :style="{height:userAddHeight,overflow:'auto'}"  >
    <mtms-group-content v-if="isSshowChild" @isShow="setShow"></mtms-group-content>
</div>
</template>

<script>
import GroupContent from './GroupContent'
export default {
    components:{
        'mtms-group-content':GroupContent
    },
    data(){
        return{
            userAddHeight: '450px',
            isSshowChild:true
        }
    },
    created() {
        this.$nextTick(function () {
            let tabH = this.$el.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH = document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH = 13;
            this.userAddHeight = tabH - tabHeaderH - paginationH + 'px';
        });
         
    },
    watch:{
        $route(){
            this.setShow(false);
        }
    },
    methods:{
//window.location.reload()原生 js 提供的方法
// this.$router.go(0)vue 路由里面的一种方法
// 这两种方法都可以达到页面刷新的目的，简单粗暴，但是用户体验不好，相当于按 F5 刷新页面，页面的重新载入，会有短暂的白屏
        //利用v-if ,实现无痕刷新
        setShow(data){
            this.isSshowChild=data;//先设置false
            setTimeout(()=>{
                this.isSshowChild=true;
            },5);
        }
    }
}
</script>

<style>
.group-add-main {
    padding-top: 2px;
}

.group-add-main .from-main {
    width: 100%;
}

.group-add-main .from-main .form-items {
    display: inline;
}

.form-label-local {
    margin-left: 0px;
}
</style>
