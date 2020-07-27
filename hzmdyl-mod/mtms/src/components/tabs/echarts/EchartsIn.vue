<template>
    <div class="echarts-in-main">
      <el-button type="primary" @click="handleDown">PDF</el-button>
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
            <mtms-border-line componentName="Balance"   :orderNum="1" ></mtms-border-line>
          </el-col>
          <el-col :span="12">
            <mtms-border-line componentName="Times"   :orderNum="2"></mtms-border-line>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <mtms-border-line componentName="Cars"   :orderNum="3"></mtms-border-line>
          </el-col>
          <el-col :span="12">
            <mtms-border-line componentName="XBar"   :orderNum="4"></mtms-border-line>
          </el-col>
        </el-row>
    </div>
</template>

<script>
 import html2pdf from '@/utils/html2pdf'
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
    },
    methods:{
            handleDown(){
                //导出PDF
                html2pdf.downloadPDF( document.querySelector('.echarts-in-main'),'echars');
            },
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