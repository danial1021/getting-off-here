<template>
    <div>
        <Bar />
        <Nav />
        <PageTitle :title=title />
            <v-row
              align="center"
              justify="center"
              :class="$mq"
            >
                <table border="1" style="border: 1px solid #000000; text-align: center;">
                    <tr>
                        <td>이름</td>
                        <td class="tdright" :class="$mq">
                            <div class="textfield">
                                <v-text-field
                                    :outlined=true
                                    :persistent-hint=true
                                    required>
                                </v-text-field>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>비밀번호</td>
                        <td class="tdright" :class="$mq">
                            <div class="textfield">
                                <v-text-field
                                    :outlined=true
                                    :persistent-hint=true
                                    required>
                                </v-text-field>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호 질문</td>
                        <td class="tdright" :class="$mq">
                            <div class="textfield">
                                <v-select
                                    :items="pword_data"
                                    :outlined=true
                                    :placeholder="pword_data[0]"
                                    class="textfield"
                                    label="비밀번호 찾기 질문"
                                    :class="$mq"
                                ></v-select>
                            </div>
                            <div class="textfield">
                                <v-text-field
                                    :outlined=true
                                    :persistent-hint=true
                                    required>
                                </v-text-field>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>핸드폰 번호</td>
                        <td class="tdright" :class="$mq">
                            <div class="textfield">
                                <v-text-field
                                    :outlined=true
                                    :persistent-hint=true
                                    required>
                                </v-text-field>
                            </div>
                        </td>
                    </tr>
                </table>
            </v-row>
            <br>
            <div class="button" :class="$mq">
                <v-btn color="blue">확인</v-btn>
            </div>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
    name: 'Meminfo',
    components: {
        Bar,
        Nav,
        PageTitle,
    },

    data: () => ({
        title: '회원정보수정',
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
        pword: ''
    }),

}
    
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

allbox{
    width: 450px
}

td.desktop{
    width: 200px;
    height: 100px;
}
td.mobile{
    width: 150px;
    height: 80px;
}

.textfield.mobile{
    width: 200px;
    height: 100px;
}
.tdright.desktop{
    width: 400px;
}
.tdright.mobile{
    width: 190px;
}
.textfield{
    margin: 3%;
}
table{
    font-family: nanumgothic;
    font-size: 18px;
}
.button.desktop{
    padding-right: 33%;
    float: right;
    margin-top: -18px;
}
.button.mobile{
    padding-right: 10%;
    float: right;
    margin-top: -18px;
}
table {

    border-collapse: collapse;

}

</style>
