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
  setReload(state,flag){
    state.isReload=flag;
  },
  togleShow(state){
    state.isCollapse=!state.isCollapse;
    //state.asideWidth=state.isCollapse?'5%':'17%';
    state.asideWidth=state.isCollapse?'0':'17%';
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}