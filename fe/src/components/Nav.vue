<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Title</v-list-item-title>
        <v-list-item-subtitle>Subtitle</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Nav"
};
</script>
