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
            <div ref="timesID" :style="{height:echartsHeight,width:echartsWidth}"></div>
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
    mounted(){
        this.drawtimes();
    },
    methods:{
        drawtimes(){
            let that=this;
            let timesID = this.$echarts.init(this.$refs.timesID);
            let option={
                xAxis:{
                    type:'category',
                    data:[1,2,3,4,5,6,7]
                },
                yAxis:{
                    type:'value'
                },
                series:{

                    type:'line',
                    data:[112,2342,4545,5656,13,454,5656]
                }
            }
            timesID.setOption(option);
            window.addEventListener('resize',function(){
                timesID.resize();
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