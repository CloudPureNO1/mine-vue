<template>
    <div>
      
      <div @click="setMsg"><i class="el-icon-eleme"></i><span >{{msg}}</span> </div>
    </div>
</template>
<script>
export default {
    data(){
      return {
         
      }
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
      }
    }
}
</script>