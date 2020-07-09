<template>
  <div>
    <el-button type="primary" icon="el-icon-download" @click="exportExcel"></el-button>
  </div>
</template>

<script>
import {downloadExl,downloadExl2} from '@/utils/excel/ExcelExport'
export default {
  data(){
    return{
      showFlag:false
    }
  },
  mounted(){

  },
  methods:{
    exportExcel(){
            //     	let title=[{"title":"发布系统"}];
            // let titleCols=[{"title":6}];
            // let titleStyles=[{"title":{"styleNum":3,"wpx":180},"hpt":50}];

            // let titleCtn=[
            //   {"orgCodeLabel":"机构编码","orgCode":"0000000","orgNameLabel":"机构名称","orgName":"测试公司"},
            //   {"printerLabel":"打印者","printer":"admin","printTimeLabel":"打印时间","printTime":"2020-02-02"}
            // ];
            // let titleCtnCols=[
            //   {"orgCodeLabel":1,"orgCode":1,"orgNameLabel":2,"orgName":2},
            //   {"printerLabel":1,"printer":1,"printTimeLabel":2,"printTime":2}
            // ];
            // let titleCtnStyles=[
            //   {"orgCodeLabel":{"styleNum":1,"wpx":180},"orgCode":{"styleNum":0,"wpx":180},"orgNameLabel":{"styleNum":1,"wpx":180},"orgName":{"styleNum":0,"wpx":180},"hpt":45},
            //   {"printerLabel":{"styleNum":1,"wpx":180},"printer":{"styleNum":0,"wpx":180},"printTimeLabel":{"styleNum":1,"wpx":180},"printTime":{"styleNum":0,"wpx":180},"hpt":45}	
            // ]

          
            // let th=["作者","时间","版权"];
            // let thStyles=[1,1,1,40];

            // let data=[
            //   {"author":"wangsm","date":"2020-02-02","@copyRihgt":"浙江网新恩普软件有限公司"},
            //   {"author":"wangsm","date":"2020-02-02","@copyRihgt":"浙江网新恩普软件有限公司"}
            // ];
            // let dataCols={"author":2,"date":1,"@copyRihgt":3};
            // let dataStyles={"author":{"styleNum":0,"wpx":180},"date":{"styleNum":0,"wpx":180},"@copyRihgt":{"styleNum":0,"wpx":180},"hpt":30}
          
            // let footer=[
            //   {"confirmPersonLabel":"确认人","confirmPerson":"CloudPure","confirmDateLabel":"确认时间","confirmDate":"2020-02-02"}
            // ]
            // let footerCols=[
            //   {"confirmPersonLabel":1,"confirmPerson":2,"confirmDateLabel":1,"confirmDate":2}
            // ]
            // let footerStyles=[
            //   {"confirmPersonLabel":{"styleNum":1,"wpx":180},"confirmPerson":{"styleNum":0,"wpx":180},"confirmDateLabel":{"styleNum":1,"wpx":180},"confirmDate":{"styleNum":0,"wpx":180},"hpt":40}
            // ]
      // downloadExl({title,titleCtn, th, data, footer, titleCols, titleCtnCols, dataCols, footerCols,	titleStyles, titleCtnStyles, thStyles, dataStyles, footerStyles})

            
            let title=[{"title":"发布系统"}];
            let titleMerges=[{"title":{"c":6,"r":1}}];
            let titleStyles=[{"title":{"styleNum":3,"wpx":180},"hpx":150}];


            let titleCtn=[
              {"orgCodeLabel":"机构编码","orgCode":"0000000","orgNameLabel":"机构名称","orgName":"测试公司"},
              {"printerLabel":"打印者","printer":"admin","printTimeLabel":"打印时间","printTime":"2020-02-02"}
            ];
			let titleCtnMerges=[
				{"orgNameLabel":{"c":2,"r":1,"sc":2},"orgName":{"c":2,"r":1,"sc":4}},
        {"printerLabel":{"c":2,"r":1} ,"printTime":{"c":2,"r":1,"sc":4}}
			];
            let titleCtnStyles=[
              {"orgCodeLabel":{"styleNum":1,"wpx":180},"orgCode":{"styleNum":0,"wpx":180},"orgNameLabel":{"styleNum":1,"wpx":180},"orgName":{"styleNum":0,"wpx":180},"hpx":45},
              {"printerLabel":{"styleNum":1,"wpx":180},"printer":{"styleNum":0,"wpx":180},"printTimeLabel":{"styleNum":1,"wpx":180},"printTime":{"styleNum":0,"wpx":180},"hpx":45}	
            ]

          
            let th=["作者","时间","版权"];
            let thStyles=[1,1,1,40];



            let data=[
              {"author":"wangsm","date":"2020-02-02","copyRihgt":"浙江网新恩普软件有限公司"},
              {"author":"wangsm","date":"2020-02-02","copyRihgt":"浙江网新恩普软件有限公司"}
            ];
			      let dataMerges={"author":{"c":2,"r":1},"copyRihgt":{"c":3,"r":1,"sc":3}};
            let dataStyles={"author":{"styleNum":0,"wpx":[120,100]},"date":{"styleNum":0},"copyRihgt":{"styleNum":0,"wpx":[70,77,70]},"hpx":30}
          


            let footer=[
              {"confirmPersonLabel":"确认人","confirmPerson":"CloudPure","confirmDateLabel":"确认时间","confirmDate":"2020-02-02"}
            ]
			let footerMerges=[
              {"confirmPerson":{"c":2,"r":2,"sc":1},"confirmDate":{"c":2,"r":1,"sc":4}}
            ]
            let footerStyles=[
              {"confirmPersonLabel":{"styleNum":1,"wpx":180},"confirmPerson":{"styleNum":0,"wpx":180},"confirmDateLabel":{"styleNum":1,"wpx":180},"confirmDate":{"styleNum":0,"wpx":180},"hpx":40}
            ]

let stNames=['发票','地址']
 downloadExl({title,titleCtn, th, data, footer, titleMerges, titleCtnMerges, dataMerges, footerMerges,	titleStyles, titleCtnStyles, thStyles, dataStyles, footerStyles},{stNames});
    }
  }
}
</script>