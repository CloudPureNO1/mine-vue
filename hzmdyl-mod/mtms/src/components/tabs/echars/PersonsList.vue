<template>
<div class="users-main" >
    <!--只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。-->
    <el-table :data="userList" :max-height="maxHeight" size="mini" border>
        <!-- <el-table :data="userList" :border="true">-->
        <el-table-column label="序号" type="index" fixed="left"  width="40"></el-table-column>
        <el-table-column label="姓名" prop="aac003" width="80" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="身份证号码" prop="aac002" width="144" :align="align"   :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="社保编号" prop="aac001" width="80" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="性别" prop="aac004" width="40" :align="align" :show-overflow-tooltip="showOverflowTooltip" :formatter="formatSex"></el-table-column>
        <el-table-column label="出生日期" prop="aac006" width="90" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="年龄" prop="age" width="40" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="所属医疗机构" prop="aab004" width="230"  :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="人员类型" prop="aac008" width="80" :align="align" :show-overflow-tooltip="showOverflowTooltip" :formatter="formatAac008"></el-table-column>
        <el-table-column label="参保状态" prop="aac031"  width="80" :align="align" :show-overflow-tooltip="showOverflowTooltip" :formatter="formatAac031"></el-table-column>
        <el-table-column label="参加工作时间" prop="aac007" width="100" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="首次参保时间" prop="sccbsj" width="100" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column label="参保险种" prop="aae140s" width="200" :align="align" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column :fixed="fixed" :width="opWidth" :align="align">
            <template slot="header" slot-scope="scope">
                <span>
                    <el-button size="mini" round icon="el-icon-circle-plus" type="primary" @click="handleExport">导出</el-button>
                </span>
            </template>
            <template slot-scope="scope">
                <el-button size="mini" circle icon="el-icon-view" @click="handleClick(scope.$index,scope.row)"></el-button>
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
export default {
    data() {
        return {
            maxHeight:100,
            showOverflowTooltip: true,
            fixed: 'right',
            opWidth: '100',
            align: 'center',
            userList: [],
            sexs:[{"label":"男","value":"1"},{"label":"女","value":"2"},{"label":"未说明","value":"9"}],
            aac008s:[{"label":"在职","value":"1"},{"label":"中断","value":"2"},{"label":"退休","value":"3"}],
            aac031s:[{"label":"参保","value":"1"},{"label":"中断","value":"2"},{"label":"终止","value":"3"}],
            currentPage: 1, //当前页码
            pageSizes: [10, 20, 50, 100, 200, 300, 400, 500], //每页记录数选项
            pageSize: 10, //当前每页记录数
            total: 30, //总记录数 
            isSiglePageHide: false, //如果只有一页时，隐藏pagination,
            pglayout: 'total, sizes, prev, pager,  next, jumper' //分页工具栏上显示的内容
        }
    },
    created() {
        this.$nextTick(function(){
            let tabH=this.$el.parentElement.parentElement.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH=document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH=43;
            this.maxHeight=tabH-tabHeaderH-paginationH-100;
        });  
    },
    mounted(){
        let user={
            "aac003":"wangsm",
            "aac002":"987987656789878987",
            "aac001":"88888888",
            "aac004":"1",
            "aac006":"2000-02-20",
            "age":"20",
            "aab004":"测试单位",
            "aac008":'1',
            "aac031":"1",
            "aac007":"2020-01-01",
            "sccbsj":"2020-01-01",
            "aae140s":"养老、医疗、工伤、生育、失业"
            }
        this.userList=new Array(25).fill(user);
    },
    methods: {
        formatSex(row, column){
            let rs=this.sexs.find(item=>item.value==row.aac004);
            if(rs!=null&&rs!=undefined){
                return rs.label;
            }
            return row.aac004;
        },
        formatAac008(row,column){
            let rs=this.aac008s.find(item=>item.value==row.aac008);
            if(rs!=null&&rs!=undefined){
                return rs.label;
            }
            return row.aac008;
        },
        formatAac031(row,column){
            let rs=this.aac031s.find(item=>item.value==row.aac031);
            if(rs!=null&&rs!=undefined){
                return rs.label;
            }
            return row.aac031;
        },
        handleExport() {
            console.log(">>>>导出")
        },
        handleClick(index, row) { //index 从0开始
           console.log("查看");
        },
        handleSizeChange(val) {
             console.log("改变每页记录数")
        },
        handleCurrentChange(val) {
             console.log("改变页码");
        }
    }
}
</script>
 