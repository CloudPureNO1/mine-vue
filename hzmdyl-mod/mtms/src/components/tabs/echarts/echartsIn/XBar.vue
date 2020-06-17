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
            <div ref="xBar" :style="{height:echartsHeight,width:echartsWidth}"></div>
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
    data(){
        return{
            echartsHeight:'300px',
            echartsWidth:'auto'
        }
    },
    mounted(){
        this.drawXBar();
    },
    methods:{
        drawXBar(){
            let that =this;
            let xBar=this.$echarts.init(this.$refs.xBar);
            let data=[
                {
                    value:1231,
                    itemStyle:{
                      color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [
                                {offset: 0, color: '#4D3C4D'},
                                {offset: 1, color: '#F7C2F7'}
                            ],
                            global: false // 缺省为 false
                        },
                    }
                },
                {
                    value:1231,
                    itemStyle:{
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [
                                {offset: 0, color: '#20514F'},
                                {offset: 1, color: '#64FEF8'}
                            ],
                            global: false // 缺省为 false
                        },
                    }
                },
                {
                    value:1231,
                    itemStyle:{
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [
                                {offset: 0, color: '#2C3B52'},
                                {offset: 1, color: '#85B5FC'}
                            ],
                            global: false // 缺省为 false
                        },
                    }
                } 
            ]
            let option={
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
                legend:{
                    itemWidth:15,
                    itemHeight:8,
                    itemGap:5
                },
                xAxis:{
                    type:'value',
                    axisTick: {
                    show: false
                    },
                    axisLine: {
                    show: false
                    },
                    splitLine: {
                    show: false
                    },
                    axisLabel: {
                    show: false
                    }
                },
                yAxis:{
                    type:'category',
                    data:[1,2,3,4,5,6,7],
                    inverse: true,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                    show: false,
                        inside: false
                    },
                    splitArea: {
                    show: false
                    },
                    splitLine: {
                    show: false
                    },
                },
                series:{
                    type:'bar',
                    data:data,
                    zlevel: 2,
                    barWidth: '10px',
                    animationDuration: 1500,
                    label: {
                    normal: {
                        color: '#b3ccf8',
                        show: true,
                        position: [0, '-24px'],
                        textStyle: {
                        fontSize: 16
                        },
                        formatter: function (a, b) {
                        return a.name
                        }
                    }
                    }
                },
                grid: {
                    borderWidth: 0,
                    top: '10%',
                    left: '5%',
                    right: '15%',
                    bottom: '3%'
                },
            }
            xBar.setOption(option);
            window.addEventListener('resize',function(){
                xBar.resize();
            })
        }
    }
}
</script>