 const EchartsIn = resolve=>require(['@/components/tabs/echarts/EchartsIn.vue'],resolve)

 let echartsRouter=[
     {
         path:'/echartsIn',
         name:'EchartsIn',
         component:EchartsIn,
         meta:{
             title:'医保基金征缴',
             keepAlive:true,
             sign:['echarts'],
             data:['医共体分析']
        },
     }
 ]
 export default echartsRouter;