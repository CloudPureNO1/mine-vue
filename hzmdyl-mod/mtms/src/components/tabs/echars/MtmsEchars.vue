<template>
    <div :style="{height:userAddHeight,overflow:'auto'}">
        <el-row>
            <el-col :span="24" >
                
                <mtms-echars-histogram></mtms-echars-histogram>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <mtms-echars-funnel></mtms-echars-funnel>
            </el-col>
        </el-row>
        <!--
        <el-row >
            <el-col :span="24" style="height:200px;">
                <mtms-echars-line></mtms-echars-line>
            </el-col>
        </el-row>
        -->
        <el-row>
            <el-col :span="10"  >
                <mtms-echars-bar></mtms-echars-bar>
            </el-col>
            <el-col :span="14"  >
                <mtms-echars-pie1></mtms-echars-pie1>
            </el-col>
        </el-row>
 
    </div>
</template>

<script>
    import Histogram from './Histogram'
    import Line from './Line'
    import Bar from './Bar'
    import Pie1 from './Pie1'
    import Funnel from './Funnel'
    export default {
      components:{
          "mtms-echars-histogram":Histogram,
          "mtms-echars-line":Line,
          "mtms-echars-bar":Bar,
          "mtms-echars-pie1":Pie1,
          "mtms-echars-funnel":Funnel,
      },
    data () {
      return { 
          userAddHeight: '450px' 
      }
    },
    created() {
        this.$nextTick(function () {
            let tabH = this.$el.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH = document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH = 13;
            this.userAddHeight = tabH - tabHeaderH - paginationH + 'px';
        });
    }
  }
</script>

 