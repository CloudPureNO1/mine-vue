import Mock from 'mockjs'
 

let getTreeData=function(req){
    let result={};
    result.code='0';
    result.data=[];
    
    console.log('>>>>>请求类型：'+req.type);
    console.log('>>>>>请求参数：'+JSON.parse(req.body));
    console.log('>>>>>请求clientId：'+JSON.parse(req.body).nodeId);
    let type=req.type;
    switch(type){
        case 'GET':
            result.code=-9;
            result.msg='请使用POST请求';
            break;
        case 'POST':
            let reqBody=JSON.parse(req.body);
            let nodeId=reqBody.nodeId;
            //根节点，nodeId 未null
            if(nodeId){
                //根据节点id,加载子节点
                if('1000'==nodeId){
                    result.data=[
                        {
                            nodeId:'1001',
                            nodeName:'用户管理',
                            isLeaf:true,//element ui  中如果有isLeaf 则没有图标
                            nodeUrl:'/rbacUsers',
                            icon:'el-icon-s-custom'
                        },{
                            nodeId:'1002',
                            nodeName:'用户组管理',
                            isLeaf:true,
                            nodeUrl:'/rbacGroups',
                            icon:'el-icon-s-custom'
                        },{
                            nodeId:'1003',
                            nodeName:'角色管理',
                            isLeaf:true,
                            nodeUrl:'/rbacRoles',
                            icon:'el-icon-s-custom'
                        },{
                            nodeId:'1004',
                            nodeName:'资源管理',
                            isLeaf:true,
                            nodeUrl:'/rbacResources',
                            icon:'el-icon-s-custom'
                        }
                    ];
                }
                if('2000'==nodeId){
                    result.data=[
                        {
                            nodeId:'2001',
                            nodeName:'医保基金收缴',
                            isLeaf:true,
                            nodeUrl:'/echartsIn',
                            icon:'el-icon-s-custom'
                        },{
                            nodeId:'2002',
                            nodeName:'医保基金支付',
                            isLeaf:true,
                            nodeUrl:'/echartsOut',
                            icon:'el-icon-s-custom'
                        }
                    ];
                }

            }else{
                //第一次加载树，根目录数据
                result.data=[
                    {
                        nodeId: "1000",
                        nodeName: "系统管理",
                        isLeaf: false,
                        children: [ ],
                        icon:'el-icon-user'
                      },
                      {
                        nodeId: "2000",
                        nodeName: "医共体分析",
                        isLeaf: false,
                        children: [ ],
                        icon:'el-icon-user'
                      }
                ];
            }
            break;
        default:
            result.code=-9;
            result.msg='请使用POST请求';
            break;
    }
    return result;
}


const nodeDatas=[
    {
        parentResourceId:'root',
        parentResourceName:'root',
        resourceId:'1000',
        resurceName:'系统管理管理',
        resourceType:'1',
        orderNum:0,
        status:1, 
        resurceUrl:'/sysManageRoot',
        resourceDesc:''
    },{
        parentResourceId:'1000',
        parentResourceName:'系统管理',
        resourceId:'1001',
        resurceName:'用户管理',
        resourceType:'1',
        orderNum:0,
        status:1, 
        resurceUrl:'/rbacUsers',
        resourceDesc:''
    },{
        parentResourceId:'1000',
        parentResourceName:'系统管理',
        resourceId:'1002',
        resurceName:'用户组管理',
        resourceType:'1',
        orderNum:0,
        status:1, 
        resurceUrl:'/rbacUsers',
        resourceDesc:''
    },{
        parentResourceId:'1000',
        parentResourceName:'系统管理',
        resourceId:'1003',
        resurceName:'角色管理',
        resourceType:'1',
        orderNum:0,
        status:1, 
        resurceUrl:'/rbacUsers',
        resourceDesc:''
    },{
        parentResourceId:'1000',
        parentResourceName:'系统管理',
        resourceId:'1004',
        resurceName:'资源管理',
        resourceType:'1',
        orderNum:0,
        status:1, 
        resurceUrl:'/rbacUsers',
        resourceDesc:''
    },
    {
        parentResourceId:'root',
        parentResourceName:'root',
        resourceId:'2000',
        resurceName:'医共体分析',
        resourceType:'1',
        orderNum:0,
        status:1, 
        resurceUrl:'/bizManageRoot',
        resourceDesc:''
    },
    {
        parentResourceId:'2000',
        parentResourceName:'医共体分析',
        resourceId:'2001',
        resurceName:'医保基金收缴',
        resourceType:'1',
        orderNum:0,
        status:1, 
        resurceUrl:'/echartsIn',
        resourceDesc:''
    },
    {
        parentResourceId:'2000',
        parentResourceName:'医共体分析',
        resourceId:'2002',
        resurceName:'医保基金支付',
        resourceType:'1',
        orderNum:0,
        status:1, 
        resurceUrl:'/echartsOut',
        resourceDesc:''
    }
]
let getNodeData=(req)=>{
    let result={};
    result.code='0';
 
    let type=req.type;
    switch(type){
        case 'GET':
            result.code=-9;
            result.msg='请使用POST请求';
            break;
        case 'POST':
            let reqBody=JSON.parse(req.body);
            let nodeId=reqBody.nodeId;
            //根节点，nodeId 未null
            if(nodeId){
              //根据nodeId 查询节点数据
              nodeDatas.forEach((item,index)=>{
                  if(item.resourceId==nodeId){
                      result.body=item;
                  }
              })
            } 
            break;
        default:
            result.code=-9;
            result.msg='请使用POST请求';
            break;
    }
    return result;
}

let addOrEditResource=(req)=>{
    let result={};
    result.code='0';
 
    let type=req.type;
    switch(type){
        case 'GET':
            result.code=-9;
            result.msg='请使用POST请求';
            break;
        case 'POST':
            debugger
            let reqBody=JSON.parse(req.body);
            result.body=reqBody;
            
            break;
        default:
            result.code=-9;
            result.msg='请使用POST请求';
            break;
    }
    return result;
}

let loadAllTree=(req)=>{
    let result={};
    result.code='0';
 
    let type=req.type;
    switch(type){
        case 'GET':
            result.code=-9;
            result.msg='请使用POST请求';
            break;
        case 'POST':
            result.body=[
                {
                    nodeId: "1000",
                    nodeName: "系统管理",
                    isLeaf: false,
                    children: [
                        {
                            nodeId:'1001',
                            nodeName:'用户管理',
                            isLeaf:true,//element ui  中如果有isLeaf 则没有图标
                            nodeUrl:'/rbacUsers',
                            icon:'el-icon-s-custom'
                        },{
                            nodeId:'1002',
                            nodeName:'用户组管理',
                            isLeaf:true,
                            nodeUrl:'/rbacGroups',
                            icon:'el-icon-s-custom'
                        },{
                            nodeId:'1003',
                            nodeName:'角色管理',
                            isLeaf:true,
                            nodeUrl:'/rbacRoles',
                            icon:'el-icon-s-custom'
                        },{
                            nodeId:'1004',
                            nodeName:'资源管理',
                            isLeaf:true,
                            nodeUrl:'/rbacResources',
                            icon:'el-icon-s-custom'
                        }
                    ],
                    icon:'el-icon-user'
                  },
                  {
                    nodeId: "2000",
                    nodeName: "医共体分析",
                    isLeaf: false,
                    children: [
                        {
                            nodeId:'2001',
                            nodeName:'医保基金收缴',
                            isLeaf:true,
                            nodeUrl:'/echartsIn',
                            icon:'el-icon-s-custom'
                        },{
                            nodeId:'2002',
                            nodeName:'医保基金支付',
                            isLeaf:true,
                            nodeUrl:'/echartsOut',
                            icon:'el-icon-s-custom'
                        }
                    ],
                    icon:'el-icon-user'
                  }
            ];
            break;
        default:
            result.code=-9;
            result.msg='请使用POST请求';
            break;
    }
    return result;
}
Mock.mock(/\/mtms\/api\/loadTree/,getTreeData);
Mock.mock(/\/mtms\/api\/loadAllTree/,loadAllTree);
Mock.mock(/\/mtms\/api\/getNodeData/,getNodeData);
Mock.mock(/\/mtms\/api\/addOrEditResource/,addOrEditResource);

