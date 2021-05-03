<template>
<v-container>
<h1>Our Partners</h1>
 <v-layout row wrap>
   <v-spacer></v-spacer>
  <v-flex md3 sm12 xs12>
    <v-card
    class="mx-auto"
    max-width="400"
    >
     <v-img
      src="@/assets/Partners/Sfu.png"
      height="300px"
     ></v-img>

    <v-card-title>
      SIMON FRASER UNIVERSITY 
     </v-card-title>

   

    <v-card-actions>
      <v-btn
        text
        Dark
      >
        <a class="links" href="http://www.sfu.ca/mechatronics.html"> Visit Website</a>
      </v-btn>

     

      
    </v-card-actions>

    
  </v-card>
  </v-flex>
  <v-spacer></v-spacer>
  <v-flex md3 sm12 xs12>
    <v-card
    class="mx-auto"
    max-width="400"
    >
     <v-img
      src="@/assets/Partners/Surrey.jpg"
      height="300px"
      Contain
     ></v-img>

    <v-card-title>
      CITY OF SURREY
     </v-card-title>


    <v-card-actions>
      <v-btn
        text
        Dark
      >
      
        <a class="links" href=" https://www.surrey.ca/"> Visit Website</a>
      </v-btn>

     

      
    </v-card-actions>

    
  </v-card>
  

  </v-flex><v-spacer></v-spacer><v-flex md3 sm12 xs12 >
    <v-card
    class="mx-auto"
    max-width="400"
    >
     <v-img
      src="@/assets/Partners/SurreyS.png"
      height="300px"
     ></v-img>

    <v-card-title>
      SURREY SCHOOLS
     </v-card-title>


    <v-card-actions>
      <v-btn
        text
        Dark
      >
       <a class="links" href="https://www.surreyschools.ca/Pages/default.aspx"> Visit Website</a>
      </v-btn>

     

      
    </v-card-actions>

    
  </v-card>
  </v-flex><v-spacer></v-spacer><v-flex md3 sm12 xs12>
    <v-card
    class="mx-auto"
    max-width="400"
    >
     <v-img
      src="@/assets/Partners/UBC.jpg"
      height="300px"
     ></v-img>

    <v-card-title>
      UBC GEERING UP
     </v-card-title>


    <v-card-actions>
      <v-btn
        text
        Dark
      >
        <a class="links" href="https://geeringup.apsc.ubc.ca/"> Visit Website</a>
      </v-btn>

     

      
    </v-card-actions>

    
  </v-card>
  </v-flex>
  <v-spacer></v-spacer>
  </v-layout>
  </v-container>
</template>

<script>
export default {
     name: "Partners",
}
</script>
<style scoped>
    .links {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
    }


</style>