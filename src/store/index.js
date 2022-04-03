import Vue from 'vue'
import Vuex from 'vuex'
import  * as userCookies from '@/utils/userCookie'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed:false,
    user:userCookies.getUserCookies(),
  },
 getters:{
    isLogin(state){
       return state.user.appkey?true:false
    }
 },
  mutations: {
    setCollapsed(state){
        state.collapsed=!state.collapsed
    },
    setUserInfo(state,users){
        state.user = users
    },
    loginOut(state){
        state.user ={
            email:'',
            username:'',
            appkey:'',
            role:''
        };
    }
  },
  actions: {
    setCollapsed({commit}){
        commit('setCollapsed')
    },
    setUserInfo({commit},users){
        commit('setUserInfo',users)
        userCookies.setUserCookies(users)
    },
    loginOut({commit}){
        commit('loginOut');
        userCookies.removeUserCookies()
    }
  },
  modules: {
  }
})
