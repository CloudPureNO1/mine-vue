import mockUser from '@/mock/user.js'//数据源，相当于正式应用中的 后端接口，正式的时候，取消掉这个

import {$get,$post,$postForm,$postformData} from '@/utils/axios_util.js'
let $loadUsers = function(vue,param){
   $post('loadUsers', param)
   .then(resp => {
       //debugger;
       if (resp.data.code != 0) {
            vue.$alert(resp.data.msg);
           return
       }
       if (resp.data.body) {
            vue.userList = resp.data.body;
            vue.total=resp.data.total;
       }
   })
   .catch(err => {
       console.log('接口调用异常：' + err);
       vue.$alert(err);
   })
}

export default {
   $loadUsers
}