<template>
<v-container>
<h1>Our Sponsors</h1>
 <v-layout row wrap>
  <v-flex md6>
    <v-card
    class="mx-auto"
    max-width="1000"
    >
     <v-img
      src="@/assets/Sponsors/ubcS.png"
      height="200px"
     ></v-img>

    <v-card-title>
      UBC CENTRE FOR COMMUNITY ENGAGED LEARNING
     </v-card-title>



    <v-card-actions>
      <v-btn
        text
        Dark
      >
        <a class="links" href="https://ccel.ubc.ca/"> Visit Website</a>
      </v-btn>

     

      
    </v-card-actions>

    
  </v-card>
  </v-flex>
  <v-spacer></v-spacer>
  <v-flex md6>
    <v-card
    class="mx-auto"
    max-width="1000"
    >
     <v-img
      src="@/assets/Sponsors/Kendor.png"
      height="200px"
      Contain
     ></v-img>

    <v-card-title>
      KENDOR TEXTILES LTD.
     </v-card-title>

  

    <v-card-actions>
      <v-btn
        text
        Dark
      >
        <a class="links" href="https://kendortextiles.com/"> Visit Website</a>
      </v-btn>

     

      
    </v-card-actions>

    
  </v-card>
  </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
     name: "Sponsors",
}
</script>
<style scoped>
    .links {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
    }


</style>