// memory state

export default {
  state: () => {
    return {
      counter: 0,
    };
  },
};

export const mutations = {
  INC_COUNTER(state) {
    state.counter++;
  },

  DEC_CONTER(state) {
    state.counter--;
  },

  CLEAR_COUNTER: (state) => {
    state.counter = 0;
  },

  SET_COUNTER: (state, value) => {
    state.counter = value;
  },
};

export const actions = {
  incCounter({ commit }) {
    commit("INC_COUNTER");
  },

  decCounter({ commit }) {
    commit("DEC_CONTER");
  },

  clearCounter({ commit }) {
    commit("CLEAR_COUNTER");
  },

  setCounter({ commit }, value) {
    commit("CLEAR_COUNTER", value);
  },
};

export const getters = {

    getCounter (state) {
        return state.counter;
    }

}
