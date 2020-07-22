import layoutApi from '@/api/layout'

// initial state
const state = {
  msg:'Welcome',
  isCollapse: false,  //菜单折叠标志，默认否 
  asideWidth:'17%',
  tabContentHeight:0,
  isFullScreen:false,
  sizeType:'small',  //medium/small/mini
  avatarSize:'medium', //number/large/medium/small
}

// getters
const getters = {
   
}

// actions
const actions = {
  setTabContentHeight({commit},payload){
    commit('setTabContentHeight',payload)
  },
  toggleIsFullScreen({commit},payload){
    commit('toggleIsFullScreen',payload)
  },
  setSizeType({commit},payload){
    commit('setSizeType',payload);
  },
  setAvatarSize({commit},payload){
    commit('setAvatarSize',payload);
  }
}

// mutations 不能异步，异步在actions
const mutations = {
  toggleIsFullScreen(state,payload){
    state.isFullScreen=!state.isFullScreen;
  },
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
  },
  setSizeType(state,payload){
    state.sizeType=payload;
  },
  setAvatarSize(state,payload){
    state.avatarSize=payload;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}