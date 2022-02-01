import socialTypes from '../../services/socialTypes'

const state = {
  socialTypes: null,
  socialType: null
};

const getters = {
  stateSocialTypes: (state) => state.socialTypes,
  stateSocialType: (state) => state.socialType,
};

const actions = {
  async _getSocialTypes({commit}) {
    await socialTypes.get().then(r=>{
      commit("setSocialTypes",r);
    });
  },
  
};

const mutations = {
  setSocialTypes(state, data) {
    console.log("SocialTypes",data);
    state.socialTypes = data;
  },
  setSocialType(state, model){
    state.socialType = model;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};