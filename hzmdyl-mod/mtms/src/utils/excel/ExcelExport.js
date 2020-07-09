/** 
 * Excel 导出JS
 * @author 王森明
 * @Date 2020-07-08
 */

import XLSX from 'xlsx-style'
const wopts = { bookType: "xlsx", bookSST: true, type: "binary", cellStyles: true }
 
//细边框
const border={
    bottom: { style: "thin", color: { rgb: "000000" } },
    top: { style: "thin", color: { rgb: "000000" } },
    left: { style: "thin", color: { rgb: "000000" } },
    right: { style: "thin", color: { rgb: "000000" } }
}
//居中
const alignment = { horizontal: "center", wrapText: true, vertical: "center" }
//文字样式
const fontBase = { sz: 12, color: { rgb: "000000" }, outline: true }
//文字样式 + 加大
const fontBase18 = { sz: 12, color: { rgb: "000000" }, outline: true }
//文字样式 + 加粗
const fontBold = { sz: 12, color: { rgb: "000000" }, outline: true ,bold: true,}
//文字样式 + 加粗+加大18
const fontBold18 = { sz: 18, color: { rgb: "000000" }, outline: true ,bold: true,}
//背景色
const fill = { fgColor: { rgb: "00BFFF" } }//蓝底
//边框样式
const excelStyles=[
    //样式1
    {
        border: border,//细边框
        alignment:alignment,//居中
        font: fontBase//文字样式
    },
    //样式2+加粗
    {
        border: border,//细边框
        alignment:alignment,//居中
        font: fontBold//文字样式
    },
    //样式+ 加大
    {
        border: border,//细边框
        alignment:alignment,//居中
        font: fontBase18//文字样式
    },
    //样式2+ 加大+加粗
    {
        border: border,//细边框
        alignment:alignment,//居中
        font: fontBold18//文字样式
    },


    //带背景
    //样式1
    {
        border: border,//细边框
        alignment:alignment,//居中
        font: fontBase,//文字样式
        fill:fill
    },
    //样式2+加粗
    {
        border: border,//细边框
        alignment:alignment,//居中
        font: fontBold,//文字样式
        fill:fill
    },
    //样式+ 加大
    {
        border: border,//细边框
        alignment:alignment,//居中
        font: fontBase18,//文字样式
        fill:fill
    },
    //样式2+ 加大+加大
    {
        border: border,//细边框
        alignment:alignment,//居中
        font: fontBold18,//文字样式
        fill:fill
    }
]
 

export function saveAs(obj, fileName) {
      let tmpa = document.createElement("a");
      tmpa.download = fileName || "下载";
      tmpa.href = URL.createObjectURL(obj);
      // 兼容ie
      if ("msSaveOrOpenBlob" in navigator) {
        window.navigator.msSaveOrOpenBlob(obj, fileName||"下载的文件名" + wopts.bookType||".xlsx");
      } else {
        tmpa.href = URL.createObjectURL(obj);
      }
      tmpa.click();
      setTimeout(function() {
        URL.revokeObjectURL(obj);
      }, 100);
    }

export function downloadExl2(dataObj, type) {
      let result = bulidData(dataObj); //用来保存转换好的json
      let tmpdata=result.resultData;
      let outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
      let rowCount=result.rowCount;//cexel 内容qu 总行数
      let maxColV='A';//最大列值
      outputPos.forEach((item,index)=>{
          let ary=[...item];
          maxColV=ary[0]>maxColV?ary[0]:maxColV;  
      });
      tmpdata["!merges"] = result.merges//合并单元格
      tmpdata["!cols"] =  result.colsWidth;//设置列宽
      tmpdata["!rows"] =  result.rowsHeight;//设置行高
      var tmpWB = {
        SheetNames: ["发票申请单"], //保存的表标题
        Sheets: {
          发票申请单: Object.assign(
            {},
            tmpdata, //内容
            {
              "!ref": "A1:" +maxColV+rowCount //设置填充区域
            }
          )
        }
      };
      var tmpDown = new Blob(
        [
          s2ab(
            XLSX.write(
              tmpWB,
              {
                bookType: type == undefined ? "xlsx" : type,
                bookSST: false,
                type: "binary"
              } //这里的数据是用来定义导出的格式类型
            )
          )
        ],
        {
          type: ""
        }
      );
      saveAs( tmpDown, "下载文件名称." + (wopts.bookType == "biff2" ? "xls" :wopts.bookType) );
    } 


    /**
     * 
     * @param {*} dataObj 
     * @param {*} param1 
     */
    export function downloadExl(dataObj, {stNames=[],type='xlsx'}={}) {
        let result = bulidData(dataObj); //用来保存转换好的json
        let tmpdata=result.resultData;
        let outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
        let rowCount=result.rowCount;//cexel 内容qu 总行数
        let maxColV='A';//最大列值
        outputPos.forEach((item,index)=>{
            let ary=[...item];
            maxColV=ary[0]>maxColV?ary[0]:maxColV;  
        });
        tmpdata["!merges"] = result.merges//合并单元格
        tmpdata["!cols"] =  result.colsWidth;//设置列宽
        tmpdata["!rows"] =  result.rowsHeight;//设置行高
   

        let sheets={};
        stNames.forEach((itemSt,inSt)=>{
            sheets[itemSt]= Object.assign( {},
                                tmpdata, //内容
                                {
                                "!ref": "A1:" +maxColV+rowCount //设置填充区域
                                }
                            )
        })
        var tmpWB = {
          SheetNames:stNames, //保存的表标题
          Sheets:sheets
        };
        var tmpDown = new Blob(
          [
            s2ab(
              XLSX.write(
                tmpWB,
                {
                  bookType: type == undefined ? "xlsx" : type,
                  bookSST: false,
                  type: "binary"
                } //这里的数据是用来定义导出的格式类型
              )
            )
          ],
          {
            type: ""
          }
        );
        saveAs( tmpDown, "下载文件名称." + (wopts.bookType == "biff2" ? "xls" :wopts.bookType) );
      } 

export function getCharCol(n) {
      (s = ""), (m = 0);
      while (n > 0) {
        m = (n % 26) + 1;
        s = String.fromCharCode(m + 64) + s;
        n = (n - m) / 26;
      }
      return s;
    } 
export function s2ab(s) {
      if (typeof ArrayBuffer !== "undefined") {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      } else {
        var buf = new Array(s.length);
        for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }
    }
 
  

/**
 * @desc:组装Excel数据,包含列合并
 * @author 王森明
 * @date 2020-07-07
 * @param  {
    title=[],标题内容  json数组
    titleCtn=[],标题和表之间的内容 json数组
    th=[],表头   ["姓名","性别","年龄"]  数组
    data=[],表数据内容 json数组
    footer=[],表底部内容 json数组

    //所占列数  内容可以为空值
    titleCols=[],标题对应内容所占的列数  key  值相同  json数组
    titleCtnCols=[], 标题和表之间的内容 所占的列数 key  值相同   json数组
    dataCols={},表数据 所占列数 key 值相同  json对象
    footerCols=[] 表底部内容占的列数 key  值相同  json数组

    //数据样式  内容可以空值
    titleStyles=[],
    titleCtnStyles=[],
    thStyles=[],
    dataStyles=[],
    footerStyles=[]

    } 
* @returns {"resultData":resultData,"merges":merges,"rowsHeight":rowsHeight,"colsWidth":colsWidth};

    @test   
	let title=[{"title":"发布系统"}];
	let titleCols=[{"title":5}];
	let titleStyles=[{"title":{"styleNum":3,"wpx":180},"hpt":50}];

	let titleCtn=[
		{"orgCodeLabel":"机构编码","orgCode":"0000000","orgNameLabel":"机构名称","orgName":"测试公司"},
		{"printerLabel":"打印者","printer":"admin","printTimeLabel":"打印时间","printTime":"2020-02-02"}
	];
	let titleCtnCols=[
		{"orgCodeLabel":2,"orgCode":2,"orgNameLabel":2,"orgName":3},
		{"printerLabel":2,"printer":2,"printTimeLabel":2,"printTime":3}
	];
	let titleCtnStyles=[
		{"orgCodeLabel":{"styleNum":1,"wpx":180},"orgCode":{"styleNum":0,"wpx":180},"orgNameLabel":{"styleNum":1,"wpx":180},"orgName":{"styleNum":0,"wpx":180},"hpt":45},
		{"printerLabel":{"styleNum":1,"wpx":180},"printer":{"styleNum":0,"wpx":180},"printTimeLabel":{"styleNum":1,"wpx":180},"printTime":{"styleNum":0,"wpx":180},"hpt":45}	
	]

 
	let th=["作者","时间","版权"];
	let thStyles=[1,1,1,40];

	let data=[
		{"author":"wangsm","date":"2020-02-02","@copyRihgt":"浙江网新恩普软件有限公司"},
		{"author":"wangsm","date":"2020-02-02","@copyRihgt":"浙江网新恩普软件有限公司"}
	];
	let dataCols={"author":2,"date":1,"@copyRihgt":3};
	let dataStyles={"author":{"styleNum":0,"wpx":180},"date":{"styleNum":0,"wpx":180},"@copyRihgt":{"styleNum":0,"wpx":180},"hpt":30}
 
	let footer=[
		{"confirmPersonLabel":"确认人","confirmPerson":"CloudPure","confirmDateLabel":"确认时间","confirmDate":"2020-02-02"}
	]
	let footerCols=[
		{"confirmPersonLabel":2,"confirmPerson":3,"confirmDateLabel":2,"confirmDate":3}
	]
	let footerStyles=[
		{"confirmPersonLabel":{"styleNum":1,"wpx":180},"confirmPerson":{"styleNum":0,"wpx":180},"confirmDateLabel":{"styleNum":1,"wpx":180},"confirmDate":{"styleNum":0,"wpx":180},"hpt":40}
	]
 

	console.log(bulidData({title,titleCtn, th, data, footer, titleCols, titleCtnCols, dataCols, footerCols,	titleStyles, titleCtnStyles, thStyles, dataStyles, footerStyles}));

		console.log(bulidData({title,titleCtn, th, data, footer ,titleStyles, titleCtnStyles, thStyles, dataStyles, footerStyles}));
*/ 
 
export function bulidData(
    {
        title=[],
        titleCtn=[],
		th=[],
        data=[],
        footer=[],

        titleMerges=[],
        titleCtnMerges=[],
		dataMerges={},
        footerMerges=[],

		titleStyles=[],
		titleCtnStyles=[],
		thStyles=[],
		dataStyles=[],
		footerStyles=[]
    }={}
){
    let headerMerges=titleMerges.concat(titleCtnMerges);
	let headerStyles=titleStyles.concat(titleCtnStyles);
	let thd={};
	Object.keys(data[0]).forEach((k,i)=>{
		thd[k]=th[i];
	});
	data.unshift(thd);
    let jsonData=title.concat(titleCtn).concat(data).concat(footer);
	let merges=[];//合并
	let rowsHeight=[];
    let colsWidth=[];
	let result=jsonData.map((item,index)=>{
		let headerIndex=index-title.length-titleCtn.length;
		let footerIndex=index-title.length-titleCtn.length-data.length;
		let sc=0;//列开始位置,下标从0开始
		let tempI=0;//元素列开始位置，与sc比较 取最大值
        let tempPreCols=0;//数据开始位置
        let tempCol=1;//默认列数1
        let tempRow=1;//默认行数1
        let colWidth=100;//默认每列的宽度
        let colKeyWidth=[];//原数的所有列宽度
		let colStyle=excelStyles[0];//列样式
		if(headerIndex<0&&headerStyles[index]&&headerStyles[index]['hpx']){//header 
			rowsHeight.push({"hpx":headerStyles[index]['hpx']});
		}
		if(headerIndex>=0&&footerIndex<0){//body
				if(headerIndex==0&&thStyles.length-1>=0&&thStyles[thStyles.length-1]){
					rowsHeight.push({"hpx":thStyles[thStyles.length-1]});
				}else if(dataStyles['hpx']){
					rowsHeight.push({"hpx":dataStyles['hpx']});
				}
		}		 
		if(footerIndex>=0&&footerStyles[index]&&footerStyles[index]['hpx']){//footer 
			rowsHeight.push({"hpx":footerStyles[index]['hpx']});
		}

		let rowDatas=[];
		Object.keys(item).forEach((k,i)=>{
            colKeyWidth=[];
			//header  
			if(headerIndex<0){
 
				tempI=tempI+tempPreCols;
				if(headerMerges[index]&&headerMerges[index][k]){//所占列数
					if(headerMerges[index][k]["c"]){
                        tempPreCols=headerMerges[index][k]["c"];
                        tempCol=headerMerges[index][k]["c"];
					}else{
                        tempPreCols=1;
                        tempCol=1;
                    }
					if(headerMerges[index][k]["sc"]){
						sc=headerMerges[index][k]["sc"];//有sc属性，则取其值
					}
					if(headerMerges[index][k]["r"]){
						tempRow=headerMerges[index][k]["r"];
					}
				}else{
                    tempPreCols=1;
                    tempCol=1;
                }
				
				if(headerStyles[index]&&headerStyles[index][k]&&headerStyles[index][k]['styleNum']){//数据样式
					colStyle=excelStyles[headerStyles[index][k]['styleNum']];
				}
				
				
			}
			//body
			if(headerIndex>=0&&footerIndex<0){
              
				tempI=tempI+tempPreCols;
				if(dataMerges[k]){
					if(dataMerges[k]['c']){
                        tempPreCols=dataMerges[k]['c'];
                        tempCol=dataMerges[k]['c'];
					}else{
                        tempPreCols=1;
                        tempCol=1;
                    }
					if(dataMerges[k]["sc"]){
						sc=dataMerges[k]["sc"];//有sc属性，则取其值
					}
					if(dataMerges[k]["r"]){
						tempRow=dataMerges[k]["r"];
					}
				}else{
                    tempPreCols=1;
                    tempCol=1;
                }
				
				 
				if(headerIndex==0){
                    if(thStyles[i]&&thStyles[i]['styleNum']){
                        colStyle=excelStyles[thStyles[i]['styleNum']];
                    }
                    if(dataStyles[k]&&dataStyles[k]['wpx']){
                        colKeyWidth=dataStyles[k]['wpx'];
                    }else{
                        colKeyWidth.push(colWidth);
                    }
				}else if(dataStyles[k]){
                    if(dataStyles[k]['styleNum']){
                        colStyle=excelStyles[dataStyles[k]['styleNum']];
                    }
				}		
				 

			}
			//footer  
			if(footerIndex>=0){
				tempI=tempI+tempPreCols;
				if(footerMerges[footerIndex]&&footerMerges[footerIndex][k]){

					if(footerMerges[footerIndex][k]["c"]){
                        tempPreCols=footerMerges[footerIndex][k]["c"];
                        tempCol=footerMerges[footerIndex][k]["c"];
					}else{
                        tempPreCols=1;
                        tempCol=1;
                    }
					if(footerMerges[footerIndex][k]["sc"]){
						sc=footerMerges[footerIndex][k]["sc"];//有sc属性，则取其值
					}
					if(footerMerges[footerIndex][k]["r"]){
						tempRow=footerMerges[footerIndex][k]["r"];
					}
				}else{
                    tempPreCols=1;
                    tempCol=1;
                }
 
				if(footerStyles[footerIndex]&&footerStyles[footerIndex][k]&&footerStyles[footerIndex][k]['styleNum']){
					colStyle=excelStyles[footerStyles[footerIndex][k]['styleNum']];
				}
			}
 
			tempI=tempI>sc?tempI:sc;//计算的值
			
			if(tempCol>1||tempRow>1){
				let mergesObj={s:{c:0,r:0},e:{c:0,r:0}};
				mergesObj.s.c=tempI;
				mergesObj.s.r=index;
				mergesObj.e.c=tempI+tempPreCols-1;
				mergesObj.e.r=(tempRow==1?index:(index+tempRow));
				merges.push(mergesObj);
			}

            for(var tabCol=0;tabCol<sc-tempI;tabCol++){
               //excel 的宽度，应该是根据一个基本的行中的列来确定，这里以list 的列确定，其他没有设置的列的宽度都是默认值100
               if(colKeyWidth.length>0&&colKeyWidth[tabCol]){
                    colsWidth.push({"wpx":colKeyWidth[tabCol]});
                }
            }
			for(var colN=0;colN<tempCol;colN++){
               //excel 的宽度，应该是根据一个基本的行中的列来确定，这里以list 的列确定，其他没有设置的列的宽度都是默认值100
                if(colKeyWidth.length>0&&colKeyWidth[colN]){
                   colsWidth.push({"wpx":colKeyWidth[colN]});
                }

                let rcn=tempI+colN;
				let colData={
					value: colN==0?item[k]:"",
					position: (rcn > 25 ? this.getCharCol(rcn) : String.fromCharCode(65 + rcn)) + (index + 1),
					style:colStyle
				};
				rowDatas.push(colData);
            }
		});
		return rowDatas;
	});
	console.log('列合并',merges);
	console.log(result);
	let reduceResult=result.reduce((prev, next) => prev.concat(next));
	console.log(reduceResult);
	let resultData=[];
	reduceResult.forEach((item, i) =>{
        resultData[item.position] = {
           v: item.value,
		   s: item.style
        }
    });
    console.log(resultData);
    return {"resultData":resultData,"merges":merges,"rowsHeight":rowsHeight,"colsWidth":colsWidth,"rowCount":result.length};
}

 