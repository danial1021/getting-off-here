<template>
  <div>
    <Bar />
    <PageTitle :title=title />
    <Nav />
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12" md="6"></v-col>
        <v-col cols="12" md="6" :class="$style.mainform">
          <v-form>
            <validation-provider name="ID" rules="minmax:4,20|alpha_num|required" v-slot="{ errors }">
              <!-- 문자 및 숫자로 입력 필수, 4~20자리까지 입력 필수 -->
              <v-text-field
                v-model="id"
                :outlined=true
                :class="$style.id"
                label="ID"
                hint="4자리 이상 && 영문 숫자 혼용"
                :error-messages="errors[0]"
                :persistent-hint=true   
                :counter="20"
                required
              ></v-text-field>
            </validation-provider>

            <v-btn color="success" @click="id_check">아이디 중복</v-btn>

            <br>
            <br>

            <validation-provider name="PASSWORD" rules="alpha_num|minmax:8,30|required" v-slot="{ errors }">
              <!-- 문자 및 숫자로 입력 필수, 8~30자리까지 입력 필수 -->
              <v-text-field
                v-model="pw"
                label="Password"
                hint="8자리 이상 && 문자 및 숫자"
                type="password"
                :error-messages="errors[0]"
                :outlined=true
                :persistent-hint=true
                :counter="30"
                :class="$style.id"
                required
              ></v-text-field>
            </validation-provider>

            <validation-provider name="NAME" rules="minmax:1,10|required" v-slot="{ errors }">
              <!-- 1~10자리까지 입력 필수-->
              <v-text-field
                v-model="name"
                label="이름"
                hint="ex) 홍길동"
                :outlined=true
                :persistent-hint=true
                :error-messages="errors[0]"
                :counter="10"
                :class="$style.id"
                required
              ></v-text-field>
            </validation-provider>

            <br>
            <section class="birth">
              <table>
                <td class="tables">
                  <v-container style="padding: 0; width: 130px">
                    <validation-provider name="BIRTH" rules="between:1900,2010|digits:4|required" v-slot="{ errors }">
                      <!-- 1900부터 2010까지 사이로 입력 필수, 숫자만으로 4자리 입력 필수 -->
                      <v-text-field
                        v-model="year"
                        :outlined=true
                        :class="$style.days"
                        hint="1900~2010년생"
                        label="출생년도"
                        :persistent-hint=true
                        :error-messages="errors[0]"
                        required
                      ></v-text-field>
                    </validation-provider>
                  </v-container>
                </td>
                <td class="tables">
                  <v-container style="width: 120px; margin: 0 0 0 0;">
                  <validation-provider name="MONTH" rules="between:1,12|required" v-slot="{ errors }">
                    <!-- 1부터 12까지 사이로 입력 필수 -->
                    <v-text-field
                      v-model="month"
                      :outlined=true
                      :class="$style.days"
                      hint="1~12월"
                      label="월"
                      :persistent-hint=true
                      :error-messages="errors[0]"
                      required
                    ></v-text-field>
                  </validation-provider>
                  </v-container>
                </td>
                <td class="tables">
                  <validation-provider name="DAY" rules="between:1,31|required" v-slot="{ errors }">
                    <!-- 1부터 31까지 사이로 입력 필수 -->
                    <v-text-field
                      v-model="day"
                      :outlined=true
                      :class="$style.days"
                      hint="1일~31일"
                      label="일"
                      :persistent-hint=true
                      :error-messages="errors[0]"
                      required
                    ></v-text-field>
                  </validation-provider>
                </td>
              </table>

            </section>
            <br>
            
            <validation-provider name="PHONENUMBER" rules="digits:11|required" v-slot="{ errors }">
              <!-- 숫자로만 11자리 입력 필수 -->
              <v-text-field
                v-model="phonenumber"
                label="Phone number"
                hint="휴대전화 11자리"
                :outlined=true
                :persistent-hint=true
                :error-messages="errors[0]"
                required
                :class="$style.id"
              ></v-text-field>
            </validation-provider>
            <v-btn color="primary" @click="submit" style="margin: 4px;">가 입</v-btn>
            <v-btn color="secondary" @click="clear" style="margin-left: 10px;">초기화</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar">
      {{ sbMsg }}
      <v-btn color="pink" text @click="snackbar = false">
        닫기
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'
import { ValidationProvider } from 'vee-validate'
import { extend } from 'vee-validate'
import { required, alpha_num, between, digits, length } from 'vee-validate/dist/rules'

extend('alpha_num', alpha_num);
extend('between',between);
extend('digits', digits);
extend('length', length);
extend('required', {
  ...required,
  message: 'This field is required'
});
extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max']
});

export default {
  name: 'SignUp',
  
  data: () => ({
    title: '회원가입',

    id: '',
    pw: '',
    name: '',
    year: '',
    month: '',
    day: '',
    phonenumber: '',
    check_flag: false,

    snackbar: false,
    sbMsg: ''
  }),
  
  methods: {
    
    submit () {
      if(this.check_flag){
        let data = {
          id: this.id,
          pw: this.pw,
          name: this.name,
          year: this.year,
          month: this.month,
          day: this.day,
          phonenumber: this.phonenumber
        }
        this.$store.dispatch('signup', data)
          .then(() => {
            this.pop("회원가입 완료")
            this.$router.push('/login')
          })
          .catch(err => console.log(err))
      }else {
        this.pop("id 중복체크을 해주세요")
      }
    },

    id_check () {
      this.$http.get('/users/login/id-check',{
        params: { id: this.id }
      }).then((resp) => {
        if(resp.data.isok) {
          this.check_flagcheck_flag = true
          this.pop("아이디를 사용할 수 있습니다")
        }
        else this.pop("아이디가 중복되었습니다")
      })
    },

    clear () {
      this.id = ''
      this.pw = ''
      this.name = ''
      this.year = ''
      this.month = ''
      this.day = ''
      this.phonenumber = ''
    },

    pop (msg) {
      this.snackbar = true
      this.sbMsg = msg
    }
  },

  components: {
    Bar,
    Nav,
    PageTitle,
    ValidationProvider
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
