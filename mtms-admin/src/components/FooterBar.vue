<template>
    <div  class="footerBar">
        Copyright © 2018 浙江网新恩普软件有限公司 .All right reserved   浙公网安备33010602010621号  浙ICP备05017526号  网站建设：博采网络
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'This is a Test'
        }
    },
    methods:{
        checkvalue(){
            console.log('Copyright © 2018 浙江网新恩普软件有限公司 .All right reserved   浙公网安备33010602010621号  浙ICP备05017526号  网站建设：博采网络');  
        }
    }
}
</script>

<style lang="scss" scoped>
.footerBar{
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    top:50%;
}
</style>