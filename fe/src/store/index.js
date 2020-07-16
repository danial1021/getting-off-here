import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'

export default new Vuex.Store({
  state: { // state는 변수를 의미
    drawer: false,
    sb: {
      act: false,
      msg: '',
      color: 'error'
    },
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },

  mutations: { // mutations는 변수를 조작하는 함수를 의미
    pop (state, d) {
      state.sb.msg = d.msg
      state.sb.color = d.color
      state.sb.act = false
      if (d.act === undefined) state.sb.act = true
    },

    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
    validate_event(state){
      state.status = 'expired'
    }
  },

  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: '/users/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },

    signup({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: '/users/register', data: user, method: 'POST' })
          .then(resp => {
            const user = resp.data.user

            if (user === {}) {
              commit('auth_error')
              reject(resp.data.error)
            }

            resolve(user)
          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
      })
    },

    logout({commit}){
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },

    validate_event({commit}){
      return new Promise((resolve, reject) => {
        commit('validate_event')
        axios({url: '/token_check', method: 'GET' })
          .then(resp => {
            // TO-DO: 토큰 만료가 잘 되었는지 확인하는 로직
            commit('logout')
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
  },

  getters : {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    getToken: state => state.token
  },
  
  modules: {
  }
})
