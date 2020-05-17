import mockGroup from '@/mock/group.js'
import { $post } from '@/utils/axios_util.js'

let $loadGroups=(vue,param)=>{
    $post('loadGroups',param)
    .then(res=>{
       
        if(res.data.code==0){
            vue.$store.dispatch('group/setGroupList',res.data.body);
        }else{
            console.log(res);
            vue.$alert(res.data.msg,'温馨提示',{type:'warning'});
            return;
        }
    })
    .catch(err=>{
        console.log('接口调用异常：' + err);
        vue.$alert(err,'温馨提示',{type:'warning'});
        return;
    })
}


let $saveGroup = function (vue, param) {
    $post('saveGroup', param)
      .then(resp => {
        if(resp.data.code==0){
          vue.$alert('保存成功', '温馨提示', { type: 'success' }).then(()=>{
              //刷新 给父组件传入隐藏
              vue.$emit('isShow',false);
              //加载
              let obj={};
              obj.pageSize=vue.$store.state.group.pageSize;
              obj.currentPage=vue.$store.state.group.currentPage;
              $loadGroups(vue,obj);
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
  
  let $updateGroup = function (vue, param) {
    $post('updateGroup', param)
      .then(resp => {
        if(resp.data.code==0){
          vue.$alert('修改成功', '温馨提示', { type: 'success' }).then(()=>{
              //刷新 给父组件传入隐藏
              vue.$emit('isShow',false);
              //加载
              let obj={};
              obj.pageSize=vue.$store.state.group.pageSize;
              obj.currentPage=vue.$store.state.group.currentPage;
              $loadGroups(vue,obj);
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
  
  
let $deleteGroup=function(vue,param){
    $post('deleteGroup',param)
    .then(resp=>{
      if(resp.data.code==0){
        vue.$alert('删除成功', '温馨提示', { type: 'success' }).then(()=>{
            //刷新 给父组件传入隐藏
            vue.$emit('isShow',false);
            //加载
            let obj={};
            obj.pageSize=vue.$store.state.group.pageSize;
            obj.currentPage=vue.$store.state.group.currentPage;
            $loadGroups(vue,obj);
        }) ;
      }else{
         vue.$alert(resp.data.msg, '温馨提示', {
            type: 'warning'
          });
         return
      }
    })
    .catch(err=>{
      console.log('接口调用异常：' + err);
      vue.$alert(err,"温馨提示",{type:'error'});
    })
  }
  
export default {
    $loadGroups,
    $saveGroup,
    $updateGroup,
    $deleteGroup
}