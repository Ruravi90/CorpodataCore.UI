import Vue from 'vue';
import authenticate from '../../services/authenticate';

const state = {
  user: null,
  token:""
};

const getters = {
  isAuthenticated: (state) => !!Vue.$cookies.get("token_session"),
  stateUser: (state) => state.user || Vue.$cookies.get("user_session"),
  stateToken: (state) => state.token || Vue.$cookies.get("token_session"),
};

const actions = {
  Register({dispatch}, form) {
    authenticate.Register(form);
  },
  async LogIn({commit}, user) {
    await authenticate.LogIn(user).then(res=>{
      commit("setToken",res.token);
      commit("setUser",res.user);
    });
  },
  async LogOut({ commit }) {
    commit("logout");
  },
};

const mutations = {
  setUser(state, data) {
    debugger;
    state.user = data;
    Vue.$cookies.set('user_session',data);
  },
  setToken(state, data) {
    debugger;
    state.token = data;
    Vue.$cookies.set('token_session',data);
  },
  logout(state) {
    Vue.$cookies.remove("user_session");;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};