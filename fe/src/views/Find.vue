<template>
    <div>
        <Bar />
        <PageTitle :title=title />
        <Nav />

        <v-btn color="red">id</v-btn>
        <v-btn color="blue">pw</v-btn>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
    name: 'Find',
    data: () => ({
        title: '아이디/비번 찾기',
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