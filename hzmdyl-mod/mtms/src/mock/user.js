import Mockjs from 'mockjs'
let total=20;

let user0=[];

let user1 = {
    userId: 10001,
    userName: 'wangsm',
    passwd: '123456',
    userRate: 1,
    createTime: '2020-02-02 02:02:02',
    creator: 'admin',
    updateTime: '2020-02-02 02:02:02',
    userDesc: '高级用户'
}
let user2 = {
    userId: 10002,
    userName: 'CloudPure',
    passwd: '123456',
    userRate: 1,
    createTime: '2020-02-02 02:02:02',
    creator: 'admin',
    updateTime: '2020-02-02 02:02:02',
    userDesc: '高级用户'
}
let loadUsers=(req)=>{
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
        let userList=[];
        let param=JSON.parse(req.body);
        if(param.currentPage==1){
            userList=new Array(param.pageSize-user0.length).fill(user1).concat(user0);
        }
        if(param.currentPage==2){
            userList=new Array(param.pageSize).fill(user2);
        }
 
        result.body.data=userList;
        result.body.total=total;
    }

    return result;
}

Mockjs.mock(/\/mtms\/api\/loadUsers/,loadUsers);


//saveUser
let saveUser=(req)=>{
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
        debugger;
        let userList=[];
        let param=JSON.parse(req.body);
        console.log(param);
        user0.push(param);
        total=total+1;
        result.msg="成功";
    }

    return result;
}
Mockjs.mock(/\/mtms\/api\/saveUser/,saveUser); 