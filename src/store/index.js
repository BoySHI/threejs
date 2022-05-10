/*
 * @Description: 
 * @Author: shiby
 * @Date: 2022-05-07 16:25:07
 * @LastEditTime: 2022-05-10 09:48:48
 * @LastEditors: shiby
 * @Reference: 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeCount: null
  },
  mutations: {
    add (state, payload) {
      state.storeCount += payload
      console.log(state.storeCount);
    }
  },
  actions: {
  },
  modules: {
  }
})
