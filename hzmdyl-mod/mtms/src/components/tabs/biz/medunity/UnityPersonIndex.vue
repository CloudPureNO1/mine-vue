<template>
    <div class="med-comm-person-main" :style="{height:userAddHeight,overflow:'auto'}">
        <el-row>
          <el-col :span="12" style="text-align:left;">
            <el-button-group>
                <el-button size="mini">全部</el-button>
                <el-button size="mini">医共体一</el-button>
                <el-button size="mini">医共体二</el-button>
                <el-button size="mini">医共体三</el-button>
            </el-button-group>
      
          </el-col>
          <el-col :span="12" style="text-align:right;">
              <el-select v-model="defaultValue" placeholder="请选择" size="mini">
                  <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
               </el-select>
          </el-col>
        </el-row>
        <div :style="{height:userAddHeight2,overflow:'auto'}">
          <el-row>
            <el-col :span="6">
              <el-card>
                  <med-comm-pserson-num></med-comm-pserson-num>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card>
                  <med-comm-pretotal-num></med-comm-pretotal-num>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                  <med-comm-bananceLJ></med-comm-bananceLJ>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-card>
                  <med-comm-bananceLJ-uebmi></med-comm-bananceLJ-uebmi>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                  <med-comm-bananceLJ-urbmi></med-comm-bananceLJ-urbmi>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-card>
                  <med-comm-medical-income></med-comm-medical-income>
              </el-card>
            </el-col>
            <el-col :span="9">
              <el-card>
                  <med-comm-uebmi-histogram></med-comm-uebmi-histogram>
              </el-card>
            </el-col>
            <el-col :span="9">
              <el-card>
                  <med-comm-urbmi-histogram></med-comm-urbmi-histogram>
              </el-card>
            </el-col> 
          </el-row>

 

          <el-row>
            <el-col :span="24">
              <el-card>
                  <el-row>
                     
                      <el-col :span="6" style="text-align:left;">
                        <el-button-group>
                            <el-button size="mini">全部</el-button>
                            <el-button size="mini">职工</el-button>
                            <el-button size="mini">城乡</el-button>
                        </el-button-group>
                  
                      </el-col>
                      <el-col :span="6" style="text-align:left;">
                          <el-input placeholder="姓名 / 身份证号码 / 社保编号" v-model="searchCondition" size="mini">
                            <el-button slot="append" icon="el-icon-search" plain type="primary" @click="searchPerson" size="mini"></el-button>
                          </el-input>
                      </el-col>
                
                  </el-row>
                  
                  <el-row>
                    <el-col :span="6" >
                      <el-card>
                        <div  style="height:300px;overflow:auto;">
                           <med-comm-orgs-tree></med-comm-orgs-tree>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="18" style="height:300px;">
                      <el-card>
                        <div  style="height:300px;overflow:auto;">
                          <med-comm-pserson-list></med-comm-pserson-list>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                  
              </el-card>
            </el-col>
          </el-row>
        </div>
    </div>
</template>

<script>
 import OrgsTree from './OrgsTree'
 import UebmiHistogram from './UebmiHistogram'
 import UrbmiHistogram from './UrbmiHistogram'
import PersonNum from './PersonNum'
import PreTotalNum from './PreTotalNum'
import MedicalIncome from './MedicalIncome'
import PersonList from './PersonList'
import BananceLJ from './BananceLJ'
import BananceLJUebmi from './BananceLJUebmi'
import BananceLJUrbmi from './BananceLJUrbmi'
import MedTreateMent from './MedTreateMent'
export default {
    components:{
        'med-comm-orgs-tree':OrgsTree,
        'med-comm-uebmi-histogram':UebmiHistogram,
        'med-comm-urbmi-histogram':UrbmiHistogram,
        'med-comm-pserson-num':PersonNum,
        'med-comm-medical-income':MedicalIncome,
        'med-comm-pretotal-num':PreTotalNum,
        'med-comm-pserson-list':PersonList,
        'med-comm-treatement':MedTreateMent,
        'med-comm-bananceLJ':BananceLJ,
        'med-comm-bananceLJ-uebmi':BananceLJUebmi,
        'med-comm-bananceLJ-urbmi':BananceLJUrbmi,
    },
    data(){
        return{
            searchCondition:'',//查询条件
            userAddHeight: '450px' ,
            userAddHeight2:'410px',
            options:[
              {'label':'2018年','value':'2018'},
              {'label':'2019年','value':'2019'},
              {'label':'2020年','value':'2020'}
            ],
            defaultValue:''
        }
    },
    created(){
        this.$nextTick(function () {
            let tabH = this.$el.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH = document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH = 13;
            this.userAddHeight = tabH - tabHeaderH - paginationH + 'px';
            this.userAddHeight2 = tabH - tabHeaderH - paginationH -40 + 'px';
        });
    },
    methods:{
      searchPerson(){
        console.log("查询人员：查询条件【"+this.searchCondition+"】");
      }
    }
}
</script>

<style>
.med-comm-person-main{
  background-color:#fbfbfb
}
.med-comm-person-main .el-col{
        padding:3px;
}
.med-comm-person-main .el-card__body{
  padding:5px;
}
</style>