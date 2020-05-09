<template>
  <ve-pie :data="chartData" :settings="chartSettings" :extend="extend" ></ve-pie>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
       labelMap:{
          'type': '类型',
          'total' :'收缴金额' 
        } ,
        level: [
             [''],
          ['城镇职工医保', '城镇居民医保', '新农合'],
          ['学生儿童', '老年人','其他人员'],
          ['在职', '退休','其他状态']
        ]
      }
      this.extend={
         series:{
             label: {
                 
                alignTo: 'edge',
                bleedMargin: 20,
                position:'outer',
                margin :'20%'
            }
         },
         legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            // data: data.legendData,
            // selected: data.selected
        },
          grid:{
            bottom:0,
            top:0
        } ,
      }
      return {
        chartData: {
          columns: ['type', 'total'],
          rows: [
            { 'type': '城镇职工医保', 'total': 1393 },
            { 'type': '城镇居民医保', 'total': 3530 },
            { 'type': '新农合', 'total': 2923 },
            { 'type': '学生儿童', 'total': 1723 },
            { 'type': '老年人', 'total': 3792 },
            { 'type': '其他人员', 'total': 4593 },
            { 'type': '在职', 'total': 1723 },
            { 'type': '退休', 'total': 1233 },
            { 'type': '其他状态', 'total': 4593 }
          ]
        }
      }
    }
  }
</script>