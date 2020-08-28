<template>
    <div>
        <v-container>
            <v-btn @click="refresh">
                <span>새로고침</span>
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
        </v-container>

        <v-container>
            <v-card v-for="bus in buses" :key="bus.key" class="mx-auto" max-width="100%" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">{{ bus.LINE_NAME }}</v-list-item-title>
                        <v-list-item-subtitle>남은 시간: {{ bus.REMAIN_MIN }}분전</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "BusTime",
    data: () => ({
        buses: []
    }),

    components: {
    },

    methods: {
        refresh () {
            this.$http.get('/arrive', {
            params: { BUSSTOP_ID: this.$store.state.bi }
            }).then((resp) => {
                console.log(resp.data.coming_bus)
                this.buses = resp.data.coming_bus
                // console.log(this.buses)
            }).catch(err => console.log(err))
        }
    },

    mounted () {
        this.refresh()
    }
}
</script>

<style>

</style>
