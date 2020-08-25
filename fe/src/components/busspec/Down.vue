<template>
  <v-timeline dense>
    <v-timeline-item icon="mdi-arrow-down" v-for="busline in Object.keys(buslines).reverse()" :key="busline" >
      <v-card class="mx-auto" max-width="95%" @click="print">
          <v-card-title class="headline">{{busline}}</v-card-title>
          <v-card-subtitle>{{ buslines[busline].split('/')[0] }}</v-card-subtitle>
        </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    name: "Down",
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