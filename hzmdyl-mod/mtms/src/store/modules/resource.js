const state={
    nodeData:{}
}
const getters={
    getNodeName(state){
        return state.nodeData.nodeName
    }
}
const mutations={
    setNodeData(state,payload){
        state.nodeData=payload;
    }
}

const actions={
    setNodeData({commit},payload){
        commit('setNodeData',payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}