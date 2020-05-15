<template>
    <div >
        <div style="padding: 10px;  text-align: left;coloe:#a6a5b1;">
            <div>总结余</div>
            <div style="padding: 5px 0px 5px 0px; font-weight: 600; font-size: 1.75rem;">99999999999999</div>
        </div>
        <hr style="border: 1px solid #fbfbfb;  width: 96%;">
        <div :style="{height:heightLj}">
           <ve-line :data="chartData" :settings="chartSettings" :extend="extend" height="100%"></ve-line>
        </div>
        <hr style="border: 1px solid #fbfbfb;  width: 96%;">
        <div style="padding: 5px 0px 5px 10px; text-align: left;">当月结余：777777777777777</div>
    </div>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
      //  stack: { '用户': ['访问用户', '下单用户'] },
       area: true
      },
      this.extend={
          title:{
              show:false
          },
          legend:{
              show:false
          },
          grid:{
              bottom:0,
              top:0,
              left:'-10%' 
          } ,
          xAxis:{
            show:false
          },
          yAxis:{
            show:false
          }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '7', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '8', '访问用户': 1723, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '9', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '10', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '11', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '12', '访问用户': 1233, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '13', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '14', '访问用户': 1233, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '15', '访问用户': -1233, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '16', '访问用户': -4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '17', '访问用户': -4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '18', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '19', '访问用户': 1233, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '20', '访问用户': 89, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '21', '访问用户': -1233, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '22', '访问用户': 234, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '23', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '24', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '25', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '26', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '27', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '28', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '29', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '30', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': '31', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
          ]
        },
        heightLj:''
      }
    }
    ,
      created(){
        this.$nextTick(function () {
          debugger
            let tabH = this.$el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH = parent.document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH = 13;
            let userAddHeight = tabH - tabHeaderH - paginationH ;
            this.heightLj=userAddHeight*1/7+'px';
        });
      }
  }
</script>