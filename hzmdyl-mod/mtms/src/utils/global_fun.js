//1、定义全局方法，自定义全局方法以$开头，以免冲突
//2、main.js 中，引入js  import fun from ''

 
//3、main.js 中， Vue.use(fun)
//4、this.方法

 

export default { 
    install(Vue,options){
        Vue.prototype.$isEmptyString=str=>{
             if(!str||str.trim()==''||str.trim()=='null'.toLowerCase()){
                 return true;
             }
             return false;
        };
        Vue.prototype.$isEmptyArray=(ary)=>{
            if(!ary||!Array.isArray(ary)||ary.length<1){
                return true;
            }
            return false;
        }
        Vue.prototype.$sayHello=(msg)=>{
            console.log('>>>>>>>>>>>>>>>>'+msg);
        }
    }
    
}