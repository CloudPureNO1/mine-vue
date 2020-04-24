import layoutApi from '@/api/layout'

// initial state
const state = {
  msg:'Welcome',
  isCollapse: false,  //菜单折叠标志，默认否 
  asideWidth:'17%' 
}

// getters
const getters = {

}

// actions
const actions = {
 
}

// mutations 不能异步，异步在actions
const mutations = {
  getMsg(state,param){//如果是对象，则param.字段  否则param
    state.msg=layoutApi._$showMsg(param.name);
   //console.log(state.msg);
  }, 
  
  togleShow(state){
    state.isCollapse=!state.isCollapse;
    //.log(">>isCollapse>>>"+state.isCollapse);
    state.asideWidth=state.isCollapse?'5%':'17%';
    //console.log(">>asideWidth>>>"+state.asideWidth);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}