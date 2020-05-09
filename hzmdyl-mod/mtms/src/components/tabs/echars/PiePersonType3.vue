<template>
    <div style="width:100%;">
        <ve-pie :data="chartData" :settings="chartSettings" :extend="extend" height="200px" width="100%"></ve-pie>
    </div>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        labelMap:{
          'type': '类型',
          'total' :'收缴金额' 
        }
      } 
      this.extend={
               title: {
            text: '新农合', 
            left: 'center' ,
            bottom:5,
            left:'24%',
            textStyle:{
                fontSize:12
            }
        },
         legend: {
             show:true, 
             left:'left',
             orient:'vertical',
             padding:1,
             itemHeight :8
        }, 
        series:{
            //name: "流量占比分布",
            type: "pie",
            radius: ["0%", "50%"],
             center: ["40%", "60%"],
            //   data: [
            //     { value: 1, name: "一月上报" },
            //     { value: 14, name: "二月上报" },
            //     { value: 16, name: "三月上报" }
            // ], 
            label: { 　　　　　　　　　　//去除饼图的指示折线label
                    show: true,
                    position: 'inside',
                    formatter:"{d}%"
            },
        }
      }
      return {
        chartData: {
          columns: ['type', 'total'],
          rows: [
            { 'type': '在职', 'total': 1723 },
            { 'type': '退休', 'total': 1233 },
            { 'type': '其他状态', 'total': 4593 }
          ]
        }
      }
    }
  }
</script>