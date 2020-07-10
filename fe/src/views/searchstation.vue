<template>
  <div>
    <Bar />
    <PageTitle :title=title />
    <!-- <page-title title="로그인"></page-title> -->
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12" md="6"></v-col>
        <v-col cols="12" md="6" :class="$style.mainform">
            <v-text-field label="정류장 검색" append-outer-icon="fas fa-search"></v-text-field>

            <v-card class="mx-auto" max-width="100%" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">송정 공원</v-list-item-title>
                        <v-list-item-subtitle>재홍 69번, 재홍 74번</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        <!-- v-card 태그가 정류장 한 칸입니다. -->
            <v-card class="mx-auto" max-width="100%" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">영광통</v-list-item-title>
                        <v-list-item-subtitle>박재 12번, 재홍 77번</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        <!-- 여기까지 -->
        </v-col>
      </v-row>
    </v-container>

    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'


export default {
  name: 'SearchStation',
  data: () => ({
    title: '정류장 검색',
  }),
  components: {
    Bar,
    Nav,
    PageTitle
  }
}
</script>

<style module>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

.mainform{
  position: absolute;
  top:60px; left:0; bottom:0; right:0;
  margin: 10% auto;
}
</style>
