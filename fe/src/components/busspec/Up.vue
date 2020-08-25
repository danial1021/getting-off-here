<template>
  <v-timeline dense>
    <v-timeline-item icon="mdi-arrow-down" v-for="busline in Object.keys(buslines)" :key="busline">
      <v-card max-width="95%" @click="print">
          <v-card-title>{{busline}}</v-card-title>
          <v-card-subtitle>{{ buslines[busline].split('/')[0] }}</v-card-subtitle>
        </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    name: "Up",
    props:['buslines'],
    data: () => ({
    }),
    methods: {
      print() {
        console.log(1)
      }
    }
  }
</script>