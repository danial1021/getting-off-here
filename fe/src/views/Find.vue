<template>
    <div>
        <Bar />
        <Nav />
        <PageTitle :title=title />

        <v-container>
                <v-row
                align="center"
                justify="center"
                >
                    <div class="box" :class="$mq">
                        <v-container class="SelectBox" :class="$mq" @click="$router.push('/idsearch')">
                            <br><h3>아이디<br><br>찾기</h3>
                        </v-container>
                        <v-container class="SelectBox" :class="$mq" @click="$router.push('/pwsearch')" style="margin-left: 40px;">
                            <br><h3>비밀번호<br><br>찾기</h3>
                        </v-container>
                    </div>
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
    })
}
    
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

a {font-family: nanumgothic;}
a:link {text-decoration: none; color: #333333;}
a:visited {text-decoration: none; color: #333333;}

.SelectBox{
    
    border: 1.5px solid black;
    text-align: center;
}

.box.desktop{
    width: 400px;
    height: 360px;
    margin-top: 20px;
}

.SelectBox.desktop{
    width: 180px;
    height: 180px;
    float:left;
}

.SelectBox.mobile{
    width: 90px;
    height: 90px;
    font-size: 60%;
    float:left;
}
</style>