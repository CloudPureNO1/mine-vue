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
                        <span>操作&nbsp;&nbsp;</span>
                        <span>
                            <el-button size="mini" round icon="el-icon-circle-plus" type="primary" @click="handleAdd">新增</el-button>
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
        @current-change="handleCurrentChange">
    </el-pagination>
          </el-card>
        </el-col>
      </el-row>

      <!--抽屉-->
      <el-drawer
        title="配置角色的资源"
        :visible.sync="drawer"
        direction="rtl"
        size="40%"
        :show-close="false"
        @close="beforCloseDrawer">
            <role-resource-tree></role-resource-tree>
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
            drawer:false,
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
  created(){
      this.$nextTick(function(){
            let tabH=this.$el.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH=document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH=43;
            this.maxHeight=tabH-tabHeaderH-paginationH;
      });
  },
  computed:{
    ...mapState({
      roleTypes:state=>state.comm.roleTypes,
      roleList:state=>state.role.roleList,
      total:state=>state.role.total,
      pageSize:state=>state.role.pageSize,
      currentPage:state=>state.role.currentPage
    })
  },
  mounted(){
      if(this.roleList.length==0){
        roleApi.$loadRoles(this,{pageSize:this.pageSize,currentPage:this.currentPage});
      }
      let that=this;
      window.addEventListener("resize",function(){
            let tabH=that.$el.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH=document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH=43;
            that.maxHeight=tabH-tabHeaderH-paginationH;
      })
  },
  methods: {
        ...mapActions({
          setPageSize:'role/setPageSize',
          setCurrentPage:'role/setCurrentPage'
        }),
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
        beforCloseDrawer(){//阻止关闭
            console.log('<<<<<<<<<<<<<<<<<<<<<<>>>>>beforCloseDrawer')

            this.drawer=false;//关闭
        }
    }
}
</script>
 