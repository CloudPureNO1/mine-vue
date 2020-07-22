<template>
    <div class="group-role-tb-main">
        <el-table :data="groupRoleList" ref="groupRoleTb">
            <el-table-column label="" type="selection"></el-table-column>
            <el-table-column label="角色ID" prop="roleId" v-if="false"></el-table-column>
            <el-table-column label="角色名称" prop="roleName"></el-table-column>
            <el-table-column label="角色类型" prop="roleType" :formatter="formatRoleTypes"></el-table-column>
        </el-table>
    </div>
</template>

<script>
 
import commApi from '@/api/comm.js'
import axios from 'axios'
import { mapState } from 'vuex'
 
export default {
    props:{
        groupId:{type:Number,default:-1}
    },
    data(){
        return{
            groupRoleList:[],
        }
    },
    mounted(){
        this.loadGroupRoles();
    },
    computed:{
        ...mapState({
            roleTypes:state=>state.comm.roleTypes,
        })
    },
    methods:{
        loadGroupRoles(){
            axios.post('/mtms/api/loadGroupRoles',{"groupId":this.groupId,"dType":1})
            .then((resp)=>{
                if(resp.data.code==0){
                    this.groupRoleList=resp.data.body.data;
                }else{
                    this.alert(resp.data.msg,'提示',{type:'warning'});
                }
            })
            .catch(err=>{
                this.alert(err,'提示',{type:'err'});
            })
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
    }    
}
</script>

<style scoped>
.group-role-tb-main{
    width: 100%;
    padding:4px 0 0 0;
    overflow:auto; 
}
</style>