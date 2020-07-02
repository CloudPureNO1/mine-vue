<template>
<div>
    <fieldset>
        <legend>用户信息</legend>
        <!--
            W3C 标准中有如下规定：

            When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.

            即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <el-form> 标签上添加 @submit.native.prevent。
        -->
        <!--
            Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可
        -->
        <!--
            Form 重置时，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可
        -->
        <el-form :model="userForm" :rules="rules" status-icon ref="userForm" :size="size" :label-width="labelWidth" :label-position="labelPosition">

            <el-row>
                <el-col :span="7">
                    <el-form-item label="所属用户组">
                        <el-select v-model="userForm.groupId" placeholder="选择用户组" style="width:100%;">
                        <el-option v-for="groupItem in groupList" :key="groupItem.groupId" :label="groupItem.groupName" :value="groupItem.groupId" ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="用户ID" prop="userId" style="display:none;">
                        <el-input v-model="userForm.userId" readonly></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="用户名" prop="userName">
                        <el-input v-model="userForm.userName" ref="userName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="密码" prop="passwd">
                        <el-input v-model="userForm.passwd" :show-password="isShowPassword"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="7">
                    <el-form-item label="身份证号码" prop="identityCard">
                        <el-input v-model="userForm.identityCard"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="姓名" prop="userRealName">
                        <el-input v-model="userForm.userRealName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="性别" prop="userSex">
                        <el-select v-model="userForm.userSex" style="width:100%;">
                            <el-option v-for="sex in sexs" :key="sex.value" :label="sex.label" :value="sex.value"></el-option>
                        </el-select>
                    </el-form-item>

                </el-col>
            </el-row>
            <el-row>
                <el-col :span="7">
                    <el-form-item label="等级" prop="userRate">
                        <el-select v-model="userForm.userRate" placeholder="请选择" style="width:100%;">
                            <el-option v-for="rate in rates" :key="rate.value" :label="rate.label" :value="rate.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="出生日期" prop="userBirthDay">
                        <el-date-picker v-model="userForm.userBirthDay" style="width:100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="年龄" prop="userAge">
                        <el-input-number v-model="userForm.userAge" :min="1" :max="100" controls-position="right" step-strictly style="width:100%;"></el-input-number>
                    </el-form-item>

                </el-col>

            </el-row>
            <el-row>
                <el-col :span="7">
                    <el-form-item label="所属部门" prop="deptId">
                        <el-select v-model="userForm.deptId" placeholder="请选择" style="width:100%;">
                            <el-option v-for="dpItem in this.deptList" :key="dpItem.value" :label="dpItem.label" :value="dpItem.value" style="width:100%;"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="联系电话" prop="userTel">
                        <el-input v-model="userForm.userTel"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="userForm.email"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="7">
                    <el-form-item label="创建者" prop="creator">
                        <el-input v-model="userForm.creator" readonly></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="创建时间" prop="createTime">
                        <el-date-picker v-model="userForm.createTime" type="date" placeholder="选择日期" style="width: 100%;" readonly> </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="更新时间" prop="updateTime" readonly>
                        <el-date-picker v-model="userForm.updateTime" type="date" placeholder="选择日期" style="width: 100%;"> </el-date-picker>
                    </el-form-item>
                </el-col>

            </el-row>

            <el-row>
                <el-col :span="7">
                    <el-form-item label="联系人" prop="userConcat">
                        <el-input v-model="userForm.userContact"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="联系人电话" prop="userContactTel">
                        <el-input v-model="userForm.userContactTel"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="关系" prop="relationship">
                        <el-input v-model="userForm.relationship"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="23">
                    <el-form-item label="联系地址" prop="address">
                        <el-input v-model="userForm.address"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <el-form-item label="用户描述" prop="userDesc">
                        <el-input v-model="userForm.userDesc" type="textarea" :rows="3"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <el-form-item label="详细描述" prop="description">
                        <el-input v-model="userForm.description" type="textarea" :rows="3"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col>
                    <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
                    <el-button @click="resetForm('userForm')">重置</el-button>
                </el-col>
            </el-row>

        </el-form>
    </fieldset>
</div>
</template>
<script>
import deptApi from '@/api/rbac/dept.js'   
import commApi from '@/api/comm.js'   
import userApi from '@/api/rbac/user.js'    
import userValidate from './userValidate.js'
import groupApi from '@/api/rbac/group.js'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name: "UserEdit",
    data() {
        return {
            labelPosition:'right',
            labelWidth:'auto',
            size: 'medium',
            isShowPassword: true,
            loading: false, 
            userForm:[],
            rules: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: ['blur','change'] },
                    { min:5,message:'长度不能小于5',trigger: ['blur','change']},
                    { validator:userValidate.validateUsername,trigger: ['blur','change']}
                ],
                passwd:[
                    { required: true, message: '请输入密码', trigger: ['blur','change'] },
                    { min:6,max:20,message:'长度在6 到 20之间' ,trigger:['blur','change']},
                    { validator:userValidate.validatePasswd,trigger: ['blur','change'] }
                ],
                userRealName:[
                    { required: true, message: '请输入真实姓名', trigger: ['blur','change'] },
                ]
            }
        }
    },
    computed:{
        ...mapState({
            sexs:state=>state.comm.sexList,
            rates:state=>state.comm.rates,
            groupList:state=>state.group.groupList,
        }),
        ...mapGetters({
            deptList:'dept/getDeptDropDown'
        })
        
    },
    created(){
        this.userForm =this.$route.query.userData;
    },
    mounted(){
        if(this.sexs==undefined||this.sexs.length==0){
            commApi.$loadSexList(this);
        }
        if(this.rates==undefined||this.rates.length==0){
            commApi.$loadRates(this);
        }
        if(this.deptList==undefined||this.deptList.length==0){
            deptApi.$loadDeptList(this);
        }
        if(this.groupList.length==0){
            groupApi.$loadGroups(this,{pageSize:this.pageSize,currentPage:this.currentPage});
        }
    },
    watch:{
        $route(){
            //this.labelPosition='top';
            //this.labelPosition='right';
            //应为刷新和浏览器输入地址时，from 的labelPosition 变成top(即，比起作用，采用失去焦点触发)
            this.$refs.userName.focus();
            this.$refs.userName.blur();
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid,data) => {
                //debugger;
                if (valid) {
                    let vue=this;
                    userApi.$updateUser(vue,this.userForm);
                    
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
        },
        handleSelect(item) {
            console.log('dpItem.value>>>', item.value, item);
        }

    }
}
</script>