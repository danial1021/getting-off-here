<template>
    <div>
        <Bar />
        <Nav />
        <PageTitle :title=title />

        <v-container>
            <v-row>
                <v-col>
                    <v-row
                      :align='center'
                      :justify='center'
                    >
                        <div class="box1" style="width: 400px; height: 360px; text-align: center; mamrgin-top: 20px;">
                            <a href="/idsearch">
                                <v-container style="width: 180px; height: 180px; border: 1.5px solid black; float:left; ">
                                    <br><h3>아이디<br><br>찾기</h3>
                                </v-container>
                            </a>
                            <a href="/pwsearch">
                                <v-container style="width: 180px; height: 180px; border: 1.5px solid black; margin-left: 40px; float:left;">
                                    <br><h3>비밀번호<br><br>찾기</h3>
                                </v-container>
                            </a>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import Bar from '@/components/Bar.vue'
import Nav from '@/components/Nav.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
    name: 'Find',
    components: {
        Bar,
        Nav,
        PageTitle,
    },

    data: () => ({
        title: '아이디/비번 찾기',
        center: 'center'
    })
}
    
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

a {font-family: nanumgothic;}
a:link {text-decoration: none; color: #333333;}
a:visited {text-decoration: none; color: #333333;}

</style>