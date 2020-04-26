<template>
    <div class="user_add_main">
        <el-form :model="userForm" ref="userForm" label-width="auto"  size="small" label-position="right">
            <el-row>
                <el-col :span="7">
                    <el-form-item label="用户ID">
                        <el-input v-model="userForm.userId"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="用户名">
                        <el-input v-model="userForm.userName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="密码">
                        <el-input v-model="userForm.passwd"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="7">
                    <el-form-item label="等级">
                        <el-input v-model="userForm.userRate"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7"  :offset="1">
                    <el-form-item label="创建时间">
                        <el-date-picker  v-model="userForm.createTime" type="date" placeholder="选择日期" style="width: 100%;"> </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="7"  :offset="1">
                    <el-form-item label="创建者">
                        <el-input v-model="userForm.creator"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="7">
                    <el-form-item label="更新时间">
                        <el-date-picker  v-model="userForm.updateTime" type="date" placeholder="选择日期" style="width: 100%;"> </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="描述">
                        <el-input v-model="userForm.userDesc"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-button type="primary" icon="el-icon-search" @click="submitForm" >查询</el-button>
                    <el-button type="warning" icon="el-icon-search" plain @click="resetForm" >重置</el-button>
                </el-col>
            </el-row>
        </el-form>

    
    </div>
</template>

<script>
    export default {
        name: "UserAdd",
        data() {
            return {
                userForm: {
                    userId:'',
                    userName:'',
                    passwd:'',
                    userRate:'',
                    createTime:'',
                    creator:'',
                    updateTime:'',
                    userDesc:''
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
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
 
 