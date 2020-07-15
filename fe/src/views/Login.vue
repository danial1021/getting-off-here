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
          <v-text-field
            v-model="id"
            label="ID"
            hint="영문 숫자 혼용"
            :outlined=true
            :persistent-hint=true
            :counter="30"
            :class="$style.id"
          ></v-text-field>
          <br>
          <v-text-field
            v-model="password"
            label="Password"
            hint="8자리 이상"
            :outlined=true
            :persistent-hint=true
            :counter="30"
            :class="$style.id"
          ></v-text-field>
          <footer class="footer">
          <v-btn color="#4DD0E1" @click="login">LOGIN</v-btn>
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
  name: 'Login',
  data: () => ({
    title: '로그인',
    id: '',
    password: ''

  }),
  components: {
    Bar,
    Nav,
    PageTitle
  },
  methods: {
    login () {
      let id = this.id 
      let password = this.password
      this.$store.dispatch('login', { id, password })
      .then(() => this.$router.push('/?fromlogin=1'))
      .catch(err => console.log(err))
    }
  },
}
</script>

<style module>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
.id{
  top:0; left:0; bottom:0; right:0;
  margin: 10% auto;
}
.mainform{
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
