<template>
<div class="users-main" >
    <!--只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。-->
    <el-table :data="userList" :max-height="maxHeight">
        <!-- <el-table :data="userList" :border="true">-->
        <el-table-column label="序号" type="index" fixed="left"></el-table-column>
        <el-table-column label="用户ID" prop="userId" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="用户名" prop="userName" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="密码" prop="passwd" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="等级" prop="userRate" :align="align" :show-overflow-tooltip="showOverflowTooltip" :formatter="formatUserRate"></el-table-column>
        <el-table-column label="创建时间" prop="createTime" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="创建者" prop="creator" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="更新时间" prop="updateTime" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="描述" prop="userDesc" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column :fixed="fixed" :width="opWidth" :align="align">
            <template slot="header" slot-scope="scope">
                <span>操作&nbsp;&nbsp;</span>
                <span>
                    <el-button size="mini" round icon="el-icon-circle-plus" type="primary" @click="handleAdd">新增</el-button>
                </span>
            </template>
            <template slot-scope="scope">
                <el-button size="mini" circle icon="el-icon-view" @click="handleClick(scope.$index,scope.row)"></el-button>
                <el-button size="mini" circle icon="el-icon-edit" type="primary" @click="handleEdit(scope.$index, scope.row)"></el-button>
                <el-button size="mini" circle icon="el-icon-delete" type="danger" @click="handleDelete(scope.$index, scope.row)"></el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-pagination 
        :current-page="currentPage" 
        :page-sizes="pageSizes" 
        :page-size="pageSize" 
        :layout="pglayout" 
        :total="total" 
        :hide-on-single-page="isSiglePageHide" 
        background 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange">
    </el-pagination>
</div>
</template>

<script>
import userApi from '@/api/rbac/user.js'
import commApi from '@/api/comm.js'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    data() {
        return {
            maxHeight:100,
            showOverflowTooltip: true,
            fixed: 'right',
            opWidth: '200',
            align: 'center',
            //userList: [],
            //currentPage: 1, //当前页码
            pageSizes: [10, 20, 50, 100, 200, 300, 400, 500], //每页记录数选项
            //pageSize: 10, //当前每页记录数
            //total: 0, //总记录数 
            isSiglePageHide: false, //如果只有一页时，隐藏pagination,
            pglayout: 'total, sizes, prev, pager,  next, jumper' //分页工具栏上显示的内容
        }
    },
    created() {
        this.$nextTick(function(){
            let tabH=this.$el.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH=document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH=43;
            this.maxHeight=tabH-tabHeaderH-paginationH;
        });
     
        
    },
    computed:{
        ...mapState({
            pageSize:state=>state.user.pageSize,
            currentPage:state=>state.user.currentPage,
            userList:state=>state.user.userList,
            total:state=>state.user.total,
            rates:state=>state.comm.rates
        })
    },
    mounted(){
        if(this.userList.length==0){
            userApi.$loadUsers(this, {currentPage:this.currentPage,pageSize:this.pageSize});
        }
    },
    methods: {
        ...mapActions({
            setPageSize:'user/setPageSize',
            setCurrentPage:'user/setCurrentPage' ,
            loadUserList:'user/setUsersData' 
        }),
        formatUserRate(row, column){
            
            if(this.rates.length==0){
                commApi.$loadRates(this);
            }
            let rs=this.rates.find(item=>item.value==row.userRate);
            if(rs!=null&&rs!=undefined){
                return rs.label;
            }
            return row.userRate;
        },
        handleAdd() {
            this.$router.push('/userAdd');
        },
        handleClick(index, row) { //index 从0开始
            this.$router.push({path:'/userInfo',query:{userData:row}});
        },
        handleEdit(index, row) {
           this.$router.push({path:'/userEdit',query:{userData:row}});
        },
        handleDelete(index, row) {
            userApi.$deleteUser(this,row);
        },
        handleSizeChange(val) {
            let vue=this;
            this.setPageSize(val)
            .then(()=>{
                userApi.$loadUsers(vue, {currentPage:this.currentPage,pageSize:this.pageSize});
            });
        },
        handleCurrentChange(val) {
            let vue=this;
            this.setCurrentPage(val).then(()=>{
                 userApi.$loadUsers(vue, {currentPage:this.currentPage,pageSize:this.pageSize});
            });
        }
    }
}
</script>
 