<template>
  <div class="mtms-tb-main">
    <el-row>
      <el-col :span="19">
        <ve-histogram :data="chartData" :settings="chartSettings" :extend="extend" :height="height" :events="chartEvents"></ve-histogram>
      </el-col>
      <el-col :span="5" >
        <div style="height:200px;overflow:auto;">
            <div style="height:35px;line-height:35px;backgroud-color:#dfffff;padding:5px;">
                <span :v-show="showOk">{{yearClicked}}年{{monthClicked}}月，</span>医保基金收缴：
            </div>
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
                <div  class="mtms-collapse-content">城镇居民医保：
                  <div  class="mtms-collapse-content">总金额：￥123123  </div> 
                  <div  class="mtms-collapse-content">同比增长：100% </div>
                  <div  class="mtms-collapse-content">环比增长：50%</div>
                </div>
                <div  class="mtms-collapse-content">新农合： 
                  <div  class="mtms-collapse-content">总金额：￥123123  </div> 
                  <div  class="mtms-collapse-content">同比增长：100% </div>
                  <div  class="mtms-collapse-content">环比增长：50%</div>
                </div>
                
              </el-collapse-item>
              <el-collapse-item  name="2">
                <template slot="title">
                  <span style="color:#0284e0;">年龄分类</span> 
                </template>
                <div class="mtms-collapse-content">学生儿童：
                  <div  class="mtms-collapse-content">总金额：￥123123  </div> 
                  <div  class="mtms-collapse-content">同比增长：100% </div>
                  <div  class="mtms-collapse-content">环比增长：50%</div>
                </div>
                <div class="mtms-collapse-content">老年人：
                   <div  class="mtms-collapse-content">总金额：￥123123  </div> 
                  <div  class="mtms-collapse-content">同比增长：100% </div>
                  <div  class="mtms-collapse-content">环比增长：50%</div>
                </div>
                <div class="mtms-collapse-content">其他：
                   <div  class="mtms-collapse-content">总金额：￥123123  </div> 
                  <div  class="mtms-collapse-content">同比增长：100% </div>
                  <div  class="mtms-collapse-content">环比增长：50%</div>
                </div>
              </el-collapse-item>
              <el-collapse-item  name="3">
                <template slot="title">
                  <span style="color:#0284e0;">在职分类</span> 
                </template>
                <div class="mtms-collapse-content">在职：
                  <div  class="mtms-collapse-content">总金额：￥123123  </div> 
                  <div  class="mtms-collapse-content">同比增长：100% </div>
                  <div  class="mtms-collapse-content">环比增长：50%</div>
                 </div>
                <div class="mtms-collapse-content">退休：
                   <div  class="mtms-collapse-content">总金额：￥123123  </div> 
                  <div  class="mtms-collapse-content">同比增长：100% </div>
                  <div  class="mtms-collapse-content">环比增长：50%</div>
                </div>
                <div class="mtms-collapse-content">其他：
                  <div  class="mtms-collapse-content">总金额：￥123123  </div> 
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
              'mth':'年月',
              'insuredPeurbmionsjy':'辖区参保总结余',
              'uebmijy':'城镇职工基本医疗结余',
              'urbmijy':'城镇居民基本医疗结余'
          }, 
   
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
          label: { show: true, position: "top" } ,
          barWidth:'12',
            barGap:'1%',
            //barCategoryGap:'0%'
        },
         grid:{
            bottom:20 ,
            //top:30
        },
        legend:{
            show:true,
             height :8,
             padding:0,
             itemHeight :8,
             bottom:1
        },
       
        // color: [//定义了线条，柱状图的颜色，颜色值的顺序你要跟你上面的totalYearList存储的顺序要一直
        //         "#dc2244", "#75c2ef", "#4562f3"
        // ],
        title:{
          text:'近三年每月医保基金收缴柱状图',
          left: 'center',
          textStyle:{
             color : '#333',
             fontStyle :'italic',
             fontSize:12,
             textAlign:'center'
          }
        } 
      }
       
      return {
        activeNames: ['1'],
        chartData: {
          columns: ['mth', 'insuredPeurbmionsjy', 'uebmijy', 'urbmijy'],
          rows: [
            { 'mth': '1月', 'uebmijy': 1111243, 'urbmijy': 114545, 'insuredPeurbmionsjy':-1232332},
            { 'mth': '2月', 'uebmijy': 1112312, 'urbmijy': 121323, 'insuredPeurbmionsjy':-212332},
            { 'mth': '3月', 'uebmijy':1145645, 'urbmijy': 67257, 'insuredPeurbmionsjy':-333432},
            { 'mth': '4月', 'uebmijy': 1145393, 'urbmijy': -112312, 'insuredPeurbmionsjy':24545332},
            { 'mth': '5月', 'uebmijy': -1114564, 'urbmijy': 103413, 'insuredPeurbmionsjy':2565332},
            { 'mth': '6月', 'uebmijy': -1134593, 'urbmijy': 131134, 'insuredPeurbmionsjy':25656332},
            { 'mth': '7月', 'uebmijy': -111123, 'urbmijy': 10343493, 'insuredPeurbmionsjy':2335652},
            { 'mth': '8月', 'uebmijy': -1123112, 'urbmijy': 123112, 'insuredPeurbmionsjy':2335652},
            { 'mth': '9月', 'uebmijy': 1112312, 'urbmijy': 1091213, 'insuredPeurbmionsjy':-2335632},
            { 'mth': '11月', 'uebmijy': 1123123, 'urbmijy': 110193, 'insuredPeurbmionsjy':-6556565.343},
            { 'mth': '12月', 'uebmijy': 1112312, 'urbmijy': 110913, 'insuredPeurbmionsjy':-2335656.232}
          ]
        },
        height:'220px',
        yearClicked:'',
        monthClicked:'',
        showOk:false
      }
    }
  }
</script>

<style>
.mtms-tb-main {
  border-bottom:1px solid #dfffff;
  padding:5px;
  margin-bottom:5px;
}
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
 