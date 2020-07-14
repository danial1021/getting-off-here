<template>
  <div>
    <Bar />
    <PageTitle :title=title />
    <Nav />
    <div class="imageBox" style="margin-top: 30%">
      <img src="../assets/BusSearch.png" class="imgMain" @click="$router.push('/searchbus')">
    </div>
    <div class="imageBox">
      <img src="../assets/StationSearch.png" class="imgMain" @click="$router.push('/searchstation')">
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
  }
}
</script>

<style>
.imageBox{
  text-align: center;
  margin-bottom: 12%;
}
.imgMain{
  width: 70%;
}
</style>