<template>
    <v-app-bar
      app
      color="primary"
      padless
      dark
     
    >
      <div class="d-flex align-center">
        <v-img
          alt="SRIL Logo"
          class="shrink mr-2"
          contain
          src="@/assets/Logo.png"
          transition="scale-transition"
          width="70"
        />
                     
      </div>
       
            <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    text
                    rounded
                    class="my-2"

            >
               <a class="links" :href="link.link"  >{{ link.name }}</a>
            </v-btn >
          <v-col class="text-right">  
          <v-btn color="white" elevation="2"
  
  plain
  raised
  rounded>
          <a target="_blank" href="https://surreyroboticsinnovationlab.us10.list-manage.com/subscribe?u=7716b3933be7dcb07a623ec5f&id=51b2db3cfb" class="button"><h5 color="blue">Newsletter</h5></a>
          </v-btn>
</v-col>


    </v-app-bar>
</template>
<script>
export default {
    name: "ToolBar",
 data: () => ({
            links: [
                { name:'Home',
                  link: "#/"}  ,
                { name:'About US',
                    link: "/#/About" },
                { name:'Our Team',
                    link: "/#/Team" },
                { name:'Projects',
                    link: "/#/Projects" },
                { name:'Our Library',
                    link: "/#/Library" },    
                { name:'Recruiting',
                    link: "/#/Recruiting" },
               
            ],
        }),
    }
</script>

<style scoped>
    .links {
        color: #ffffff; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
    }
    .button{
        color: #ffffff; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
    }
   body, h1, h2, h3, h4, h5, h6 {
  font-family: Arial, Helvetica, Arial, sans-serif;
   color: #4482ac;
}

</style>