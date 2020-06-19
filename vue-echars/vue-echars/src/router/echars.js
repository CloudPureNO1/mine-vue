const LineIndex =resolve=>require(['@/views/echarts/line/Index.vue'],resolve);

const EchartsRouter=[
    {path:'/line/Index',name:'LineIndex',component:LineIndex,meta:{title:'LineIndex',keepAlive:true}}
]


export default EchartsRouter