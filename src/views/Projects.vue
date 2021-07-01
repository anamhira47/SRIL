<template>
<div>
  <h1>Projects</h1>
  <h2>
    🏎️ SRIL is proud to present the Gravity Car Challenge! 🏎️
  </h2>
  
  <p>Learn how to design and build a gravity car through our three workshops led by university STEM students, and put your newly learned skills to the test in our Final Gravity Car Race, where 20 team submissions will be 3D printed and competed on a racetrack. 

Register by yourself or with a team of friends to win $30 in gift cards for attending the workshops, with additional cash prizes available for the Final Challenge! We are also excited to host a workshop in August featuring a Co-op student working at Tesla, so be sure to attend and learn all about their experience.

Please note, to confirm attendance for the Gravity Car Challenge, competitors must register and attend the first workshop on Saturday, July 17, where the registration instructions for the Gravity Car Challenge will be released.

All workshops and the Gravity Car Challenge are FREE to attend, so don’t miss out! The link for registration can be found below:

</p>
<v-container>
<v-btn  depressed href="https://docs.google.com/forms/d/14r7NgEOFrCvccBUxhdXLtY-NQyzbtOPJ-iuuftaBpPA/edit" target="_blank" color="primary">
  register
</v-btn>
</v-container>
     <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col :key=1>

          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-img  src="@/assets/Workshops/new2.png"></v-img>
          </v-card>
        </v-col>
          <v-col :key=2>

          <v-card
            class="pa-2"
            outlined
            tile
          >
            <h3>𝗪𝗼𝗿𝗸𝘀𝗵𝗼𝗽 𝟭: 𝗘𝘃𝗲𝗻𝘁 𝗞𝗶𝗰𝗸𝗼𝗳𝗳</h3>
            
            <p>Date: Saturday, July 17
Time: 2:00 PM PST
*𝙈𝙪𝙨𝙩 𝙖𝙩𝙩𝙚𝙣𝙙 𝙒𝙤𝙧𝙠𝙨𝙝𝙤𝙥 1 𝙩𝙤 𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧 𝙛𝙤𝙧 𝙁𝙞𝙣𝙖𝙡 𝙂𝙧𝙖𝙫𝙞𝙩𝙮 𝘾𝙖𝙧 𝙍𝙖𝙘𝙚
</p>
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
             <h3>𝗪𝗼𝗿𝗸𝘀𝗵𝗼𝗽 𝟮: 𝗜𝗻𝘁𝗲𝗿𝗺𝗲𝗱𝗶𝗮𝘁𝗲/𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗖𝗔𝗗 𝗮𝗻𝗱 𝟯𝗗 𝗣𝗿𝗶𝗻𝘁𝗶𝗻𝗴</h3>
            <p>
              
Date: Saturday, July 24
Time: 2:00 PM PST

            </p>
          </v-card>
        </v-col>
          <v-col :key=2>

          <v-card
            class="pa-2"
            outlined
            tile
          >
          <v-img  src="@/assets/Workshops/new.png"></v-img>
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
           <v-img  src="@/assets/Workshops/pic3.png" ></v-img>
          </v-card>
        </v-col>
          <v-col :key=2>

          <v-card
            class="pa-2"
            outlined
            tile
          >
            <h3>𝐖𝐨𝐫𝐤𝐬𝐡𝐨𝐩 𝟑: 𝐓𝐡𝐞 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 𝐨𝐟 𝐆𝐫𝐚𝐯𝐢𝐭𝐲 𝐂𝐚𝐫𝐬 </h3>
            <P>
Date: Saturday, July 31
Time: 2:00 PM PST

            </p>
          </v-card>
        </v-col> 
        <v-responsive
          v-if="n === 2"
          :key="`width-${2}`"
          width="100%"
        ></v-responsive>
      
    </v-row>
  </v-container>
  <v-container>
     <v-btn  depressed href="https://docs.google.com/forms/d/14r7NgEOFrCvccBUxhdXLtY-NQyzbtOPJ-iuuftaBpPA/edit" target="_blank" color="primary">
  register
</v-btn>
</v-container>
  
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>