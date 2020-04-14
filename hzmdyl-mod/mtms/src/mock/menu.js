import Mock from 'mockjs'

Mock.setup({
    timeout: '200-600'
});


let menuList=[
    {id:'111111',title:'Vue.js',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
    {id:'111112',title:'VueX.js',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
    {id:'111113',title:'VueRouter.js',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
    {id:'222221',title:'ElementUI.js',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
    {id:'222222',title:'MinUi.js',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
    {id:'333330',title:'js',isLeaf:'1','icon':'el-icon-user',children:[
        {id:'333331',title:'jquery',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'333332',title:'EsayUI',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'333333',title:'EXTjs',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'333334',title:'es2015',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'333335',title:'es2016',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'}
    ]},
    {id:'444440',title:'java',isLeaf:'1','icon':'el-icon-user',children:[
        {id:'444441',title:'java 深入浅出',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'444442',title:'javaWeb 深入浅出',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'444443',title:'Struts2 深入浅出',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'444444',title:'Hibernate 深入浅出',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'444445',title:'Mybatis 深入浅出',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'444446',title:'Spirng 深入浅出',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'444447',title:'Spirng MVC 深入浅出',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'},
        {id:'444448',title:'SpirngBoot 深入浅出',isLeaf:'0','icon':'el-icon-user',url:'http://www.baidu.com'}
   
    ]}
]

let menuResult=function(req){
    result={};
    if(req.type!='POST'){
        result.code=-9;
        result.msg="请使用POST请求";
    }else{
        result.code=0;
        result.body=menuList;
    }
    return result;
}
Mock.mock(/\/mtms\/api\/getMenu/,{
    'code':'0',
    'menuList':[
        {
            'id':'@guid',
            'title':'@ctitle',
            'isLeaf':'0',
            'url':'@url',
            'icon':'el-icon-phone-outline',
            'url':'http://www.baidu.com'
        },
        {
            'id':'@guid',
            'title':'@ctitle',
            'isLeaf':'1',
            'children': menuList,
            'icon':'el-icon-camera'
        },
        {
            'id':'@guid',
            'title':'@ctitle',
            'isLeaf':'0',
            'url':'@url',
            'icon':'el-icon-user',
            'url':'http://www.baidu.com'
        },
        {
            'id':'@guid',
            'title':'@ctitle',
            'isLeaf':'1',
            'children':[{id:'444448',title:'SpirngBoot 深入浅出',isLeaf:'0','icon':'el-icon-user', 'url':'http://www.baidu.com'}],
            'icon':'el-icon-user'
        }
    ]
});