<template>
  <div>
    <Bar />
    <PageTitle :title=title />
    <Nav />
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
