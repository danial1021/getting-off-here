<template>
    <div>
        <Bar />
        <PageTitle :title=title />
        <Nav />
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
    name: 'Reservation',
    data: () => ({
        title: '나의 예약정보',
    }),

    methods: {
    },

    components: {
        Bar,
        Nav,
        PageTitle
    },
}
</script>