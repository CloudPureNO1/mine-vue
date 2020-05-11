<template>
  <div class="mtms-tb-main">
    <el-row>
      <el-col :span="24" >
        <ve-line :data="chartData" :settings="chartSettings" :extend="extend" height="300px" :events="chartEvents"></ve-line>
      </el-col>
      <el-col :span="0">
            <div style="height:200px;overflow:auto;">
            <el-collapse v-model="activeNames" accordion>
              <el-collapse-item   name="1">
                <template slot="title">
                  <span style="color:#0284e0;">人员参保分类</span> 
                </template>
                <div  class="mtms-collapse-content">城镇职工医保：
                  <div  class="mtms-collapse-content">总金额：￥3434343 </div>
                  <div  class="mtms-collapse-content">同比增长：100% </div>
                  <div  class="mtms-collapse-content">环比增长：50%</div>
                </div>
              </el-collapse-item>
            </el-collapse>
            </div>
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
        color: [//定义了线条，柱状图的颜色，颜色值的顺序你要跟你上面的totalYearList存储的顺序要一直
                "#fa6e86", "#75c2ef" 
        ],
        title:{
          text:'近一年每月医保基金收缴(季度)',
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
          columns: ['jd', 'sjje', 'rs'],
          rows: [
            { 'jd': '第一季度', 'sjje': 99999, 'rs': 9087},
            { 'jd': '第二季度','sjje': 234234, 'rs': 1234},
            { 'jd': '第三季度','sjje': 45645, 'rs': 7777},
            { 'jd': '第四季度', 'sjje': 12312, 'rs': 3333} 
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