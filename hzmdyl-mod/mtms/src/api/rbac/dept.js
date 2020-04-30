import mockDept from '@/mock/dept.js'
import {$post} from '@/utils/axios_util.js'

let $loadDeptList=(vue)=>{
    $post('loadDeptList')
    .then((resp)=>{
        debugger
        if (resp.data.code != 0) {
            vue.$alert(resp.data.msg,'温馨提示',{type:'warning'});
           return
       }
       if (resp.data.body) {
             vue.$store.dispatch('dept/setDeptList', resp.data.body)
       }
    })
    .catch(err=>{
        console.log('接口调用异常：' + err);
        vue.$alert(err,"温馨提示",{type:'error'});
    })
}

export default {
    $loadDeptList
}