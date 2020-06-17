<template>
    <div class="echarts-in-main">
        <el-row>
          <el-col :span="12">
            <el-card :shadow="cardShadow">
                <mtms-balance></mtms-balance>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card :shadow="cardShadow">
                <mtms-times></mtms-times>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-card :shadow="cardShadow">
                <mtms-cars></mtms-cars>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card :shadow="cardShadow">
                <mtms-x-bar></mtms-x-bar>
            </el-card>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import Balance from './echartsIn/Balance'
import Times from './echartsIn/Times'
import Cars from './echartsIn/Cars'
import XBar from './echartsIn/XBar'
export default {
    components:{
        'mtms-balance':Balance,
        'mtms-times':Times,
        'mtms-cars':Cars,
        'mtms-x-bar':XBar,
    },
    data(){
        return{
            cardShadow:'never'
        }
    }
}
</script>
<style>
    .echarts-in-main{
        background-color:#101736;
        color:#ffffff;
    }
        .echarts-in-main .el-card {
        border: 1px solid #93a4e2;
        background-color: #101736;
        color: #ffffff;
        margin: 4px;
    }
    .echarts-in-main .el-card__body{
        padding:5px 10px 5px 10px;
        background-color: #101736;
    }
</style>