<template>
  <ve-funnel :data="chartData" :settings="chartSettings" :extend="extend"></ve-funnel>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
         //useDefaultOrder: true,
        ascending:true,
        labelMap:{
          'age':'年龄',
          'total':'金额'
        }
      },
      this.extend={
        legend:{
             show:true, 
             left:'left',
             orient:'vertical',
             padding:1,
             itemHeight :8
        },
         title: {
            text: '总人数年龄分析', 
            left: 'center' ,
            bottom:5,
            //left:'24%',
            textStyle:{
                fontSize:12
            }
        },
        
          toolbox: {
            left: 'center',
            feature: {
                dataView : {show: true, readOnly: true},
                restore: {},
                saveAsImage: {}
            }
        },
            calculable : true,
             tooltip : {
                trigger: 'item' ,
                formatter: "{b}:<br>人数：{c}<br/>占比：{d}%"
            },
        series:{
          //sort: 'descending',
            label: { 　　　　　　　　　　//去除饼图的指示折线label
                    show: true,
                    position: 'outer' ,
                    formatter: '{d}%'
            },
            //  itemStyle: {
            //             normal: {
                             
            //                 label: {
            //                     position: 'left'
            //                 }
            //             }
            //         },
           
        } 
      } 
      
      return {
        chartData: {
          columns: ['age', 'total'],
          rows: [
            { 'age': '男(~,60)女(~,50)', 'total': 900 },
            { 'age': '男(60,50]女(50,40]', 'total': 700 },
            { 'age': '男(50,16]女(40,16]', 'total': 500 },
            { 'age': '(16,6)', 'total': 200 },
            { 'age': '[6,0]', 'total': 1001}
          ]
        }
      }
    }
  }
</script>