<template>
  <div>
    <Bar />
    <router-view></router-view>
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Bar,
    Nav
  }
}
</script>
