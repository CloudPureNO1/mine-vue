<template>
<ve-histogram :height="height" :width="width" :data="chartData" :extend="extend" :settings="chartSettings"   :mark-line="markLine"
    :mark-point="markPoint"></ve-histogram>
 
 
</template>
<script>
	// 标线引入
    import 'echarts/lib/component/markLine'
    // 标点引入
    import 'echarts/lib/component/markPoint'
    export default {
    	data(){
    		this.chartSettings = {
    			series:{
						// 柱子大小
						barWidth: '50%',
						// 折线图样式
						smooth: false,
						 // 去掉旁边0值
						boundaryGap: false,
						// 去掉Y轴下面的刻度
						axisTick: {
	                        inside: true
	                    },
					},
					// 图表渲染模型是否启用提示具体数据
			        label: {
		          		show: true,
		          		position: 'insideLeft'
		            },
                     labelMap:{
                        'mth':'年月',
                        'insuredPeurbmions':'辖区参保总人数',
                        'uebmi':'城镇职工基本医疗',
                        'urbmi':'城镇居民基本医疗'
                    },
                    stack: { 'insuredPeurbmions': ['uebmi', 'urbmi'] },
    			},
                      this.extend={
        series: {
          label: { show: true, position: "inside" }
        },
         //定义了线条，柱状图的颜色，颜色值的顺序你要跟你上面的totalYearList存储的顺序要一直
         color:[ "#fa6e86", "#75c2ef"],    
         
      },
    			// 标线配置（需要引入模块才能操作）
    			this.markLine = {
    				symbol: 'none', // 标线起始点去除
    				lineStyle: {
	                     normal: {
                            //type: 'dashed',	// 标线样式
                            color: '#FF0000', // 标线颜色
                           // symbol: 'none' // 标线结尾取消箭头
                         }
                    },
                     
                   	// 警戒线
                   	data: [
			          {
			            name: '平均线',
			            type: 'average' //平均线
			             
			          }
			        ],
   				}
   				this.markPoint = {
			        data: [
			          {
			            name: '最大值',
			            type: 'max'
			          }
			        ]
		         }
      return {
        height:'300px',
        width:'auto', 
        chartData: {
          columns: ['mth', 'uebmi','urbmi' ],
          rows: [
            { 'mth': '1月', 'uebmi': 99999, 'urbmi': 90187},
            { 'mth': '2月','uebmi': 234234, 'urbmi': 12234},
            { 'mth': '3月','uebmi': 45645, 'urbmi': 77727},
            { 'mth': '4月', 'uebmi': 12312, 'urbmi': 99399},
            { 'mth': '5月', 'uebmi': 77777, 'urbmi': 44445},
            { 'mth': '6月', 'uebmi': 88888, 'urbmi': 64789},
            { 'mth': '7月','uebmi': 98764, 'urbmi': 12354},
            { 'mth': '8月','uebmi': 34567, 'urbmi': 34653},
            { 'mth': '9月','uebmi': 12344, 'urbmi': 45564},
            { 'mth': '10月','uebmi': 56789, 'urbmi': 56657},
            { 'mth': '11月','uebmi': 78905, 'urbmi': 12312},
            { 'mth': '12月','uebmi': 99999, 'urbmi': 90177}
          ]
        }
      }
   
    	}
    }
</script>
 