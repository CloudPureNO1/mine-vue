<template>
    <div class="echarts-cars-main">
        <div class="title box">
            <div class="title-left">
                <span>累计结余：</span>
                <span>999.23</span>
                <span>万元</span>
            </div>
            <div class="title-right item">
                <el-button-group>
                    <el-button type="primary" plain size="mini" @click="drawSvg">总计</el-button>
                    <el-button type="primary"  plain size="mini">职工</el-button>
                    <el-button type="primary" plain size="mini">城乡</el-button>
                </el-button-group>
            </div>
        </div>
        <el-divider></el-divider>
        <div class="content">
            <div ref="cars" :style="{height:echartsHeight,width:echartsWidth}" ></div>
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
            echartsHeight:'180px',
            echartsWidth:'auto'
        }
    },
    mounted(){
        this.drawCars();
        this.drawSvg();
    },
    methods:{
        drawSvg(){
            let divHeight = document.getElementsByClassName('echarts-cars-main')[0].clientHeight;
            let divWidth = document.getElementsByClassName('echarts-cars-main')[0].clientWidth;
            this.$emit('drawSvg',{'divHeight':divHeight,'divWidth':divWidth})
        },
        drawCars(){
            let that=this;
            let cars=this.$echarts.init(this.$refs.cars);
            var legendData = ['车辆数', '设计车位']; //图例
            var indicator = [{
                    text: '小型车',
                    max: 6000,
                },
                {
                    text: '中型车',
                    max: 5000
                },
                {
                    text: '大型车',
                    max: 5000
                },
                {
                    text: '货车',
                    max: 5000,
                    //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
                },
                {
                    text: '特种车',
                    max: 5000
                },
                {
                    text: '贵宾车',
                    max: 5000
                }
            ];
            var dataArr = [{
                    value: [4300, 4700, 3600, 3900, 3800, 4200],
                    name: legendData[0],
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#4A99FF',
                                // shadowColor: '#4A99FF',
                                // shadowBlur: 10,
                            },
                            shadowColor: '#4A99FF',
                            shadowBlur: 10,
                        },
                    },
                    areaStyle: {
                            normal: { // 单项区域填充样式
                                color: {
                                    type: 'linear',
                                    x: 0, //右
                                    y: 0, //下
                                    x2: 1, //左
                                    y2: 1, //上
                                    colorStops: [{
                                        offset: 0,
                                        color: '#4A99FF'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(0,0,0,0)'
                                    }, {
                                        offset: 1,
                                        color: '#4A99FF'
                                    }],
                                    globalCoord: false
                                },
                                opacity: 1 // 区域透明度
                            }
                        }
                },
                {
                    value: [3200, 3000, 3400, 2000, 3900, 2000],
                    name: legendData[1],
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#4BFFFC',
                                // shadowColor: '#4BFFFC',
                                // shadowBlur: 10,
                            },
                            shadowColor: '#4BFFFC',
                            shadowBlur: 10,
                        },
                    },
                    areaStyle: {
                             
                                color: {
                                    type: 'linear',
                                    x: 0, //右
                                    y: 0, //下
                                    x2: 1, //左
                                    y2: 1, //上
                                    colorStops: [{
                                        offset: 0,
                                        color: '#4BFFFC'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(0,0,0,0)'
                                    }, {
                                        offset: 1,
                                        color: '#4BFFFC'
                                    }],
                                    globalCoord: false
                                },
                                opacity: 1 // 区域透明度
                             
                        }
                }
            ];
            var colorArr = ['#4A99FF', '#4BFFFC']; //颜色
            let option = {
                // backgroundColor:  {
                //     type: 'linear',
                //     x: 0,
                //     y: 0,
                //     x2: 0,
                //     y2: 1,
                //     colorStops: [{
                //         offset: 0, color: '#151B39' // 0% 处的颜色
                //     }, {
                //         offset: 1, color: '#101333' // 100% 处的颜色
                //     }],
                //     global: false // 缺省为 false
                // },

               // backgroundColor:'#19265d',    

                color: colorArr,
                legend: {
                    orient:'vertical',
                    icon: 'circle', //图例形状
                    data: legendData,
                    bottom:35,
                    right:40,
                    itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
                    itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
                    itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
                    textStyle: {
                        fontSize: 14,
                        color: '#00E4FF',
                    },
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 16
                        },
                    },
                    indicator: indicator,
                    splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                        show: true,
                        areaStyle: { // 分隔区域的样式设置。
                            color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                        }
                    },
                    axisLine: { //指向外圈文本的分隔线样式
                        lineStyle: {
                            color: '#444f84'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#364179', // 分隔线颜色
                            width: 1, // 分隔线线宽
                        }
                    },
                },
                series: [{
                    type: 'radar',
                    symbolSize: 8,
                    // symbol: 'angle',
                    data: dataArr
                }]
            };
            cars.setOption(option);
            window.addEventListener('resize',function(){
                cars.resize();
            })
        }
    }
}
</script>

<style>
 
    .echarts-cars-main{
        width:100%;
    }
/* 自动居右 */
    .echarts-cars-main .box{
        display: -webkit-flex; /* Safari */
        display: flex;
        align-items: center;
    }
    .echarts-cars-main .item{
        margin-left: auto;
    }
    .echarts-cars-main .title .title-left{
        font-weight:600;
        padding:4px;
    }
    .echarts-cars-main .bottom .bottom-left{
        font-weight:600;
        padding:4px;
    }

    .echarts-cars-main .el-divider {
        background-color: #dcdfe65c;
        position: relative;
    }
    .echarts-cars-main .el-divider--horizontal {
        display: block;
        height: 1px;
        width: 100%;
        margin: 5px 0;
    }
</style>