<template>
    <div class="border-box-contaier">
        <div class="dv-border-box" >
                 <svg :id="'svgId'+orderNum" width="0" height="0" class="div-svg">
                      <defs>
                       <path :id="'pathId'+orderNum" d="" fill="transparent"></path>
                        <radialGradient :id="'radialGradientId'+orderNum" cx="50%" cy="50%" r="50%">
                         <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
                         <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
                        </radialGradient>
                       <mask :id="'maskId'+orderNum">
                          <circle cx="0" cy="0" r="150" :fill="'url(#radialGradientId'+orderNum+')'">
                           <animateMotion :id="'animateMotionId'+orderNum" dur="4s" path="M2,2" rotate="auto" repeatCount="indefinite"></animateMotion>
                         </circle>
                        </mask>
                     </defs>
                      
                     <use stroke-width="1" :xlink:href="'#pathId'+orderNum" stroke="#235fa7"></use>
                      <use stroke-width="2" :xlink:href="'#pathId'+orderNum" :mask="'url(#maskId'+orderNum+')'" stroke="#4fd2dd"> </use>
                   </svg>
                  <div v-for="(item,index) in echarsItems" :key="index" class="border-box-content" > 
                    <component :is="item.component" @drawSvg="drawSvg"></component>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        componentName:{type:String,default:''},
        orderNum:{type:Number,default:0}
    },
    watch:{
        componentName:{
            handler(newVal,oldVal){
                this.componentName=newVal;
                let myComponent = resolve => require([`@/components/tabs/echarts/echartsIn/${newVal}.vue`], resolve);
                let obj={
                  component:myComponent
                }
                this.echarsItems.push(obj);
            },
            deep:true
        } 
    },
 
    data(){
        return{
            echarsItems:[],
            svgData:{},
            pathData:'',
            svgFlag:false
        }
    },
  
    mounted(){
      //console.log('&&&&&&&&&&&&&&',this.pathData);
      let myComponent = resolve => require([`@/components/tabs/echarts/echartsIn/${this.componentName}`], resolve);
      //console.log('>>>>>>>>>>>>>>>>>.');
      //console.log(myComponent);
      let obj={
        component:myComponent
      }
      this.echarsItems.push(obj);

    },
    methods:{
      drawSvg(data){
        let wd=data.divWidth+28;
        let hd=data.divHeight+12;
        document.getElementById('svgId'+this.orderNum).style.height=hd+4;
        document.getElementById('svgId'+this.orderNum).style.width=wd+4;
        document.getElementById('pathId'+this.orderNum).setAttribute('d','M2, 2 L'+wd+', 2 L'+wd+', '+hd+' L2, '+hd+' L2, 2');
        document.getElementById('animateMotionId'+this.orderNum).setAttribute('path','M2, 2 L'+wd+', 2 L'+wd+', '+hd+' L2, '+hd+' L2, 2');
      }
    }
}
</script>


<style>
.border-box-contaier .dv-border-box{
    position: relative;
    height:auto;
}
.dv-border-box .div-svg{
  position: absolute;
  display: block;
  left:0;
  top:3px;
}
 
.border-box-contaier .border-box-content {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    color: #ffffff;
    font-weight: 700;
}
.dv-border-box .border-box-content{
    position: relative;
    width: 100%;
    height: 100%;
    padding:8px;
}
</style>