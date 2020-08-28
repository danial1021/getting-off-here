<template>
    <v-btn @click="v-on">
        <span>새로고침</span>
        <v-icon>mdi-refresh</v-icon>
    </v-btn>
</template>

<script>
export default {
    name: "BusTime",
    data: () => ({
    }),

    components: {
    },

    methods: {
    },

    mounted () {
        this.$http.get('/arrive', {
            params: { BUSSTOP_ID: this.$store.state.bi }
        }).then((resp) => {
            console.log(resp.data)
        }).catch(err => console.log(err))
    }
}
</script>

<style>

</style>
