<template>
    <div :style="{height:userAddHeight,overflow:'auto'}">
        <el-row>
            <el-col :span="24" >
                <mtms-echars-histogram></mtms-echars-histogram>
            </el-col>
        </el-row>
  
        <el-row>
            <el-col :span="24" :offset="0" style="text-align:left;background-color:#dfffff;">
                <el-button type="primary" plain size="mini" ref="beforeY" @click="showValue('yearBeforLast')">2018</el-button>
                <el-button type="primary" plain size="mini" ref="yestodayY" @click="showValue('lastYear')">2019</el-button>
                <el-button type="primary" :plain="todayPlan" size="mini" ref="todayY" @click="showValue('thisYear')">2020</el-button>
            </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-card shadow="always">
              总是显示
            </el-card>
            <div>2019年医保基金收缴情况   总金额：￥1233333333.34,同比增长：100%,环比增长：50%</div>
            <el-row>
              <el-col :span="12">            
                <div :v-show="showMonth">
                  <div  class="mtms-collapse-content">2019年1月
                     总金额：￥3434343 , 同比增长：100%  , 环比增长：50% 
                  </div>
                </div>
               </el-col>
              <el-col :span="12">
                <div :v-show="showJd">
                      <div  class="mtms-collapse-content">2019年第一季度
                       总金额：￥3434343  , 同比增长：100%  , 环比增长：50% 
                    </div>
                </div>
              </el-col>
            </el-row>

          </el-col>
        </el-row>
        <el-row>
          <el-col :span="15">
            <mtms-echars-line3></mtms-echars-line3>
          </el-col>
          <el-col :span="9">
            <mtms-echars-line4></mtms-echars-line4>
          </el-col>
        </el-row>
        <div style="height:5px;"><span></span></div>
        
        <el-row>
            <el-col :span="5" :offset="1">
                <div>
                    <el-row>
                      <el-col :span="23" :offset="1">
                        <mtms-echars-pie-person-type></mtms-echars-pie-person-type>
                      </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="18">
               <!-- <div style="width:100%;text-align:center;"><span>人员类型</span></div>-->
                <div>
                    <el-row>
                    <el-col :span="6">
                        <mtms-echars-pie-person-type1></mtms-echars-pie-person-type1>
                      </el-col>
                    <el-col :span="6">
                        <mtms-echars-pie-person-type2></mtms-echars-pie-person-type2>
                      </el-col>
                      <el-col :span="6">
                        <mtms-echars-pie-person-type3></mtms-echars-pie-person-type3>
                      </el-col>
                      <el-col :span="6">
                        <mtms-echars-pie-person-type4></mtms-echars-pie-person-type4>
                      </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <div style="height:5px; border-bottom:1px solid #dfffff;"></div>
        <el-row>
          <el-col :span="8">
            <mtms-echars-funnel></mtms-echars-funnel>
          </el-col>
          <el-col :span="16">
            <mtms-echars-line></mtms-echars-line>
            <mtms-echars-line2></mtms-echars-line2>
          </el-col>
        </el-row>


    </div>
</template>

<script>
    import Histogram from './Histogram'
    import Line from './Line'
    import Line2 from './Line2'
    import Line3 from './Line3'
    import Line4 from './Line4'
    import Bar from './Bar'
    import Pie1 from './Pie1'
    import Funnel from './Funnel'
    import Funnel1 from './Funnel1'
    import Funnel2 from './Funnel2'
    import PiePersonType from './PiePersonType'
    import PiePersonType1 from './PiePersonType1'
    import PiePersonType2 from './PiePersonType2'
    import PiePersonType3 from './PiePersonType3'
    import PiePersonType4 from './PiePersonType4'
import HistogramByYearVue from './HistogramByYear.vue'
    export default {
      components:{
          "mtms-echars-histogram":Histogram,
          "mtms-echars-histogram-by-year":HistogramByYearVue,
          "mtms-echars-line":Line,
          "mtms-echars-line2":Line2,
          "mtms-echars-line3":Line3,
          "mtms-echars-line4":Line4,
          "mtms-echars-bar":Bar,
          "mtms-echars-pie1":Pie1,
          "mtms-echars-funnel":Funnel,
          "mtms-echars-funnel1":Funnel1,
          "mtms-echars-funnel2":Funnel2,
          "mtms-echars-pie-person-type":PiePersonType,
          "mtms-echars-pie-person-type1":PiePersonType1,
          "mtms-echars-pie-person-type2":PiePersonType2,
          "mtms-echars-pie-person-type3":PiePersonType3,
          "mtms-echars-pie-person-type4":PiePersonType4
      },
    data () {
      return { 
          userAddHeight: '450px' ,
          todayPlan:true,
          showMonth:true,
          showJd:true
      }
    },
    created() {
        this.$nextTick(function () {
            let tabH = this.$el.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH = document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH = 13;
            this.userAddHeight = tabH - tabHeaderH - paginationH + 'px';

            this.$refs['todayY'].$emit('click');
            this.todayPlan=false;
        });
     
    },
    methods:{
        showValue(year){
            if(year=='lastYear'||year=='yearBeforLast'){
                 this.todayPlan=true;
            }
        }
    }
  }
</script>

 <style  scoped>
 .mtms-collapse-content{
  font-size:0.75rem;
  text-align:left;
  padding-left:22px;
}
 </style>