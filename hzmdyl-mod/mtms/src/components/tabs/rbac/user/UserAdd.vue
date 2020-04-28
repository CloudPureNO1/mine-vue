<template>
<!--div 超出内容时自动滚动，设置height 和 overflow:auto-->
<div class="user-add-main" :style="{height:userAddHeight,overflow:'auto'}">
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
        <el-form :model="userForm" :rules="rules" status-icon ref="userForm" label-width="auto" :size="size" label-position="right"  >

            <el-row>
                <el-col :span="7">
                    <el-form-item label="用户ID" prop="userId">
                        <el-input v-model="userForm.userId" readonly></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="用户名" prop="userName">
                        <el-input v-model="userForm.userName"></el-input>
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
                        <el-select v-model="userForm.userRate" placeholder="请选择">
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
                            <el-option v-for="dpItem in dpOptions" :key="dpItem.value" :label="dpItem.label" :value="dpItem.value" style="width:100%;"></el-option>
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
                        <el-input v-model="userForm.creator"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="创建时间" prop="createTime">
                        <el-date-picker v-model="userForm.createTime" type="date" placeholder="选择日期" style="width: 100%;" readonly > </el-date-picker>
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
import validate from '@/utils/validate.js'
export default {
    name: "UserAdd",
    data() {
        return {
            userAddHeight: '450px',
            size: 'medium',
            isShowPassword: true,
            loading: false,
            sexs: [
                    { label: '男', value: '1' }, 
                    { label: '女', value: '2' }
                ],
            rates:[
                {label:'普通会员',value:'0'},
                {label:'白银会员',value:'5'},
                {label:'黄金会员',value:'7'},
                {label:'铂金会员',value:'8'},
                {label:'钻石会员',value:'9'}
            ],
            userForm: {
                userId: Math.random() * 10,
                userName: '',
                passwd: '',
                userRate: '',
                createTime: '',
                creator: '',
                updateTime: '',
                userDesc: '',

                description: '',
                deptId: '',
                deptSelectType: '',
                userRealName: '',
                identityCard: '',
                userContact: '',
                userContactTel: '',
                userAge: 1,
                address: '',
                userTel: '',
                userSex: '',
                userBirthDay: '',
                relationship: ''
            },
            dpOptions: [{
                    label: '产品中心',
                    value: '10001'
                },
                {
                    label: '大客户部',
                    value: '10002'
                },
                {
                    label: '客户服务部',
                    value: '10003'
                },
                {
                    label: '人力资源部',
                    value: '10004'
                },
                {
                    label: '研发中心',
                    value: '10005'
                },
                {
                    label: '办公室',
                    value: '10006'
                },
                {
                    label: '销售部门',
                    value: '10007'
                },
                {
                    label: '集成部',
                    value: '10008'
                }
            ],
            rules: {
                userName: [
                    { required: true, message: '请输用户名', trigger: 'blur' },
                    { min: 3, max: 18, message: '长度在 3 到 18 个数字或字符', trigger: ['blur','change'] }
                ],
                passwd:[
                    { required: true, message: '请输用户名', trigger: 'blur' },
                    { validator:validate.validatePasswd,trigger:'blur'}
                ]
            }
        }
    },
    created() {
        this.$nextTick(function () {
            let tabH = this.$el.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH = document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH = 13;
            this.userAddHeight = tabH - tabHeaderH - paginationH + 'px';

            //form label
            //let formItems=document.getElementsByClassName('el-form-item form-label-local el-form-item--medium');
            // let formItems=document.getElementsByClassName('el-form-item form-label-local1 el-form-item--medium');
            // if(formItems){
            //     let items=Array.from(formItems);
            //     items.forEach(item=>{
            //         //只有 label 和value 两个主div
            //         let first=item.firstElementChild;
            //         let last=item.lastElementChild;
            //         if(first){
            //             first.style.marginLeft=0;
            //         }
            //         if(first&&last){
            //             last.style.marginLeft=first.offsetWidth+'px';
            //         }
            //     });
            // }
        });
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
        },
        handleSelect(item) {
            console.log('dpItem.value>>>', item.value, item);
        }

    }
}
</script>

<style>
.user-add-main {
    padding-top: 2px;
}

.user-add-main .from-main {

    width: 100%;
}

.user-add-main .from-main .form-items {

    display: inline;
}

.form-label-local {
    margin-left: 0px;
}
</style>
