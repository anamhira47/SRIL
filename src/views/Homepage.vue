<template>
   <v-container fluid class="pa-0">    
    <v-layout class="pa-0">
 
   <opening-image class="pa-0"/>
  
   </v-layout>
   <quote/>
   <partners/>
   <sponsors/>
   </v-container> 
</template>

<script>
import openingImage from "../components/homePage/openingImage";
import quote from "../components/homePage/Quote";
import partners from "../components/homePage/Partners";
import sponsors from "../components/homePage/Sponsors";
  export default {
    name: 'Homepage',
components: {
      
      openingImage,
    quote,
    partners,
    sponsors

  }
    
  }
</script>
<style>

</style>