<template>
    <div>
        <Bar />
        <Nav />
        <PageTitle :title=title />
        
        <div v-if="password == ''">
            <v-card
            class="mx-auto"
            max-width="344">
                <div class="allbox">
                    <v-text-field
                    v-model="id"
                    :outlined=true
                    label="ID"
                    hint="4자리 이상 && 영문 숫자 혼용"  
                    :counter="20"
                    required
                    ></v-text-field>
                    <div style="margin-bottom: -20px;">
                        <v-select
                        :items="pword_data"
                        v-model="pword"
                        :outlined=true
                        :placeholder="pword_data[0]"
                        label="비밀번호 찾기 질문"
                        ></v-select>
                        <v-text-field
                        v-model="answer"
                        label="답변"
                        :outlined=true
                        :persistent-hint=true
                        required
                        ></v-text-field>
                    </div>
                    <v-btn color="blue" @click="inquire_pw">확인</v-btn>
                </div>
            </v-card>
        </div>

        <div v-else>
            <v-card
            class="mx-auto"
            max-width="344">
                <div class="allbox">
                    <v-text-field
                    v-model="id"
                    :outlined=true
                    label="ID"
                    hint="4자리 이상 && 영문 숫자 혼용"  
                    :counter="20"
                    required
                    ></v-text-field>
                    <div style="margin-bottom: -20px;">
                        <v-select
                        :items="pword_data"
                        v-model="pword"
                        :outlined=true
                        :placeholder="pword_data[0]"
                        label="비밀번호 찾기 질문"
                        ></v-select>
                        <v-text-field
                        v-model="answer"
                        label="답변"
                        :outlined=true
                        :persistent-hint=true
                        required
                        ></v-text-field>
                    </div>
                    <v-btn color="blue" @click="inquire_pw">확인</v-btn>
                </div>
            </v-card>

            <br><br><br>
            <v-alert type="success">
                비밀번호 조회 결과: {{ this.password }}
            </v-alert>
        </div>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
    name: 'IdSearch',
    components: {
        Bar,
        Nav,
        PageTitle,
    },

    data: () => ({
        title: '비밀번호 찾기',

        id: '',
        pword_data:[
            '기억에 남는 추억의 장소는?',
            '자신의 인생 좌우명은?',
            '가장 기억에 남는 선생님 성함은?',
            '타인이 모르는 신체 비밀이 있다면?',
            '유년시절 가장 생각나는 친구 이름은?',
            '인상 깊게 읽은 책 이름은?',
            '읽은 책 중에서 좋아하는 구절이 있다면?',
            '자신이 두 번째로 존경하는 인물은?',
            '초등학교 때 기억에 남는 짝꿍 이름은?',
            '다시 태어나면 되고 싶은 것은?',
            '내가 좋아하는 캐릭터는?'
        ],
        pword: '',
        answer: '',

        password: ''
    }),

    methods: {
        inquire_pw () {
            let data = {
                id: this.id,
                pword: this.pword,
                answer: this.answer
            }
            this.$http.post('/users/pwSearch', data)
                .then((resp) => {
                    // console.log(resp.data.password)
                    this.password = resp.data.password
                })
                .catch(err => console.log(err))
        }
    }
}
    
</script>

<style>
.allbox{
    padding: 10px;

}
</style>
