<template>
    <div class="exp-sett-main" :style="{height:userAddHeight,overflow:'auto'}" >
         
            <div style="width:100%;text-align:right;">
                <el-select v-model="defaultValue" placeholder="请选择" size="mini">
                  <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
            </div>

            <el-row>
                    <el-col :span="6" >
                        <el-card :shadow="shadow">
                            <mtms-balance-line-lj></mtms-balance-line-lj>
                        </el-card>
                    </el-col>
                    <el-col :span="6" >
                        <el-card :shadow="shadow">
                            <mtms-balance-line-lj1></mtms-balance-line-lj1>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card :shadow="shadow">
                            <mtms-balance-line-lj2></mtms-balance-line-lj2>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card :shadow="shadow">
                            <mtms-balance-line-lj3></mtms-balance-line-lj3>
                        </el-card>
                    </el-col>
                    </el-row>
                    <el-row>
                    <el-col :span="12">
                        <el-card :shadow="shadow">
                            <el-row>
                              <el-col :span="12">
                                <mtms-balance-line-lj3></mtms-balance-line-lj3>
                              </el-col>
                              <el-col :span="12">
                                <mtms-balance-line-lj3></mtms-balance-line-lj3>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="24">
                                 <mtms-balance-table></mtms-balance-table>
                              </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card :shadow="shadow">
                            <mtms-balance-echars></mtms-balance-echars>
                        </el-card>
                    </el-col>
            </el-row>
        
    </div>
</template>


<script>
import BlanceLine from './balance/BalanceLine'
import BananceLJ from './balance/BananceLJ'
import BananceLJ1 from './balance/BananceLJ1'
import BananceLJ2 from './balance/BananceLJ2'
import BananceLJ3 from './balance/BananceLJ3'
import BalanceTable from './balance/BalanceTable'
import BalanceEchars from './balance/BalanceEchars'
export default {
    components:{
        'mtms-balance-line':BlanceLine,
        'mtms-balance-line-lj':BananceLJ,
        'mtms-balance-line-lj1':BananceLJ1,
        'mtms-balance-line-lj2':BananceLJ2,
        'mtms-balance-line-lj3':BananceLJ3,
        'mtms-balance-table':BalanceTable,
        'mtms-balance-echars':BalanceEchars,
    },
    data(){
        return{
            userAddHeight: '450px' ,
            shadow:'never',
            options:[{'label':'2019年9月','value':'201909'}],
            defaultValue:''
        }
    },
    created(){
        this.$nextTick(function () {
            let tabH = this.$el.parentElement.parentElement.parentElement.offsetHeight;
            let tabHeaderH = document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            let paginationH = 13;
            this.userAddHeight = tabH - tabHeaderH - paginationH + 'px';
        });
    }
}
</script>

<style>
    .exp-sett-main .el-col{
        padding:3px;
    }
</style>