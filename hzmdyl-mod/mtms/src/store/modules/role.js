const state={
    total:0,
    roleList:[],
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
    setRoleList(state,payLoad){
        state.roleList=payLoad.data;
        state.total=payLoad.total;
    }
}

const actions={
    setCurrentPage({commit},payLoad){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('setCurrentPage',payLoad);
                resolve();
            },400)
        });
    },
    setPageSize({commit},payLoad){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('setPageSize',payLoad);
                resolve();
            },400)
        });
    },
    setRoleList({commmit},payLoad){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('setRoleList',payLoad);
                resolve();
            },400)
        });
    }

}
export default {
    namespace:true,
    state,
    getters,
    mutations,
    actions
}