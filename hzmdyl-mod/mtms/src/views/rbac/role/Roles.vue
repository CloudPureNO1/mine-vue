<template>
    <div class="main">
        <el-table :data="tableDatas">
          <el-table-column label="公司名称" prop="companyName" ></el-table-column>
          <el-table-column label="公司地址" prop="companyAddr"></el-table-column>
          <el-table-column label="公司邮箱" prop="email"></el-table-column>
          <el-table-column label="联系电话" prop="tel"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        const tableItem={
                companyName:'浙江网新恩普软件邮箱公司',
                companyAddr:'杭州市西湖区西苑一路18号',
                email:'xxxx@xxx.com',
                tel:'17858633227'
            };
        return{
            tableDatas:new Array(20).fill(tableItem)
        }
    } 
}
</script>