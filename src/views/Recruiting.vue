<template>
  <div>
      <h1>Our Subteams</h1>


  <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col :key=1>

          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-img  src="@/assets/Recruiting/Curriculum.png"></v-img>
          </v-card>
        </v-col>
          <v-col :key=2>

          <v-card
            class="pa-2"
            outlined
            tile
          >
            <h3>Curriculum Developer</h3>
            
            <ul> 
              <li> Collaborate with the curriculum team to develop learner-friendly, hands-on, and easily teachable curriculum for beginner, intermediate and advanced levels </li>
              <li> Outline and develop resources to inspire fun DIY tinkering </li>
              <li> Provide expertise in STEM subjects and projects</li>
            </ul>
          </v-card>
        </v-col> 
        <v-responsive
          v-if="n === 2"
          :key="`width-${2}`"
          width="100%"
        ></v-responsive>
      
    </v-row>
  </v-container>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col :key=1>

          <v-card
            class="pa-2"
            outlined
            tile
          >
             <h3>Innovation Facilitator</h3>
            <ul> 
              <li> Join the front line of SRIL’s youth outreach team to inspire creativity </li>
              <li>Produce videos and host livestreams about relevant STEM topics for public use </li>
              <li>Teach VEX Robotics concepts or other STEM subjects </li>
              <li>Be familiar with the SRIL curriculum and provide feedback to curriculum developers</li>
            </ul>
          </v-card>
        </v-col>
          <v-col :key=2>

          <v-card
            class="pa-2"
            outlined
            tile
          >
          <v-img  src="@/assets/Recruiting/Innovation.png"></v-img>
          </v-card>
        </v-col> 
        <v-responsive
          v-if="n === 2"
          :key="`width-${2}`"
          width="100%"
        ></v-responsive>
      
    </v-row>
  </v-container>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col :key=1>

          <v-card
            class="pa-2"
            outlined
            tile
          >
           <v-img  src="@/assets/Recruiting/Marketing.png" ></v-img>
          </v-card>
        </v-col>
          <v-col :key=2>

          <v-card
            class="pa-2"
            outlined
            tile
          >
            <h3>Marketing and Outreach officer</h3>
            <ul> 
              <li> Connect with high schools, local organizations, and partners </li>
              <li>Market programs on SRIL website and social media </li>
              <li>Contribute to website additions and manage social media accounts </li>
              <li>Coordinate outreach events</li>
            </ul>
          </v-card>
        </v-col> 
        <v-responsive
          v-if="n === 2"
          :key="`width-${2}`"
          width="100%"
        ></v-responsive>
      
    </v-row>
  </v-container>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col :key=1>

          <v-card
            class="pa-2"
            outlined
            tile
          >
             <h3>Hardware Specialist</h3>
            <ul> 
              <li> Join the front line of SRIL’s youth outreach team to inspire creativity </li>
              <li>Produce videos and host livestreams about relevant STEM topics for public use </li>
              <li>Teach VEX Robotics concepts or other STEM subjects </li>
              <li>Be familiar with the SRIL curriculum and provide feedback to curriculum developers</li>
            </ul>
          </v-card>
        </v-col>
          <v-col :key=2>

          <v-card
            class="pa-2"
            outlined
            tile
          >
           <v-img  src="@/assets/Recruiting/Hardware.png"></v-img>
          </v-card>
        </v-col> 
        <v-responsive
          v-if="n === 2"
          :key="`width-${2}`"
          width="100%"
        ></v-responsive>
      
    </v-row>
  </v-container>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col :key=1>

          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-img  src="@/assets/Recruiting/Software.png"></v-img> 
          </v-card>
        </v-col>
          <v-col :key=2>

          <v-card
            class="pa-2"
            outlined
            tile
          >
           <h3>Software Developer</h3>
            <ul> 
              <li> Design and develop a new website to host SRIL’s online content. This will surpass the usability and appearance of our current website: surreyroboticsinnovationlab.ca</li>
              <li>Write code in HTML, CSS, and JavaScript to support SRIL’s programs such as resource database, efficient CAD file upload, online learning centre</li>
              <li>Support and enhance technical communication of SRIL’s programs, opportunities, and services</li>
              <li>Ideally have experience with making websites on Github Pages or Netlify</li>
            </ul>
          </v-card>
        </v-col> 
        <v-responsive
          v-if="n === 2"
          :key="`width-${2}`"
          width="100%"
        ></v-responsive>
      
    </v-row>
  </v-container>
  </div>
</template>

   

<script>
export default {

}
</script>

<style>

</style>