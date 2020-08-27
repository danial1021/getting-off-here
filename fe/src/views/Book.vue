<template>
    <div>
        <Bar />
        <PageTitle :title=$store.state.bs />
        <Nav />
        <Map />
        <v-container>
            <v-col align="center" justify="center" class="text-center" cols="12" sm="12">
                <div class="my-2">
                    <v-btn depressed width="80%" color="primary" @click="reser_save">예약하기</v-btn>
                </div>
            </v-col>
        </v-container>
        <v-container>
            <v-col align="center" justify="center" class="text-center" cols="12" sm="12">
                <div class="my-2">
                    <v-btn depressed width="80%" color="primary" @click="$router.push('/')">메인으로</v-btn>
                </div>
            </v-col>
        </v-container>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'
import Map from '@/components/Map.vue'

export default {
    name: 'Book',
    data: () => ({
        title: '',
    }),

    methods: {
        reser_save () {
            console.log('예약완료')
        }
    },

    components: {
        Bar,
        Nav,
        PageTitle,
        Map
    },
}
</script>