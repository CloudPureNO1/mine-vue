
function getVisualMapStyle(data,conf) { 
    if(!conf.mapVisual){return null}
    var styleID = conf.mapVisualStyle;
    if(typeof styleID === "undefined"){return {};}
    if(styleID.length<1){return null;}
    var arrayValue = getArrValue(data,"num")
    var maxValue = Math.max.apply(null,arrayValue);
	var minValue = Math.min.apply(null,arrayValue);
	var getPieces = function(pieces){
		var piecesList,res;
		try{
			piecesList = eval(pieces);
		}catch(e){
			return []
		}
		piecesList.sort(function(a,b){
			return a-b;
		});
		res = [];
		for(var i = 1;i<piecesList.length;i++){
			res.push({
				min:piecesList[i-1],
				max:piecesList[i]
			});
		}
		return res;
	}
    var visualMap = {
        "vs_fd0001":{
			type:"piecewise",
			splitNumber: 5,
			precision : 0,
            //color: ['#d94e5d','#eac736','#50a3ba'],
            textStyle: {
                color: '#fff'
			}
        },
        "vs_lx0001":{
            type: 'continuous',
            text:['最大','最小'],
            realtime: false,
            calculable : true,
            //color: ['orangered','yellow','lightskyblue']
        },
        "vs_none":{
            show:false
        }
    };
    var resObj = visualMap[styleID];
	resObj.max=Number((maxValue*1.1).toFixed(0));
	resObj.max = resObj.max%5===0?resObj.max:((5-resObj.max%5) + resObj.max);
    resObj.min=Number((minValue*0.9).toFixed(0));
	resObj.min = resObj.min%5===0?resObj.min:(-resObj.min%5) + resObj.min;
    resObj.seriesIndex=0;
    resObj.geoIndex=0;
	resObj.dimension = 2;
	if(resObj.type === "piecewise" && conf.mapVisualPieces && getPieces(conf.mapVisualPieces).length>0){
		resObj.pieces = getPieces(conf.mapVisualPieces)
	}
	console.log(resObj)
    return resObj;
}

 function getBubbleStyle(data,conf) { 
	var bubbleOption = {};
	var showLabel = getType(conf.mapLabelShow)==="boolean"||conf.mapLabelShow?conf.mapLabelShow:true;
	//var showLabel = false;
    var bubble = {
        "bs_dt0001": {//动态圆形黄色带阴影
            symbol:"circle",
            type: "effectScatter",
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            }
        },
        "bs_jt0001": {//静态圆形蓝色
            symbol:"circle",
            type: "scatter",
            itemStyle: {
                normal: {
                    color: 'blue',
                    shadowBlur: 0,
                    shadowColor: 'yellow'
                }
            }
        },
    }
    if(!conf.mapBubble){//不显示气泡图时
        bubbleOption = {
            data: data[2],
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: showLabel?10:0,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: showLabel
                },
                emphasis: {
                    show: true
                }
            }
        }
    }else{//显示气泡图
        var arrayValue = getArrValue(data[0],"num")
        var maxValue = Math.max.apply(null,arrayValue);
        var minValue = Math.min.apply(null,arrayValue);
        var symbolSize = 10;
        var symbol = bubble[conf.mapBubbleStyle].symbol || "circle";
        if(conf.mapBubbleSize === "dt"){
			symbolSize = function(val) {
                return (val[2]/maxValue*20)<5?5:(val[2]/maxValue*20);//todo
            }
        }
        bubbleOption = [{
            name: '动态散点',
            type: bubble[conf.mapBubbleStyle].type || 'effectScatter',
            coordinateSystem: 'geo',
            data: data[0],
            symbol: symbol,
            symbolSize: symbolSize,
            effectType: 'ripple',
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: showLabel
                }
            },
            itemStyle: bubble[conf.mapBubbleStyle].itemStyle || {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        },{
            data: data[1],
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: "circle",
            symbolSize: showLabel?5:0,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: showLabel
                },
                emphasis: {
                    show: true
                }
            }
        }]
	}
	if(conf.mapMark){
		var markOpt = {
			name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: conf.mapMarkType || 'pin', //气泡
            symbolSize: conf.mapMarkSize || 20,
            label: {
                normal: {
					show: false,
					formatter: function(val){
						var value = val.value;
						return value[2]>0?value[2]:"";
					},
                    textStyle: {
                        color: conf.mapMarkTextColor || '#fff',
                        fontSize: conf.mapMarkTextSize || 9,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: conf.mapMarkColor || '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: data[0],
		}
		bubbleOption.push(markOpt);
	}
	console.log(bubbleOption);
    return bubbleOption;
}

function getLinesStyle(data,conf) {  
    if(!conf.mapLines || typeof data === "undefined" || data.length < 1){
        return {type: 'lines'};
    }
    var linesOption = {};
    linesOption = [{
        name: "线图1",
        type: 'lines',
        zlevel: 10,
        symbol: ['none', 'none'],
        symbolSize: 10,
        silent:true,
        effect: { 
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'arrow',
            symbolSize: 10
        },
        lineStyle: {
            normal: {
                color:"#46bee9",
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: data
    },{
        name: "线图2",
        type: 'lines',
        zlevel: 5,
        silent:true,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: "#a6c84c",
                width: 0,
                curveness: 0.2
            }
        },
        data: data
    }]
    return linesOption
}

function getMapIconSeries(data,conf){
	if(!data || !data[0]){
		return "";
	}
	var iconData = data[0];
	return {
		data: iconData,
		name: '散点',
		type: 'scatter',
		coordinateSystem: 'geo',
		symbol:"image://"+conf.mapIconPath,
		symbolSize: conf.mapIconSize || 10,
		label: {
			normal: {
				show: false
			},
			emphasis: {
				show: false
			}
		}
	}
}



/*------------------ echarts组件配置部分 ------------------*/

/**
 * 修改单轴配置
 * @param {*} option echarts option
 * @param {*} conf 组件配置conf
 */
function getAxisOption(option, conf) {
	var resOpt = option;//deepClone(option);
	if (conf.barDirection && typeof conf.barDirection != "undefined") { //未定义、
		if (conf.barDirection === "horizontal" && option.xAxis.type === "category") {
			resOpt["xAxis"] = [resOpt["yAxis"], resOpt["yAxis"] = resOpt["xAxis"]][0]; //交换xAxis与yAxis变量值
			resOpt["yAxis"].inverse = true;
		} else if (conf.barDirection === "vertical" && option.xAxis.type === "value") {
			resOpt["xAxis"] = [resOpt["yAxis"], resOpt["yAxis"] = resOpt["xAxis"]][0];
		}
	}
	if (conf.xAxis && conf.xAxis != "undefined") {
		try {
			resOpt.xAxis.show = true;
			resOpt.xAxis.axisLine.show  = (conf.xAxisLine  !== "none" && conf.xAxisLine ? true : false);
			resOpt.xAxis.axisLabel.show = (conf.xAxisLabel !== "none" && conf.xAxisLabel ? true : false);
			resOpt.xAxis.splitLine.show = (conf.xAxisSplit !== "none" && conf.xAxisSplit ? true : false);
			if(resOpt.xAxis.axisLabel.show){
				resOpt.xAxis.axisLabel.interval = $.isNumeric(conf.xAxisInterval)?Number(conf.xAxisInterval):"auto";
				resOpt.xAxis.axisLabel.rotate = (conf.xAxisRotate || 0)-0;
			}
		} catch (e) {
			console.error("组件x轴设置格式错误");
		}
	} else {
		try {
			resOpt.xAxis.show = false
		} catch (e) {
			console.error("组件x轴设置格式错误");
		}
	}
	if (conf.yAxis && conf.yAxis != "undefined") {
		try {
			resOpt.yAxis.show = true;
			resOpt.yAxis.axisLine.show  = (conf.yAxisLine  !== "none" && conf.yAxisLine ? true : false);
			resOpt.yAxis.axisLabel.show = (conf.yAxisLabel !== "none" && conf.yAxisLabel ? true : false);
			resOpt.yAxis.splitLine.show = (conf.yAxisSplit !== "none" && conf.yAxisSplit ? true : false);
			if(resOpt.yAxis.axisLabel.show){
				resOpt.yAxis.axisLabel.interval = $.isNumeric(conf.yAxisInterval)?Number(conf.yAxisInterval):"auto";
				resOpt.yAxis.axisLabel.rotate = (conf.yAxisRotate || 0)-0;
			}
		} catch (e) {
			console.error("组件y轴设置格式错误");
		}
	} else {
		try {
			resOpt.yAxis.show = false
		} catch (e) {
			console.error("组件y轴设置格式错误");
		}
	}
	return resOpt;
}

/**
 * 修改双轴配置
 * @param {*} option echarts option
 * @param {*} conf 组件配置conf
 */
function getDoubleAxisOption(option,conf) {
	var resOpt = option;//deepClone(option);
	if (conf.xAxis && conf.xAxis != "undefined") {
		try {
			resOpt.xAxis.show = true;
			resOpt.xAxis.axisLine.show =  (conf.xAxisLine  !== "none" && conf.xAxisLine ? true : false);
			resOpt.xAxis.axisLabel.show = (conf.xAxisLabel !== "none" && conf.xAxisLabel ? true : false);
			resOpt.xAxis.splitLine.show = (conf.xAxisSplit !== "none" && conf.xAxisSplit ? true : false);
			if(resOpt.xAxis.axisLabel.show){
				resOpt.xAxis.axisLabel.interval = $.isNumeric(conf.xAxisInterval)?Number(conf.xAxisInterval):"auto";
				resOpt.xAxis.axisLabel.rotate = (conf.xAxisRotate || 0)-0;
			}
		} catch (e) {
			console.error("组件x轴设置格式错误");
		}
	} else {
		try {
			resOpt.xAxis.show = false
		} catch (e) {
			console.error("组件x轴设置格式错误");
		}
	}
	if (conf.yAxis && conf.yAxis != "undefined") {
		if(getType(resOpt.yAxis) != "array"){
			try {
				resOpt.yAxis.show = true;
				resOpt.yAxis.axisLine.show  = (conf.yAxisLine  !== "none" && conf.yAxisLine ? true : false);
				resOpt.yAxis.axisLabel.show = (conf.yAxisLabel !== "none" && conf.yAxisLabel ? true : false);
				resOpt.yAxis.splitLine.show = (conf.yAxisSplit !== "none" && conf.yAxisSplit ? true : false);
				if(resOpt.yAxis.axisLabel.show){
					resOpt.yAxis.axisLabel.interval = $.isNumeric(conf.yAxisInterval)?Number(conf.yAxisInterval):"auto";
					resOpt.yAxis.axisLabel.rotate = (conf.yAxisRotate || 0)-0;
				}
			} catch (e) {
				console.error("组件y轴设置格式错误");
			}
		}else{
			try{
				for(var i=0;i<resOpt.yAxis.length;i++){
					resOpt.yAxis[i].show = true;
					resOpt.yAxis[i].axisLine.show  = (conf.yAxisLine  !== "none" && conf.yAxisLine ? true : false);
					resOpt.yAxis[i].axisLabel.show = (conf.yAxisLabel !== "none" && conf.yAxisLabel ? true : false);
					resOpt.yAxis[i].splitLine.show = (conf.yAxisSplit !== "none" && conf.yAxisSplit ? true : false);
					if(resOpt.yAxis[i].axisLabel.show){
						resOpt.yAxis[i].axisLabel.interval = $.isNumeric(conf.yAxisInterval)?Number(conf.yAxisInterval):"auto";
						resOpt.yAxis[i].axisLabel.rotate = (conf.yAxisRotate || 0)-0;
					}
				}
			}catch(e){

			}
		}
	} else {
		try {
			resOpt.yAxis.show = false
		} catch (e) {
			console.error("组件y轴设置格式错误");
		}
	}
	return resOpt;
}

/**
 * 修改柱形series配置
 * @param {*} option 
 * @param {*} conf 
 */
function getBarOption(option, conf) {
	var resOpt = option;//deepClone(option);
	var seriesArr = resOpt.series;
	for(var i=0;i<seriesArr.length;i++){
		if (seriesArr[i].type != "bar") { //不是bar类型，跳过
			break;
		}
		if(conf.barWidth && conf.barWidth != "undefined"){
			seriesArr[i].barWidth = conf.barWidth;
		}
		if(conf.stack && conf.stack != undefined){
			seriesArr[i].stack = conf.stack;
		}else if(getType(conf.stack)==="boolean" && !conf.stack){
			seriesArr[i].stack = false;
		}
		if(conf.label && getType(conf.label)==="boolean"){
			tryAddObject(seriesArr[i],"label.normal",{
				show:true,
				position:conf.labelPosition || "inside",
				formatter:conf.labelFormatter || "{b}: {c}",
				fontSize:conf.labelSize || "14"
			});
		}else{
			tryAddObject(seriesArr[i],"label.normal.show",false);
			//seriesArr[i].stack = false;
		}
	}
	return resOpt;
}

/**
 * 修改柱状图series配置
 * @param {*} option 
 * @param {*} conf 
 */
function getBarColorOption(option,conf){
	if(conf.themeColor && conf.themeColor.length && getType(conf.endColorFilling) !== "undefined"){
        var color = eval(conf.themeColor);
        for(var i=0;i<color.length;i++){
            if(getType(color[i]) === "array"){
				option.series[1].data[i].itemStyle = $.extend(true,option.series[1].data[i].itemStyle,
					{
						color : {
							type: 'linear',
							x: 0,
							y: 0,
							x2: conf.barDirection==="vertical"?0:1,
							y2: conf.barDirection==="vertical"?1:0,
							colorStops : [ {
								offset : 0,
								color : color[i][0] // 0% 处的颜色
							}, {
								offset : 1,
								color : color[i][1]||color[i][0] // 100% 处的颜色
							}]
						}
					}
				)
            }else{
				option.series[1].data[i].itemStyle = $.extend(true,option.series[1].data[i].itemStyle,
					{
						color:color[i]
					})
            }
        }
        if(conf.endColorFilling){
            if(getType(color[color.length-1]) === "array"){
				option.series[1].itemStyle = $.extend(true,option.series[1].itemStyle,{
					color:{
						type: 'linear',
						x: 0,
						y: 0,
						x2: conf.barDirection==="vertical"?0:1,
						y2: conf.barDirection==="vertical"?1:0,
						colorStops:[
							{
								offset : 0,
								color : color[color.length-1][0] // 0% 处的颜色
							}, {
								offset : 1,
								color : color[color.length-1][1] // 100% 处的颜色
							}
						]
					}
				});
            }else{
				option.series[1].itemStyle = $.extend(true,option.series[1].itemStyle,{
					color:color[color.length-1]
				});
            }
        }
	}
	return option;
}

/**
 * 修改线图series配置
 * @param {*} option 
 * @param {*} conf 
 */
function getLineOption(option, conf) {
	var resOpt = option;//deepClone(option);
	var seriesArr = resOpt.series;
	for(var i=0;i<seriesArr.length;i++){
		if (seriesArr[i].type != "line") { //不是line类型，跳过
			break;
		}
		if(conf.lineType && conf.lineType != undefined){
			tryAddObject(seriesArr[i],"lineStyle.normal.type",conf.lineType);
		}
		if(conf.lineSmooth && conf.lineSmooth != undefined){
			seriesArr[i].smooth = conf.lineSmooth;
		}else{
			seriesArr[i].smooth = false;
		}
		if(conf.label && getType(conf.label)==="boolean"){
			tryAddObject(seriesArr[i],"label.normal",{
				show:true,
				position:conf.labelPosition || "inside",
				formatter:conf.labelFormatter || "{b}: {c}",
				fontSize:conf.labelSize || "14"
			});
		}else{
			tryAddObject(seriesArr[i],"label.normal.show",false);
			//seriesArr[i].stack = false;
		}
	}
	return resOpt;
}

/**
 * 修改图例配置
 * @param {*} option 
 * @param {*} conf 
 */
function getSeriesLegendOption(option,conf){
	var resOpt = option;//deepClone(option);
	if (conf.legend && conf.legend != undefined) {
		resOpt.legend.show = true;
		var legendData = [];
		resOpt.series.forEach(function (param) {
			legendData.push(param.name);
		})
		resOpt.legend.data = legendData;
		resOpt.legend.top = conf.legendPosition;
		resOpt.grid[conf.legendPosition] = "20%";
	} else {
		tryAddObject(resOpt,"legend.show",false);
	}
	return resOpt
}

/**
 * 修改配色配置
 * @param {*} option 
 * @param {*} conf 
 */
function getColorOption(option,conf){
	var resOpt = option;//deepClone(option);
	var themeColor;
	try{
		themeColor = eval(conf.themeColor);
	}catch(e){
		themeColor = (conf.themeColor);
	}
	if (getType(themeColor)==="array" && themeColor.length>0) {
		resOpt.color = themeColor;
	}
	return resOpt
}

/**
 * 修改配色配置
 * @param {*} option 
 * @param {*} conf 
 */
function getMapOption(option,conf){
	var resOpt = option;//deepClone(option);
	var themeColor;
	try{
		themeColor = eval(conf.themeColor);
	}catch(e){
		themeColor = (conf.themeColor);
	}
	if (getType(themeColor)==="array" && themeColor.length>0) {
		resOpt.color = themeColor;
	}else{
		delete resOpt["color"];
	}
	console.log(resOpt)
	return resOpt
}

/**
 * 柱形图配置option组合方法
 * @param {*} option 
 * @param {*} conf 
 */
function confBarOption(option, conf) {
	var resOpt = deepClone(option);
	getAxisOption(resOpt,conf);
	getBarOption(resOpt,conf);
	getSeriesLegendOption(resOpt,conf);
	getColorOption(resOpt,conf);
	getBarColorOption(resOpt,conf);
	return resOpt
}

/**
 * 折线图配置option组合方法
 * @param {*} option 
 * @param {*} conf 
 */
function confLineOption(option, conf) {
	var resOpt = deepClone(option);
	getAxisOption(resOpt,conf);
	getLineOption(resOpt,conf);
	getSeriesLegendOption(resOpt,conf);
	getColorOption(resOpt,conf);
	return resOpt
}

/**
 * 混合双轴图配置option组合方法
 * @param {*} option 
 * @param {*} conf 
 */
function confDoubleAxisOption(option,conf) {
	var resOpt = deepClone(option);
	getDoubleAxisOption(resOpt,conf);
	getBarOption(resOpt,conf);
	getLineOption(resOpt,conf);
	getSeriesLegendOption(resOpt,conf);
	getColorOption(resOpt,conf);
	return resOpt;
}

/**
 * 混合单轴图配置option组合方法
 * @param {*} option 
 * @param {*} conf 
 */
function confMixOption(option,conf) {
	var resOpt = deepClone(option);
	getAxisOption(resOpt,conf);
	getBarOption(resOpt,conf);
	getLineOption(resOpt,conf);
	getSeriesLegendOption(resOpt,conf);
	getColorOption(resOpt,conf);
	return resOpt;
}


function addTipLoop00(id,conf){
	clearInterval(projcetCompTemp[id]);
	if(!conf.tipLoop){
		return;
	}
	var dataLen = 0;
	var option = getChart(id).getOption();
	/* var seriesIndex = [];
	for(var i=0;i<option.series.length;i++){
		seriesIndex.push(i);
	} */
	if(option.xAxis[0].type === "category"){
		dataLen = option.xAxis[0].data.length;
	}else if(option.yAxis[0].type === "category"){
		dataLen = option.yAxis[0].data.length;
	}
    var curIndex = 0;
    tipLoop(id,curIndex);
    projcetCompTemp[id] = setInterval(function(){
        curIndex++;
        tipLoop(id,curIndex%dataLen);
    },(conf.tipLoopTime || 2)*1000);
    function tipLoop(id,dataIndex){
        getChart(id).dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: dataIndex
        });
    }
    getChart(id).on("mouseover",function(){
        clearInterval(projcetCompTemp[id]);
    });
    getChart(id).on("mouseout",function(){
        tipLoop(id,0);
        clearInterval(projcetCompTemp[id]);
        var curIndex = 0;
        projcetCompTemp[id] = setInterval(function(){
            curIndex++;
            tipLoop(id,curIndex%dataLen);
        },(conf.tipLoopTime || 2)*1000);
    });
}

function addTipLoop(id,conf){
	clearTimeout(projcetCompTemp[id]);
	if(!conf.tipLoop){
		return;
	}
	var dataLen = 0;
	var option = getChart(id).getOption();
	if(option.xAxis[0].type === "category"){
		dataLen = option.xAxis[0].data.length;
	}else if(option.yAxis[0].type === "category"){
		dataLen = option.yAxis[0].data.length;
	}
    var curIndex = 0;
	function tipLoop(id,dataIndex,time,dataLen){
		var index = dataIndex || 0;
		curIndex = index%dataLen;
		getChart(id).dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index%dataLen
		});
		projcetCompTemp[id] = setTimeout(function(){
			tipLoop(id,++curIndex,time,dataLen)
		},(time || 2)*1000);
    }
    getChart(id).on("mouseover",function(){
        clearTimeout(projcetCompTemp[id]);
    });
    getChart(id).on("mouseout",function(){
        clearTimeout(projcetCompTemp[id]);
        tipLoop(id,curIndex,conf.tipLoopTime,dataLen);
	});	
    tipLoop(id,0,conf.time,dataLen);
}

/*------------------ 组件配置部分结束 ------------------*/