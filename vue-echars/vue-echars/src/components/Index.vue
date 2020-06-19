<template>
  <div class="mian-index">
  12312312
      <el-row>
        <el-col :span="8">
          <el-card shadow="always">
              <div id="myChart" :style="{width: defualtWidth, height: defualtHeight}"></div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
              <div id="chartLine" :style="{width: defualtWidth, height: defualtHeight}"></div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
              <div id="chartDoubleLine" :style="{width: defualtWidth, height: defualtHeight}"></div>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-card>
            <div id="drawMultiyId" :style="{width: '100%', height: '400px'}"></div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
          <div id="echartsZF" :style="{width:'100%',height:'400px'}"></div>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12"  >
          <el-card>
              <div id="histomId" :style="{width:'100%',height:'400px'}"></div>
          </el-card>
        </el-col>

        <el-col :span="12"  >
          <el-card>
              <div id="lineBar" :style="{width:'100%',height:'400px'}"></div>
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return{
      defualtWidth:'300px',
      defualtHeight:'300px'
    }
  },
  mounted(){
    this.drawBar();
    this.drawLine();
    this.drawDoubleLine();
    this.drawMultiyId();
    this.drawZF();
    this.drawHistom();
    this.drawLineBar();
  },
  methods: {
    drawBar(){
             // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));

        // 指定图表的配置项和数据
        let option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    drawLine(){
      let option = {
          title: {
              text: '折线图堆叠'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name: '邮件营销',
                  type: 'line',
                  stack: '总量',
                  data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name: '联盟广告',
                  type: 'line',
                  stack: '总量',
                  data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name: '视频广告',
                  type: 'line',
                  stack: '总量',
                  data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name: '直接访问',
                  type: 'line',
                  stack: '总量',
                  data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name: '搜索引擎',
                  type: 'line',
                  stack: '总量',
                  data: [820, 932, 901, 934, 1290, 1330, 1320]
              }
          ]
      };

      let chartLine=this.$echarts.init(document.getElementById('chartLine'));
      chartLine.setOption(option);
    },
    drawDoubleLine(){
        let  data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];

          let dateList = data.map(function (item) {
              return item[0];
          });
          let valueList = data.map(function (item) {
              return item[1];
          });

          let option = {

              // Make gradient line here
              visualMap: [{
                  show: false,
                  type: 'continuous',
                  seriesIndex: 0,
                  min: 0,
                  max: 400
              }, {
                  show: false,
                  type: 'continuous',
                  seriesIndex: 1,
                  dimension: 0,
                  min: 0,
                  max: dateList.length - 1
              }],
              title: [{
                  left: 'center',
                  text: 'Gradient along the y axis'
              }, {
                  top: '55%',
                  left: 'center',
                  text: 'Gradient along the x axis'
              }],
              tooltip: {
                  trigger: 'axis'
              },
              xAxis: [{
                  data: dateList
              }, {
                  data: dateList,
                  gridIndex: 1
              }],
              yAxis: [{
                  splitLine: {show: false}
              }, {
                  splitLine: {show: false},
                  gridIndex: 1
              }],
              grid: [{
                  bottom: '60%'
              }, {
                  top: '60%'
              }],
              series: [{
                  type: 'line',
                  showSymbol: false,
                  data: valueList
              }, {
                  type: 'line',
                  showSymbol: false,
                  data: valueList,
                  xAxisIndex: 1,
                  yAxisIndex: 1
              }]
          };
          let chartDoubleLine=this.$echarts.init(document.getElementById('chartDoubleLine'));
          chartDoubleLine.setOption(option);
    },

    drawMultiyId(){
      let drawMultiy=this.$echarts.init(document.getElementById('drawMultiyId'));
        setTimeout(function () {

            let option = {
                legend: {},
                tooltip: {
                    trigger: 'axis',
                    showContent: false
                },
                dataset: {
                    source: [
                        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                        ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                        ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                        ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                        ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                    ]
                },
                xAxis: {type: 'category'},
                yAxis: {gridIndex: 0},
                grid: {top: '55%'},
                series: [
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                    {
                        type: 'pie',
                        id: 'pie',
                        radius: '30%',
                        center: ['50%', '25%'],
                        label: {
                            formatter: '{b}: {@2012} ({d}%)'
                        },
                        encode: {
                            itemName: 'product',
                            value: '2012',
                            tooltip: '2012'
                        }
                    }
                ]
            };
            
            drawMultiy.on('updateAxisPointer', function (event) {
                var xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                    var dimension = xAxisInfo.value + 1;
                    drawMultiy.setOption({
                        series: {
                            id: 'pie',
                            label: {
                                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                            },
                            encode: {
                                value: dimension,
                                tooltip: dimension
                            }
                        }
                    });
                }
            });

            drawMultiy.setOption(option);

        },10);
    },
    drawZF(){
      let option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          legend: {
              data: ['利润', '支出', '收入']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'value'
              }
          ],
          yAxis: [
              {
                  type: 'category',
                  axisTick: {
                      show: false
                  },
                  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
              }
          ],
          series: [
              {
                  name: '利润',
                  type: 'bar',
                  label: {
                      show: true,
                      position: 'inside'
                  },
                  data: [200, 170, 240, 244, 200, 220, 210]
              },
              {
                  name: '收入',
                  type: 'bar',
                  stack: '总量',
                  label: {
                      show: true
                  },
                  data: [320, 302, 341, 374, 390, 450, 420]
              },
              {
                  name: '支出',
                  type: 'bar',
                  stack: '总量',
                  label: {
                      show: true,
                      position: 'left'
                  },
                  data: [-120, -132, -101, -134, -190, -230, -210]
              }
          ]
      };

      let echartsZF=this.$echarts.init(document.getElementById('echartsZF'));
      echartsZF.setOption(option);
    },
    drawHistom(){
      let option = {
          title: {
              text: '某地区蒸发量和降水量',
              subtext: '纯属虚构'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: ['蒸发量', '降水量']
          },
          toolbox: {
              show: true,
              feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
              }
          },
          calculable: true,
          xAxis: [
              {
                  type: 'category',
                  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
              }
          ],
          yAxis: [
              {
                  type: 'value'
              }
          ],
          series: [
              {
                  name: '蒸发量',
                  type: 'bar',
                  data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name: '降水量',
                  type: 'bar',
                  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                  markPoint: {
                      data: [
                          {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                          {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              }
          ]
      };

      let histom=this.$echarts.init(document.getElementById('histomId'));
      histom.setOption(option);
    },
    drawLineBar(){
      var colors = ['#5793f3', '#d14a61', '#675bba'];

      let  option = {
            color: colors,

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '20%'
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data: ['蒸发量', '降水量', '平均温度']
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '蒸发量',
                    min: 0,
                    max: 250,
                    position: 'right',
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '降水量',
                    min: 0,
                    max: 250,
                    position: 'right',
                    offset: 80,
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[2]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name: '蒸发量',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: '降水量',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '平均温度',
                    type: 'line',
                    yAxisIndex: 2,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        };
      let lineBar=this.$echarts.init(document.getElementById('lineBar'));
      lineBar.setOption(option);
    }
  }
}
</script>

<style>
.mian-index{
  background-color: #f9f9f9;
  height: 100%;
  width: 100%;
}
.mian-index .el-col{
  padding:3px;
}
</style>