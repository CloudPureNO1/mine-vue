<template>
    <div>
        <el-card shadow="hover" body-style="padding:10px">
            <el-form :model="groupForm" :rules="rules" status-icon ref="groupForm" :size="size" :label-width="labelWidth" :label-position="labelPosition">
                <el-row>
                    <el-col :span="7">
                        <el-form-item label="用户组ID" prop="groupId" >
                            <el-input v-model="groupForm.groupId" readonly></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="用户组名称" prop="groupName">
                            <el-input v-model="groupForm.groupName" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="用户组类型" prop="groupType" placeholder="请选择"  >
                            <el-select v-model="groupForm.groupType" style="width:100%;">
                                <el-option v-for="item in groupTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>   
                <el-row>
                    <el-col :span="7">
                        <el-form-item label="创建者" prop="creator">
                            <el-input v-model="groupForm.creator" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="创建时间" prop="createTime">
                            <el-date-picker v-model="groupForm.createTime" type="date" placeholder="选择日期" style="width: 100%;" > </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="更新时间" prop="updateTime" readonly>
                            <el-date-picker v-model="groupForm.updateTime" type="date" placeholder="选择日期" style="width: 100%;"> </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="23">
                        <el-form-item label="详细描述" prop="groupDesc">
                            <el-input v-model="groupForm.groupDesc" type="textarea" :rows="3"></el-input>
                        </el-form-item>
                    </el-col>
                 </el-row>

                <el-row>
                    <el-col>
                        <el-button type="primary" @click="submitForm('groupForm')">提交</el-button>
                        <el-button @click="resetForm('groupForm')">重置</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import commApi from '@/api/comm.js'
import groupApi from '@/api/rbac/group.js'
export default {
    data(){
        return{
            groupForm:{},
            rules: {
                groupName: [
                    { required: true, message: '请输入角色名称', trigger: ['blur','change'] },
                    { min:5,message:'长度不能小于5',trigger: ['blur','change']}
                ],
                groupType:[
                    { required: true, message: '请输入密码', trigger: ['blur','change'] }
                ] 
            },
            labelPosition:'right',
            labelWidth:'auto',
            size: 'medium',
            isShowPassword: true,
            loading: false
        }
    },
    created(){
        this.groupForm=this.$route.query.groupData==undefined?{}:this.$route.query.groupData;
    },
    computed:{
        ...mapState({
            groupTypes:state=>state.comm.groupTypes
        })
    },
    mounted(){
        if(this.groupTypes.length==0){
            commApi.$loadGroupTypes(this);
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid,data) => {
                //debugger;
                if (valid) {
                    let vue=this;
                    groupApi.$saveGroup(vue,this.groupForm);
                    
                } else {
                    let objs= Object.values(data);//值得数组
                    let errorMsg=objs.map(item=>{
                        return item[0].message;
                    });
                    this.$alert(errorMsg.join(','),'温馨提示',{type:'warning'});
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        } 
    }
}
</script>