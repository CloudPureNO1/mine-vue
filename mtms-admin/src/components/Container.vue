<template>

  <div class="outerCls">
    <el-container style="height:100%;">
      <el-header style="text-align: right; font-size: 12px;border-bottom:1px solid #c7e6f3;">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-main style="padding:0;height:100%;">
        <el-container style="padding:0;height:100%;">
          <el-aside style="border-right:1px solid #c7e6f3;width:18%;" class="div-list">
            <MenuTree></MenuTree>
          </el-aside>
          <el-main style="padding:0;height:100%;" class="div-list">

            <el-table :data="tableData" :row-class-name="tableRowClassName" >
                <el-table-column fixed="left" type="selection" ></el-table-column>
                <el-table-column fixed="left" type="index" label="序号"></el-table-column>
              <el-table-column  prop="date" label="日期" width="150"> </el-table-column>
              <el-table-column prop="idCard" label="身份证" width="200"> </el-table-column>
              <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
              <el-table-column prop="sex" label="性别" width="120"> </el-table-column>
              <el-table-column prop="age" label="年龄" width="120"> </el-table-column>
              <el-table-column prop="province" label="省份" width="120"> </el-table-column>
              <el-table-column prop="city" label="市区" width="120"> </el-table-column>
              <el-table-column prop="address" label="地址" width="300"> </el-table-column>
              <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
              <el-table-column fixed="right"  label="操作" width="100"  >
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>

          </el-main>
        </el-container>
      </el-main>

      <el-footer style="font-size: 12px;border-top:1px solid #c7e6f3;height:60px;line-height:60px;">
        <FooterBar></FooterBar>
      </el-footer>


    </el-container>
  </div>
</template>

<script>
  import MenuTree from '@/components/MenuTree'
  import FooterBar from '@/components/FooterBar'
   import axios from 'axios'
   import tableMock from '@/mock/table'
  export default {

    data() {
      const item = {
          date: '2016-05-02',
          idCard:'433127198702029876',
          name: '王小虎',
          sex:'男',
          age:'100000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
      };
      return {
        tableData: Array(20).fill(item)
      }

        // return{
        //     tableData:[]
        // }
    },

    methods: {
      tableRowClassName({
        row,
        rowIndex
      }) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleClick(row) {
        console.log(row);
      },
              // 处理table固定高度
        handleTableSize() {
             
            const tables = document.getElementsByClassName('el-table__fixed-right')
            for (const item of tables) {
                setTimeout(() => {
                    item.style.right='7px';
                    // item.style.height='100%';
                    item.style.height=(parseInt(item.style.height)+10)+'px';
                }, 100);
                const wrappers = item.getElementsByClassName('el-table__fixed-body-wrapper')
                for (const wrap of wrappers) {
                    setTimeout(() => {
                        // wrap.style.height = '100%';
                        wrap.style.height=(parseInt(wrap.style.height)+10)+'px';
                    }, 100)
                }
            }

        },
        getTableData(){
            axios.post('/mtms/api/getTableList',sessionStorage.getItem('acount'))
            .then((resp)=>{
                if(resp.data.code==='0'){
                    this.tableData=resp.data.body;
                }else{
                    this.$(resp.data.msg,'提示');
                }
            }).catch((err)=>{
                this.$alert('获取列表信息异常：'+err,'提示');
            });
        }
    },
    mounted(){


       // this.getTableData();
        setTimeout(() => {
            this.handleTableSize();
        }, 100);
    },
    components: {
      MenuTree,
      FooterBar
    }
  }

</script>
<style>

</style>


<style lang="scss" scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .outerCls {
    height: 100%;
  }

  table {
    display: table;
    border-collapse: separate;

    border-color: #c7e6f3;
    border-top-color: #c7e6f3;
    border-right-color: #c7e6f3;
    border-bottom-color: #c7e6f3;
    border-left-color: #c7e6f3;
  }

  .el-aside {
    width: 25%;
  }

  .el-header {
    background-color: #c4d0d214;
    line-height: 60px;
  }


  .div-list {
    max-height: 100%;
    overflow: auto;
  }

  .div-list::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 7px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 7px;
  }

  .div-list::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/

    border-radius: 10px;
    box-shadow: inset 0 0 5px #c7e6f3;
    -webkit-box-shadow: inset 0 0 5px #c7e6f3;
    background: #c7e6f3;
  }

  .div-list::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px #c7e6f3;
    -webkit-box-shadow: inset 0 0 5px #c7e6f3;
    border-radius: 10px;
    background: #EDEDED
  }

  .el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 7px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 7px;
  }

  .el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/

    border-radius: 10px;
    box-shadow: inset 0 0 5px #c7e6f3;
    -webkit-box-shadow: inset 0 0 5px #c7e6f3;
    background: #c7e6f3;
  }

  .el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px #c7e6f3;
    -webkit-box-shadow: inset 0 0 5px #c7e6f3;
    border-radius: 10px;
    background: #EDEDED
  }
  .el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 7px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 7px;
  }

  .el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/

    border-radius: 10px;
    box-shadow: inset 0 0 5px #c7e6f3;
    -webkit-box-shadow: inset 0 0 5px #c7e6f3;
    background: #c7e6f3;
  }

  .el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px #c7e6f3;
    -webkit-box-shadow: inset 0 0 5px #c7e6f3;
    border-radius: 10px;
    background: #EDEDED
  }
 .el-table td, .el-table th {
    padding: 6px 0;
 }
</style>
