<template>
  <el-row>
    <el-col :span="24">
        <div style="padding-right:5px;height:170px;">
        <div style="padding: 5px 10px 10px 10px;  text-align: left;color:#a6a5b1;">
            <div>累计医疗服务收入（截止到当月）</div>
            <div style="padding: 10px 0px 0px 5px; font-weight: 600; font-size: 1.75rem;color:#333333;">99999999999999</div>
        </div>
        <hr style="border: 1px solid #fbfbfb;  width: 96%;">
        <ve-pie :data="chartData" :settings="chartSettings" :extend="extend" height="100px"></ve-pie>
      </div>
    </el-col>
  </el-row>

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
            { 'type': '自费', 'total': 1393 },
            { 'type': '职工', 'total': 1393 },
            { 'type': '城乡', 'total': 3530 } 
          ]
        }
      }
    } 
  }
</script>
 