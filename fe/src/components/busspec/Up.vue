<template>
  <v-container>
    <v-timeline dense>
      <v-timeline-item icon="mdi-arrow-down" v-for="busline in Object.keys(buslines)" :key="busline">
        <v-card max-width="95%" @click="reser(buslines[busline].split('/')[1], busline)">
            <v-card-title>{{busline}}</v-card-title>
            <v-card-subtitle>{{ buslines[busline].split('/')[0] }}</v-card-subtitle>
          </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    name: "Up",
    props:['buslines'],
    data: () => ({
    }),
    methods: {
      reser(busid, busname) {
        this.$store.state.bs = busname
        this.$store.state.bi = busid
        console.log(this.$store.state.bs)
        console.log(this.$store.state.bi)
        this.$router.push('/book')
      }
    }
  }
</script>