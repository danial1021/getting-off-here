import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // state는 변수를 의미
    drawer: false,
    sb: {
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
    pop (state, d) {
      state.sb.msg = d.msg
      state.sb.color = d.color
      state.sb.act = false
      if (d.act === undefined) state.sb.act = true
    }
  },
  actions: {
  },
  modules: {
  }
})
