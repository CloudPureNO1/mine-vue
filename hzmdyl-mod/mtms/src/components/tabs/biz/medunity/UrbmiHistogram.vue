<template>
  <div>
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
          'rs' :'缴费人数'  
        }  ,
        axisSite: { right: ['rs'] },
        yAxisType: ['KMB', 'KMB'],
        yAxisName: ['收缴金额','缴费人数'],
        selectedMode: 'single',
        hoverAnimation: false,
        showLine:['rs']
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
          label: { show: false, position: "bottom" },
           barWidth:'12'
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
              //left:'50%',
              height :8,
             padding:0,
             itemHeight :8
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
          columns: ['jd', 'sjje', 'rs'],
          rows: [
            { 'jd': '1', 'sjje': 99999, 'rs': 9087},
            { 'jd': '2','sjje': 234234, 'rs': 1234},
            { 'jd': '3','sjje': 2313, 'rs': 1233},
            { 'jd': '4','sjje': 7687, 'rs': 343},
            { 'jd': '5','sjje': 56756, 'rs': 1233},
            { 'jd': '6','sjje': 45345, 'rs': 3453},
            { 'jd': '7','sjje': 45455, 'rs': 54645},
            { 'jd': '8','sjje': 3434, 'rs': 5656},
            { 'jd': '9','sjje': 3232, 'rs': 1233},
            { 'jd': '10','sjje': 1212, 'rs': 1231},
            { 'jd': '11','sjje': 45645, 'rs': 23434},
            { 'jd': '12', 'sjje': 12312, 'rs': 3333} 
          ]
        }  
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