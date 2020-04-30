import mockUser from '@/mock/user.js' //数据源，相当于正式应用中的 后端接口，正式的时候，取消掉这个

import {
  $get,
  $post,
  $postForm,
  $postformData
} from '@/utils/axios_util.js'

 
let $loadUsers = function(vue,param){
    //debugger
   $post('loadUsers', param)
   .then(resp => {
       if (resp.data.code != 0) {
            vue.$alert(resp.data.msg,'温馨提示',{type:'warning'});
           return
       }
       if (resp.data.body) {
             vue.$store.dispatch('user/setUsersData', resp.data.body)
       }
   })
   .catch(err => {
       console.log('接口调用异常：' + err);
       vue.$alert(err,"温馨提示",{type:'error'});
   })
}

let $saveUser = function (vue, param) {
  $post('saveUser', param)
    .then(resp => {
      if(resp.data.code==0){
        vue.$alert('保存成功', '温馨提示', { type: 'success' }).then(()=>{
            //刷新 给父组件传入隐藏
            vue.$emit('isShow',false);
            //加载
            let obj={};
            obj.pageSize=vue.$store.state.user.pageSize;
            obj.currentPage=vue.$store.state.user.currentPage;
            $loadUsers(vue,obj);
        }) ;
      }else{
         vue.$alert(resp.data.msg, '温馨提示', {
            type: 'warning'
          });
         return
      }
    })
    .catch(err => {
      console.log('接口调用异常：' + err);
      vue.$alert(err, "温馨提示", {
        type: 'error'
      });
    })
}

export default {
  $loadUsers,
  $saveUser
}
