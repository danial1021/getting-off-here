<template>
    <div>
        <v-layout>
            <v-flex sm4>
               <v-btn 
                icon
                @click="$router.go('-1')"
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
                 @click="$router.go('1')"
                >
                    <v-icon>arrow_forward</v-icon>
                </v-btn> 
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    Name: 'PageTitle',
    props: ["title"]
}
</script>
