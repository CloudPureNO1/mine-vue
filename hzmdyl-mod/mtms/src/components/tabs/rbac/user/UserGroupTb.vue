<template>
    <div class="user-group-tb-main">
        <el-table :data="userGroupList" ref="userGroupTb">
            <el-table-column label="" type="selection"></el-table-column>
            <el-table-column label="用户组ID" prop="groupId" v-if="false"></el-table-column>
            <el-table-column label="用户组名称" prop="groupName"></el-table-column>
            <el-table-column label="用户组类型" prop="groupType" :formatter="formatGroupTypes"></el-table-column>
        </el-table>
    </div>
</template>

<script>
 
import commApi from '@/api/comm.js'
import axios from 'axios'
import { mapState } from 'vuex'
 
export default {
    props:{
        userId:{type:Number,default:-1}
    },
    data(){
        return{
            userGroupList:[],
        }
    },
    mounted(){
        this.loadUserGroups();
    },
    computed:{
        ...mapState({
            groupTypes:state=>state.comm.groupTypes,
        })
    },
    methods:{
        loadUserGroups(){
            axios.post('/mtms/api/loadUserGroups',{"userId":this.userId,"dType":1})
            .then((resp)=>{
                if(resp.data.code==0){
                    this.userGroupList=resp.data.body.data;
                }else{
                    this.alert(resp.data.msg,'提示',{type:'warning'});
                }
            })
            .catch(err=>{
                this.alert(err,'提示',{type:'err'});
            })
        },
        formatGroupTypes(row, column){
            if(this.groupTypes.length==0){
                commApi.$loadGroupTypes(this);
            }
            let rs=this.groupTypes.find(item=>item.value==row.groupType);
            if(rs!=null&&rs!=undefined){
                return rs.label;
            }
            return row.groupType;
        }
    }    
}
</script>

<style scoped>
.user-group-tb-main{
    width: 100%;
    padding:4px 0 0 0;
    overflow:auto; 
}
</style>