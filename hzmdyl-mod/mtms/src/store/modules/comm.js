import comm from "../../api/comm";

 /**
  * 公共数据，系统参数，性别等
  */
 const state={
     sexList:[],
     rates:[],
     roleTypes:[]
 }

 const getters={

 }

 const mutations={
    setSexList(state,payload){
        state.sexList=payload.body.data;
    },
    setRates(state,payload){
        state.rates=payload.body.data;
    },
    setRoleTypes(state,payload){
        state.roleTypes=payload.body.data;
    }
 }

 const actions={
    setSexList({commit},payload){
        commit('setSexList',payload);
    },
    setRates({commit},payload){
        commit('setRates',payload);
    },
    setRoleTypes({commit},payload){
        commit('setRoleTypes',payload);
    }
 }

 export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }