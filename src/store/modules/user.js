const user = {
  namespaced: true,
  state: {
    name: ""
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
    }
  },
  actions: {
    setName({ commit }, name) {
      commit("SET_NAME", name);
    }
  }
};

export default user;
