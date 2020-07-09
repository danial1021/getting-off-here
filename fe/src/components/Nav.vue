<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list>
      <v-list-item avatar>
        <v-list-item-avatar>
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ message }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
              path: '/use'
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
              path: '/sign'
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
    message: "비로그인"
  })
}
</script>
