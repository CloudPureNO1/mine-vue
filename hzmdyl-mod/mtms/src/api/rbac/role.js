import mockRole from '@/mock/role.js'
import { $post } from '@/utils/axios_util.js'

let $loadRoles=(vue,param)=>{
    $post('loadRoles',param)
    .then((res)=>{
        if(res.data.code==0){
            vue.$store.dispatch('setRoleList',res.data);
        }else{
            vue.$alert(res.data.msg,'温馨提示',{type:'warning'});
            return;
        }
    })
    .catch(err=>{
        vue.$alert(err,'温馨提示',{type:'warning'});
        return;
    })
}

export default {
    $loadRoles
}