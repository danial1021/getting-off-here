<template>
  <div>
    <Bar />
    <PageTitle :title=title />
    <Nav />

    <div>
      <div v-if="cnt == 1">
        <Data />
      </div>
      <div v-if="cnt == 2">
        <Up />
      </div>
      <div v-if="cnt == 3">
        <Down />
      </div>
    </div>

    <v-bottom-navigation
      :value="activeBtn"
      grow
      absolute
      color="teal"
    >
      <v-btn @click="cnt = 1">
        <span>버스 정보</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn @click="cnt = 2">
        <span>상행 보기</span>
        <v-icon>mdi-chevron-triple-up</v-icon>
      </v-btn>

      <v-btn @click="cnt = 3">
        <span>하행 보기</span>
        <v-icon>mdi-chevron-triple-down</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!-- <h2>{{ $route.params.data}}</h2> -->

  </div>
</template>
<script>
// @ is an alias to /src
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'
import Data from '@/components/busspec/Data.vue'
import Up from '@/components/busspec/Up.vue'
import Down from '@/components/busspec/Down.vue'

export default {
  name: 'BusSpec',

  data: () => ({
    activeBtn: 0,
    title: '',
    cnt: 1
  }),
  components: {
    Bar,
    Nav,
    PageTitle,
    Data,
    Up,
    Down
  },

  mounted() {
    this.$http.get('/bus/busstop',{
      params: { busname: this.$store.state.bn }
    }).then((resp) => {
      console.log(resp.data)
    })
  },

  methods: {
  }
}
</script>
