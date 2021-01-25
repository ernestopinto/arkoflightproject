

export const state = () => ({
  transmit: {
    fromComponentCode: 0,
    payload: null,
    valid: false,
  },
  processing: {
    loader: false,
    blocking: false,
  },
  interface: {
    nav: {
      userUp: "",
      warning: {
        message: "",
        color: "#000",
      },
    },
    body: {
      signal: 0,
      message: "",
    },
  },
});

export const mutations = {
  //
  setPayload(state, payload) {
    this.state.payload = payload;
  },
  transmit (state, component){
    this.state.transmit = component;
  }
  //
};
