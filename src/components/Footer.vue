<template>
    <v-footer
            color="blue darken-3"
            padless
    >
        <v-row
                justify="center"
                no-gutters
        >
            <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    text
                    rounded
                    class="my-2"

            >
               <a target="_blank" class="links" :href="link.link"  >{{ link.name }}</a>
            </v-btn >
            <v-btn color="white"
                   text
                   rounded
                   class="my-2">

                <router-link class="links" to="/Contact">Contact Us</router-link>
            </v-btn>

            <v-col
                    class="blue darken-4 py-4 text-center white--text"
                    cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>SRIL</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            links: [
                               
                { name:'Instagram',
                    link: "https://www.instagram.com/surreyroboticsinnovationlab/" },
                { name:'Facebook',
                    link: "https://www.facebook.com/surreyroboticsinnovationlab" },
                { name:'Linkedin',
                    link: "https://www.linkedin.com/company/surrey-robotics-innovation-lab/" },
                { name:'Youtube',
                    link: "https://www.youtube.com/channel/UCf9C0yh0PsJl3l--oJ0MxeQ" },


            ],
        }),
    }
</script>

<style scoped>
    .links {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
    }
    body {
    padding: 0;
    margin: 0;
}


</style>