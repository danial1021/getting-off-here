import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // state는 변수를 의미
    drawer: false,
    attr: {
      act: false,
      msg: '',
      color: 'error'
    },
    user: {
      name: '사용자',
      id: '',
      img: 'https://randomuser.me/api/portraits/men/85.jpg'
    }
  },
  mutations: { // mutations는 변수를 조작하는 함수를 의미
    pop (state, s) {
      state.attr.msg = s.msg
      state.attr.color = s.color
      state.attr.act = false
      if (s.act === undefined) state.attr.act = true
    }
  },
  actions: {
  },
  modules: {
  }
})
