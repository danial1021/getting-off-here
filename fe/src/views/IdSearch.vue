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
                <section class="birth">
                    <table>
                        <td class="year">
                            <v-container style="padding: 0; width: 115px">
                                <!-- 1900부터 2010까지 사이로 입력 필수, 숫자만으로 4자리 입력 필수 -->
                                <v-text-field
                                v-model="year"
                                :outlined=true
                                hint="1900~2010년생"
                                label="출생년도"
                                :persistent-hint=true
                                required>
                                </v-text-field>
                            </v-container>
                        </td>
                        <td class="tables">
                            <v-container style="width: 115px; margin: 0 0 0 0;">
                                <!-- 1부터 12까지 사이로 입력 필수 -->
                                <v-text-field
                                v-model="month"
                                :outlined=true
                                hint="1~12월"
                                label="월"
                                :persistent-hint=true
                                required>
                                </v-text-field>
                            </v-container>
                        </td>
                        <td class="tables">
                            <!-- 1부터 31까지 사이로 입력 필수 -->
                            <v-text-field
                            v-model="day"
                            :outlined=true
                            hint="1일~31일"
                            label="일"
                            :persistent-hint=true
                            required
                            ></v-text-field>
                        </td>
                    </table>
                </section>
                <div style="margin-bottom: -20px;">
                    <v-text-field
                        v-model="name"
                        label="전화번호"
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
        title: '아이디 찾기'
    })
}
    
</script>

<style>
.allbox{
    padding: 10px;

}


</style>