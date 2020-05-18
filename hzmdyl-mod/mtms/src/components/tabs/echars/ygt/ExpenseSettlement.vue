<template>
    <div class="med-comm-person-main" :style="{height:userAddHeight,overflow:'auto'}">
        <el-row>
          <el-col :span="24" style="text-align:right;">
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
            <el-col :span="6">
              <el-card>
                  <med-comm-medical-income></med-comm-medical-income>
              </el-card>
            </el-col>
            <el-col :span="9">
              <el-card>
                  <med-comm-uebmi-line></med-comm-uebmi-line>
              </el-card>
            </el-col>
            <el-col :span="9">
              <el-card>
                  <med-comm-urbmi-line></med-comm-urbmi-line>
              </el-card>
            </el-col> 
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-card>
                  <el-row>
                    <el-col :span="6" >
                      <el-card>
                        <div  style="height:300px;overflow:auto;">
                           
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="18" style="height:300px;">
                      <el-card>
                        <div  style="height:300px;overflow:auto;">
                           
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
 
 
 import UebmiHistogram from './UebmiLineHistogram'
 import UebmiLine from './UebmiLine'
 import UrbmiLine from './UrbmiLine'
import PersonNum from './PersonNum'
import PreTotalNum from './PreTotalNum'
import MedicalIncome from './MedicalIncome'
 
import BananceLJ from './BananceLJ'
import MedTreateMent from './MedTreateMent'
export default {
    components:{
        'med-comm-uebmi-histogram':UebmiHistogram,
     
        'med-comm-uebmi-line':UebmiLine,
        'med-comm-urbmi-line':UrbmiLine,
        'med-comm-pserson-num':PersonNum,
        'med-comm-medical-income':MedicalIncome,
        'med-comm-pretotal-num':PreTotalNum,
 
        'med-comm-treatement':MedTreateMent,
        'med-comm-bananceLJ':BananceLJ,
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