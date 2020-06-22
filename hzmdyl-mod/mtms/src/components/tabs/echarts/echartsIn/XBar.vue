<template>
    <div class="echarts-x-bar-main"  >
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
import { mapState } from 'vuex';
export default {
    data(){
        return{
            echartsHeight:'180px',
            echartsWidth:'auto'
        }
    },
    mounted(){
        this.drawXBar();
        this.drawSvg();
    },
        watch:{
        isCollapse:{
            handler(newVal,oldVal){
                this.drawSvg();
            },
            deep:true
        }
    },
    computed:{
        ...mapState({
            isCollapse:state=>state.layout.isCollapse
        })
    },
    methods:{
         drawSvg(){
            let divHeight = document.getElementsByClassName('echarts-x-bar-main')[0].clientHeight;
            let divWidth = document.getElementsByClassName('echarts-x-bar-main')[0].clientWidth;
            this.$emit('drawSvg',{'divHeight':divHeight,'divWidth':divWidth})
        },
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
                backgroundColor:'#19265d',
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
                that.drawSvg();
            })
        }
    }
}
</script>

<style>
    .echarts-x-bar-main{
        width:100%;
    }
    /* 自动居右 */
    .echarts-x-bar-main .box{
        display: -webkit-flex; /* Safari */
        display: flex;
        align-items: center;
    }
    .echarts-x-bar-main .item{
        margin-left: auto;
    }
    .echarts-x-bar-main .title .title-left{
        font-weight:600;
        padding:4px;
    }
    .echarts-x-bar-main .bottom .bottom-left{
        font-weight:600;
        padding:4px;
    }

    .echarts-x-bar-main .el-divider {
        background-color: #dcdfe65c;
        position: relative;
    }
    .echarts-x-bar-main .el-divider--horizontal {
        display: block;
        height: 1px;
        width: 100%;
        margin: 5px 0;
    }
</style>