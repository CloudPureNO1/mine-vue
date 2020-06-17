<template>
    <div class="echarts-balance-main">
        <div class="title box">
            <div class="title-left">
                <span>累计结余：</span>
                <span>999.23</span>
                <span>万元</span>
            </div>
            <div class="title-right item">
                <el-button-group>
                    <el-button type="primary" plain size="mini">总计</el-button>
                    <el-button type="primary"  plain size="mini">职工</el-button>
                    <el-button type="primary" plain size="mini">城乡</el-button>
                </el-button-group>
            </div>
        </div>
        <el-divider></el-divider>
        <div class="content">
            <div ref="balanceId" :style="{height:echartsHeight,width:echartsWidth}"></div>
        </div>
        <el-divider></el-divider>
        <div class="bottom box">
            <div class="bottom-left">
                <span>本年结余：</span> <span>999.23</span> <span>万元</span>
            </div>
            <div class="bottom-left">
                <span>,</span>
            </div>
            <div class="bottom-left">
                <span>本月结余：</span> <span>333.23</span> <span>万元</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Balance',
    data(){
        return{
            echartsHeight:'300px',
            echartsWidth:'auto'
        }
    },
    created(){
        //Do something;
    },
    mounted(){
        this.drawBlance();
    },
    methods:{
        drawBlance(){
            let that = this;
            let balanceId = this.$echarts.init(this.$refs.balanceId);
            // let option = {
            //     backgroundColor:'#0f375f',
            //     legend:{
            //         itemWidth:15,
            //         itemHeight:8,
            //         itemGap:5
            //     },
            //     xAxis:{
            //         type:'category',
            //         data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            //         axisTick:{
            //             show:false,
            //         },
            //         splitLine:{
            //                 show:false
            //         },
            //         axisLabel:{//坐标轴刻度名称
            //             show:true,
            //             interval:2//
            //         },
            //         axisLine:{
            //             lineStyle:{
            //                 color: {
            //                     type: 'linear',
            //                     x: 0,
            //                     y: 0,
            //                     x2: 0,
            //                     y2: 1,
            //                     colorStops: [{
            //                         offset: 0, color: '#26D9FF' // 0% 处的颜色
            //                     }, {
            //                         offset: 1, color: '#26D9FF' // 100% 处的颜色
            //                     }] 
            //                 }
            //             }
            //         }
            //     },
            //     yAxis:{
            //         name:'金额(万元)',
            //         type:'value',
            //          axisLine:{
            //             show:false
            //         },
            //         axisTick:{
            //             show:false
            //         },
            //         axisLabel:{//坐标轴刻度名称
            //             show:true,
            //             interval:1//
            //         },
            //         axisLine:{
            //             lineStyle:{
            //                 color: {
            //                     type: 'linear',
            //                     x: 0,
            //                     y: 0,
            //                     x2: 0,
            //                     y2: 1,
            //                     colorStops: [{
            //                         offset: 0, color: '#26D9FF' // 0% 处的颜色
            //                     }, {
            //                         offset: 1, color: '#26D9FF' // 100% 处的颜色
            //                     }] 
            //                 }
            //             }
            //         }
            //     },
            //     series: {
            //         name:'月结余',
            //         type:'line',
            //         data:[234,-123,345,456,56,678,-123,9,-123,121,234,-123],
            //         smooth:true, 
            //         areaStyle: {
            //             color: {
            //                 type: 'linear',
            //                 x: 0,
            //                 y: 0,
            //                 x2: 0,
            //                 y2: 1,
            //                 colorStops: [
            //                     { offset: 0, color: '#63C2FF'  }, // 0% 处的颜色
            //                     { offset: 0.5, color: '#63C2FF'  }, // 0% 处的颜色
            //                     { offset: 1, color: '#63C2FF'  }, // 0% 处的颜色
            //                 ],
            //                 global: false // 缺省为 false
            //             }
            //         },
            //         color: {
            //             type: 'linear',
            //             x: 0,
            //             y: 0,
            //             x2: 0,
            //             y2: 1,
            //             colorStops: [
            //                     { offset: 0, color: '#63C2FF'  }, // 0% 处的颜色
            //                     { offset: 0.5, color: '#63C2FF'  }, // 0% 处的颜色
            //                     { offset: 1, color: '#63C2FF'  }, // 0% 处的颜色
            //             ],
            //             global: false // 缺省为 false
            //         }
            //     },
            //     grid:{
            //         left:'7%',
            //         right:'1%',
            //         top:'22%',
            //         bottom:'17%'
            //     },
            //     tooltip:{
            //         trigger: 'axis',
            //         axisPointer: {
            //             type: 'cross',
            //             crossStyle: {
            //                 color: '#999'
            //             }
            //         }
            //     },
            //     color:['#63C2FF','#FA6E86','#19D4AE','#FFB980'] 
            // }

  // Generate data
var category = ['2012年','2013年','2014年','2015年','2016年','2017年','2018年'];
var dottedBase = [];
var lineData = [18092,24045,32808
                ,36097,44715,50415
                ,56061,59521,18092,24045,32808
                ,36097,44715,50415,39867,44715,48444,50415
                ,50061,32677,49521,32808];
var barData = [4600,5500,7500
                ,8500,12500,21500
                ,23200,25250,4600,5500,6500
                ,8500,22500,21500,9900,12500,14000,21500
                ,23200,24450,25250,7500];
var rateData = [];               
32808
for (var i = 0; i < 33; i++) {
    // var date = i+2001;
    // category.push(date)
    var rate=barData[i]/lineData[i]*100;
    rateData[i] = rate.toFixed(2);
}


// option
let option = {
    title: {
        text: '',
        x: 'center',
        y: 0,
        textStyle:{
            color:'#B4B4B4',
            fontSize:16,
            fontWeight:'normal',
        },
        
    },
    backgroundColor:  {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#151B39' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#101333' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.1)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    legend: {
        data: ['增值税应纳税额', '一般纳税人户数','增幅',],
        textStyle: {
            color: '#B4B4B4'
        },
        top:'7%',
    },
    grid:{
        x:'12%',
        width:'82%',
        y:'12%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4'
            }
        },
        axisTick:{
            show:false,
        },
    },
    yAxis: [{

        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        
        axisLabel:{
            formatter:'{value} ',
        }
    },
        {

        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        axisLabel:{
            formatter:'{value} ',
        }
    }],
    
    series: [{
        name: '增幅',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
                normal: {
                color:'#F02FC2'},
        },
        data: rateData
    }, 
    
    {
        name: '增值税应纳税额',
        type: 'bar',
        barWidth: 10,
         
               color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {offset: 0, color: '#956FD4'},
                            {offset: 1, color: '#3EACE5'}
                        ],
                        global: false // 缺省为 false
                    },
        data: barData
    }
   ]
};
            balanceId.setOption(option);
            window.addEventListener('resize',function(){
                balanceId.resize();
            })
        }
    }
}
</script>

<style>
/* 自动居右 */
    .echarts-balance-main .box{
        display: -webkit-flex; /* Safari */
        display: flex;
        align-items: center;
    }
    .echarts-balance-main .item{
        margin-left: auto;
    }
    .echarts-balance-main .title .title-left{
        font-weight:600;
        padding:4px;
    }
    .echarts-balance-main .bottom .bottom-left{
        font-weight:600;
        padding:4px;
    }

    .echarts-balance-main .el-divider {
        background-color: #dcdfe65c;
        position: relative;
    }
    .echarts-balance-main .el-divider--horizontal {
        display: block;
        height: 1px;
        width: 100%;
        margin: 5px 0;
    }
</style>