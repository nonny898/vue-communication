import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  getters: {
    currentUser(state) {
      return state.currentUser
    },
  },
  mutations: {
    //Sync
    UPDATE_USER: (state, userName) => {
      state.currentUser = userName
    }
  },
  actions: {
    //Async
    login(context, username) {
      context.commit('UPDATE_USER', username)
    },
    logout(context) {
      context.commit('UPDATE_USER', null)
    }
  }
})