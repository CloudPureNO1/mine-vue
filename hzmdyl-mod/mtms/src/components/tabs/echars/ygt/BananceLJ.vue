<template>
    <div sytle="padding-right:5px;height:170px;">
        <div style="padding: 5px 10px 10px 10px;  text-align: left;color:#a6a5b1;">
            <div >累计结余（截止到当月）</div>
            <div style="padding:  10px 0px 0px 5px; font-weight: 600; font-size: 1.75rem;color:#333333;">99999999999999</div>
        </div>
        <hr style="border: 1px solid #fbfbfb;  width: 96%;">
        <ve-line :data="chartData" :settings="chartSettings" :extend="extend" height="75px"></ve-line>
        <div style="padding: 5px 0px 5px 10px; text-align: left;color:#a6a5b1;height:25px;">当月结余：777777777777777</div>
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
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1', '访问用户': 1111393  },
            { '日期': '2', '访问用户': 3111530  },
            { '日期': '3', '访问用户': -1112923  },
            { '日期': '4', '访问用户': 1711123 },
            { '日期': '5', '访问用户': 3723292 },
            { '日期': '6', '访问用户': -4123593 },
            { '日期': '7', '访问用户': 4512393  },
            { '日期': '8', '访问用户': 1712323  },
            { '日期': '9', '访问用户': -1234593  },
            { '日期': '10', '访问用户': 4113593  },
            { '日期': '11', '访问用户': 0 },
            { '日期': '12', '访问用户': 0 } 
          ]
        },
        heightLj:''
      }
    }
     
  }
</script>