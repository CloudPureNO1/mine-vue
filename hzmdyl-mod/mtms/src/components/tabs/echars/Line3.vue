<template>
  <div class="mtms-tb-main">
    <el-row>
      <el-col :span="22" :offset="1">
        <ve-line :data="chartData" :settings="chartSettings" :extend="extend" height="300px" :events="chartEvents"></ve-line>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
     this.chartSettings = {
        labelMap:{
          'mth': '月份',
          'sjje' :'收缴金额',
          'rs' :'缴费人数'  
        }  ,
        axisSite: { right: ['rs'] },
        yAxisType: ['KMB', 'KMB'],
        yAxisName: ['收缴金额','缴费人数'],
        selectedMode: 'single',
        hoverAnimation: false
      }
      var self = this
      this.chartEvents = {
        click: function (e) {
          self.yearClicked = e.seriesName
          self.monthClicked=e.name.replace('月','').trim();
          self.showOk=true;
          console.log(e)
        }
      }
      this.extend = {
        series: {
          label: { show: true, position: "top" }
        },
        // color: [//定义了线条，柱状图的颜色，颜色值的顺序你要跟你上面的totalYearList存储的顺序要一直
        //         "#dc2244", "#75c2ef", "#4562f3"
        // ],
        title:{
          text:'近一年每月医保基金收缴折线图',
          left:'center',
          bottom:20,
          textStyle:{
             color : '#333',
             fontStyle :'italic',
             fontSize:14,
             textAlign:'center'
          }
        }
      }
       
      return {
        activeNames: ['1'],
        chartData: {
          columns: ['mth', 'sjje', 'rs'],
          rows: [
            { 'mth': '1月', 'sjje': 99999, 'rs': 9087},
            { 'mth': '2月','sjje': 234234, 'rs': 1234},
            { 'mth': '3月','sjje': 45645, 'rs': 7777},
            { 'mth': '4月', 'sjje': 12312, 'rs': 9999},
            { 'mth': '5月', 'sjje': 77777, 'rs': 4445},
            { 'mth': '6月', 'sjje': 88888, 'rs': 6789},
            { 'mth': '7月','sjje': 98764, 'rs': 1234},
            { 'mth': '8月','sjje': 34567, 'rs': 3453},
            { 'mth': '9月','sjje': 12344, 'rs': 4564},
            { 'mth': '10月','sjje': 56789, 'rs': 5657},
            { 'mth': '11月','sjje': 78905, 'rs': 12312},
            { 'mth': '12月','sjje': 99999, 'rs': 9077}
          ]
        } ,
        yearClicked:'',
        monthClicked:'',
        showOk:false
      }
    }
  }
</script>

<style>
.mtms-tb-main .el-collapse-item__header{
  height:30px;
  line-height:30px;
}

.mtms-tb-main .mtms-collapse-content{
  font-size:0.75rem;
  text-align:left;
  padding-left:22px;
}
</style>