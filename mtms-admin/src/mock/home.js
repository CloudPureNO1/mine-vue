import Mock from 'mockjs'

let users=[];
let admin={acount:'admin',password:'admin88888888',createTime:'2019-09-09'};
let manager={acount:'manager',password:'manager88888888',createTime:'2019-09-09'};
users.push(admin);
users.push(manager);

let userResult=function (req){
    let result={};
    let type=req.type;
    if(type!="POST"){
        user.code=-9;
        user.msg='请使用POST请求';
    }else{
        let acount=req.body;
        let count=0;
        for(let i=0;i<users.length;i++){
            if(users[i].acount==acount){
                count++;
                result.code=0;
                result.body=users[i];
            }
        }
        if(count==0){
            result.code=-1;
            result.msg='没有对应的用户信息';
        }else if(count>1){
            result.code=-2;
            result.msg='存在多条用户信息';
        }
    }

    return result;
}
Mock.mock(/\/mtms\/api\/getUser/,userResult);