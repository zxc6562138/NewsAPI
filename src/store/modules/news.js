import * as rootypes from '../mutations_types.js';

const types = {
  OPEN_NEWS: 'open/OPEN_NEWS',
 
}

const state = {
 opendata: [],
}

const getters = {
  getOpen1999: state => {
    
   
    
   
    // 回傳結果。
    return state.opendata;
  }
}

const actions = {
  open1999 ({ commit }) {
    // 啟動 loading
    commit(rootypes.LOADING, true);
    
    // use fetch call open 1999 API
    var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=1985ab2249f345d6bc5244a7e6571749';
    var req = new Request(url);
    fetch(req)                                                                                     
          
      .then(function(response) {
        // fetch 有 'ok' 物件可以判斷 response state 是不是 200
        // 將資料處理成 JSON
        if(response.ok) {
          
          return response.json();
        } 
        else {
          console.error(response);
          commit(rootypes.LOADING, false);
        }
      })
      .then(function(data) {
        
        // 把 json 傳給 mutation
        commit(types.OPEN_NEWS, data);
        // 關閉 loading
        commit(rootypes.LOADING, false);
      })
      .catch(function(error) {
        console.error(error);
        commit(rootypes.LOADING, false);
      });
  },

}

const mutations = {
  [types.OPEN_NEWS] (state, data) {

    state.opendata = data;
  },
}	

export default {
  state,
  getters,
  actions,
  mutations
}