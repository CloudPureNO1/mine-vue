<template>
  <div style="font-size:0.25rem;">
  <ve-bar :data="chartData" :settings="chartSettings"  height="150px"   :extend="extend"  ></ve-bar>
  </div>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        labelMap:{
          'orgName': '机构名称',
          'orgNO':'机构编码',
           'total':'收缴总金额'
        },
        dataOrder: {
          label: 'total',
          order: 'desc'
         },
         metrics: ['total'],
      },
    this.extend={
        series:{
            label: { show: true, position: "right" },
            barWidth:'10',
            barGap:'0%',
            //barCategoryGap:'0%'
        },
        textStyle:{
              color:'blue'
        },
        grid:{
            bottom:'0px',
            top:20
        } ,
        legend:{
            show:false,
            // height :20,
            // padding:0,
            // itemHeight :10,
            // bottom:1
        },
        title:{
          text:'近一年内医保基金缴纳金额排名',
          left: 'center',
          textStyle:{
             color : '#333',
             fontStyle :'italic',
             fontSize:10,
             textAlign:'center'
          }
        } 
    } 
 
      return {
        chartData: {
          columns: ['orgName','orgNO', 'total'],
          rows: [
            { 'orgName':'浙江网新恩普软件有限公司','orgNO': '10001', 'total': 9999 },
            { 'orgName':'阿里','orgNO': '10002', 'total': 3530 },
            { 'orgName':'腾讯','orgNO': '10003', 'total': 2923 },
            { 'orgName':'百度','orgNO': '10004', 'total': 1723 },
            { 'orgName':'华为','orgNO': '10005', 'total': 3792 },
            { 'orgName':'联想','orgNO': '10006', 'total': 3792 },
            { 'orgName':'小米','orgNO': '10007', 'total': 4593 }
          ]
        }
      }
    }
  }
</script>