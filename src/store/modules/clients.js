import clients from '../../services/clients'

const state = {
  clients: null,
  client: null
};

const getters = {
  stateClients: (state) => state.clients,
  stateClient: (state) => state.client,
};

const actions = {
  async _getClients({commit}) {
    await clients.get().then(r=>{
      commit("setClients",r);
    });
  },
  async _postClients({commit},model) {
    await clients.post(model);
  },
  async _putClients({commit},model) {
    await clients.put(model);
  },
};

const mutations = {
  setClients(state, data) {
    console.log("Clients",data);
    state.clients = data;
  },
  setSingleClient(state,client){
    state.client = client;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};