<template>
    <div>
        <el-table :data="roleList">
            <el-table-column prop="roleId" label="角色ID"></el-table-column>
            <el-table-column prop="roleName" label="角色名称"></el-table-column>
            <el-table-column prop="creator" label="创建者"></el-table-column>
            <el-table-column prop="mark" label="备注"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        let role={
            roleId:'10001',
            roleName:'测试角色',
            creator:'admin',
            mark:'测试用户对应角色'
        }
        return{
            roleList:new Array(10).fill(role)
        }
    }
}
</script>
