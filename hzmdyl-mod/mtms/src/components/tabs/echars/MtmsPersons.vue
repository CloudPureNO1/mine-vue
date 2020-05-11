<template>
  <div clss="mtms-e-p-main">
     <el-card shadow="always">
          <div slot="header" class="clearfix">
            <span>2019年辖区内基本医疗保险参保人员</span>
          </div>
          <div>
            <el-row>
              <el-col :span="12">
                  <div  class="mtms-collapse-content">2019年城镇职工基本医疗保险参保人数：3434343，同比增长：100% ，环比增长：50%
                  </div>
              </el-col>
               <el-col :span="12">
                  <div  class="mtms-collapse-content">2019年城乡居民基本医疗保险参保人数：3434343，同比增长：100% ，环比增长：50%
                  </div>
              </el-col>
            </el-row>
          </div>
          <ve-histogram :data="chartData" :extend="extend" :settings="chartSettings" :height="height" :width="width" ></ve-histogram>
<!--
          <el-row>
              <el-col :span="12">
                  <div  class="mtms-collapse-content">2019年9月城镇职工基本医疗保险参保人数：3434343，同比增长：100% ，环比增长：50%
                  </div>
              </el-col>
               <el-col :span="12">
                  <div  class="mtms-collapse-content">2019年9月城乡居民基本医疗保险参保人数：3434343，同比增长：100% ，环比增长：50%
                  </div>
              </el-col>
            </el-row>
            -->
     </el-card>
    <el-card shadow="always">
      <mtms-e-psersons></mtms-e-psersons>
    </el-card>
  </div>
</template>

<script>
 import  PersonsList from './PersonsList'
  export default {
    components:{
      'mtms-e-psersons':PersonsList
    },
    data () {
       
      this.chartSettings = {
          labelMap:{
              'mth':'年月',
              'insuredPeurbmions':'辖区参保总人数',
              'uebmi':'城镇职工基本医疗',
              'urbmi':'城镇居民基本医疗'
          },
          stack: { 'insuredPeurbmions': ['uebmi', 'urbmi'] },

      },
      this.extend={
        series: {
          label: { show: true, position: "right" },
          barWidth:'20%',
           barGap:'1%',
            //barCategoryGap:'0%'
        },
         //定义了线条，柱状图的颜色，颜色值的顺序你要跟你上面的totalYearList存储的顺序要一直
        color:[ "#fa6e86", "#75c2ef"],    
         grid:{
            bottom:20 ,
            top:20
        },
        legend:{
            show:true,
             height :8,
             padding:0,
             itemHeight :8,
             bottom:1
        },
        title:{
          show:false,
          text:'辖区内基本医疗保险参保人员',
          left: 'center',
          textStyle:{
             color : '#333',
             fontStyle :'italic',
             fontSize:12,
             textAlign:'center'
          }
        } 
      } 
 
      return {
        height:'200px',
        width:'auto', 
        chartData: {
          columns: ['mth', 'uebmi', 'urbmi'],
          rows: [
            { 'mth': '1月', 'uebmi': 99999, 'urbmi': 90187},
            { 'mth': '2月','uebmi': 234234, 'urbmi': 12234},
            { 'mth': '3月','uebmi': 45645, 'urbmi': 77727},
            { 'mth': '4月', 'uebmi': 3312, 'urbmi': 99399},
            { 'mth': '5月', 'uebmi': 77777, 'urbmi': 44445},
            { 'mth': '6月', 'uebmi': 88888, 'urbmi': 64789},
            { 'mth': '7月','uebmi': 98764, 'urbmi': 12354},
            { 'mth': '8月','uebmi': 34567, 'urbmi': 34653},
            { 'mth': '9月','uebmi': 12344, 'urbmi': 45564},
            { 'mth': '10月','uebmi': 56789, 'urbmi': 56657},
            { 'mth': '11月','uebmi': 78905, 'urbmi': 12312},
            { 'mth': '12月','uebmi': 99999, 'urbmi': 90177}
          ]
        }
      }
    }
  }
</script>

<style scoped>
.mtms-e-p-main .el-card__header{
  padding:9px 20px;
}

.mtms-e-p-main .el-card__body{
  padding:9px 20px; 
}
</style>