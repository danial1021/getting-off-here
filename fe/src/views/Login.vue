<template>
  <div>
    <Bar />
    <PageTitle :title=title />
    <!-- <page-title title="로그인"></page-title> -->
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
        </v-col>
        <v-col cols="12"></v-col>
        <v-col
          cols="12"
          md="6"
        >
        </v-col>
        <v-col
          cols="12"
          md="6"
          :class="$style.idbar"
        >
          <v-text-field
            :label="label"
            :hint="hint"
            :outlined="outlined"
            :persistent-hint="persistentHint"
            :counter="counterEn ? counter : false"
            :class="$style.id"
          ></v-text-field>
          <br>
          <v-text-field
            :label="label1"
            :hint="hint1"
            :outlined="outlined"
            :persistent-hint="persistentHint"
            :counter="counterEn1 ? counter1 : false"
            :class="$style.id"
          ></v-text-field>
          <footer class="footer">
          <v-btn color="#4DD0E1" @click="success = true; error = false;">LOGIN</v-btn>
          <br><br>
          <a href="/#/sign">회원가입<br></a>
          <a href="/login">아이디/비밀번호 찾기<br></a>
          </footer> 
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
  name: 'Home',
  data: () => ({
    title: '로그인',
    label: 'ID',
    hint: '영문 숫자 혼용',
    outlined: true,
    persistentHint: true,
    counterEn: true,
    counter: 0,
    
    label1: 'Password',
    hint1: '8자리 이상',
    counter1: 0,
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
.id{
  top:0; left:0; bottom:0; right:0;
  margin: 10% auto;
}
.idbar{
  position: absolute;
  top:60px; left:0; bottom:0; right:0;
  margin: 10% auto;
}
.years{
  width: 100%;
}
.days{
  width: 100%;
}
.footer{
  font-family:Nanum Gothic;
}
a{
  color: gray;
  text-decoration: none;
  }
</style>
