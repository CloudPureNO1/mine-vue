<template>
  <div class="mtms-tb-main">
    <el-row>
      <el-col :span="19">
        <ve-line :data="chartData" :settings="chartSettings" :extend="extend" height="300px" :events="chartEvents"></ve-line>
      </el-col>
      <el-col :span="5" >
         <div style="height:35px;line-height:35px;backgroud-color:#dfffff;padding:5px;">
            <span :v-show="showOk">{{yearClicked}}年{{monthClicked}}月，</span>医保基金收缴：
         </div>
         <el-collapse v-model="activeNames" accordion>
          <el-collapse-item   name="1">
            <template slot="title">
              <span style="color:#0284e0;">人员参保分类</span> 
            </template>
            <div  class="mtms-collapse-content">城镇职工医保：￥3434343 </div>
            <div  class="mtms-collapse-content">城镇居民医保：￥123123 </div>
            <div  class="mtms-collapse-content">新农合：￥34333</div>
          </el-collapse-item>
          <el-collapse-item  name="2">
             <template slot="title">
              <span style="color:#0284e0;">年龄分类</span> 
            </template>
            <div class="mtms-collapse-content">学生儿童：￥2323232 </div>
            <div class="mtms-collapse-content">老年人：￥234234234</div>
            <div class="mtms-collapse-content">其他：￥12312312312313</div>
          </el-collapse-item>
          <el-collapse-item  name="3">
            <template slot="title">
              <span style="color:#0284e0;">在职分类</span> 
            </template>
            <div class="mtms-collapse-content">在职：￥2342342342342 </div>
            <div class="mtms-collapse-content">退休：￥123123123</div>
            <div class="mtms-collapse-content">其他：￥0</div>
          </el-collapse-item>
        </el-collapse>
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
          'qianN' : new Date().getFullYear()-2+'',
          'quN' : new Date().getFullYear()-1+'',
          'jinN' : new Date().getFullYear()+'',
        }  ,
   
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
          text:'近三年每月医保基金收缴折线图',
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
          columns: ['mth', 'qianN', 'quN', 'jinN'],
          rows: [
            { 'mth': '1月', 'qianN': 1393, 'quN': 1093, 'jinN':2332},
            { 'mth': '2月', 'qianN': 1322, 'quN': 2323, 'jinN':12312},
            { 'mth': '3月', 'qianN': 1245, 'quN': 3433, 'jinN':2342},
            { 'mth': '4月', 'qianN': 567, 'quN': 454, 'jinN':3435},
            { 'mth': '5月', 'qianN': 12, 'quN': 6767, 'jinN':1234},
            { 'mth': '6月', 'qianN': 134, 'quN': 678, 'jinN':2324},
            { 'mth': '7月', 'qianN': 5666, 'quN': 1233, 'jinN':3434},
            { 'mth': '8月', 'qianN': 1231, 'quN': 6765, 'jinN':987},
            { 'mth': '9月', 'qianN': 2332, 'quN': 78, 'jinN':787},
            { 'mth': '10月', 'qianN': 4545, 'quN': 121, 'jinN':7676},
            { 'mth': '11月', 'qianN': 4566, 'quN': 232, 'jinN':2332},
            { 'mth': '12月', 'qianN': 2313, 'quN': 4545, 'jinN':1234}
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