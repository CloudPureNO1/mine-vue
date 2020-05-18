import Mock from 'mockjs'
Mock.setup({
    timeout: '200-600'
});


const sysData=[
    {nodeId:'1001',nodeTitle:'用户管理',isLeaf:true,icon:'el-icon-s-custom',url:'/rbacUsers',parent:'1001'},
    {nodeId:'1002',nodeTitle:'用户组管理',isLeaf:true,icon:'el-icon-s-custom',url:'/rbacGroups',parent:'1001'},
    {nodeId:'1003',nodeTitle:'角色管理',isLeaf:true,icon:'el-icon-s-custom',url:'/rbacRoles',parent:'1001'},
];

const bizData=[
    {nodeId:'2001',nodeTitle:'辖区人员',isLeaf:true,icon:'el-icon-s-custom',url:'/mtmsPersons',parent:'1005'},
    {nodeId:'2002',nodeTitle:'医共体信息',isLeaf:true,icon:'el-icon-s-custom',url:'/unityPersonIndex',parent:'1005'},
    {nodeId:'2003',nodeTitle:'结算信息',isLeaf:true,icon:'el-icon-s-custom',url:'/expenseSettlement',parent:'1005'},
    {nodeId:'2004',nodeTitle:'医保基金收缴',isLeaf:true,icon:'el-icon-s-custom',url:'/mtmsEcharsIn',parent:'1005'},
    {nodeId:'2005',nodeTitle:'医保基金支付',isLeaf:true,icon:'el-icon-s-custom',url:'/mtmsEcharsOut',parent:'1005'}
];

// const rootData=[
//     {nodeId:'1001',nodeTitle:'系统管理',isLeaf:false,icon:'el-icon-menu',url:'', parent:'root',children:sysData},
//     {nodeId:'1005',nodeTitle:'申报业务',isLeaf:false,icon:'el-icon-menu',url:'',parent:'root',children:bizData}
// ];

//采用异步加载
const rootData=[
    {nodeId:'1001',nodeTitle:'系统管理',isLeaf:false,icon:'el-icon-menu',url:'/sysManageRoot', parent:'root'},
    {nodeId:'1005',nodeTitle:'医共体业务',isLeaf:false,icon:'el-icon-menu',url:'/bizManageRoot',parent:'root'}
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