<template>

  <v-app>
         

    <ToolBar/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import ToolBar from "./components/ToolBar";

export default {
  name: 'App',
components: {
    
    Footer,
    ToolBar,

  },


  data: () => ({
    //
  }),
};
</script>
