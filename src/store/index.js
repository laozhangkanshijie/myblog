import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchContent: '',
    searchReslut: []
  },
  mutations: {
    changeSC (state, content) {
      state.searchContent = content
    }
  },
  actions: {
  },
  modules: {
  }
})
