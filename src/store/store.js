import Vue from 'vue'
import Vuex from 'vuex'
/* import {
  log
} from 'util'; */
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    age: 0
  },
  getters: {
    getterAge(state) {
      console.log(state);
      return state.age;
    }
  },
  mutations: {
    addCount(state, obj) {
      return state.count += obj.num;
    },
    subCount(state, obj) {
      return state.count -= obj.num;
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