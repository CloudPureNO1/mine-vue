<template>
<div>
    <el-table :data="userList">
        <el-table-column label="用户ID" prop="userId" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="用户名" prop="userName" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="密码" prop="passwd" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="等级" prop="userRate" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="创建时间" prop="createTime" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="创建者" prop="creator" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="更新时间" prop="updateTime" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="描述" prop="userDesc" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="操作" :fixed="fixed" :width="opWidth" :align="align">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
    data() {
        let user = {
            userId: 10001,
            userName: 'wangsm',
            passwd: '123456',
            userRate: 1,
            createTime: '2020-02-02 02:02:02',
            creator: 'admin',
            updateTime: '2020-02-02 02:02:02',
            userDesc: '高级用户'
        }
        return {
            showOverflowTooltip: true,
            fixed: 'right',
            opWidth:'200',
            align:'center',
            userList: new Array(10).fill(user)
        }
    }
}
</script>
