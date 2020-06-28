import mockComm from '@/mock/comm.js'
import { $post } from '@/utils/axios_util.js'

let $loadGroupTypes=(vue)=>{
    $post('getGroupTypes')
    .then(resp=>{
        
        if(resp.data.code!=0){
            vue.$alert(resp.data.msg,'温馨提示',{type:'warning'});
            return;
        }else{
            vue.$store.dispatch('comm/setGroupTypes',resp.data);
        }
    })
    .catch(err=>{
        vue.$alert(err,'温馨提示',{type:'warning'});
        return;
    })
}
let $loadRoleTypes=(vue)=>{
    $post('getRoleTypes')
    .then(resp=>{
        if(resp.data.code!=0){
            vue.$alert(resp.data.msg,'温馨提示',{type:'warning'});
            return;
        }else{
            vue.$store.dispatch('comm/setRoleTypes',resp.data);
        }
    })
    .catch(err=>{
        vue.$alert(err,'温馨提示',{type:'warning'});
        return;
    })
}

let $loadSexList=(vue)=>{
    $post('getSexList')
    .then((resp)=>{
        if(resp.data.code!=0){
            vue.$alert(resp.data.msg,'温馨提示',{type:'warning'});
            return;
        }else{
            vue.$store.dispatch('comm/setSexList',resp.data);
        }
    })
    .catch(err=>{
        vue.$alert(err,'温馨提示',{type:'warning'});
        return;
    })
}

let $loadRates=(vue)=>{
    $post('getRates')
    .then((resp)=>{
        if(resp.data.code!=0){
            vue.$alert(resp.data.msg,'温馨提示',{type:'warning'});
            return;
        }else{
            vue.$store.dispatch('comm/setRates',resp.data);
        }
    })
    .catch(err=>{
        vue.$alert(err,'温馨提示',{type:'warning'});
        return;
    })
}

export default {
    $loadSexList,
    $loadRates,
    $loadRoleTypes,
    $loadGroupTypes
}