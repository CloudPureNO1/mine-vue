<template>
    <div class="home-main" id="pdfDom">
  
    <!-- 
    列表渲染，使用 <transition-group> 组件
    1.不同于 <transition>，它会以一个真实元素呈现：默认为一个 <span>(列表渲染包裹的容器)。你也可以通过tag属性更换为其他元素。
    2.过渡模式(mode)不可用，因为我们不再相互切换特有的元素。
    3.内部元素 总是需要 提供唯一的 key 属性值。
    4.CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身。
     -->


              <el-button type="primary" @click="handleDown">jsPDF方式下载</el-button>

     
   <el-button @click="show=!show">切换</el-button>
 
            <transition name="mtms">
              <el-table :data="data" v-show="show"  @row-click="handleRowClick" ref="userTable">
                  <el-table-column type="expand">
                    <template slot-scope="">
                     
                        

                       <el-button @click="show2=!show2">click</el-button>
                       <transition name="mtms">
                          <div v-show="show2">
                          <p v-for="(item ,index) in data2" :key="item.id+index">{{item.address}}-{{item.mobileNum}}--{{item.email}}</p>
                          </div>
                       </transition>
               
                   
                    </template>
                    
                  </el-table-column>
                  <el-table-column label="序号" type="index"></el-table-column>
                  <el-table-column label="用户名" prop="username"></el-table-column>
                  <el-table-column label="密码" prop="password"></el-table-column>
              </el-table>
            </transition>
  
 
    <transition name="fade-transform">
       <el-table :data="data" v-show="show" size="mini">
       <el-table-column label="序号" type="index"></el-table-column>
          <el-table-column label="用户名" prop="username"></el-table-column>
          <el-table-column label="密码" prop="password"></el-table-column>
       </el-table>
    </transition>
 

 
    </div>
</template>
<script>
 import html2pdf from '@/utils/html2pdf'
export default {
    data(){
      return{
        show:false,
        show2:false,
        count:0,
        listD:[111,222,333],
        data:[],
        data2:[]
      }
    },
    mounted(){
      let obj1= {username:'wangsm',password:'wangsm8888888'};
      this.data=new Array(120).fill(obj1);
      let obj2={id:1,address:'杭州市西湖区西溪北苑',mobleNum:'12122222222',email:'123@123.com'};
      this.data2=new Array(120).fill(obj2);
    },
    computed:{
      msg:{
        get(){
          return this.$store.state.layout.msg;
        },
        set(nVal){
          this.$store.state.layout.msg=nVal;
        }
      }
    },
    methods:{
      setMsg(){
        this.$store.commit('layout/getMsg',{name:'wangsm'});
      } ,
      handleRowClick(row, column, event){
            this.$refs['userTable'].toggleRowExpansion(row);
            this.show2=!this.show2;
        },
            handleDown(){
                //导出PDF
                html2pdf.downloadPDF( document.querySelector('#pdfDom'),'我的PDF');
            },
    }
}
</script>

 <style>
 

/* fade-transform */
.mtms-leave-active,
.mtms-enter-active {
  transition: opacity 3s
}

.mtms-enter ,
.mtms-leave-to{
  opacity: 0;
}


 
 </style>