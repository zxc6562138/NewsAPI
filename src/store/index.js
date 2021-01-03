import Vue from 'vue';
import Vuex from 'vuex';
// root
import * as getters from './getters.js';
import {state, actions, mutations} from './root.js';
// modules
import news from './modules/news';


Vue.use( Vuex );

export default new Vuex.Store({
  // root
  state,
  actions,
  mutations,
  getters,
  // 將整理好的 modules 放到 vuex 中組合
  modules: {
  news,
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});