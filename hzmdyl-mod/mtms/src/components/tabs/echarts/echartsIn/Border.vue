<template>
  <div>
    <div class="border-box-contaier">
      <div class="dv-border-box">
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
        <!--
        <div v-for="(item,index) in echarsItems" :key="index" class="border-box-content" > 
            <component :is="item.component"></component>
        </div>
        -->
         <div class="border-box-content" > 
          <border-line></border-line>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
 import BorderLine from './BorderLine'
export default {
    components:{
      'border-line':BorderLine
    },
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
.border-box-contaier .dv-border-box{
    position: relative;
    height:auto;
}
.dv-border-box .border {
  position: absolute;
  display: block;
}
.dv-border-box .top-center {
  top:0;
  left:30%
}
.dv-border-box .right-top {
  right: 0;
  transform: rotateY(180deg);
}
.dv-border-box .left-bottom {
  bottom: 0;
  transform: rotateX(180deg);
}
.dv-border-box .bottom-center {
  left:30%;
  bottom:0;
}
.dv-border-box .right-bottom {
  right: 0;
  bottom: 0;
  transform: rotateX(180deg) rotateY(180deg);
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
