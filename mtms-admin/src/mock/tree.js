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
                if('10000'==nodeId){
                    result.data=[
                        {
                            nodeId:'10001',
                            nodeName:'用户列表',
                            isLeaf:true,//element ui  中如果有isLeaf 则没有图标
                            nodeUrl:'http://www.baidu.com',
                            icon:'el-icon-s-custom'
                        },{
                            nodeId:'10002',
                            nodeName:'用户新增',
                            isLeaf:true,
                            nodeUrl:'http://www.baidu.com',
                            icon:'el-icon-s-custom'
                        }
                    ];
                }
                if('20000'==nodeId){
                    result.data=[
                        {
                            nodeId:'10001',
                            nodeName:'资源列表',
                            isLeaf:true,
                            nodeUrl:'http://www.baidu.com',
                            icon:'el-icon-s-custom'
                        },{
                            nodeId:'10002',
                            nodeName:'资源新增',
                            isLeaf:true,
                            nodeUrl:'http://www.baidu.com',
                            icon:'el-icon-s-custom'
                        }
                    ];
                }

            }else{
                //第一次加载树，根目录数据
                result.data=[
                    {
                        nodeId: "10000",
                        nodeName: "用户管理",
                        isLeaf: false,
                        children: [ ],
                        icon:'el-icon-user'
                      },
                      {
                        nodeId: "20000",
                        nodeName: "资源管理",
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

Mock.mock(/\/mtms\/api\/loadTree/,getTreeData);

