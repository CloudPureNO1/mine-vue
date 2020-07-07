<template>
    <div>
        <el-button type="primary" @click="exportExcel">下载</el-button>
    </div>
</template>
<script>
import { export_json_to_excel } from "@/utils/excel/Ktools/Export2Excel.js";
 
export default {
  data() {
    return {
      //表格的数据
      list: [
        {
          name: "蓝叶子",
          phone: 18955191234,
          content:
            "第一个为前置条件，最后一个为预期结果，需要带相应关键字,第一个为前置条件，最后一个为预期结果"
        },
        {
          name: "蓝叶子",
          phone: 18955191234,
          content: "第一个为前置条件，最后一个为预期结果，需要带相应关键字"
        },
        {
          name: "蓝叶子",
          phone: "18955191234",
          content:
            "第一个为前置条件，最后一个为预期结果，需要带相应关键字,zhenhgdsdfsff"
        },
        {
          name: "蓝叶子",
          phone: 18955191234,
          content: "第一个为前置条件，最后一个为预期结果，需要带相应关键字"
        },
        {
          name: "蓝叶子",
          phone: "18955191234",
          content:
            "第一个为前置条件，最后一个为预期结果，需要带相应关键字,zhenhgdsdfsff"
        },
        {
          name: "蓝叶子",
          phone: 18955191234,
          content: "第一个为前置条件，最后一个为预期结果，需要带相应关键字"
        },
        {
          name: "蓝叶子",
          phone: "18955191234",
          content:
            "第一个为前置条件，最后一个为预期结果，需要带相应关键字,zhenhgdsdfsff"
        }
      ]
    };
  },
  methods: {
      exportExcel() {
         this.export2Excel()
      },

      export2Excel(){
            require.ensure([], () => {
              const { export_json_to_excel } = require('@/utils/excel/Ktools/Export2Excel');
              //头
              const tHeader = ['姓名','电话','内容'];
              //对应的标签
              const filterVal = ['name', 'phone', 'content'];
              //标签对应的内容  是一个数组结构            
              const list = this.list;
              //一个方法 我也不知道干嘛的
              const data = this.formatJson(filterVal, list);
              export_json_to_excel(tHeader, data, '列表excel');
            })
          },
      formatJson(filterVal, jsonData){
          return jsonData.map(v => filterVal.map(j => v[j]))
      }
  }
};
 
</script>