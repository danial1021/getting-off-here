<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list v-if="isAuthenticated() === false">
      <v-list-item-content>
        <v-list-item-title class="title">{{ $store.state.user.name }}님</v-list-item-title>
      </v-list-item-content>
      <v-divider></v-divider>
      <v-list-group
        v-for="(item, i) in items"
        :key="i"
        :active="true"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.to"
        >
          <v-list-item-content @click="$store.state.drawer = !$store.state.drawer">
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    
    <v-list v-else>
      <v-list-item-content>
        <v-list-item-title class="title">{{ $store.state.user.name }}님</v-list-item-title>
      </v-list-item-content>
      <v-divider></v-divider>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content @click="logout">
            <v-list-item-title>로그아웃</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>build</v-icon>
          </v-list-item-icon>
          <v-list-item-content @click="meminfo">
            <v-list-item-title>회원정보수정</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list>
        <v-list-group
          v-for="(item1, i) in items1"
          :key="i"
          :prepend-icon="item1.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item1.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="subItem in item1.items1"
            :key="subItem.title"
            :to="subItem.to"
          >
            <v-list-item-content @click="$store.state.drawer = !$store.state.drawer">
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>history</v-icon>
          </v-list-item-icon>
          <v-list-item-content @click="reservation">
            <v-list-item-title>나의 예약정보</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Nav",
  data: () => ({
    item: 1,
    items: [
      {
        icon: 'home',
        title: '시작',
        items: [
          {
            title: '메인',
            to: {
              path: '/'
            }
          },
          {
            title: '사용방법',
            to: {
              path: '/using'
            }
          }
        ]
      },
      {
        icon: 'people_outline',
        title: '로그인',
        items: [
          {
            title: '로그인',
            to: {
              path: '/login'
            }
          },
          {
            title: '회원가입',
            to: {
              path: '/signup'
            }
          },
          {
            title: '아이디/비밀번호 찾기'
          }
        ],
      },
      {
        icon: 'search',
        title: '버스 및 정류장',            
        items: [
          {
            title: '버스 검색',
            to:{
              path: '/searchbus'
            }
          },
          {
            title: '정류장 검색',
            to:{
              path: '/searchstation'
            }
          }
        ],
      }
    ],

    item1: 1,
    items1: [
      {
        icon: 'search',
        title: '버스 및 정류장',            
        items1: [
          {
            title: '버스 검색',
            to:{
              path: '/searchbus'
            }
          },
          {
            title: '정류장 검색',
            to:{
              path: '/searchstation'
            }
          }
        ],
      }
    ],
  }),
  methods: {
    logout () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    },
    isAuthenticated () { 
        return this.$store.getters.isAuthenticated
    },
    meminfo () {
      this.$router.push("/using").catch((e)=>{console.log(e)});
    },
    reservation () {
      this.$router.push("/reservation").catch((e)=>{console.log(e)});
    }
  },
  
}
</script>
