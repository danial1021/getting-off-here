<template>
  <div>
    <Bar />
    <PageTitle :title=title />
    <Nav />
    
    <div class="text-center">
      <v-btn class="ma-2" color="#F7E7D6">버스 정보</v-btn>
      <v-btn class="ma-2" color="#848CB5">상행 보기</v-btn>
      <v-btn class="ma-2" color="#FFBDBD">하행 보기</v-btn>
    </div>

  </div>
</template>
<script>
// @ is an alias to /src
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'BusSpec',
  data: () => ({
    title: ''
  }),
  components: {
    Bar,
    Nav,
    PageTitle
  },

  mounted() {
    this.$http.get('/bus/busstop',{
      params: { busname: this.$store.state.bn }
    }).then((resp) => {
      console.log(resp.data)
    })
  },

  methods: {
  },
}
</script>
