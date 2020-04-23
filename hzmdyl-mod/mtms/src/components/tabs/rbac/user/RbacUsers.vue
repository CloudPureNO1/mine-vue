<template>
    <div>
        <el-table :data="userList" >
            <el-table-column label="用户名" prop="username"></el-table-column>
            <el-table-column label="密码" prop="passwd"></el-table-column>
            <el-table-column label="备注" prop="mark"></el-table-column>
         </el-table>
    </div>
</template>

<script>
export default {
    data(){
        let user={
            username:'wangsm',
            passwd:'123456',
            mark:'高级用户'
        }
        return{
            userList:new Array(10).fill(user)
        }
    }
}
</script>