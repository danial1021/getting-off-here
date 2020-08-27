<template>
    <div>
        <Bar />
        <Nav />
        <PageTitle :title=title />
        <v-card
        class="mx-auto"
        max-width="344">
            <div class="allbox">
                <v-text-field
                v-model="name"
                label="이름"
                hint="ex) 홍길동"
                :outlined=true
                :persistent-hint=true
                :counter="10"
                required>
                </v-text-field>
                <div style="margin-bottom: -20px;">
                    <v-select
                      :items="PwWord"
                      :outlined=true
                      label="비밀번호 찾기 질문"
                    ></v-select>
                    <v-text-field
                      v-model="name"
                      label="답변"
                      :outlined=true
                      :persistent-hint=true
                      required
                    ></v-text-field>
                </div>
                <v-btn color="blue">확인</v-btn>
            </div>
        </v-card>
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
        PwWord:[
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
        ]
    })
}
    
</script>

<style>
.allbox{
    padding: 10px;

}
</style>
