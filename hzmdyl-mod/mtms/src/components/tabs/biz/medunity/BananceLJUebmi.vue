<template>
    <div sytle="padding-right:5px;height:170px;">
        <div style="padding: 5px 10px 10px 10px;  text-align: left;color:#a6a5b1;">
            <div >累计结余（截止到当月）（职工）</div>
            <div style="padding:  10px 0px 0px 5px; font-weight: 600; font-size: 1.75rem;color:#333333;">99999999999999</div>
        </div>
        <hr style="border: 1px solid #fbfbfb;  width: 96%;">
        <ve-line :data="chartData" :settings="chartSettings" :extend="extend" height="75px"></ve-line>
        <div style="padding: 5px 0px 5px 10px; text-align: left;color:#a6a5b1;height:25px;">当月结余：777777777777777</div>
        <!--预算总额/12 得到每月的预算总额  当月结余=当月预算总额/当月基金支付（分职工和城乡）-->
    </div>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
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
              //left:'-10%' 
          } ,
          xAxis:{
            show:true
          },
          yAxis:{
            show:true
          }
      }
      return {
        chartData: {
          columns: ['月份', '月结余'],
          rows: [
            { '月份': '1', '月结余': 1111393 },
            { '月份': '2', '月结余': 3111530 },
            { '月份': '3', '月结余': -1112923  },
            { '月份': '4', '月结余': 1711123},
            { '月份': '5', '月结余': 3723292},
            { '月份': '6', '月结余': -4123593},
            { '月份': '7', '月结余': 4512393},
            { '月份': '8', '月结余': 1712323 },
            { '月份': '9', '月结余': -1234593},
            { '月份': '10', '月结余': 4113593},
            { '月份': '11', '月结余': 0},
            { '月份': '12', '月结余': 0 } 
          ]
        },
        heightLj:''
      }
    }
     
  }
</script>