<template>
<div class="rbac-users-main" >
    <!--只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。-->
    <el-table :data="userList" :max-height="maxHeight"   ref="userTable" @row-click="handleRowClick" :size="sizeType">
        <!-- <el-table :data="userList" :border="true">-->
                <el-table-column type="expand" >
                    <template slot-scope="props">
          
                                <el-table :data="props.row.groups" :size="sizeType">
                                    <el-table-column label="所属的用户组">
                                        <template slot="header">
                                            <span class="sub-tb-title">所属的用户组</span>
                                            <el-button  class="right-text-btn" type="text" icon="el-icon-plus" @click="addUserGroups(props.row)" :size="sizeType">添加</el-button>
                                        </template>
                                        <el-table-column label="序号" type="index" fixed="left"  align="center"></el-table-column>
                                        <el-table-column label="用户组ID" prop="groupId"  align="center"></el-table-column>
                                        <el-table-column label="用户组名称" prop="groupName"   align="center"></el-table-column>
                                        <el-table-column label=""  align="right">
                                            <template slot="header" slot-scope="scope">
                                                <span>
                                                    <el-button  type="text" icon="el-icon-delete" @click="deleteAllGroups(props.row.userId)" :size="sizeType">清空</el-button>
                                                </span>
                                            </template>
                                            <template slot-scope="scope">
                                                <el-button :size="sizeType"   icon="el-icon-minus" type="text" @click="deleteUserGroups(props.row.userId,scope.row.groupId)">删除</el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table-column>
                                </el-table>
            
                    </template>
                </el-table-column>
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
                <!--<span>操作&nbsp;&nbsp;</span>-->
                <span>
                    <el-button :size="sizeType"  round icon="el-icon-plus" type="primary" @click="handleAdd">新增</el-button>
                </span>
            </template>
            <template slot-scope="scope">
               <!-- <el-button size="mini" circle icon="el-icon-view" @click="handleClick(scope.$index,scope.row)"></el-button>-->

                <el-button :size="sizeType" circle icon="el-icon-edit" type="primary" @click="handleEdit(scope.$index, scope.row)"></el-button>
                <el-button :size="sizeType" circle icon="el-icon-delete" type="danger" @click="handleDelete(scope.$index, scope.row)"></el-button>
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
        @current-change="handleCurrentChange"
        style="float:right;padding:4px;">
    </el-pagination>

          <!--抽屉-->
      <el-drawer
        :visible.sync="drawer"
        direction="rtl"
        size="30%"
        :show-close="false"
        :before-close="handleClose">
            <slot name="title">
                <span class="drwaer-title-cls">
                    配置<i class="el-icon-arrow-right"></i>{{currentUserName}}<i class="el-icon-arrow-right"></i>用户组
                </span>
                <el-button type="primary" :size="sizeType" style="float:right;margin-right:10px;" @click="saveUserGroups">保存</el-button>
            </slot>
           <user-group-tb  ref="userGroupTbP" :userId="currentUserId"></user-group-tb>
        </el-drawer>
</div>
</template>

<script>
import UserGroupTb from './UserGroupTb'
import userApi from '@/api/rbac/user.js'
import commApi from '@/api/comm.js'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    components:{
        'user-group-tb':UserGroupTb
    },
    data() {
        return {
            drawer:false,
            currentUserName:'',
            currentUserId:'',
            subTbHeaderCls:'sub-tb-header-cls',
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
 
    computed:{
        ...mapState({
            pageSize:state=>state.user.pageSize,
            currentPage:state=>state.user.currentPage,
            userList:state=>state.user.userList,
            total:state=>state.user.total,
            rates:state=>state.comm.rates,
            tabContentHeight:state=>state.layout.tabContentHeight,
            sizeType:state=>state.layout.sizeType
        }),
        maxHeight(){
            return this.tabContentHeight
        }
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
        },
        //添加用户组
        addUserGroups(row){
            //console.log('>>>>>userGroups>userId:',row.userId);
            this.currentUserName=row.userName;
            this.currentUserId=row.userId;
            this.drawer=true;
            
        },
        //清空用户组
        deleteAllGroups(userId){
            //console.log('>>>>>deleteAllRoles:',userId)
        },
        //删除用户组
        deleteUserGroups(userId,groupId){
            //console.log('>>>>>deleteGroupRoles:',userId,groupId)
        },
        handleRowClick(row, column, event){
             
            // this.userList.forEach((item,index)=>{
            //     //console.log('.......',item,row,column);
            //     //console.log('.....',row.userId,item.userId,row.userId==item.userId);
            //     ///if(item['userId']==row['userId']){
            //         this.$refs['userTable'].toggleRowExpansion(item,false);
            //     //}
            // });
            this.$refs['userTable'].toggleRowExpansion(row);
        },
        handleClose(done){//阻止关闭
            // console.log('<<<<<<<<<<<<<<<<<<<<<<>>>>>beforCloseDrawer')
            // this.drawer=false;//关闭
            this.$confirm('没有变动，是否退出?' , {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: false
                 }
            ).then(() => {
                done();
            }).catch(() => {
                
            });
        },
         saveUserGroups(){
            let selectionRows=this.$refs["userGroupTbP"].$refs["userGroupTb"].selection;
            console.log('选中：',selectionRows);
            this.$alert('成功',{
                type:'success',
                confirmButtonText: '确定',
                callback:(action)=>{
                    //console.log('...action...',action);
                    this.drawer=false;
                }
            });
        },
    }
}
</script>

<style scoped>
.sub-tb-title{
    font-size: 1rem; 
    color: #909399; 
    font-weight: 600;
}
.right-text-btn{
    float: right; 
    padding: 3px 15px;
}
</style>

<style>
  .rbac-users-main .el-drawer__header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #3e89e6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 0;
    padding: 20px 20px 0;
    font-size: 1.25rem;
    font-weight: 400;
}
  :focus { /**祛除抽屉打开时的边框 */
    outline: 0;
  }
  .rbac-users-main .drwaer-title-cls{
    color: #3e89e6;
    font-size: 1.15rem;
    font-weight: 400;
    float: left;
    padding: 5px 0 15px 15px;
  }
</style>
<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
</style>