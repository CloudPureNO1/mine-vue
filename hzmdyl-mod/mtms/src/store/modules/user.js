import userApi from '@/api/rbac/user.js'
const state={
    total:0,
    userList:[],
    currentPage:1,
    pageSize:10
}
// getters
const getters = {

}

// actions
const actions = {
    setUsersData({commit},param){
       return new Promise((resolve,reject)=>{
            setTimeout(()=>{
               // debugger
                commit('setUsersData',param)
                resolve();
            },10);
       });
   } ,
   setPageSize(context,param){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('setPageSize',param);
                resolve();
            },10);
        });
   } ,
   setCurrentPage({commit},param){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('setCurrentPage',param);
                resolve();
            },10);
        });
   }
}

// mutations 不能异步，异步在actions
const mutations = {
   setUsersData(state,val){
    state.userList=val.data;
    state.total=val.total;
   },
   setPageSize(state,val){
       state.pageSize=val;
   },
   setCurrentPage(state,val){
      state.currentPage=val;
   }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}