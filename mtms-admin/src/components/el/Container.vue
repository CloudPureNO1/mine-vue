<template>
    <div class="el-div-root">
              <el-container class="el-container-outer">
                  <el-header class="el-header"  style="height:12%;">header</el-header>
                  <el-main class="el-main">
                      <el-row class="el-row">
                          <el-col :span="5" class="el-col-left">left</el-col>
                          <el-col :span="19" class="el-col-right">right</el-col>
                      </el-row>
                  </el-main>
                  <el-footer class="el-footer"  style="height:8%;">Footer</el-footer>
              </el-container>
    </div>
</template>
 

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style scoped>
      
    .el-div-root{
        width:100%;
        height: 100%;
        padding: 0;
        margin:0;
        border:1px solid #dfffff;
        
    }
    .el-container-outer {
      height: 100%; 
      border: 1px solid #eee
    }
    .el-container-outer .el-header{
      border-left:1px solid #4583de;
      border-right:1px solid #4583de;
      border-top:1px solid #4583de;
    }
    .el-container-outer .el-footer{
      border-left:1px solid #4583de;
      border-right:1px solid #4583de;
      border-bottom:1px solid #4583de;
    }
    .el-container-outer .el-main{
      border:1px solid #4583de;
      margin:0;
      padding:0;
    }
    .el-container-outer .el-main .el-row{
      height: 100%;
    }
    .el-col-left{
      border-right:1px solid #4583de;
      height: 100%;
    }
    .el-col-right{
       
      height: 100%;
    }
</style>>

</style>