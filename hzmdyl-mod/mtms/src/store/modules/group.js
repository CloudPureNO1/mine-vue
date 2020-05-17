const state={
    total:0,
    groupList:[],
    currentPage:1,
    pageSize:10
}

const getters={

}

const mutations={
    setCurrentPage(state,payLoad){
        state.currentPage=payLoad;
    },
    setPageSize(state,payLoad){
        state.pageSize=payLoad;
    },
    setGroupList(state,payLoad){
      
        state.groupList=payLoad.data;
        state.total=payLoad.total;
    }
}

const actions={
    setCurrentPage({commit},payLoad){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('setCurrentPage',payLoad);
                resolve();
            },10)
        });
    },
    setPageSize({commit},payLoad){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('setPageSize',payLoad);
                resolve();
            },10)
        });
    },
    setGroupList({commit},payLoad){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('setGroupList',payLoad);
                resolve();
            },10)
        });
    }

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}