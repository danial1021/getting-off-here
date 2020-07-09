<template>
  <v-app>
    <SplashScreen v-if="loading" />
    <router-view />
  </v-app>
</template>

<script>
import SplashScreen from "@/components/SplashScreen.vue"

export default {
  name: "App",

  data: () => ({
      loading: true
  }),
  components: {
    SplashScreen
  },
  mounted() {
      setTimeout(() => {
          this.loading = false
      }, 3000)
  }
}
</script>
