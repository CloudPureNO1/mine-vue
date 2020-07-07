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
 
export function exportExcel() {
    downloadExl(this.jsonData);
}

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

export function downloadExl(dataObj, type) {
      let result = bulidData(dataObj); //用来保存转换好的json
      let tmpdata=result.resultData;
      let merges=result.merges;
      var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
      tmpdata["!merges"] = merges//合并单元格
      tmpdata["!cols"] =  colsWidth;//设置列宽
      tmpdata["!rows"] =  rowsHeight;//设置行高
      var tmpWB = {
        SheetNames: ["发票申请单"], //保存的表标题
        Sheets: {
          发票申请单: Object.assign(
            {},
            tmpdata, //内容
            {
              "!ref": outputPos[0] + ":" + outputPos[outputPos.length - 1] //设置填充区域
            }
          )
        }
      };
      var tmpDown = new Blob(
        [
          this.s2ab(
            this.$XLSX.write(
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
      this.saveAs( tmpDown, "下载文件名称." + (this.wopts.bookType == "biff2" ? "xls" : this.wopts.bookType) );
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

        titleCols=[],
        titleCtnCols=[],
		dataCols={},
        footerCols=[],

		titleStyles=[],
		titleCtnStyles=[],
		thStyles=[],
		dataStyles=[],
		footerStyles=[]
    }={}
){
    let headerCols=titleCols.concat(titleCtnCols);
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
		let tempI=0;
		let tempPreCols=0;
		let colStyle=excelStyles[0];
		if(headerIndex<0&&headerStyles[index]&&headerStyles[index]['hpt']){//header 
			rowsHeight.push({"hpt":headerStyles[index]['hpt']});
		}
		if(headerIndex>=0&&footerIndex<0){//body
				if(headerIndex==0&&thStyles.length-1>=0&&thStyles[thStyles.length-1]){
					rowsHeight.push({"hpt":thStyles[thStyles.length-1]});
				}else if(dataStyles['hpt']){
					rowsHeight.push({"hpt":dataStyles['hpt']});
				}
		}		 
		if(footerIndex>=0&&footerStyles[index]&&footerStyles[index]['hpt']){//footer 
			rowsHeight.push({"hpt":footerStyles[index]['hpt']});
		}
		return  Object.keys(item).map((k,i)=>{

			//header  
			if(headerIndex<0){
				tempI=tempI+tempPreCols;
				if(headerCols[index]&&headerCols[index][k]){//所占列数
					tempPreCols=headerCols[index][k];
				}
				
				if(headerStyles[index]&&headerStyles[index][k]){//数据样式
					colStyle=excelStyles[headerStyles[index][k]['styleNum']];
				}
				
				
			}
			//body
			if(headerIndex>=0&&footerIndex<0){
				tempI=tempI+tempPreCols;
				if(dataCols[k]){
					tempPreCols=dataCols[k];
				}
				
				if(headerIndex==0&&thStyles[k]){
					colStyle=excelStyles[thStyles[i]['styleNum']];
				}else if(dataStyles[k]){
					colStyle=excelStyles[dataStyles[k]['styleNum']];
					//excel 的宽度，应该是根据一个基本的行中的列来确定，这里以list 的列确定
					colsWidth.push({"wpx":dataStyles[k]['wpx']});
				}
			}
			//footer  
			if(footerIndex>=0){
				tempI=tempI+tempPreCols;
				if(footerCols[footerIndex]&&footerCols[footerIndex][k]){
					tempPreCols=footerCols[footerIndex][k];
				}
 
				if(footerStyles[footerIndex]&&footerStyles[footerIndex][k]){
					colStyle=excelStyles[footerStyles[footerIndex][k]['styleNum']];
				}
			}
			let mergesObj={s:{c:0,r:0},e:{c:0,r:0}};
			mergesObj.s.c=tempI;
			mergesObj.e.c=tempI+(tempPreCols>0?tempPreCols-1:0);
			mergesObj.s.r=index;
			mergesObj.e.r=index;
			merges.push(mergesObj);

			return Object.assign({},{
				value: item[k],
                position: (tempI > 25 ? this.getCharCol(tempI) : String.fromCharCode(65 + tempI)) + (index + 1),
				style:colStyle
			});
		});
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
    return {"resultData":resultData,"merges":merges,"rowsHeight":rowsHeight,"colsWidth":colsWidth};
}
