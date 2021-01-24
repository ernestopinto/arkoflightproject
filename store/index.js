import {Environment} from "~/env/Environment";

export const state = () => ({
  payload: {
    code: '',
    value: Environment.OP_CODES.ready
  },
  processing: {
    loader: false,
    blocking: false
  },
  interface: {
    nav: {
      userUp: '',
      warning: {
        message: '',
        color: '#000'
      }
    },
    body : {
      signal: 0,
      message: ''
    }
  }
});

export const mutations = {
  //
  setPayload (state, payload){
    this.state.payload = payload;
  },
  setValuePayload (state, value){
    this.state.payload = { ... value}
  },
  setProcessing (state, loader){
    this.state.processing = {... loader}
  }
  //
};

