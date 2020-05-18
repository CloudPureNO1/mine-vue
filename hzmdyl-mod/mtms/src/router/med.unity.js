const UnityPersonIndex=resolve=>require(['@/components/tabs/biz/medunity/UnityPersonIndex.vue'],resolve)
 
const MedicalCommunityRouter = [
    {
        name:'UnityPersonIndex',
        path:'/unityPersonIndex',
        component:UnityPersonIndex,
        meta:{
            title:'医共体信息',
            sign:['biz','medunity']
        }
    } 
]

export default MedicalCommunityRouter;
