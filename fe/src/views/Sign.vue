<template>
  <div>
    <Bar />
    <PageTitle :title=title />
    <v-container fluid>
      <v-row>
       <v-col cols="12" sm="6"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12" md="6"></v-col>
        <v-col cols="12" md="6" :class="$style.mainform">
            <v-text-field
              :label="label"
              :hint="hint"
              :outlined=true
              :persistent-hint=true
              :counter="counterEn ? counter : false"
              :class="$style.id"
            ></v-text-field>
            <v-btn color="success" @click="success = true; error = false;">아이디 중복</v-btn>
            <br>
            <br>
            <v-text-field
              :v-model="model"
              :label="label1"
              :hint="hint1"
              :outlined=true
              :persistent-hint=true
              :counter="counterEn ? counter1 : false"
              :rules="passwordrules"
              :class="$style.id"
            ></v-text-field>

            <v-text-field
              :v-model="match"
              :label="label4"
              :hint="hint4"
              :outlined=true
              :persistent-hint=true
              :counter="counterEn ? counter1 : false"
              :class="$style.id"
            ></v-text-field>

            <br>
            <section class="birth">
              <table>
                <td class="tables">
                  <v-container style="padding: 0; width: 130px">
                  <v-overflow-btn
                  :items="years"
                  :outlined=true
                  :hint="yearhint"
                  :persistent-hint=true
                  :class="$style.years"
                  ></v-overflow-btn>
                  </v-container>
                </td>
                <td class="tables">
                  <v-container style="width: 120px; margin: 0 0 0 0;">
                  <v-overflow-btn
                  :items="month"
                  :outlined=true
                  :hint="monthhint"
                  :persistent-hint=true
                  :class="$style.month"
                  ></v-overflow-btn>
                  </v-container>
                </td>
                <td class="tables">
                  <v-text-field
                    :outlined=true
                    :class="$style.days"
                    :hint="dayhint"
                    :persistent-hint=true
                  ></v-text-field>
                </td>
              </table>

            </section>
            <br>
            
            <v-text-field
              :label="label2"
              :hint="hint2"
              :outlined=true
              :persistent-hint=true
              :rules="phoneRules"
              :class="$style.id"
            ></v-text-field>

            <footer class="footer">
            <v-btn color="#4DD0E1" @click="success = true; error = false;">REGISTER</v-btn>
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
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'Home',
  data: () => ({
    title: '회원가입',
    label: 'ID',
    hint: '영문 숫자 혼용',
    counterEn: true,
    counter: 0,

    match: 'Foobar',
    model: 'Foobar',
    
    label1: 'Password',
    hint1: '8자리 이상',
    counter1: 0,
    years: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008' ,'2009', '2010'],
    month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    label2: 'Phone number',
    hint2: '휴대전화',
    yearhint: 'YEAR',
    monthhint: 'MONTH',
    dayhint: 'DAY',

    label4: '이름',
    hint4: '이름',

    // phoneRules: [
    //     v => !!v || '휴대폰 번호를 입력해주세요.',
    //     v => /.+-.+-./.test(v) || '휴대폰 번호를 입력해주세요.',
    //   ],
  }),

  computed:{
    passwordrules() {

      const rules = []

        if (!this.allowSpaces) {
          const rule =
            v => (v || '').indexOf(' ') < 0 ||
              '띄어쓰기는 사용할수 없습니다.'

          rules.push(rule)

        }

        return rules
    }
  },
  components: {
    Bar,
    Nav,
    PageTitle
  }
}
</script>

<style module>
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
a{
  color: gray;
  text-decoration: none;
  }

</style>
