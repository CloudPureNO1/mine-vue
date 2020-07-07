const Excel =resolve=>require(['@/components/tabs/excel/Excel'],resolve)
const excelRouter=[
    {
        path:'/excel',
        name:'Excel',
        component:Excel,
        meta:{
            keepAlive:true,
            title:'Excel',
            sign:['excel'] 
        }
    }
]
export default  excelRouter