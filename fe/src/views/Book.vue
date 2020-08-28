<template>
    <div>
        <Bar />
        <PageTitle :title=$store.state.bs />
        <Nav />

        <div v-if="cnt == 1">
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

        <div v-if="cnt == 2">
            <BusTime />
        </div>

        <v-bottom-navigation
            :value="activeBtn"
            grow
            color="teal"
            absolute
        >
            <v-btn @click="cnt = 1">
            <span>예약 및 지도</span>
            <v-icon>mdi-map</v-icon>
            </v-btn>

            <v-btn @click="cnt = 2">
            <span>남은 버스 시간</span>
            <v-icon>mdi-history</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'
import Map from '@/components/Map.vue'
import BusTime from '@/components/BusTime.vue'

export default {
    name: 'Book',
    data: () => ({
        title: '',

        activeBtn: 0,
        cnt: 1
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
        Map,
        BusTime
    },
}
</script>