<template>
    <v-container>
        <v-card
        class="mx-auto"
        max-width="95%"
        tile
        dense
        >
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>배차간격</v-list-item-title>
                    <v-list-item-subtitle>{{ $store.state.bn.run_interval[0] + '분'}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>첫차</v-list-item-title>
                    <v-list-item-subtitle>{{ $store.state.bn.first_run_time[0]}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>막차</v-list-item-title>
                    <v-list-item-subtitle>{{ $store.state.bn.last_run_time[0]}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "Data",
    data: () => ({
    })
}
</script>