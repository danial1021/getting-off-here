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
    name: 'Using',
    data: () => ({
        title: '사용방법',
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