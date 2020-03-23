import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'http://localhost:3000',
    showData: [],
    showReport: []
  },
  mutations: {
    showData(state, payload){
      state.showData = payload
    },

    showReport(state, payload){
      state.showReport = payload
    }
  },
  actions: {
    getData(context){
      axios({
        method: 'get',
        url: `${this.state.url}/countries`,
        headers: {token: localStorage.getItem('token')}
      })
        .then(res=>{
          context.commit('showData', res.data)
        })
        .catch(err=>{
          console.log(err)
        })
    },

    showReport(context){
      axios({
        method: 'get',
        url: `${this.state.url}/reports`,
        headers: {token: localStorage.getItem('token')}
      })
        .then(res=>{
          context.commit('showReport', res.data)
        })
        .catch(err=>{
          console.log(err)
        })
    }
  },
  modules: {

  }
})
