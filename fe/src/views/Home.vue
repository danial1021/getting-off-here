<template>
  <div>
    <Bar />
    <PageTitle :title=title />
    <Nav />
    <div class="imageBox" :class="$mq">
      <img src="../assets/BusSearch.png" id="ImageLeft" class="imgMain" :class="$mq" @click=search_bus>
    </div>
    <div class="imageBox">
      <img src="../assets/StationSearch.png" class="imgMain" :class="$mq" @click=search_station>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'Home',
  data: () => ({
    title: '버스/정류장 검색'
  }),
  components: {
    Bar,
    Nav,
    PageTitle
  },

  methods: {
    search_bus () {
      if (this.$route.query.fromlogin != '1') {
        this.$router.push('/login')
      } else {
        this.$router.push('/searchbus')
      }
    },

    search_station () {
      if (this.$route.query.fromlogin != '1') {
        this.$router.push('/login')
      } else {
        this.$router.push('/searchstation')
      }
    }
  },
}
</script>

<style>
#ImageLeft{
  margin-right: 22px;
}

.imageBox.mobile{
  margin: 30% 0 12% 0;
}

.imageBox.desktop{
  margin: 10% 0 4% 0;
}

.imageBox{
  text-align: center;
}

.imgMain.mobile{
  width: 70%;
}

.imgMain.desktop{
  width: 30%;
}

</style>