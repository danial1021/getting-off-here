<template>
  <div>
    <Bar />
    <PageTitle :title=title />
    <!-- <page-title title="로그인"></page-title> -->
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12" md="6"></v-col>
        <v-col cols="12" md="6" :class="$style.mainform">
        <v-text-field label="버스 이름을 검색해주세요" v-model="busname" append-outer-icon="fas fa-search"></v-text-field>

        <!-- v-card 태그가 버스 한 칸입니다. -->
          <v-card v-for="bus in buses" :key="bus.lineName[0]" class="mx-auto" max-width="100%" outlined @click="spec(bus)">
              <v-list-item three-line>
                  <v-list-item-content>
                      <v-list-item-title class="headline mb-1">{{ bus.lineName[0] }}</v-list-item-title>
                      <v-list-item-subtitle>{{ bus.dir_down_name[0] }} ~ {{ bus.dir_up_name[0] }}</v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </v-card>
        <!-- 여기까지 -->

        </v-col>
      </v-row>
    </v-container>

    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'


export default {
  name: 'SearchBus',
  data: () => ({
    title: '버스 검색',
    buses: [],
    
    busname: ''
  }),

  watch: {
    busname: function(busname){
      // console.log(busname)
      this.searchbus(busname)
    }
  },

  methods: {
    searchbus (busname) {
      this.$http.get('/bus',{
        params: { busname: busname }
      }).then((resp) => {
        this.buses = resp.data.bus

        // console.log(this.buses)
      })
    },

    spec (r) {
      this.$store.state.bn = r
      // console.log(r)
      this.$router.push('/busspec')
    }
  },

  components: {
    Bar,
    Nav,
    PageTitle
  }
}
</script>

<style module>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

.mainform{
  position: absolute;
  top:60px; left:0; bottom:0; right:0;
  margin: 10% auto;
}
</style>
