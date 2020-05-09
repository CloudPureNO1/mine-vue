<template>
  <ve-histogram :data="chartData" :settings="chartSettings" :extend="extend" height="300px"></ve-histogram>
</template>

<script>
  export default {
    data () {
     this.chartSettings = {
        labelMap:{
          'mth': '月份',
          'tc' : '前年统筹支付',
          'zh' : '前年账户支付',
          'xj' : '前年现金支付',
        },
        legendName: {
          'total': '总金额'
        },
        stack: { 'total': ['tc', 'zh','xj']},
      }
      this.extend = {
        series: {
          label: { show: false, position: "top" }
        },
        color: [//定义了线条，柱状图的颜色，颜色值的顺序你要跟你上面的totalYearList存储的顺序要一直
                "#dc2244", "#75c2ef", "#4562f3"
        ],
      }
      return {
        chartData: {
          columns: ['mth', 'tc', 'zh', 'xj'],
          rows: [
            { 'mth': '1月', 'tc': 1393, 'zh': 1093, 'xj':2332},
            { 'mth': '1月', 'tc': 1393, 'zh': 1093, 'xj':2332},
            { 'mth': '1月', 'tc': 1393, 'zh': 1093, 'xj':2332},
            { 'mth': '2月', 'tc': 1393, 'zh': 1093, 'xj':2332},
            { 'mth': '2月', 'tc': 1393, 'zh': 1093, 'xj':2332},
            { 'mth': '2月', 'tc': 1393, 'zh': 1093, 'xj':2332}
          ]
        }
      }
    }
  }
</script>