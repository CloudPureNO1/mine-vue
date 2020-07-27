/** 
 * Excel 导出JS
 * @author 王森明
 * @Date 2020-07-08
 */
import XLSX from 'xlsx-style'
const wopts = {
    bookType: "xlsx",
    bookSST: true,
    type: "binary",
    cellStyles: true
}
const border = {
    bottom: {
        style: "thin",
        color: {
            rgb: "000000"
        }
    },
    top: {
        style: "thin",
        color: {
            rgb: "000000"
        }
    },
    left: {
        style: "thin",
        color: {
            rgb: "000000"
        }
    },
    right: {
        style: "thin",
        color: {
            rgb: "000000"
        }
    }
}
const alignment = {
    horizontal: "center",
    wrapText: true,
    vertical: "center"
}
const fontBase = {
    sz: 12,
    color: {
        rgb: "000000"
    },
    outline: true
}
const fontBase18 = {
    sz: 18,
    color: {
        rgb: "000000"
    },
    outline: true
}
const fontBold = {
    sz: 12,
    color: {
        rgb: "000000"
    },
    outline: true,
    bold: true,
}
const fontBold18 = {
    sz: 18,
    color: {
        rgb: "000000"
    },
    outline: true,
    bold: true,
}
const fill = {
    fgColor: {
        rgb: "00BFFF"
    }
}
const fillGrey = {
    fgColor: {
        rgb: "f2f2f2"
    }
}
const excelStyles = [{
        border: border,
        alignment: alignment,
        font: fontBase
    },

    {
        border: border,
        alignment: alignment,
        font: fontBold,
        fill: fillGrey
    },
    {
        border: border,
        alignment: alignment,
        font: fontBold
    },
    {
        border: border,
        alignment: alignment,
        font: fontBase18
    },

    {
        // border: border, 
        alignment: alignment,
        font: fontBold18,
        fill: fillGrey
    },
    {
        // border: border, 
        alignment: alignment,
        font: fontBold18
    },

    {
        border: border,
        alignment: alignment,
        font: fontBase,
        fill: fill
    },

    {
        border: border,
        alignment: alignment,
        font: fontBold,
        fill: fill
    },

    {
        border: border,
        alignment: alignment,
        font: fontBase18,
        fill: fill
    },

    {
        border: border,
        alignment: alignment,
        font: fontBold18,
        fill: fill
    }
]


export function saveAs(obj, fileName) {
    let tmpa = document.createElement("a");
    tmpa.download = fileName || "下载";
    tmpa.href = URL.createObjectURL(obj);
    if ("msSaveOrOpenBlob" in navigator) {
        window.navigator.msSaveOrOpenBlob(obj, fileName || "下载的文件名" + wopts.bookType || ".xlsx");
    } else {
        tmpa.href = URL.createObjectURL(obj);
    }
    tmpa.click();
    setTimeout(function () {
        URL.revokeObjectURL(obj);
    }, 100);
}

export function downloadExl({
    dataObj,
    fileName,
    type
} = {}) {
    let result = bulidData(dataObj);
    let tmpdata = result.resultData;
    let outputPos = Object.keys(tmpdata);
    let rowCount = result.rowCount;
    let maxColV = 'A';
    outputPos.forEach((item, index) => {
        let ary = [...item];
        maxColV = ary[0] > maxColV ? ary[0] : maxColV;
    });
    tmpdata["!merges"] = result.merges
    tmpdata["!cols"] = result.colsWidth;
    tmpdata["!rows"] = result.rowsHeight;
    var tmpWB = {
        SheetNames: ['数据'],
        Sheets: {
            数据: Object.assign({},
                tmpdata, {
                    "!ref": "A1:" + maxColV + rowCount
                }
            )
        }
    };
    var tmpDown = new Blob(
        [
            s2ab(
                XLSX.write(
                    tmpWB, {
                        bookType: type == undefined ? "xlsx" : type,
                        bookSST: false,
                        type: "binary"
                    }
                )
            )
        ], {
            type: ""
        }
    );
    saveAs(tmpDown, (fileName || "下载文件名称") + "." + (wopts.bookType == "biff2" ? "xls" : wopts.bookType));
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
 * wangsm
 */
export function buildTH(v, ref) {
    let rs = {};
    let cols = v.$refs[ref].columns;
    if (cols) {
        cols.forEach(item => {
            let k = item['property'] == undefined ? 'xh' : item['property'];
            rs[k] = item['label']
        })
    }
    return rs;
}
/**
 * wangsm
 * document.getElementById('medInstitutionData').rows[0].cells[0].innerText
 */
export function buildTHById(id) {
    let rs = {};
    let rows = document.getElementById('medInstitutionData').rows;
    rows.forEach((rI) => {
        item.cells.forEach((cI) => {
            let key = cI['id'] == undefined ? 'xh' : cI['id'];
            rs[key] = cI['innerText'];
        });
    })
    return rs;
}

/**
 * wangsm
 * @param {} val 
 */

export function isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
        return true;
    } else {
        return false;
    }
}


/**
 * wangsm
 * @param {} param0 
 */
export function exportExcelFile({
    fileName = '下载的文件名',
    title = [],
    titleMerges = [],
    titleStyles = [],
    titleCtn = [],
    titleCtnMerges = [],
    titleCtnStyles = [],
    th = {},
    thStyles = [],
    data = [],
    dataMerges = {},
    dataStyles = {},
    footer = [],
    footerMerges = [],
    footerStyles = [],
    notHJ=[]
} = {}) {
    downloadExl({
        dataObj: {
            title,
            titleCtn,
            th,
            data,
            footer,
            titleMerges,
            titleCtnMerges,
            dataMerges,
            footerMerges,
            titleStyles,
            titleCtnStyles,
            thStyles,
            dataStyles,
            footerStyles,
            notHJ
        },
        fileName: fileName
    });
}
 
/**
 * wangsm
 * @param {} param0 
 */
export function trim(s){
  return s.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * wangsm
 * @param {} param0 
 */
export function getStr(s,len){
  return s.substring(0,s.length-len)+'.'+s.substring(s.length-len);
}
/**
 * wangsm
 * @param {} param0 
 */
export function sumBigData(a,b){
  var res='', c=0;
  a = trim(a).split('');
  b = trim(b).split('');
  while (a.length || b.length || c){
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c>9;
  }
  return res.replace(/^0+/,'');
}
/**
 * wangsm
 * @param {} param0 
 */
export function sum(a,b){
  let lenA = trim(a).split('.')[1]==undefined?0:trim(a).split('.')[1].length;
  let lenB = trim(b).split('.')[1]==undefined?0:trim(b).split('.')[1].length;
  if(lenA>lenB){
    let temA=a.replace('.','');
    let temB=b.replace('.','')+(Math.pow(10,lenA-lenB)+'').substring(1);
    let temRS=sumBigData(temA,temB);
    return temRS.substring(0,temRS.length-lenA)+'.'+temRS.substring(temRS.length-lenA);
  }else if(lenA<lenB){
    let temA=a.replace('.','')+(Math.pow(10,lenB-lenA)+'').substring(1);
    let temB=b.replace('.','');
    let temRS=sumBigData(temA,temB);
    return temRS.substring(0,temRS.length-lenB)+'.'+temRS.substring(temRS.length-lenB);
  }else{
    let temRS=sumBigData(a.replace('.',''),b.replace('.',''));
    return temRS.substring(0,temRS.length-lenA)+(lenA>0?'.'+temRS.substring(temRS.length-lenA):'');
  }
 }


/**
 * @desc:组装Excel数据,包含列合并
 * @author 王森明
 * @date 2020-07-17
 * @param  
 * @returns  
 */
export function bulidData({
    title = [],
    titleCtn = [],
    th = {},
    data = [],
    footer = [],
    titleMerges = [],
    titleCtnMerges = [],
    dataMerges = {},
    footerMerges = [],
    titleStyles = [],
    titleCtnStyles = [],
    thStyles = [],
    dataStyles = [],
    footerStyles = [],
    notHJ=[]
} = {}) {
    let headerMerges = titleMerges.concat(titleCtnMerges);
    let headerStyles = titleStyles.concat(titleCtnStyles);
    let rData = [];
    let thN = [];
    let rsObj = {};
    if (data.length > 0) {
        let keyNot = [];
        if (th) { keyNot = Object.keys(data[0]).filter((dKey) => !Object.keys(th).includes(dKey)); }
        let aryhj=[];
        data.forEach((item, i) => {
            keyNot.forEach((nK) => {
                delete item[nK];
            });
            let obj = { xh: i + 1, ...item };
            let aryd=[];
            Object.keys(th).forEach((key,di)=>{
              let nObj={};
              nObj[key]=obj[key];
              aryd.push(nObj);
              if (key == 'xh') { rsObj[key] = '合计'; return; }
              if (obj[key]!=undefined && !isNumber(trim(obj[key]+''))) { rsObj[key] = ''; return; }
              if (obj[key]!=undefined && isNumber(trim(obj[key]+''))) {
                  if(notHJ&&notHJ.includes(key)){
                    rsObj[key] = ''; return;
                  }
                   rsObj[key]=isNumber(rsObj[key])?sum(obj[key]+'',rsObj[key]+''):trim(obj[key]+'');
              }
            })
            rData.push(aryd);
          })
          
        Object.keys(th).forEach((thk,thI)=>{
          let bojth={};
          bojth[thk]=th[thk];
          thN.push(bojth);
          let boj={}
          boj[thk]=rsObj[thk];
          aryhj.push(boj);
        })
        rData.push(aryhj);
    }
     
    rData.unshift(thN);
    let jsonData = title.concat(titleCtn).concat(rData).concat(footer);
    let merges = [];
    let rowsHeight = [];
    let colsWidth = [];
    let result = jsonData.map((item, index) => {
        let headerIndex = index - title.length - titleCtn.length;
        let footerIndex = index - title.length - titleCtn.length - data.length;
        let sc = 0;
        let tempI = 0;
        let tempPreCols = 0;
        let tempCol = 1;
        let tempRow = 1;
        let colWidth = 100;
        let colKeyWidth = [];
        let colStyle = excelStyles[0];
        if (headerIndex < 0) {
            if (headerStyles[index] && headerStyles[index]['hpt']) {
                rowsHeight.push({
                    "hpt": headerStyles[index]['hpt']
                });
            } else {
                if (headerIndex == -(title.length + titleCtn.length)) {
                    rowsHeight.push({
                        "hpt": 50
                    });
                }
            }

        }
        if (headerIndex >= 0 && footerIndex < 0) {
            if (headerIndex == 0) {
                if (thStyles.length - 1 >= 0 && thStyles[thStyles.length - 1]) {
                    rowsHeight.push({
                        "hpt": thStyles[thStyles.length - 1]
                    });
                } else {
                    rowsHeight.push({
                        "hpt": 30
                    });
                }
            } else if (dataStyles['hpt']) {
                rowsHeight.push({
                    "hpt": dataStyles['hpt']
                });
            }
        }
        if (footerIndex >= 0 && footerStyles[index] && footerStyles[index]['hpt']) {
            rowsHeight.push({
                "hpt": footerStyles[index]['hpt']
            });
        }

        let rowDatas = [];
            colKeyWidth = [];
            if (headerIndex < 0) {
              Object.keys(item).forEach((k, i) => {
                tempI = tempI + tempPreCols;
                if (headerMerges[index] && headerMerges[index][k]) {
                    if (headerMerges[index][k]["c"]) {
                        tempPreCols = headerMerges[index][k]["c"];
                        tempCol = headerMerges[index][k]["c"];
                    } else {
                        tempPreCols = 1;
                        tempCol = 1;
                        if (headerIndex == -(title.length + titleCtn.length)) {
                            tempPreCols = Object.keys(rData[0]).length;
                            tempCol = Object.keys(rData[0]).length;
                        }
                    }
                    if (headerMerges[index][k]["sc"]) {
                        sc = headerMerges[index][k]["sc"];
                    }
                    if (headerMerges[index][k]["r"]) {
                        tempRow = headerMerges[index][k]["r"];
                    }
                } else {
                    tempPreCols = 1;
                    tempCol = 1;
                    if (headerIndex == -(title.length + titleCtn.length)) {
                        tempPreCols = Object.keys(rData[0]).length;
                        tempCol = Object.keys(rData[0]).length;
                    }
                }

                if (headerStyles[index] && headerStyles[index][k] && headerStyles[index][k]['styleNum']) {
                    colStyle = excelStyles[headerStyles[index][k]['styleNum']];
                } else {
                    if (headerIndex == -(title.length + titleCtn.length)) {
                        colStyle = excelStyles[4];
                    }
                }

                rowDatas.push(buildRs(tempI,sc,tempCol,index,tempPreCols,tempRow,colKeyWidth,colStyle,item,k,merges,colsWidth));
              });
            }

            if (headerIndex >= 0 && footerIndex <= 1) {
             
              Object.keys(th).forEach((k, i) => {
                tempI = tempI + tempPreCols;
                if (dataMerges[k]) {
                    if (dataMerges[k]['c']) {
                        tempPreCols = dataMerges[k]['c'];
                        tempCol = dataMerges[k]['c'];
                    } else {
                        tempPreCols = 1;
                        tempCol = 1;
                    }
                    if (dataMerges[k]["sc"]) {
                        sc = dataMerges[k]["sc"];
                    }
                    if (dataMerges[k]["r"]) {
                        tempRow = dataMerges[k]["r"];
                    }
                } else {
                    tempPreCols = 1;
                    tempCol = 1;
                }


                if (headerIndex == 0) {

                    if (thStyles[i] && thStyles[i]) {
                        colStyle = excelStyles[thStyles[i]];
                    } else {
                        colStyle = excelStyles[1];
                    }
                    if (dataStyles[k] && dataStyles[k]['wpx']) {
                        colKeyWidth = dataStyles[k]['wpx'];
                    } else {
                        colKeyWidth.push(colWidth);
                    }
                } else if (dataStyles[k]) {
                    if (dataStyles[k]['styleNum']) {
                        colStyle = excelStyles[dataStyles[k]['styleNum']];
                    }
                }
                rowDatas.push(buildRsTb(tempI,sc,tempCol,index,tempPreCols,tempRow,colKeyWidth,colStyle,item,k,i,merges,colsWidth));
              });
            }

            if (footerIndex > 1) {
              Object.keys(item).forEach((k, i) => {
                tempI = tempI + tempPreCols;
                if (footerMerges[footerIndex] && footerMerges[footerIndex][k]) {

                    if (footerMerges[footerIndex][k]["c"]) {
                        tempPreCols = footerMerges[footerIndex][k]["c"];
                        tempCol = footerMerges[footerIndex][k]["c"];
                    } else {
                        tempPreCols = 1;
                        tempCol = 1;
                    }
                    if (footerMerges[footerIndex][k]["sc"]) {
                        sc = footerMerges[footerIndex][k]["sc"];
                    }
                    if (footerMerges[footerIndex][k]["r"]) {
                        tempRow = footerMerges[footerIndex][k]["r"];
                    }
                } else {
                    tempPreCols = 1;
                    tempCol = 1;
                }

                if (footerStyles[footerIndex] && footerStyles[footerIndex][k] && footerStyles[footerIndex][k]['styleNum']) {
                    colStyle = excelStyles[footerStyles[footerIndex][k]['styleNum']];
                }

                rowDatas.push(buildRs(tempI,sc,tempCol,index,tempPreCols,tempRow,colKeyWidth,colStyle,item,k,merges,colsWidth));
              });
            }
            

        return rowDatas;
    });

    let reduceResult = result.reduce((prev, next) => prev.concat(next));

    let resultData = [];
    reduceResult.forEach((item, i) => {
        resultData[item.position] = {
            v: item.value,
            s: item.style
        }
    });
    return {
        "resultData": resultData,
        "merges": merges,
        "rowsHeight": rowsHeight,
        "colsWidth": colsWidth,
        "rowCount": result.length,
        "title":title
    };
}

/**
 * @author wangsm
 * @param {*} tempI 
 * @param {*} sc 
 * @param {*} tempCol 
 * @param {*} index 
 * @param {*} tempPreCols 
 * @param {*} tempRow 
 * @param {*} colKeyWidth 
 * @param {*} colStyle 
 * @param {*} item 
 * @param {*} k 
 * @param {*} merges 
 * @param {*} colsWidth 
 */
export function buildRs(tempI,sc,tempCol,index,tempPreCols,tempRow,colKeyWidth,colStyle,item,k,merges,colsWidth){
  tempI = tempI > sc ? tempI : sc;

  if (tempCol > 1 || tempRow > 1) {
      let mergesObj = {
          s: {
              c: 0,
              r: 0
          },
          e: {
              c: 0,
              r: 0
          }
      };
      mergesObj.s.c = tempI;
      mergesObj.s.r = index;
      mergesObj.e.c = tempI + tempPreCols - 1;
      mergesObj.e.r = (tempRow == 1 ? index : (index + tempRow));
      merges.push(mergesObj);
  }

  for (var tabCol = 0; tabCol < sc - tempI; tabCol++) {
      if (colKeyWidth.length > 0 && colKeyWidth[tabCol]) {
          colsWidth.push({
              "wpx": colKeyWidth[tabCol]
          });
      }
  }
  for (var colN = 0; colN < tempCol; colN++) {
      if (colKeyWidth.length > 0 && colKeyWidth[colN]) {
          colsWidth.push({
              "wpx": colKeyWidth[colN]
          });
      }
      let rcn = tempI + colN;
      let colData = {
          value: colN == 0 ? item[k] : "",
          position: (rcn > 25 ? this.getCharCol(rcn) : String.fromCharCode(65 + rcn)) + (index + 1),
          style: colStyle
      };
      return colData;
  }
}

/**
 * @author wangsm
 * @param {*} tempI 
 * @param {*} sc 
 * @param {*} tempCol 
 * @param {*} index 
 * @param {*} tempPreCols 
 * @param {*} tempRow 
 * @param {*} colKeyWidth 
 * @param {*} colStyle 
 * @param {*} item 
 * @param {*} k 
 * @param {*} i 
 * @param {*} merges 
 * @param {*} colsWidth 
 */
export function buildRsTb(tempI,sc,tempCol,index,tempPreCols,tempRow,colKeyWidth,colStyle,item,k,i,merges,colsWidth){
  tempI = tempI > sc ? tempI : sc;

  if (tempCol > 1 || tempRow > 1) {
      let mergesObj = {
          s: {
              c: 0,
              r: 0
          },
          e: {
              c: 0,
              r: 0
          }
      };
      mergesObj.s.c = tempI;
      mergesObj.s.r = index;
      mergesObj.e.c = tempI + tempPreCols - 1;
      mergesObj.e.r = (tempRow == 1 ? index : (index + tempRow));
      merges.push(mergesObj);
  }

  for (var tabCol = 0; tabCol < sc - tempI; tabCol++) {
      if (colKeyWidth.length > 0 && colKeyWidth[tabCol]) {
          colsWidth.push({
              "wpx": colKeyWidth[tabCol]
          });
      }
  }
  for (var colN = 0; colN < tempCol; colN++) {
      if (colKeyWidth.length > 0 && colKeyWidth[colN]) {
          colsWidth.push({
              "wpx": colKeyWidth[colN]
          });
      }
 
      let rcn = tempI + colN;
      let colData = {
          value: colN == 0 ? item[i][k] : "",
          position: (rcn > 25 ? this.getCharCol(rcn) : String.fromCharCode(65 + rcn)) + (index + 1),
          style: colStyle
      };
      return colData;
  }
}

export function bulidMultiData({parmasList=[]}={}){
    let rs=[];
    if(parmasList&&parmasList.length>0){
        parmasList.forEach((params,index)=>{
           rs.push(bulidData(params));
        });
    }
    return rs;
}

/**
 * wangsm
 * @param {} param0 
 */
export function exportMultiExcelFile({parmasList=[],fileName='下载的文件名',type="xlsx"}={}) {
    downloadMultiExl({
        parmasList: parmasList,
        fileName: fileName,
        type: type
    });
}
 
export function downloadMultiExl({
    parmasList,
    fileName,
    type
} = {}) {
    let resultList = bulidMultiData({parmasList});
    let sheetNames=[];
    let sheets={};
    resultList.forEach((result,rsIndex)=>{
        let tmpdata = result.resultData;
        let outputPos = Object.keys(tmpdata);
        let rowCount = result.rowCount;
        let maxColV = 'A';
        outputPos.forEach((item, index) => {
            let ary = [...item];
            maxColV = ary[0] > maxColV ? ary[0] : maxColV;
        });
        tmpdata["!merges"] = result.merges
        tmpdata["!cols"] = result.colsWidth;
        tmpdata["!rows"] = result.rowsHeight;
        sheetNames.push(result.title[0].title);
        sheets[result.title[0].title]=Object.assign({},
                    tmpdata, {
                        "!ref": "A1:" + maxColV + rowCount
                    }
                )
         
    });
    var tmpWB = {
        SheetNames: sheetNames,
        Sheets: sheets
    };
    var tmpDown = new Blob(
        [
            s2ab(
                XLSX.write(
                    tmpWB, {
                        bookType: type == undefined ? "xlsx" : type,
                        bookSST: false,
                        type: "binary"
                    }
                )
            )
        ], {
            type: ""
        }
    );
    saveAs(tmpDown, (fileName || "下载文件名称") + "." + (wopts.bookType == "biff2" ? "xls" : wopts.bookType));
}
 