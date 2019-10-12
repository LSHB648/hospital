import Vue from 'vue'
import Vuex from 'vuex'
/* import {
  log
} from 'util'; */
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    age: 0,
    loginCookie:'', /* 保存当前登录用户的Cookie */
    Userinfo:{
      Id:'',
      Name:'',
      Type:'',
      RealName:'',
      Description:'',
      CardNumber:'',
    }
  },
  getters: {
    getterCookie(state) {
      return state.loginCookie;
    }
  },
  mutations: {
    addCount(state, obj) {
      return state.count += obj.num;
    },
    subCount(state, obj) {
      return state.count -= obj.num;
    },
    saveCookie(state,Cookie){  //传多个参数一般为对象obj
      state.loginCookie=Cookie;
    },
    saveUserinfo(state,Userinfo){  //传多个参数一般为对象obj
      state.Userinfo=Userinfo;
    }
  },
  actions: {
    addCountAsy(context) {
      setTimeout(() => {
        context.commit('addCount', {
          num: 2
        })
      }, 1000)
    },
    subCountAsy(context) {
      setTimeout(() => {
        context.commit('subCount', {
          num: 2
        })
      }, 1000)
    }
  }
})