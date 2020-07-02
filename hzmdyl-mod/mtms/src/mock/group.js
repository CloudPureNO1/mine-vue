import Mockjs from 'mockjs'
let total=20;

let group0=[];

let group1 = {
    groupId: 10001,
    groupName: '超级管理员用户组',
    groupType: 'admin',
    createTime: '2020-02-02 02:02:02',
    creator: 'admin',
    updateTime: '2020-02-02 02:02:02',
    groupDesc: '超级管理员用户组',
    roles:[
        {
            roleId: 10001,
            roleName: '超级管理员角色',
            roleType: 'admin',
            createTime: '2020-02-02 02:02:02',
            creator: 'admin',
            updateTime: '2020-02-02 02:02:02',
            roleDesc: '超级管理员角色'
        },
        {
            roleId: 10003,
            roleName: '用户',
            roleType: 'user',
            createTime: '2020-02-02 02:02:02',
            creator: 'admin',
            updateTime: '2020-02-02 02:02:02',
            roleDesc: '用户'
        }
    ]
}
let group2 = {
    groupId: 10002,
    groupName: '普通管理员用户组',
    groupType: 'manager',
    createTime: '2020-02-02 02:02:02',
    creator: 'admin',
    updateTime: '2020-02-02 02:02:02',
    groupDesc: '普通管理员用户组',
    roles:[
        {
            roleId: 10002,
            roleName: '普通管理员角色',
            roleType: 'manager',
            createTime: '2020-02-02 02:02:02',
            creator: 'admin',
            updateTime: '2020-02-02 02:02:02',
            roleDesc: '普通管理员角色'
        },
        {
            roleId: 10003,
            roleName: '用户',
            roleType: 'user',
            createTime: '2020-02-02 02:02:02',
            creator: 'admin',
            updateTime: '2020-02-02 02:02:02',
            roleDesc: '用户'
        }
    ]
}
let groupDelete = {
    groupId: 10003,
    groupName: '用户组',
    groupType: 'user',
    createTime: '2020-02-02 02:02:02',
    creator: 'admin',
    updateTime: '2020-02-02 02:02:02',
    groupDesc: '用户组',
    roles:[
        {
            roleId: 10003,
            roleName: '用户',
            roleType: 'user',
            createTime: '2020-02-02 02:02:02',
            creator: 'admin',
            updateTime: '2020-02-02 02:02:02',
            roleDesc: '用户'
        }
    ]
}
group0.push(groupDelete);

let loadGroups=(req)=>{
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
        let groupList=[];
        let param=JSON.parse(req.body);
        
        if(param.currentPage==1){
           
            groupList=new Array(param.pageSize-group0.length).fill(group1).concat(group0);
        }
        if(param.currentPage==2){
            groupList=new Array(param.pageSize-group0.length).fill(group2).concat(group0);
        }
 
        result.body.data=groupList;
        result.body.total=total;
    }

    return result;
}

Mockjs.mock(/\/mtms\/api\/loadGroups/,loadGroups);


//saveUser
let saveGroup=(req)=>{
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
        let groupList=[];
        let param=JSON.parse(req.body);
        console.log(param);
        group0.push(param);
        total=total+1;
        result.msg="成功";
    }

    return result;
}
Mockjs.mock(/\/mtms\/api\/saveGroup/,saveGroup); 


//deleteUser
let deleteGroup=(req)=>{
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
        let groupList=[];
        let param=JSON.parse(req.body);
        console.log(param);
        group0.pop(param);
        total=total-1;
        result.msg="成功";
    }

    return result;
}
Mockjs.mock(/\/mtms\/api\/deleteGroup/,deleteGroup); 


//updateUser
let updateGroup=(req)=>{
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
        group1=param;
        result.msg="成功";
    }

    return result;
}
Mockjs.mock(/\/mtms\/api\/updateGroup/,updateGroup); 