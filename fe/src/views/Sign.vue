<template>
  <div>
    <Bar />
    <v-layout row wrap>
      <v-flex sm4>
          <v-btn 
          icon
          @click="$router.go('1')"
          style="float:right"
          >
              <v-icon>arrow_back</v-icon>
          </v-btn>
      </v-flex>
      
      <v-flex sm4>
          <h1 align="center">{{ title }}</h1>
      </v-flex>
      
      <v-flex sm4>
          <v-btn 
            icon
            @click="$router.go('-1')"
          >
              <v-icon>arrow_forward</v-icon>
          </v-btn> 
      </v-flex>
    </v-layout>

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

            <br>
            <section class="birth">
              <table>
                <td class="tables">
                  <v-container style="padding: 0; width: 130px">
                  <v-overflow-btn
                  :items="years"
                  :outlined="outlined"
                  :hint="yearhint"
                  :persistent-hint="persistentHint"
                  :class="$style.years"
                  ></v-overflow-btn>
                  </v-container>
                </td>
                <td class="tables">
                  <v-container style="width: 120px; margin: 0 0 0 0;">
                  <v-overflow-btn
                  :items="month"
                  :outlined="outlined"
                  :hint="monthhint"
                  :persistent-hint="persistentHint"
                  :class="$style.month"
                  ></v-overflow-btn>
                  </v-container>
                </td>
                <td class="tables">
                  <v-text-field
                    :outlined="outlined"
                    :class="$style.days"
                    :hint="dayhint"
                    :persistent-hint="persistentHint"
                  ></v-text-field>
                </td>
              </table>

            </section>
            <br>
            
            <v-text-field
              :label="label2"
              :hint="hint2"
              :outlined="outlined"
              :persistent-hint="persistentHint"
              :counter="counterEn ? counter2 : false"
              :class="$style.id"
            ></v-text-field>

            <footer class="footer">
            <v-btn color="success" @click="success = true; error = false;">REGISTER</v-btn>
            <br><br>
            <a href="/#/login">로그인<br></a>
            
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

export default {
  name: 'Home',
  data: () => ({
    title: '회원가입',
    label: 'ID',
    hint: '영문 숫자 혼용',
    outlined: true,
    persistentHint: true,
    counterEn: true,
    counter: 0,
    
    label1: 'Password',
    hint1: '8자리 이상',
    counter1: 0,
    years: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008' ,'2009', '2010'],
    month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    label2: 'email',
    hint2: '이메일',
    counter2: 0,
    yearhint: 'YEAR',
    monthhint: 'MONTH',
    dayhint: 'DAY'
  }),
  components: {
    Bar,
    Nav
  }
}
</script>

<style module>
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
a{
  color: gray;
  text-decoration: none;
  }
</style>
