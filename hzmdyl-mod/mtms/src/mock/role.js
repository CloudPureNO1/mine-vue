import Mockjs from 'mockjs'
let total=20;

let role0=[];

let role1 = {
    roleId: 10001,
    roleName: '超级管理员角色',
    roleType: 'admin',
    createTime: '2020-02-02 02:02:02',
    creator: 'admin',
    updateTime: '2020-02-02 02:02:02',
    roleDesc: '超级管理员角色'
}
let role2 = {
    roleId: 10002,
    roleName: '普通管理员角色',
    roleType: 'manager',
    createTime: '2020-02-02 02:02:02',
    creator: 'admin',
    updateTime: '2020-02-02 02:02:02',
    roleDesc: '普通管理员角色'
}
let roleDelete = {
    roleId: 10003,
    roleName: '用户',
    roleType: 'user',
    createTime: '2020-02-02 02:02:02',
    creator: 'admin',
    updateTime: '2020-02-02 02:02:02',
    roleDesc: '用户'
}
role0.push(roleDelete);

let loadRoles=(req)=>{
    //debugger;
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
        //debugger;
        let roleList=[];
        let param=JSON.parse(req.body);
        
        if(param.currentPage==1){
            roleList=new Array(param.pageSize-role0.length).fill(role1).concat(role0);
        }
        if(param.currentPage==2){
            roleList=new Array(param.pageSize-role0.length).fill(role1).concat(role0);
        }
 
        result.body.data=roleList;
        result.body.total=total;
    }

    return result;
}

Mockjs.mock(/\/mtms\/api\/loadRoles/,loadRoles);


//saveUser
let saveRole=(req)=>{
    //debugger;
    let result={};
    result.code=0;
    let type=req.type;
    if(type!='POST'){
        result.code=-9;
        result.msg='请使用POST请求';
        return result;
    }
    if(req.body){
       // debugger;
        let roleList=[];
        let param=JSON.parse(req.body);
        console.log(param);
        role0.push(param);
        total=total+1;
        result.msg="成功";
    }

    return result;
}
Mockjs.mock(/\/mtms\/api\/saveRole/,saveRole); 


//deleteUser
let deleteRole=(req)=>{
    //debugger;
    let result={};
    result.code=0;
    let type=req.type;
    if(type!='POST'){
        result.code=-9;
        result.msg='请使用POST请求';
        return result;
    }
    if(req.body){
       // debugger;
        let roleList=[];
        let param=JSON.parse(req.body);
        console.log(param);
        role0.pop(param);
        total=total-1;
        result.msg="成功";
    }

    return result;
}
Mockjs.mock(/\/mtms\/api\/deleteRole/,deleteRole); 


//updateUser
let updateRole=(req)=>{
    //debugger;
    let result={};
    result.code=0;
    let type=req.type;
    if(type!='POST'){
        result.code=-9;
        result.msg='请使用POST请求';
        return result;
    }
    if(req.body){
       // debugger;
        let param=JSON.parse(req.body);
        console.log(param);
        role1=param;
        result.msg="成功";
    }

    return result;
}
Mockjs.mock(/\/mtms\/api\/updateRole/,updateRole); 