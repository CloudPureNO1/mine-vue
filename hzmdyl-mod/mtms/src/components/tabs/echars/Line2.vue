<template>
  <div class="mtms-tb-main">
    <el-row>
      <el-col :span="24">
        <ve-line :data="chartData" :settings="chartSettings" :extend="extend" height="250px" :events="chartEvents"></ve-line>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
     this.chartSettings = {
 
        labelMap:{
          'age': '年龄段',
          'zh' :'综合',
          'zgyb' :'职工医保',
          'czjmyb':'城镇居民医保',
          'xnh' : '新农合' 
        }  ,
         axisSite: { right: ['下单率'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['人数'],
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
        title:{
          text:'基金收缴按年龄段分类',
          textStyle:{
             color : '#333',
             fontStyle :'italic',
             fontSize:12,
             textAlign:'center'
          },
          bottom:0

        }
      }
       
      return {
        activeNames: ['1'],
        chartData: {
          columns: ['age', 'zh', 'zgyb', 'czjmyb','xnh'],
          rows: [
            { 'age': '[6,0]', 'zh': 1111, 'zgyb': 0, 'czjmyb':1232,'xnh':343},
            { 'age': '(16,6)', 'zh': 6234, 'zgyb': 0, 'czjmyb':3434,'xnh':1343},
            { 'age': '男(50,16]女(40,16]','zh': 5678, 'zgyb': 1212, 'czjmyb':4567,'xnh':2345},
            { 'age': '男(60,50]女(50,40]','zh': 12312, 'zgyb': 1233, 'czjmyb':1123,'xnh':1231},
            { 'age': '男(~,60)女(~,50)', 'zh': 9999, 'zgyb': 5555, 'czjmyb':3333,'xnh':2222},
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