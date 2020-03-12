import Mock from 'mockjs'

//拦截http://localhost:8080/login
Mock.mock('http://localhost:8080/login',{
    'code': 0,
    'msg': 'success',
    'body': {
        'clientId':'mtms-manager',
        'secretKey':'Mtms-777-Manager-888-WSM-999-Insigma',
        'token':'888-111-444-999-000-555-777-666',
    }

});
 
//设置token
let tokens=[];
let tokenAdmmin={ clientId:'mtms-admin', secretKey:'Mtms-777-Admin-888-WSM-999-Insigma' ,token:'888-111-444-999-000-555-777-666'};
let tokenManager={ clientId:'mtms-manager', secretKey:'Mtms-777-Manager-888-WSM-999-Insigma',token:'888-222-444-999-000-555-777-666' };
tokens.push(tokenAdmmin);
tokens.push(tokenManager);

 /** 
req;: Object
    body: "{"acount":"admin","password":"888888"}"  传入的是一个json对象
    type: "POST"
    url: "/mtms/api/token"
    __proto__: Object
 */

 /** 
req;: Object
    body: "mtms-admin"     请求是的时候是传入的一个字符串
    type: "POST"
    url: "/mtms/api/token"
    __proto__: Object
 */

let tokenResult=function(req){
    let result={};
    console.log('>>>>>请求类型：'+req.type);
    console.log('>>>>>请求参数：'+JSON.parse(req.body));
    console.log('>>>>>请求clientId：'+JSON.parse(req.body).clientId);
    console.log('>>>>>请求secretKey：'+JSON.parse(req.body).secretKey);
    let type=req.type;
    switch(type){
        case 'GET':
            result.code=-9;
            result.msg='请使用POST请求';
            break;
        case 'POST':
            let passport=JSON.parse(req.body);
            let count=0;
            for(let i=0;i<tokens.length;i++){
                if(tokens[i].clientId==passport.clientId){
                    count++;
                    if(tokens[i].secretKey==passport.secretKey){
                        result.code=0;
                        result.msg='success';
                        result.body=tokens[i];
                        break;
                    }else{
                        result.code=-2;
                        result.msg='密匙错误';
                    } 
                }
            }
            if(count==0){
                    result.code=-1;
                    result.msg='未授权的账户';
            }
            break;
        default:
            result.code=-9;
            result.msg='请使用POST请求';
            break;
    }

    if(result.code!=0){
        result.msg='获取token失败：'+result.msg;
    }
    return result;
};
 

/**采用正则表达式拦截匹配路径（包含带参数的） */
/**采用正则表达式的时候，不不能用引号，用斜杠代替，内部的斜杠要进行转义 */
Mock.mock(/\/mtms\/api\/token[\s\S]*?/,tokenResult);//模拟查询token



let users=[];
var userAdmin={'acount':'admin','password':'888888'};
var userManager={'acount':'manager','password': '88888888'};
users.push(userAdmin);
users.push(userManager);
let loginResult=function(req){
    let result={};
    let type=req.type;
    switch(type){
        case 'POST':
            let loginUser=JSON.parse(req.body);
            let count=0;
            for(let i=0;i<users.length;i++){
                if(users[i].acount==loginUser.acount){
                    count++;
                    if(users[i].password==loginUser.password){
                        result.code=0;
                        break;
                    }else{
                        result.code=-2;
                        result.msg='密码错误';
                    }
                }
            }
            if(count==0){
                result.code=-1;
                result.msg='账号不存在';
            }
            break;
        case 'GET':
            result.code=-9;
            result.msg='请使用POST请求';
            break;
        default:
            result.code=-9;
            result.msg='请使用POST请求';
            break;
    }
    return result;
}
/**采用正则表达式拦截匹配路径（包含带参数的） */
/**采用正则表达式的时候，不不能用引号，用斜杠代替，内部的斜杠要进行转义 */
Mock.mock(/\/mtms\/api\/login/,loginResult);