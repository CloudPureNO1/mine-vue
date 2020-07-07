<template>
  <div class="invoice">
    <el-button v-if="excelBtnFlag" type="primary" plain @click="exportExcel"
      >导出</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      excelBtnFlag: false,
      jsonData: [],
      wopts: {
        bookType: "xlsx",
        bookSST: true,
        type: "binary",
        cellStyles: true
      }
    };
  },
  beforeCreate() {
    this.excelBtnFlag = false;
  },
  mounted() {
    // //主标题
    let tbTitle = {
      orderNum: "发票报销信息",
      paperHeader: "null",
      paperCtn: "null",
      total: "null",
      month: "null:",
      returnTime: null,
      projectName: "null",
      type: "null:",
      ratePercent: "null",
      mark: "null"
    };
    //表格上的主标题与list 之间的内容，统称为标题内容
    let tbCtn = {
      orderNum: "所属事业部名称:",
      paperHeader: "null",
      paperCtn: "移动互联事业部",
      total: "null",
      month: "部门编号:",
      returnTime: 10002,
      projectName: "null",
      type: "客户经理:",
      ratePercent: "张傲",
      mark: "null"
    };
    let contentList = [
      //表格List内容
      {
        orderNum: "序号",
        paperHeader: "发票抬头（客户公司）",
        paperCtn: "开票内容",
        total: "发票金额",
        month: "对应工作量月份",
        returnTime: "预计回款时间",
        projectName: "对应项目名称",
        type: "发票类型",
        ratePercent: "税率",
        mark: "备注"
      },
      {
        orderNum: "1",
        paperHeader: "上海蔚来汽车有限公司",
        paperCtn: "技术服务费",
        total: "",
        month: "",
        returnTime: "",
        projectName: "",
        type: "",
        ratePercent: "",
        mark: ""
      },
      {
        orderNum: "",
        paperHeader: "",
        paperCtn: "",
        total: "",
        month: "",
        returnTime: "",
        projectName: "",
        type: "",
        ratePercent: "",
        mark: ""
      },
      {
        orderNum: "发票抬头",
        paperHeader: "",
        paperCtn: "",
        total: "",
        month: "",
        returnTime: "",
        projectName: "",
        type: "",
        ratePercent: "",
        mark: ""
      },
      {
        orderNum: "纳税人识别号",
        paperHeader: "",
        paperCtn: "",
        total: "",
        month: "",
        returnTime: "",
        projectName: "",
        type: "",
        ratePercent: "",
        mark: ""
      },
      {
        orderNum: "客户方地址、电话",
        paperHeader: "",
        paperCtn: "",
        total: "",
        month: "",
        returnTime: "",
        projectName: "",
        type: "",
        ratePercent: "",
        mark: ""
      },
      {
        orderNum: "开户行及账号",
        paperHeader: "",
        paperCtn: "",
        total: "",
        month: "",
        returnTime: "",
        projectName: "",
        type: "",
        ratePercent: "",
        mark: ""
      }
    ];

    contentList.unshift(tbCtn);
    contentList.unshift(tbTitle);
    this.jsonData = contentList;
    this.excelBtnFlag = true;
  },
  methods: {
    saveAs(obj, fileName) {
      var tmpa = document.createElement("a");
      tmpa.download = fileName || "下载";
      tmpa.href = URL.createObjectURL(obj);
      // 兼容ie
      if ("msSaveOrOpenBlob" in navigator) {
        window.navigator.msSaveOrOpenBlob(obj, "下载的文件名" + ".xlsx");
      } else {
        tmpa.href = URL.createObjectURL(obj);
      }
      tmpa.click();
      setTimeout(function() {
        URL.revokeObjectURL(obj);
      }, 100);
    },
    exportExcel() {
      this.downloadExl(this.jsonData);
    },
    downloadExl(json, type) {
      let keyMap = Object.keys(json[0]);
      let tmpdata = []; //用来保存转换好的json
      let jO=json
        .map((jsonItem, i) =>
          keyMap.map((k, j) =>
            Object.assign({},
              {
                value: jsonItem[k],
                position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
              }
            )
          )
        ) 
        .reduce((prev, next) => prev.concat(next))
        .forEach((item, i) =>{
            tmpdata[item.position] = {
              v: item.value
            }  
        });
debugger
      var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
      tmpdata["!merges"] = [
        {
          s: { c: 0, r: 0 }, //开始 A1
          e: { c: 9, r: 0 } //结束F1
        },
        {
          s: { c: 0, r: 1 }, //开始 A2
          e: { c: 1, r: 1 } //结束B2
        },
        {
          s: { c: 2, r: 1 }, //开始 C2
          e: { c: 3, r: 1 } //结束D2
        },
        {
          s: { c: 5, r: 1 }, //开始 F2
          e: { c: 6, r: 1 }
        },
        {
          s: { c: 8, r: 1 }, //开始 I2
          e: { c: 9, r: 1 }
        },
        {
          s: { c: 0, r: 5 }, //第六行
          e: { c: 1, r: 5 }
        },
        {
          s: { c: 2, r: 5 }, //第六行
          e: { c: 6, r: 5 }
        },
        {
          s: { c: 0, r: 6 }, //第七行
          e: { c: 1, r: 6 }
        },
        {
          s: { c: 2, r: 6 }, //第七行
          e: { c: 6, r: 6 }
        },
        {
          s: { c: 0, r: 7 }, //第八行
          e: { c: 1, r: 7 }
        },
        {
          s: { c: 2, r: 7 }, //第八行
          e: { c: 6, r: 7 }
        },
        {
          s: { c: 0, r: 8 }, //第九行
          e: { c: 1, r: 8 }
        },
        {
          s: { c: 2, r: 8 }, //第九行
          e: { c: 6, r: 8 }
        }
      ]; //合并单元格
      //        边框样式
      let border = {
        bottom: { style: "thin", color: { rgb: "000000" } },
        top: { style: "thin", color: { rgb: "000000" } },
        left: { style: "thin", color: { rgb: "000000" } },
        right: { style: "thin", color: { rgb: "000000" } }
      };
      //加粗
      let style0 = {
        border: border,
        alignment: { horizontal: "center", wrapText: true, vertical: "center" },
        font: { sz: 18, bold: true, color: { rgb: "000000" }, outline: true }
      };
      let style1 = {
        border: border,
        alignment: { horizontal: "center", wrapText: true, vertical: "center" },
        font: { sz: 12, bold: true, color: { rgb: "000000" }, outline: true }
      };
      //不加粗
      let style2 = {
        border: border,
        alignment: { horizontal: "center", wrapText: true, vertical: "center" },
        font: { sz: 12, color: { rgb: "000000" }, outline: true }
      };
      //蓝底加粗
      let style3 = {
        border: border,
        alignment: { horizontal: "center", wrapText: true, vertical: "center" },
        font: { sz: 12, bold: true, color: { rgb: "000000" }, outline: true },
        fill: { fgColor: { rgb: "00BFFF" } }
      };
      //        第一二行样式
      tmpdata["A1"].s = style0;
      tmpdata["A2"].s = style1;
      tmpdata["B2"].s = style2;
      tmpdata["C2"].s = style2;
      tmpdata["D2"].s = style2;
      tmpdata["E2"].s = style1;
      tmpdata["F2"].s = style2;
      tmpdata["G2"].s = style2;
      tmpdata["H2"].s = style1;
      tmpdata["I2"].s = style2;
      tmpdata["J2"].s = style2;
      //第三行样式
      tmpdata["A3"].s = style3;
      tmpdata["B3"].s = style3;
      tmpdata["C3"].s = style3;
      tmpdata["D3"].s = style3;
      tmpdata["E3"].s = style3;
      tmpdata["F3"].s = style3;
      tmpdata["G3"].s = style3;
      tmpdata["H3"].s = style3;
      tmpdata["I3"].s = style3;
      tmpdata["J3"].s = style3;
      //  第四行样式
      tmpdata["A4"].s = style2;
      tmpdata["B4"].s = style2;
      tmpdata["C4"].s = style2;
      tmpdata["D4"].s = style2;
      tmpdata["E4"].s = style2;
      tmpdata["F4"].s = style2;
      tmpdata["G4"].s = style2;
      tmpdata["H4"].s = style2;
      tmpdata["I4"].s = style2;
      tmpdata["J4"].s = style2;
      //剩余行样式
      for (let i = 6; i <= 9; i++) {
        tmpdata["A" + i].s = style3;
        tmpdata["B" + i].s = style3;
        tmpdata["C" + i].s = style2;
        tmpdata["D" + i].s = style2;
        tmpdata["E" + i].s = style2;
        tmpdata["F" + i].s = style2;
        tmpdata["G" + i].s = style2;
      }

      tmpdata["!cols"] = [
        //设置列宽度
        { wpx: 50 }, //序号
        { wpx: 180 }, //发票抬头
        { wpx: 100 }, //开票内容
        { wpx: 100 }, //发票金额
        { wpx: 90 }, //对应工作量月份
        { wpx: 100 }, //预计回款时间
        { wpx: 100 }, //对应项目名称
        { wpx: 128 }, //发票类型
        { wpx: 100 }, //税率
        { wpx: 150 } //备注
      ];
      tmpdata["!rows"] = [
        //设置行高度
        { hpt: 50 }, //序号
        { hpt: 150 }, //发票抬头
        { hpt: 100 }, //开票内容
        { hpt: 100 } //发票金额
      ];
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
      this.saveAs(
        tmpDown,
        "下载文件名称" +
          "." +
          (this.wopts.bookType == "biff2" ? "xls" : this.wopts.bookType)
      );
 
    },
    getCharCol(n) {
      (s = ""), (m = 0);
      while (n > 0) {
        m = (n % 26) + 1;
        s = String.fromCharCode(m + 64) + s;
        n = (n - m) / 26;
      }
      return s;
    },
    s2ab(s) {
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invoice {
  .excel {
    width: 1200px;
    overflow: auto;
    h2 {
      width: 1200px;
      text-align: center;
    }
    table {
      td {
        text-align: center;
      }
    }
  }
}
</style>
