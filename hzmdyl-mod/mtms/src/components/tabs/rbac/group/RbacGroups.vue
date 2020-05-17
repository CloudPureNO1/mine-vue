<template>
    <div>
      <el-row>
        <el-col :span="24">
          <el-card>
            <el-table :data="groupList" :max-height="maxHeight">
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
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import groupApi from '@/api/rbac/group.js'
import commApi from '@/api/comm.js'
export default {
  data(){
    return{
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
      groupTypes:state=>state.comm.groupTypes,
      groupList:state=>state.group.groupList,
      total:state=>state.group.total,
      pageSize:state=>state.group.pageSize,
      currentPage:state=>state.group.currentPage
    })
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
        } 
    }
}
</script>
 