const state={
    deptList:[]
}

const getters={
    getDeptDropDown(state){
       return state.deptList.map((item)=>{
            let data={};
            data.label=item.deptName;
            data.value=item.deptId;
            return data;
        });
    }
}

const actions={
    setDeptList({commit},payload){
        commit('setDeptList',payload);
    }
}

const mutations={
    setDeptList(state,payload){
        debugger
        state.deptList=payload.data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}