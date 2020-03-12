 
const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
Mock.setup({
    timeout: '200-600'
});

let num=['1','2','3','4','5','6','7','8','9','0','X'];

let tableList=[
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    },
    {          
        'date': Random.date('yyyy-MM-dd'),
        'idCard|18':num,
        'name': Random.cname(),
        'sex:':'男',
        'age':Random.integer( 1, 100 ),
        'province': Random.province(),
        'city': Random.city(),
        'address':Random.county(true),
        'zip': Random.zip()
    }

];

let resultTableList=function requestTableList(req){
    let result={};
    if(req.type==='POST'){
        result.code='0';
        result.body=tableList;
    }else{
        result.code='-9';
        result.msg='请使用POST请求';
    }
    return result;
}


Mock.mock(/\mtms\/api\/getTableList/, resultTableList);