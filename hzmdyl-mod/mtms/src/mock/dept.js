import Mockjs from 'mockjs'
let total=8;
let deptList = [{
      deptName:'产品中心',
      deptId:'10001',
      createdTime:'2020-04-30 13:12:11',
      update_time:'2020-04-30  13:12:11',
      creator:'Admin',
      deptDesc:'负责产品运营',
      deptContact:'王美美',
      deptTel:'123xxxxxxxx',
      deptEmail:'123@qq.com',
      deptSimpleName:'产品中心',
      deptLeader:'施玲群'
    },
    {
      deptName:'大客户部',
      deptId:'10002',
      createdTime:'2020-04-30 13:12:11',
      update_time:'2020-04-30  13:12:11',
      creator:'Admin',
      deptDesc:'负责产品运营',
      deptContact:'王美美',
      deptTel:'123xxxxxxxx',
      deptEmail:'123@qq.com',
      deptSimpleName:'产品中心',
      deptLeader:'施玲群'
    },
    {
      deptName:'客户服务部',
      deptId:'10002',
      createdTime:'2020-04-30 13:12:11',
      update_time:'2020-04-30  13:12:11',
      creator:'Admin',
      deptDesc:'负责产品运营',
      deptContact:'王美美',
      deptTel:'123xxxxxxxx',
      deptEmail:'123@qq.com',
      deptSimpleName:'产品中心',
      deptLeader:'施玲群'
    } 
  ]

  let getDeptList=(req)=>{
    let result={};
    result.code=0;
    result.body={}
    let type=req.type;
    if(type!='POST'){
        result.code=-9;
        result.msg='请使用POST请求';
        return result;
    }
    if(req.body){
        result.body.data=deptList;
        result.body.total=total;
    }
    return result;
  }

  Mockjs.mock(/\/mtms\/api\/loadDeptList/, getDeptList);
