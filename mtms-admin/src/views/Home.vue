<template>

  <div id="homeDiv">
    
    <el-row>
      <el-col :span="24">天花板</el-col>
      <el-col :span="20" :offset="2">
        <div>
              <el-collapse v-model="activName" :accordion="acordion">
                <el-collapse-item title="Base" name ="1" style="">
                  <div>
                    <el-button type="text" @click="transELHome()">ElHome</el-button>
                  </div>
                  <div style="border-top: 1px dotted #ebeef5;">
                    <router-link to="/elLayout">Layout</router-link>
                  </div>
                  <div>
                    <router-link :to="{path:'/elContainer'}">Container</router-link>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Navgation" name="2">
                    <router-link :to="{path:'/navMenu'}">NavMenu</router-link>
                     
                </el-collapse-item>
              </el-collapse>
        </div>
      </el-col>
      <el-col :span="24">地板</el-col>
    </el-row>

  </div>
</template>


<script>
  import axios from 'axios'
  import homeMock from '@/mock/home'
  import Container from '@/components/Container'
  export default {
    components: {
      Container
    },
    data() {
      return {
        userInfo:{
          acount:'',
          passwd:''
          },
        activName:'1',//折叠面板打开时，默认激活的界面名，唯一字符形式
        acordion:true//是否手风琴格式，默认false
      }
    },
    methods:{
       transELHome(){
         this.$router.push('/elHome');
       }
    },
     
    created: function () {
      let token = sessionStorage.getItem('token');
      console.log('token=>>>>>>>' + token);
      if (!token || token == 'undefined') {
        console.log('token无效');
        this.$alert('token无效', '提示');
        this.$router.push('/login');
      }
      let acount = sessionStorage.getItem('acount');
      if (!acount || acount == 'undefined') {
        console.log('请先登录');
        this.$alert('请先登录', '提示');
        this.$router.push('/login');
      }
      this.userInfo.acount = acount;
    }
  }
</script>


<style scoped lang="scss">
  #homeDiv {
    font-size:  0.75rem;
    height:100%;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {

    min-width: 200px;
    min-height: 400px;
  }
</style>