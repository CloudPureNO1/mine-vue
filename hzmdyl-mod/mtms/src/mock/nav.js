import Mock from 'mockjs'
Mock.setup({
    timeout: '200-600'
});

const rootData=[
    {nodeId:'1001',nodeTitle:'系统管理',isLeaf:false,icon:'el-icon-menu',url:'', parent:'root'},
    {nodeId:'1005',nodeTitle:'申报业务',isLeaf:false,icon:'el-icon-menu',url:'',parent:'root'}
];

const sysData=[
        {nodeId:'1002',nodeTitle:'用户管理',isLeaf:true,icon:'el-icon-s-custom',url:'/rbacUsers',parent:'1001'},
        {nodeId:'1003',nodeTitle:'角色管理',isLeaf:true,icon:'el-icon-s-custom',url:'/rbacRoles',parent:'1001'},
        {nodeId:'1004',nodeTitle:'外部链接',isLeaf:true,icon:'el-icon-s-custom',url:'http://www.baidu.com/',parent:'1001'},
];

const bizData=[
   {nodeId:'1006',nodeTitle:'单位申报',isLeaf:true,icon:'el-icon-s-custom',url:'/dw',parent:'1005'},
   {nodeId:'1007',nodeTitle:'人员申报',isLeaf:true,icon:'el-icon-s-custom',url:'/ry',parent:'1005'} 
];

let navData=(req)=>{
    let result={};
    if(req.type!='POST'){
        result.code=-9;
        result.msg="请使用POST请求";
    }else{
        result.code=0;
        result.body=[];
        let nodeId=JSON.parse(req.body).nodeId;
        if(nodeId==null||nodeId==''||nodeId=='undefined'||nodeId=='null'){
            nodeId='root';
        }
        //根据parent = nodeId 查询子节点
        if(nodeId=='root'){
            result.body=rootData;
        }
        if(nodeId=='1001'){
            result.body=sysData;
        }
        if(nodeId=='1005'){
            result.body=bizData;
        }
    }
    return result;
}

Mock.mock(/\/mtms\/api\/loadNavData/,navData);