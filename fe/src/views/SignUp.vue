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
          <v-form>
            <v-text-field
              v-model="form.id"
              label="ID"
              :outlined=true
              hint="영문 숫자 혼용"
              :persistent-hint=true
              :counter="30"
              :class="$style.id"
              required
            ></v-text-field>
            <v-btn color="success">아이디 중복</v-btn>
            <br>
            <br>
            <v-text-field
              v-model="form.pw"
              label="Password"
              hint="8자리 이상"
              type="password"
              :outlined=true
              :persistent-hint=true
              :counter="30"
              :rules="passwordrules"
              :class="$style.id"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.name"
              label="이름"
              hint="ex) 홍길동"
              :outlined=true
              :persistent-hint=true
              :counter="30"
              :class="$style.id"
              required
            ></v-text-field>

            <br>
            <section class="birth">
              <table>
                <td class="tables">
                  <v-container style="padding: 0; width: 130px">
                  <v-overflow-btn
                  v-model="form.year"
                  :items="years"
                  :outlined=true
                  hint="YEAR"
                  :persistent-hint=true
                  :class="$style.years"
                  required
                  ></v-overflow-btn>
                  </v-container>
                </td>
                <td class="tables">
                  <v-container style="width: 120px; margin: 0 0 0 0;">
                  <v-overflow-btn
                  v-model="form.month"
                  :items="month"
                  :outlined=true
                  hint="MONTH"
                  :persistent-hint=true
                  :class="$style.month"
                  required
                  ></v-overflow-btn>
                  </v-container>
                </td>
                <td class="tables">
                  <v-text-field
                    v-model="form.day"
                    :outlined=true
                    :class="$style.days"
                    hint="DAY"
                    :persistent-hint=true
                    required
                  ></v-text-field>
                </td>
              </table>

            </section>
            <br>
            
            <v-text-field
              v-model="form.phonenumber"
              label="Phone number"
              hint="휴대전화"
              :outlined=true
              :persistent-hint=true
              required
              :class="$style.id"
            ></v-text-field>
            <v-btn color="primary" @click="submit" style="margin: 4px;">가 입</v-btn>
            <v-btn color="secondary" @click="clear">초기화</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="sb.act"
    >
      {{ sb.msg }}
      <v-btn
        :color="sb.color"
        text
        @click="sb.act = false"
      >
        닫기
      </v-btn>
    </v-snackbar>
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'SignUp',
  
  data: () => ({
    title: '회원가입',

    years: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008' ,'2009', '2010'],
    month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],

    form: {
      id: '',
      pw: '',
      name: '',
      year: '',
      month: '',
      day: '',
      phonenumber: ''
    },

    sb: {
      act: false,
      msg: '',
      color: 'warning'
    },

    // option: :rules="phoneRules"
    // phoneRules: [
    //     v => !!v || '휴대폰 번호를 입력해주세요.',
    //     v => /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test(v) || '휴대폰 번호를 입력해주세요.',
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
  
  methods: {
    
    submit () {
      this.$http.post('/sign/check', { 
        form: this.form
      })
      .then((res) => {
        if (res.data.success == true) {
          this.$store.commit('pop', { msg: '가입 완료 되었습니다', color: 'success' })
          this.$router.push('/login') 
        }
      })
      .catch(e => {
        if(!e.res) this.$store.commit('pop', { msg: e.message, color: 'warning' })
      })
    },
    pop (m, cl) {
      this.sb.act = true
      this.sb.msg = m
      this.sb.color = cl
    },
    clear () {
      this.form.id = ''
      this.form.pw = ''
      this.form.name = ''
      this.form.year = ''
      this.form.month = ''
      this.form.day = ''
      this.form.phonenumber = ''
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
