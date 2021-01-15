

export default {

    state: () => {
        return {
            user: '',
            logged: []
        }
    }
}

// state mutations

export const mutations = {

    SET_USER: (state, { userUp }) => {
        state.push(userUp)
    },

    ADD_LOGGED_USER: (state, { user }) => {
        state.logged = [... user];
    },

    REMOVE_LOGGED_USER(state, { user }) {
        state.list.splice(state.logged.indexOf(user), 1)
    },
}

// actions that mutate the state

export const actions = {

    setUser({commit}, user) {
        commit('SET_USER', user)
    },

    addLoggedUser ({commit}, userLogged) {
        commit('ADD_LOGGED_USER', userLogged)
    }
}

// get data from state

export const getters = {

    getUser (state) {
        return state.user;
    },

    getLoggedUsers (state) {
        return state.logged
    }
}