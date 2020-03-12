<template>
  <div id="notFoundDiv">
    <div class="title">404</div>
    <div class="content">抱歉，您访问的页面<span class="fontCls">失联</span>了...</div>
    <div class="btnCls">
      <el-button>还回上一页</el-button>
      <el-button type="primary">进入首页</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #notFoundDiv {
    text-align: center;
    font-size: 15px;
  }

  .title {
    font-size: 150px;
  }

  .content {
    font-size: 20px;
  }

  .fontCls {
    color: #b34242
  }

.btnCls{
    margin-top: 10px;
}
</style>
