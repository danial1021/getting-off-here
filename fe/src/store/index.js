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
    },
    items: {
      title: {
        '/login': '로그인',
        '/join': '회원가입'
      }
    }
  },
  mutations: { // mutations는 변수를 조작하는 함수를 의미
  },
  actions: {
  },
  modules: {
  }
})
