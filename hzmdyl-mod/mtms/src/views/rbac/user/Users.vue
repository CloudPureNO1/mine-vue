<template>
    <div class="main">
        <el-table :data="tableData">
          <el-table-column label="用户名" prop="name"></el-table-column>
          <el-table-column label="密码" prop="passwd"></el-table-column>
        </el-table>
        <router-link :to="{path:'/userAdd'}" >新增用户</router-link>
        <router-link :to="{path:'/userEdit'}" >编辑用户</router-link>
        <router-view></router-view>
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