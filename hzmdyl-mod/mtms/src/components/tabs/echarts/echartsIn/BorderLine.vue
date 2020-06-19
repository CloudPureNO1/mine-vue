<template>
    <div class="border-box-contaier">
        <div class="dv-border-box-line" >
            <div class="div-cls border-box-content">
            </div>
            <div v-for="(item,index) in echarsItems" :key="index" class="border-box-content" > 
              <component :is="item.component" @drawSvg="drawSvg"></component>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        componentName:{type:String,default:''}
    },
    watch:{
        componentName:{
            handler(newVal,oldVal){
              debugger;
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
            msg:'Hello!',
            echarsItems:[],
            svgData:{},
            pathData:'',
            svgFlag:false
        }
    },
  
    mounted(){
      console.log('&&&&&&&&&&&&&&',this.pathData);
      let myComponent = resolve => require([`@/components/tabs/echarts/echartsIn/${this.componentName}`], resolve);
      console.log('>>>>>>>>>>>>>>>>>.');
      console.log(myComponent);
      let obj={
        component:myComponent
      }
      this.echarsItems.push(obj);
    },
    methods:{
      drawLine(data){
          let pData='M2,2 L'+data.divWidth+',2 L'+data.divWidth+','+data.divHeight+' L2,'+data.divHeight+' L2,2';
          let div=document.getElementsByClassName('div-cls')[0];
          
            div.innerHTML='<svg width="'+data.divWidth+'" height="'+data.divHeight+'" class="div-svg">'
                  +'<defs>'
                  +' <path id="pathId" d="'+pData+'" fill="transparent"></path>'
                    +'<radialGradient id="radialGradientId" cx="50%" cy="50%" r="50%">'
                    +' <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>'
                    +' <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>'
                    +'</radialGradient>'
                  +' <mask id="maskId">'
                    +'  <circle cx="0" cy="0" r="150" fill="url(#radialGradientId)">'
                    +'   <animateMotion dur="3s" path="'+pData+'" rotate="auto" repeatCount="indefinite"></animateMotion>'
                    +' </circle>'
                    +'</mask>'
                +' </defs>'
                  
                +' <use stroke-width="1" xlink:href="#pathId" stroke="#235fa7"></use>'
                  +'<use stroke-width="3" xlink:href="#pathId" mask="url(#maskId)" stroke="#4fd2dd"> </use>'
              +' </svg>';
      },
      drawSvg(data){
        
        
        this.drawLine(data);
        console.log('來自子組建的值：',data,this.pathData);
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
  top:10%;
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
    padding:3%;
}
</style>