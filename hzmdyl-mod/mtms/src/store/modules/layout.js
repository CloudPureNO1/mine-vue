import layoutApi from '@/api/layout'

// initial state
const state = {
  msg:'Welcome',
  isCollapse: false,  //菜单折叠标志，默认否 
  asideWidth:'17%',
  tabContentHeight:0
}

// getters
const getters = {
   
}

// actions
const actions = {
  setTabContentHeight({commit},payload){
    commit('setTabContentHeight',payload)
  }
}

// mutations 不能异步，异步在actions
const mutations = {
  setReload(state,flag){
    state.isReload=flag;
  },
  togleShow(state){
    state.isCollapse=!state.isCollapse;
    state.asideWidth=state.isCollapse?'5%':'17%';
    //state.asideWidth=state.isCollapse?'0':'17%';
  },
  setTabContentHeight(state,payload){
    state.tabContentHeight=payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}