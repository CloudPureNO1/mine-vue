<template>
    <div class="mtms-ytgouter-main" :style="{height:userAddHeight,overflow:'auto'}">
        <el-row>
          <el-col :span="24">
            <el-card shadow="hover">
                <div slot="header">结余留用</div>
                <div>111111111111</div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" >
            <el-card shadow="hover">
                <div slot="header">超支分担</div>
                <div>111111111111</div>
            </el-card>
          </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    components:{

    },
    data(){
        return{
            userAddHeight: '450px' ,
        }
    },
    created(){
        this.$nextTick(function () {
            let tabH = this.$el.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH = document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH = 13;
            this.userAddHeight = tabH - tabHeaderH - paginationH + 'px';
        });
    }
}
</script>

<style >
.mtms-ytgouter-main .el-card__header{
  padding:9px 20px;
}

.mtms-ytgouter-main .el-card__body{
  padding:9px 20px; 
}
</style>