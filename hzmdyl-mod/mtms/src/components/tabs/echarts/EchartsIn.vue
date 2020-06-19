<template>
    <div class="echarts-in-main">
        <el-row>
          <el-col :span="12">
            <mtms-border componentName="Balance" ></mtms-border>
          </el-col>
          <el-col :span="12">
            <mtms-border componentName="Times" ></mtms-border>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <mtms-border componentName="Cars" ></mtms-border>
          </el-col>
          <el-col :span="12">
            <mtms-border componentName="XBar" ></mtms-border>
          </el-col>
        </el-row>
 
         <el-row>
          <el-col :span="12">
            <mtms-border-line componentName="Balance"   :borderIndex="1" ></mtms-border-line>
          </el-col>
          <el-col :span="12">
            <mtms-border-line componentName="Times"   :borderIndex="2"></mtms-border-line>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <mtms-border-line componentName="Cars"   :borderIndex="3"></mtms-border-line>
          </el-col>
          <el-col :span="12">
            <mtms-border-line componentName="XBar"   :borderIndex="4"></mtms-border-line>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import Border from './echartsIn/Border'
import BorderLine from './echartsIn/BorderLine'
export default {
    components:{
        'mtms-border':Border,
        'mtms-border-line':BorderLine,
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
        background-color:#19265d;
        color:#ffffff;
    }
        .echarts-in-main .el-card {
        border: 1px solid #93a4e2;
        background-color: #19265d;
        color: #ffffff;
        margin: 4px;
    }
    .echarts-in-main .el-card__body{
        padding:5px 10px 5px 10px;
        background-color: #19265d;
    }
</style>