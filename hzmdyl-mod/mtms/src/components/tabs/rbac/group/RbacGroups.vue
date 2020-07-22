<template>
    <div class="rbac-group-main">
      <el-row>
        <el-col :span="24">
          <el-card>
            <el-table :data="groupList" :max-height="maxHeight" @row-click="handleRowClick" stripe  :size="sizeType" ref="groupTable" >
                <el-table-column type="expand">
                    <template slot-scope="props">
                                <el-table :data="props.row.roles"  :size="sizeType">
                                    <el-table-column label="拥有的角色">
                                        <template slot="header">
                                            <span class="sub-tb-title">所属的用户组</span>
                                             <el-button class="right-text-btn" type="text" :size="sizeType" icon="el-icon-plus" @click="addGroupRoles(props.row)">添加角色</el-button>
                                        </template>
                                        <el-table-column label="序号" type="index" fixed="left"  align="center"></el-table-column>
                                        <el-table-column label="角色ID" prop="roleId"  align="center"></el-table-column>
                                        <el-table-column label="角色名称" prop="roleName"   align="center"></el-table-column>
                                        <el-table-column label=""  align="center">
                                            <template slot="header" slot-scope="scope">
                                                <span>
                                                    <el-button :size="sizeType"  type="text" icon="el-icon-delete" @click="deleteAllRoles(props.row.groupId)">清空角色</el-button>
                                                </span>
                                            </template>
                                            <template slot-scope="scope">
                                                <el-button :size="sizeType"   icon="el-icon-minus" type="text" @click="deleteGroupRoles(props.row.groupId,scope.row.roleId)">删除角色</el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table-column>
                                </el-table>
                    </template>
                </el-table-column>
                <el-table-column label="序号" type="index" fixed="left"></el-table-column>
                <el-table-column label="用户组ID" prop="groupId" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column label="用户组名称" prop="groupName" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column label="用户组类型" prop="groupType" :align="align" :show-overflow-tooltip="showOverflowTooltip" :formatter="formatGroupTypes"></el-table-column>
                <el-table-column label="创建时间" prop="createTime" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column label="创建者" prop="creator" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column label="更新时间" prop="updateTime" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column label="用户组描述" prop="groupDesc" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column :fixed="fixed" :width="opWidth" :align="align">
                    <template slot="header" slot-scope="scope">
                       <!-- <span>操作&nbsp;&nbsp;</span> -->
                        <span>
                            <el-button :size="sizeType" round icon="el-icon-plus" type="primary" @click="handleAdd">新增</el-button>
                        </span>
                    </template>
                    <template slot-scope="scope">
                        <!--<el-button size="mini" circle icon="el-icon-view" @click="handleClick(scope.$index,scope.row)"></el-button>-->
                        <el-button :size="sizeType" circle  icon="el-icon-edit" type="primary" @click="handleEdit(scope.$index, scope.row)"></el-button>
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
          </el-card>
        </el-col>
      </el-row>


                <!--抽屉-->
      <el-drawer
        :visible.sync="drawer"
        direction="rtl"
        size="30%"
        :show-close="false"
        :before-close="handleClose">
            <slot name="title">
                <span class="drwaer-title-cls">
                    配置<i class="el-icon-arrow-right"></i>{{currentGroupName}}<i class="el-icon-arrow-right"></i>用户组
                </span>
                <el-button type="primary" :size="sizeType" style="float:right;margin-right:10px;" @click="saveGroupRoles">保存</el-button>
            </slot>
           <group-role-tb  ref="groupRoleTbP" :groupId="currentGroupId"></group-role-tb>
        </el-drawer>
    </div>
</template>

<script>
import GroupRoleTb from './GroupRoleTb'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import groupApi from '@/api/rbac/group.js'
import commApi from '@/api/comm.js'
import axios from 'axios'
import role from '@/mock/role.js'
export default {
    components:{
        'group-role-tb':GroupRoleTb
    },
  data(){
    return{
            drawer:false,
            currentGroupName:'',
            currentGroupId:'',
           groupRoles:[],
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
      groupTypes:state=>state.comm.groupTypes,
      groupList:state=>state.group.groupList,
      total:state=>state.group.total,
      pageSize:state=>state.group.pageSize,
      currentPage:state=>state.group.currentPage,
      tabContentHeight:state=>state.layout.tabContentHeight,
      sizeType:state=>state.layout.sizeType
    }),
    maxHeight(){
        return this.tabContentHeight;
    }
  },
  mounted(){
      if(this.groupList.length==0){
        groupApi.$loadGroups(this,{pageSize:this.pageSize,currentPage:this.currentPage});
      }
       
  },
  methods: {
        ...mapActions({
          setPageSize:'group/setPageSize',
          setCurrentPage:'group/setCurrentPage'
        }),
        formatGroupTypes(row, column){
            
            if(this.groupTypes.length==0){
                commApi.$loadGroupTypes(this);
            }
            let rs=this.groupTypes.find(item=>item.value==row.groupType);
            if(rs!=null&&rs!=undefined){
                return rs.label;
            }
            return row.groupType;
        },
        handleAdd() {
            this.$router.push({path:'/groupAddEdit',query:{groupData:{}}});
        },
        handleClick(index, row) { //index 从0开始
            this.$router.push({path:'/groupInfo',query:{groupData:row}});
        },
        handleEdit(index, row) {
           this.$router.push({path:'/groupAddEdit',query:{roleData:row}});
        },
        handleDelete(index, row) {
            groupApi.$deleteGroup(this,row);
        },
        handleSizeChange(val) {
            let vue=this;
            this.setPageSize(val)
            .then(()=>{
                groupApi.$loadGroups(vue, {currentPage:this.currentPage,pageSize:this.pageSize});
            });
        },
        handleCurrentChange(val) {
            let vue=this;
            this.setCurrentPage(val).then(()=>{
                 groupApi.$loadGroups(vue, {currentPage:this.currentPage,pageSize:this.pageSize});
            });
        },
 
        //添加角色
        addGroupRoles(row){
            //console.log('>>>>>addGroupRoles:',groupId)
            this.drawer=true;
            this.currentGroupId=row.groupId;
            this.currentGroupName=row.groupName;
        },
        //清空角色
        deleteAllRoles(groupId){
            //console.log('>>>>>deleteAllRoles:',groupId)
        },
        //删除角色
        deleteGroupRoles(groupId,roleId){
            //console.log('>>>删除角色>>deleteGroupRoles:',groupId,roleId)
        },
        handleRowClick(row, column, event){
            // this.groupList.forEach((item)=>{
            //     this.$refs['groupTable'].toggleRowExpansion(item,false);
            // });
            this.$refs['groupTable'].toggleRowExpansion(row);
        } ,
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
         saveGroupRoles(){
            let selectionRows=this.$refs["groupRoleTbP"].$refs["groupRoleTb"].selection;
            //console.log('选中：',selectionRows);
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
  .rbac-group-main .el-drawer__header {
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
  .rbac-group-main .drwaer-title-cls{
    color: #3e89e6;
    font-size: 1.15rem;
    font-weight: 400;
    float: left;
    padding: 5px 0 15px 15px;
  }
</style>