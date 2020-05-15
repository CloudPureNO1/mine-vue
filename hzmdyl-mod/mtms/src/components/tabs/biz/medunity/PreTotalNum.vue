<template>
    <div style="padding-right:5px;height:100%;">
        <div style="padding: 5px 10px 10px 10px;  text-align: left;color:#a6a5b1;">
            <div>年度预算总额</div>
            <div style="padding: 10px 0px 0px 5px; font-weight: 600; font-size: 1.75rem;color:#333333;">99999999999999</div>
        </div>
        <hr style="border: 1px solid #fbfbfb;  width: 96%;">
        <ve-pie :data="chartData" :settings="chartSettings" :extend="extend" height="100px"></ve-pie>
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
          show:false,
            text: '医保类别', 
            left: 'center' ,
            bottom:5,
            left:'24%',
            textStyle:{
                fontSize:12
            }
        }, 
         legend: {
             show:true, 
             left:'right',
             orient:'vertical',
             padding:1,
             itemHeight :8,
             bottom:'35%'
        }, 
           
        series:{
           // name: "流量占比分布",
            type: "pie",
            radius: ["0%", "80%"],
            center: ["40%", "50%"],
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
            { 'type': '职工', 'total': 1393 },
            { 'type': '城乡', 'total': 3530 } 
          ]
        }
      }
    } 
  }
</script>
 