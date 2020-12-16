const state = {
    //andlusia way
    isViewMode: false,
    isEditCPG: false,
    CPGId: null,
    CPG:null
}

const mutations = {

 //andlusia way
    UpdateCPG(state, value) {
      state.isViewMode = value.isViewMode;
      state.isEditCPG = value.isEditCPG,
      state.CPGId = value.CPGId;
      state.CPG = value.CPG;
    }
}

const getters = {
    getUpdatedCPG: state => {
        return {
            isViewMode: state.isViewMode,
            isEditCPG: state.isEditCPG,
            CPGId: state.CPGId,
            CPG: state.CPG,
        }

    },
}

export default {
    mutations,
    state,
    getters
};


// const dashBoardData = {

//     state: {
//         isViewMode:false
//     },
//     mutations: {},
//     actions: {},
    
//    };
//    export default dashBoardData;
   