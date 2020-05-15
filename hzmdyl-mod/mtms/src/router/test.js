const Test = resolve => require(['@/components/tabs/biz/test/Test.vue'],resolve)
 

const TestRouter = [
    {path:'/test',name:'Test' ,component:Test,meta:{title:'Test',sign:['biz','test']}} 
    
]

export default TestRouter;

 
