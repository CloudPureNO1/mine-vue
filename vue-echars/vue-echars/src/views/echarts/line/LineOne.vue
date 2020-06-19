<template>
    <div class="line-one-main">
        <div id="lineOne" :style="{height:height,width:'100%'}"></div>
    </div>
</template>

<script>
export default {
   // name:'LineOne',
    data(){
        return{
            height:'300px',//单位：像素，
            width:'auto',
            xAxisData:[],
            data:[]
        }
    },
    mounted(){
        this.xAxisData=['周一','周二','周三','周四','周五','周六','周日'];
        this.data=[820, 932, 901, 934, 1290, 1330, 1320];
        this.drawLine()
    },
    methods:{
        drawLine(){
            let lineOne=this.$echarts.init(document.getElementById('lineOne'));
            let option={
                title:{
                    text:'折线图1',
                    textStyle:{
                        fontSize:12,
                        color:'#dfffff'
                    }
                },
                 legend:{
                        show:true,
                        itemWidth:12,
                        itemHeight:8,
                        itemGap:5,//图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。默认 10，,
                        padding:3//分别设置四个方向的内边距[3,3,3,3]
                    },
                    xAxis:{
                        name : '类别',
                        type : 'category',
                        data:this.xAxisData
                    },
                    yAxis:{
                        name:'数值',
                        type: 'value',
                        position:'left'
                    },
                    series: [{
                        data: this.data,
                        type: 'line'
                    }],
                    tooltip:{
                        formatter: '{b0}: {c0}<br />{b1}: {c1}',
                    },
                    toolBox:{
                        show:ture,
                        itemSize:12,
                        showTitle:true,
                        feature: {
                            dataView:{
                                show:true,
                                readOnly:true,
                            },
                            saveAsImage:{
                                show:true,
                            },
                            magicType: {
                                type: ['line', 'bar', 'stack', 'tiled']
                            },
                            myTool1: {
                                show: true,
                                title: '自定义扩展方法1',
                                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                                onclick: function (){
                                    alert('myToolHandler1')
                                }
                            },
                            myTool2: {
                                show: true,
                                title: '自定义扩展方法',
                                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                                onclick: function (){
                                    alert('myToolHandler2')
                                }
                            }
                        }
                    }
            };
            lineOne.setOption(options);
        }
    }
}
</script>

<style scoped>
    .line-one-main{
        width:100%;
        height:100%;
    }
</style>