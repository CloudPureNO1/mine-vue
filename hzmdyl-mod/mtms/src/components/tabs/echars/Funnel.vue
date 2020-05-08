<template>
  <ve-funnel :data="chartData" :extend="extend"  :settings="chartSettings" height="200"></ve-funnel>
</template>

<script>
  export default {
    data () {
          this.chartSettings = {
        ascending: true
      }
        this.extend={
            //['学生儿童', '老年人','其他人员'],
            lebalMap:{
                'type':'人员类型',
                'total':'金额'
            } 
     
        }
      return {
        chartData: {
          columns: ['type', 'total'],
          rows: [
            { 'type': '老年人', 'total': 300 },
            { 'type': '学生儿童', 'total': 900 },
            { 'type': '其他人员', 'total': 600 }
          ]
        }
      }
    }
  }
</script>