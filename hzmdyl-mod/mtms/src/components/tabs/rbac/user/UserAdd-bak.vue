<template>
<div class="user_add_main">
    <form id="contentForm"></form>
    <!--html5 中 fieldset 要对应到form-->
    <fieldset form="contentForm">
        <legend>用户基本信息</legend>
        <el-row>
            <el-col :span="23" :offset="1">
                <el-form :model="userForm" ref="userForm" label-width="auto" :size="size" label-position="right">
                    <el-row>
                        <el-col :span="7">
                            <el-form-item label="用户ID">
                                <el-input v-model="userForm.userId" readonly></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7" :offset="1">
                            <el-form-item label="用户名">
                                <el-input v-model="userForm.userName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7" :offset="1">
                            <el-form-item label="密码">
                                <el-input v-model="userForm.passwd" :show-password="isShowPassword"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="7">
                            <el-form-item label="等级">
                                <el-input v-model="userForm.userRate"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7" :offset="1">
                            <el-form-item label="联系电话">
                                <el-input v-model="userForm.tel"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7" :offset="1">
                            <el-form-item label="邮箱">
                                <el-input v-model="userForm.email"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="7">
                            <el-form-item label="创建者">
                                <el-input v-model="userForm.creator"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7" :offset="1">
                            <el-form-item label="创建时间">
                                <el-date-picker v-model="userForm.createTime" type="date" placeholder="选择日期" style="width: 100%;"> </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7" :offset="1">
                            <el-form-item label="更新时间">
                                <el-date-picker v-model="userForm.updateTime" type="date" placeholder="选择日期" style="width: 100%;"> </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>

                    </el-row>
                    <el-row>
                        <el-col :span="23">
                            <el-form-item label="联系地址">
                                <el-input v-model="userForm.address"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="23">
                            <el-form-item label="所属部门">
                                <!--
                                <el-input placeholder="请输入内容" v-model="userForm.dept" class="input-with-select">
                                    <el-select v-model="userForm.deptSelectType" slot="prepend" placeholder="请选择">
                                        <el-option v-for="dpItem in userForm.dpOptions" :key="dpItem.value" :label="dpItem.label" :value="dpItem.value"></el-option>
                                    </el-select>
                                    <el-button slot="append" icon="el-icon-search"></el-button>
                                </el-input>
                                -->
                                <el-autocomplete v-model="userForm.dept" style="width:100%;" :fetch-suggestions="querySearchAsync" @select="handleSelect" >
                                    <el-select v-model="userForm.deptSelectType" slot="prepend" placeholder="请选择">
                                        <el-option v-for="dpItem in userForm.dpOptions" :key="dpItem.value" :label="dpItem.label" :value="dpItem.value"></el-option>
                                    </el-select>
                                    <!-- <el-button slot="append" icon="el-icon-search"></el-button>-->
                                </el-autocomplete>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="23">
                            <el-form-item label="描述">
                                <el-input v-model="userForm.userDesc" type="textarea" :rows="3"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-button type="primary" icon="el-icon-search" @click="submitForm">查询</el-button>
                            <el-button type="warning" icon="el-icon-reset" plain @click="resetForm">重置</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </el-col>
        </el-row>
    </fieldset>
</div>
</template>

<script>
export default {
    name: "UserAdd",
    data() {
        return {
            size: 'medium',
            isShowPassword: true,
            loading: false,
            userForm: {
                userId: Math.random() * 10,
                userName: '',
                passwd: '',
                userRate: '',
                createTime: '',
                creator: '',
                updateTime: '',
                userDesc: '',
                dept: '',
                deptSelectType: '',
                dpOptions: [{
                        label: '部门编码',
                        value: 'deptId'
                    },
                    {
                        label: '部门名称',
                        value: 'deptName'
                    },
                    {
                        label: '部门简称',
                        value: 'deptSimpleName'
                    },
                    {
                        label: '部门领导',
                        value: 'deptLeader'
                    },
                    {
                        label: '部门邮箱',
                        value: 'deptEmail'
                    },
                    {
                        label: '部门电话',
                        value: 'deptTel'
                    },
                    {
                        label: '部门联系人',
                        value: 'deptContact'
                    }
                ]

            }
        }
    },
    methods: {
        submitForm() {
            this.$refs.userForm.validate((valid) => {
                if (valid) {
                    console.log(this.userForm.dept);
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm() {
            this.$refs['userForm'].resetFields();
        },
        handleSelect(item) {
            console.log('dpItem.value>>>', item.value, item);
        },
        querySearchAsync(queryString, cb) {
            console.log('>>>>>>>>>',this.userForm.deptSelectType);
            console.log('>>>>>>>>>', queryString);
            var results = [{
                value: '产品中心'
            }];

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 2000 * Math.random());
        }
    }
}
</script>

<style>
.user_add_main {
    padding-top: 20px;
}

.el-select .el-input {
    width: 130px;
}

/* .input-with-select .el-input-group__prepend {
    background-color: #dfffff;
  } */
</style>
