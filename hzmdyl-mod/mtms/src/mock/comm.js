import Mockjs from 'mockjs'
let sexList=  [
            { label: '男', value: '1' }, 
            { label: '女', value: '2' },
            { label: '未说明性别',value:'9'}
        ]
let rates=[
    {label:'普通会员',value:'0'},
    {label:'白银会员',value:'5'},
    {label:'黄金会员',value:'7'},
    {label:'铂金会员',value:'8'},
    {label:'钻石会员',value:'9'}
]
let getRates=(req)=>{
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
         result.body.data=rates;
         result.body.total=rates.length;
     }
 
     return result;
}

let getSexList=(req)=>{
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
         result.body.data=sexList;
         result.body.total=3;
     }
 
     return result;
}

Mockjs.mock(/\/mtms\/api\/getRates/,getRates);
Mockjs.mock(/\/mtms\/api\/getSexList/,getSexList);