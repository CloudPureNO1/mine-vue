<template>
  <div>
    <div class="border-box-contaier-1">
      <div class="dv-border-box-1">
        <svg  height="110" width="300" class="left-top border">
          <polygon
            points="6,76 6,18 12,12 18,12 24,6 27,6 84,6 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
            fill="#4fd2dd"
          >
            <animate
              attributeName="fill"
              values="#4fd2dd;#235fa7;#4fd2dd"
              dur="2s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </polygon>
        </svg>
    
    	<svg height="10" width="300" class="top-center border" >
        <polygon
            points="6,6 100,6.8 200,6.8" 
            fill="#4fd2dd">
                      <animate
                  attributeName="fill"
                  values="#4fd2dd;#235fa7;#4fd2dd"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                ></animate>
        </polygon>
    	</svg>


        <svg  height="110" width="300" class="right-top border">
          <polygon
            points="6,76 6,18 12,12 18,12 24,6 27,6 84,6 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
            fill="#4fd2dd"
          >
            <animate
              attributeName="fill"
              values="#4fd2dd;#235fa7;#4fd2dd"
              dur="2s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </polygon>
        </svg>
     
        <svg  height="110" width="300" class="left-bottom border">
          <polygon
            points="6,76 6,18 12,12 18,12 24,6 27,6 84,6 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
            fill="#4fd2dd"
          >
            <animate
              attributeName="fill"
              values="#4fd2dd;#235fa7;#4fd2dd"
              dur="2s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </polygon>
        </svg>
      

    	<svg height="10" width="300" class="bottom-center border" >
        <polygon
            points="6,6 100,6.8 200,6.8" 
            fill="#4fd2dd">
                      <animate
                  attributeName="fill"
                  values="#4fd2dd;#235fa7;#4fd2dd"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                ></animate>
        </polygon>
    	</svg>


        <svg  height="110" width="300" class="right-bottom border">
          <polygon
            points="6,76 6,18 12,12 18,12 24,6 27,6 84,6 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
            fill="#4fd2dd"
          >
            <animate
              attributeName="fill"
              values="#4fd2dd;#235fa7;#4fd2dd"
              dur="2s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </polygon>
        </svg>
      
        <div v-for="(item,index) in echarsItems" :key="index" class="border-box-content-1" > 
            <component :is="item.component"></component>
        </div>
         
  
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
            echarsItems:[]
        }
    },
    mounted(){
      let myComponent = resolve => require([`@/components/tabs/echarts/echartsIn/${this.componentName}`], resolve);
      console.log('>>>>>>>>>>>>>>>>>.');
      console.log(myComponent);
      let obj={
        component:myComponent
      }
      this.echarsItems.push(obj);
    }
}
</script>

<style>
.border-box-contaier-1 .dv-border-box-1{
    position: relative;
    height:auto;
}
.dv-border-box-1 .border {
  position: absolute;
  display: block;
}
.dv-border-box-1 .top-center {
  top:0;
  left:30%
}
.dv-border-box-1 .right-top {
  right: 0;
  transform: rotateY(180deg);
}
.dv-border-box-1 .left-bottom {
  bottom: 0;
  transform: rotateX(180deg);
}
.dv-border-box-1 .bottom-center {
  left:30%;
  bottom:0;
}
.dv-border-box-1 .right-bottom {
  right: 0;
  bottom: 0;
  transform: rotateX(180deg) rotateY(180deg);
}
.border-box-contaier-1 .border-box-content-1 {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    color: #ffffff;
    font-weight: 700;
}
.dv-border-box-1 .border-box-content-1{
    position: relative;
    width: 100%;
    height: 100%;
    padding:3%;
}
</style>
