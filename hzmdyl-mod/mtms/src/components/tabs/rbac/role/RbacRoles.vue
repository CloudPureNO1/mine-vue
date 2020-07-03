<template>
    <div>
      <el-row>
        <el-col :span="24">
          <el-card>
            <el-table :data="roleList" :max-height="maxHeight">
                <el-table-column label="序号" type="index" fixed="left"></el-table-column>
                <el-table-column label="角色ID" prop="roleId" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column label="角色名称" prop="roleName" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column label="角色类型" prop="roleType" :align="align" :show-overflow-tooltip="showOverflowTooltip" :formatter="formatRoleTypes"></el-table-column>
                <el-table-column label="创建时间" prop="createTime" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column label="创建者" prop="creator" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column label="更新时间" prop="updateTime" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column label="角色描述" prop="roleDesc" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
                <el-table-column :fixed="fixed" :width="opWidth" :align="align">
                    <template slot="header" slot-scope="scope">
                        <!--<span>操作&nbsp;&nbsp;</span>-->
                        <span>
                            <el-button size="mini" round icon="el-icon-plus" type="primary" @click="handleAdd">新增</el-button>
                        </span>
                    </template>
                    <template slot-scope="scope">
                        <el-button size="mini" circle icon="el-icon-paperclip" @click="setResources(scope.$index,scope.row)"></el-button>
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
        size="25%"
        :show-close="false"
        :before-close="handleClose">
            <slot name="title">
                <span class="drwaer-title-cls">
                    配置<i class="el-icon-arrow-right"></i>{{currentRoleName}}<i class="el-icon-arrow-right"></i>资源
                </span>
                <el-button type="primary" size="mini" style="float:right;margin-right:10px;" @click="saveRoleResources">保存</el-button>
            </slot>
           <role-resource-tree  ref="roleResourceTreeP"></role-resource-tree>
        </el-drawer>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import roleApi from '@/api/rbac/role.js'
import commApi from '@/api/comm.js'
import RoleResourceTree from './RoleResourceTree'
export default {
    components:{
        'role-resource-tree':RoleResourceTree
    },
  data(){
    return{
            currentRoleName:'',
            drawer:false,
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
      roleTypes:state=>state.comm.roleTypes,
      roleList:state=>state.role.roleList,
      total:state=>state.role.total,
      pageSize:state=>state.role.pageSize,
      currentPage:state=>state.role.currentPage,
      tabContentHeight:state=>state.layout.tabContentHeight
    }),
    maxHeight(){
        return this.tabContentHeight;
    }
  },
  mounted(){
      if(this.roleList.length==0){
        roleApi.$loadRoles(this,{pageSize:this.pageSize,currentPage:this.currentPage});
      }
  },
  methods: {
        ...mapActions({
          setPageSize:'role/setPageSize',
          setCurrentPage:'role/setCurrentPage'
        }),
        saveRoleResources(){
            //(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false
            //this.$refs['roleResourceTree'].getCheckedNodes(false,false);
            let checkedKeys=this.$refs["roleResourceTreeP"].$refs["roleResourceTree"].getCheckedKeys();
            this.$alert('成功',{
                type:'success',
                confirmButtonText: '确定',
                callback:(action)=>{
                    //console.log('...action...',action);
                    this.drawer=false;
                }
            });
            console.log('checkedKeys:>>>>>',checkedKeys);
        },
        formatRoleTypes(row, column){
            
            if(this.roleTypes.length==0){
                commApi.$loadRoleTypes(this);
            }
            let rs=this.roleTypes.find(item=>item.value==row.roleType);
            if(rs!=null&&rs!=undefined){
                return rs.label;
            }
            return row.roleType;
        },
        handleAdd() {
            this.$router.push({path:'/roleAddEdit',query:{roleData:{}}});
        },
        setResources(index, row) { //index 从0开始
            this.currentRoleName=row.roleName;
            this.drawer=true
        },
        handleEdit(index, row) {
           this.$router.push({path:'/roleAddEdit',query:{roleData:row}});
        },
        handleDelete(index, row) {
            roleApi.$deleteRole(this,row);
        },
        handleSizeChange(val) {
            let vue=this;
            this.setPageSize(val)
            .then(()=>{
                roleApi.$loadRoles(vue, {currentPage:this.currentPage,pageSize:this.pageSize});
            });
        },
        handleCurrentChange(val) {
            let vue=this;
            this.setCurrentPage(val).then(()=>{
                 roleApi.$loadRoles(vue, {currentPage:this.currentPage,pageSize:this.pageSize});
            });
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
        }
    }
}
</script>
 <style>
 .el-drawer__header {
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
  .drwaer-title-cls{
    color: #3e89e6;
    font-size: 1.15rem;
    font-weight: 400;
    float: left;
    padding: 5px 0 15px 15px;
  }
 </style>