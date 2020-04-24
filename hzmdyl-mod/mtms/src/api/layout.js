import axios from 'axios'
import nav from '@/mock/nav.js'

let _$loadNavMenu=(nodeId,navDatas)=>{
    navDatas=[];
    let params={};
    params.nodeId=nodeId;
    axios.post('/mtms/api/loadNavData',params)
    .then((resp)=>{
        if(resp.data.code=='0'){
            let subData=resp.data.body;
            if(!Array.isArray(subData)){
                this.$alert('数据格式有误');
                return;
            }
            if(subData==null||subData=='undefined'||subData.length<1){
                this.$alert('没有子节点');
                return;
            }
            if(nodeId=='root'){
                navDatas=subData;
            }else{
                navDatas=this.navDatas.map((item)=>{
                                    if(item.nodeId==nodeId){
                                        item.children=subData;
                                    }
                                    return item;
                                });
            }
        }else{
            this.$alert(resp.data.msg, '温馨提示');
            return;
        }
    })
    .catch((err)=>{
        this.$alert(err,"错误");
        return ;
    });
}

let _$showMsg=(name)=>{
    return '学的不仅仅是技术，更是未来！@'+name;
}
export default {
    _$loadNavMenu,
    _$showMsg
}