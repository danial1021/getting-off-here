<template>
    <vue-daum-map
    :appKey="appKey"
    :center.sync="center"
    :level.sync="level"
    :mapTypeId="mapTypeId"
    :libraries="libraries"
    @load="onLoad"
    style="width:500px;height:400px;"/>
</template>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f698a436257d54bdcbcd13e7af9d3d74"></script>
<script>
import VueDaumMap from 'vue-daum-map'

export default {
    name: "Map",
    data: () => ({
        appKey: 'f698a436257d54bdcbcd13e7af9d3d74', // 테스트용 appkey
        center: {lat:33.450701, lng:126.570667}, // 지도의 중심 좌표
        level: 3, // 지도의 레벨(확대, 축소 정도),
        mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
        libraries: [], // 추가로 불러올 라이브러리
        map: null // 지도 객체. 지도가 로드되면 할당됨.
    }),

    components: {
        VueDaumMap
    },

    methods: {
        // 지도가 로드 완료되면 load 이벤트 발생
        onLoad (map) {
            this.map = map
        }
    },

    mounted () {
        this.$http.get('/busstop/id',{
        params: { busstop_id: this.$store.state.bi }
        }).then((resp) => {
        console.log(resp.data)
        })
    }
}
</script>