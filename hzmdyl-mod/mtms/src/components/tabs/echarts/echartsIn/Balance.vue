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
            echartsHeight:'100px',
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
            let option = {
                backgroundColor:'#19265d', 
                legend:{
                    itemWidth:15,
                    itemHeight:8,
                    itemGap:5
                },
                xAxis:{
                    type:'category',
                    data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisTick:{
                        show:false,
                    },
                    splitLine:{
                        show:false
                    },
                    axisLabel:{//坐标轴刻度名称
                        show:true,
                        interval:2//
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#B4B4B4'
                        }
                    }
                },
                yAxis:{
                    name:'金额(万元)',
                    type:'value',
                     axisLine:{
                        show:false
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    },
                    axisLabel:{//坐标轴刻度名称
                        show:true,
                        interval:1//
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#B4B4B4'
                        }
                    }
                },
                series: {
                    name:'月结余',
                    type:'line',
                    data:[234,-523,645,456,56,678,-423,9,-323,121,234,-123],
                    smooth:true, 
                    areaStyle: {
                            color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {offset: 0, color: '#63C2FF'},
                                        {offset: 0.5, color: '#63C2FF'},
                                        {offset: 1, color: '#63C2FF'}
                                    ],
                                    global: false // 缺省为 false
                            },
                    },
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                                { offset: 0, color: '#63C2FF'  }, // 0% 处的颜色
                                { offset: 0.5, color: '#63C2FF'  }, // 0% 处的颜色
                                { offset: 1, color: '#63C2FF'  }, // 0% 处的颜色
                        ],
                        global: false // 缺省为 false
                    }
                },
                grid:{
                    left:'7%',
                    right:'1%',
                    top:'22%',
                    bottom:'17%'
                },
                tooltip:{
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                color:['#63C2FF','#FA6E86','#19D4AE','#FFB980'] 
            }

 
            balanceId.setOption(option);
            window.addEventListener('resize',function(){
                balanceId.resize();
            })
        }
    }
}
</script>

<style>
    .echarts-balance-main{
        width:100%;
    }
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