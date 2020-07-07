<template>
  <div>
    <Bar />
    <v-layout row wrap>
      <v-flex sm4>
          <v-btn 
          icon
          @click="$router.go('1')"
          style="float:right"
          >
              <v-icon>arrow_back</v-icon>
          </v-btn>
      </v-flex>
      
      <v-flex sm4>
          <h1 align="center">{{ title }}</h1>
      </v-flex>
      
      <v-flex sm4>
          <v-btn 
            icon
            @click="$router.go('-1')"
          >
              <v-icon>arrow_forward</v-icon>
          </v-btn> 
      </v-flex>
    </v-layout>
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  data: () => ({
    title: '버스/정류장 검색'
  }),
  components: {
    Bar,
    Nav
  }
}
</script>
