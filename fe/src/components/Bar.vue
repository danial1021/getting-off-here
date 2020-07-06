<template>
  <div>
    <v-app-bar
      color="rgba(69, 94, 255)"
      dark
    >
      <v-app-bar-nav-icon @click="$store.state.drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-toolbar-title>
        <h1 align="center">
          LET ' S BE
        </h1>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-icon size="50px">fas fa-bus</v-icon>
      <!-- <v-icon>fas fa-sign</v-icon> -->

    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: "Bar",

    data: () => ({
      drawer: false
    })
  }
</script>
