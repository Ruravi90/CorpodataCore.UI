import users from '../../services/users'

const state = {
  users: null,
};

const getters = {
  stateUsers: (state) => state.users,
};

const actions = {
  async _getUsers({commit}) {
    await users.get().then(r=>{
      commit("setUsers",r);
    });
  },
};

const mutations = {
  setUsers(state, data) {
    console.log("Users",data);
    state.users = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};