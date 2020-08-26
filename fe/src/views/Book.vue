<template>
    <div>
        <Bar />
        <PageTitle :title=$store.state.bs />
        <Nav />
        <Map />

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
    },

    components: {
        Bar,
        Nav,
        PageTitle,
        Map
    },
}
</script>