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
        <v-text-field label="정류장 이름이나 번호를 검색해주세요" v-model="busstop" append-outer-icon="fas fa-search"></v-text-field>
        <!-- v-card 태그가 정류장 한 칸입니다. -->
            <v-card v-for="busstop in busStops" :key="busstop.busstop_id" class="mx-auto" max-width="100%" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">{{ busstop.busstop_name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ busstop.next_busstop }}방향</v-list-item-subtitle>
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
  name: 'SearchStation',
  data: () => ({
    title: '정류장 검색',
    busstop: "",
    busStops:[]
  }),
  components: {
    Bar,
    Nav,
    PageTitle
  },

  watch: {
    busstop: function(busstop){
      console.log(busstop)
      this.searchbusStop()
    }
  },

  methods: {
    searchbusStop() {
      this.$http.get('/busstop',{
        params: { busstop_name: this.busstop }
      }).then((resp) => {
        this.busStops = resp.data.busStop.sort((a,b)=>{
          if (this.busStops=={}) return
          return a.busstop_name < b.busstop_name ? -1 : a.busstop_name > b.busstop_name ? 1 : 0;
        })
        console.log(this.busStops)
      })
    }
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
