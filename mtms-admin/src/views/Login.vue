<template>
  <div id="loginDiv">
    <div class="title">系统登录</div>
    <el-form ref="loginForm" :model="loginForm" label-width="auto" label-align="left" :rules="rules">
      <el-form-item prop="acount" label="账号">
        <el-input type="text" placeholder="请输入账号" v-model="loginForm.acount"></el-input>
      </el-form-item>

      <el-form-item prop="password" label="密码">
          <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>

    <el-form-item class="btnBox"> 
        <el-checkbox v-model="checked">记住账号</el-checkbox>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="reset">重置</el-button>
    </el-form-item>
    </el-form>

  </div>

</template>


<script>
import axios from 'axios'//引入axios
import Cookie from 'js-cookie'  
import MockLogin from '@/mock/login'
  export default {
    data() {
      return {
        passport: {
            clientId:'mtms-admin',//模拟一个clientId，来校验并取得对应的token
            secretKey:'Mtms-777-Admin-888-WSM-999-Insigma'
        },
        checked:true,
        loginForm: {
          acount: 'admin',
          password: '888888'
        },
        rules: {
            acount: [
                { required: true, message: '请输入账号', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ]
        }
      }
  
    },
    methods:{
        login: function(){
            console.log('>>>>loginnig....');
            let token=sessionStorage.getItem('token');

            if(!token||token=='undefined'){
                this.$alert('请先获取token','提示',{confirmButtonText:'确定'});
                return false;
            }

            let loginInfo={
                acount:this.loginForm.acount,
                password: this.loginForm.password
            };
             
            //axios.post('http://localhost:8080/login',loginInfo)
            axios.post('/mtms/api/login',loginInfo)
            .then((res)=>{
                console.log('>>>>登录信息：'+JSON.stringify(loginInfo));
                console.log('>>>>登录结果信息：'+res.data);
                if(res.data.code!=0){
                    this.$alert(res.data.msg,'提示');
                    return false;
                }
                Cookie.set('acount',loginInfo.acount);
                sessionStorage.setItem("acount",loginInfo.acount);
                this.$router.push('/');
            }).catch((err)=>{
                console.log('>>>登录异常：'+err);
                this.$message({
                    type:'error',
                    message:'登录异常：'+err
                });
            })
        },
        reset: function(){
            this.$refs.loginForm.resetFields();//el-form 表单的重置method
        }
    },
    mounted:function(){//生命周期函数，实例准备完成的时候，获取token
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('acount');
            let token= sessionStorage.getItem('token');
            if(!token||token=='undefined'){
                axios.post('/mtms/api/token',this.passport)
                .then((res)=>{
                    if(res.data.code==0){
                        token=res.data.body.token;
                        sessionStorage.setItem('token',token);
                        console.log('>>>>token='+token);
                    }else{
                        console.log('>>>>>'+res.data.msg);
                    }
                }).catch((err)=>{
                    console.log('>>>>获取token异常：'+err);
                })
            }
    }
  }

</script>


<style lang="scss" scoped>
  #loginDiv {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    min-height: 300px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
      font-size: 20px;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }

    .btnBox{
        text-align:justify;
        text-align-last:justify;
    }
 
  }
</style>