<template>
    <div class="main">
        <el-table :data="tableData">
          <el-table-column label="用户名" prop="name"></el-table-column>
          <el-table-column label="密码" prop="passwd"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[],
            itemData:{
                name:"wangsm",
                passwd:"123456"
            }
        }
    },
    created(){
        this.tableData=new Array(5).fill(this.itemData);
    }
}
</script>