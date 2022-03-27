import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed:false,
  },
  mutations: {
    setCollapsed(state){
        state.collapsed=!state.collapsed
    }
  },
  actions: {
    setCollapsed({commit}){
        commit('setCollapsed')
    }
  },
  modules: {
  }
})
