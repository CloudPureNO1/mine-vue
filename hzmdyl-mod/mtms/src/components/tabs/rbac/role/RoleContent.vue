<template>
    <div>
        <el-card shadow="hover" body-style="padding:10px">
            <el-form :model="roleForm" :rules="rules" status-icon ref="roleForm" :size="size" :label-width="labelWidth" :label-position="labelPosition">
                <el-row>
                    <el-col :span="7">
                        <el-form-item label="角色ID" prop="roleId" >
                            <el-input v-model="roleForm.roleId" readonly></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="角色名称" prop="roleName">
                            <el-input v-model="roleForm.roleName" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="角色类型" prop="roleType" placeholder="请选择"  >
                            <el-select v-model="roleForm.roleType" style="width:100%;">
                                <el-option v-for="item in roleTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>   
                <el-row>
                    <el-col :span="7">
                        <el-form-item label="创建者" prop="creator">
                            <el-input v-model="roleForm.creator" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="创建时间" prop="createTime">
                            <el-date-picker v-model="roleForm.createTime" type="date" placeholder="选择日期" style="width: 100%;" > </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="更新时间" prop="updateTime" readonly>
                            <el-date-picker v-model="roleForm.updateTime" type="date" placeholder="选择日期" style="width: 100%;"> </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="23">
                        <el-form-item label="详细描述" prop="roleDesc">
                            <el-input v-model="roleForm.roleDesc" type="textarea" :rows="3"></el-input>
                        </el-form-item>
                    </el-col>
                 </el-row>

                <el-row>
                    <el-col>
                        <el-button type="primary" @click="submitForm('roleForm')">提交</el-button>
                        <el-button @click="resetForm('roleForm')">重置</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import commApi from '@/api/comm.js'
import roleApi from '@/api/rbac/role.js'
export default {
    data(){
        return{
            roleForm:{},
            rules: {
                roleName: [
                    { required: true, message: '请输入角色名称', trigger: ['blur','change'] },
                    { min:5,message:'长度不能小于5',trigger: ['blur','change']}
                ],
                roleType:[
                    { required: true, message: '请输入密码', trigger: ['blur','change'] }
                ],
                userRealName:[
                    { required: true, message: '请输入真实姓名', trigger: ['blur','change'] },
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
        this.roleForm=this.$route.query.roleData==undefined?{}:this.$route.query.roleData;
    },
    computed:{
        ...mapState({
            roleTypes:state=>state.comm.roleTypes
        })
    },
    mounted(){
        if(this.roleTypes.length==0){
            commApi.$loadRoleTypes(this);
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid,data) => {
                //debugger;
                if (valid) {
                    let vue=this;
                    roleApi.$saveRole(vue,this.roleForm);
                    
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