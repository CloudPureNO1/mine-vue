import mockRole from '@/mock/role.js'
import { $post } from '@/utils/axios_util.js'

let $loadRoles=(vue,param)=>{
    $post('loadRoles',param)
    .then(res=>{
       
        if(res.data.code==0){
            vue.$store.dispatch('role/setRoleList',res.data.body);
        }else{
            ///console.log(res);
            vue.$alert(res.data.msg,'温馨提示',{type:'warning'});
            return;
        }
    })
    .catch(err=>{
        //console.log('接口调用异常：' + err);
        vue.$alert(err,'温馨提示',{type:'warning'});
        return;
    })
}


let $saveRole = function (vue, param) {
    $post('saveRole', param)
      .then(resp => {
        if(resp.data.code==0){
          vue.$alert('保存成功', '温馨提示', { type: 'success' }).then(()=>{
              //刷新 给父组件传入隐藏
              vue.$emit('isShow',false);
              //加载
              let obj={};
              obj.pageSize=vue.$store.state.role.pageSize;
              obj.currentPage=vue.$store.state.role.currentPage;
              $loadRoles(vue,obj);
          }) ;
        }else{
           vue.$alert(resp.data.msg, '温馨提示', {
              type: 'warning'
            });
           return
        }
      })
      .catch(err => {
        //console.log('接口调用异常：' + err);
        vue.$alert(err, "温馨提示", {
          type: 'error'
        });
      })
  }
  
  let $updateRole = function (vue, param) {
    $post('updateRole', param)
      .then(resp => {
        if(resp.data.code==0){
          vue.$alert('修改成功', '温馨提示', { type: 'success' }).then(()=>{
              //刷新 给父组件传入隐藏
              vue.$emit('isShow',false);
              //加载
              let obj={};
              obj.pageSize=vue.$store.state.role.pageSize;
              obj.currentPage=vue.$store.state.role.currentPage;
              $loadRoles(vue,obj);
          }) ;
        }else{
           vue.$alert(resp.data.msg, '温馨提示', {
              type: 'warning'
            });
           return
        }
      })
      .catch(err => {
        //console.log('接口调用异常：' + err);
        vue.$alert(err, "温馨提示", {
          type: 'error'
        });
      })
  }
  
  
let $deleteRole=function(vue,param){
    $post('deleteRole',param)
    .then(resp=>{
      if(resp.data.code==0){
        vue.$alert('删除成功', '温馨提示', { type: 'success' }).then(()=>{
            //刷新 给父组件传入隐藏
            vue.$emit('isShow',false);
            //加载
            let obj={};
            obj.pageSize=vue.$store.state.role.pageSize;
            obj.currentPage=vue.$store.state.role.currentPage;
            $loadRoles(vue,obj);
        }) ;
      }else{
         vue.$alert(resp.data.msg, '温馨提示', {
            type: 'warning'
          });
         return
      }
    })
    .catch(err=>{
      //log('接口调用异常：' + err);
      vue.$alert(err,"温馨提示",{type:'error'});
    })
  }
  
export default {
    $loadRoles,
    $saveRole,
    $updateRole,
    $deleteRole
}