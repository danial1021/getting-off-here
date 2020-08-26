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
    status: '',
    token: localStorage.getItem('token') || '',
    user : {
      name: "비로그인"
    },
    bn: {}, // 버스 객체
    bs: '', // 정류장 선택 시에 예약 페이지로 같이 넘어가게 되는 정류장 이름 변수
    bi: '' // 이름이 같은 두 개의 정류장의 경우(방향) 때문에 id 값으로 search
  },

  mutations: { // mutations는 변수를 조작하는 함수를 의미
    // Mutations accept only two parameters: first - state, second - payload.
    // If you want to pass multiple parameters in payload use an object.

    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, {token, user}){
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
      state.user = {
        name:"비로그인"
      }
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
          console.log(user.id)
          console.log(user.name)
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', {token, user})
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
    }
  },

  getters : {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    getToken: state => state.token
  },
  
  modules: {
  }
})
