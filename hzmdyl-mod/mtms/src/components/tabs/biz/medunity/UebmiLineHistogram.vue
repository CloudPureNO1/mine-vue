<template>
  <div >
    <el-row>
      <el-col :span="24" >
        <ve-histogram :data="chartData" :settings="chartSettings" :extend="extend" height="170px" :events="chartEvents"></ve-histogram>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
     this.chartSettings = {
        labelMap:{
          'jd': '季度',
          'sjje' :'收缴金额',
          'sjjezzl01':'收缴金额同比增长率',
          'sjjezzl02':'收缴金额环比增长率'    
        }  ,
        axisSite: { right: ['sjjezzl01','sjjezzl02' ] },
        yAxisType: ['KMB'],
        yAxisName: ['收缴金额','增长率'],
        selectedMode: 'single',
        hoverAnimation: false,
        showLine: ['sjjezzl01','sjjezzl02']
      }
      var self = this
      this.chartEvents = {
        click: function (e) {
          // self.yearClicked = e.seriesName
          // self.monthClicked=e.name.replace('月','').trim();
          // self.showOk=true;
          console.log(e)
          //self.$refs['showClickID'].$emit('click');
        }
      }
      this.extend = {
        series: {
          label: { show: false, position: "bottom" }
        },
        grid:{
          top:'20%',
          bottom:'20%'
        },
        color: [//定义了线条，柱状图的颜色，颜色值的顺序你要跟你上面的totalYearList存储的顺序要一直
                "#fa6e86", "#75c2ef" 
        ],
        legend:{
              show:true,
              bottom:0,
              //left:'50%'
        },
        title:{
          text:'城乡',
          left:'center',
          //bottom:10,
          textStyle:{
             color : '#333',
             fontStyle :'italic',
             fontSize:10,
             textAlign:'center'
          }
        }
      }
       
      return {
        activeNames: ['1'],
        chartData: {
          columns: ['jd', 'sjje','sjjezzl01','sjjezzl02'],
          rows: [
            { 'jd': '1', 'sjje': 99999, 'rs': 9087,'sjjezzl01':12.2,'sjjezzl02':9.23},
            { 'jd': '2','sjje': 234234, 'rs': 1234,'sjjezzl01':112.2,'sjjezzl02':14.3},
            { 'jd': '3','sjje': 2313, 'rs': 1233,'sjjezzl01':2.2,'sjjezzl02':12},
            { 'jd': '4','sjje': 7687, 'rs': 343,'sjjezzl01':102.2,'sjjezzl02':12},
            { 'jd': '5','sjje': 56756, 'rs': 1233,'sjjezzl01':2.2,'sjjezzl02':1.23},
            { 'jd': '6','sjje': 45345, 'rs': 3453,'sjjezzl01':34.2,'sjjezzl02':2.12},
            { 'jd': '7','sjje': 45455, 'rs': 54645,'sjjezzl01':45.2,'sjjezzl02':3.45},
            { 'jd': '8','sjje': 3434, 'rs': 5656,'sjjezzl01':11.2,'sjjezzl02':4.567},
            { 'jd': '9','sjje': 3232, 'rs': 1233,'sjjezzl01':10.2,'sjjezzl02':4.5},
            { 'jd': '10','sjje': 1212, 'rs': 1231,'sjjezzl01':9.2,'sjjezzl02':9.4},
            { 'jd': '11','sjje': 45645, 'rs': 23434,'sjjezzl01':7.2,'sjjezzl02':13.2},
            { 'jd': '12', 'sjje': 12312, 'rs': 3333,'sjjezzl01':12.2,'sjjezzl02':12.4} 
          ]
        }  
      }
    }
  }
</script>

 