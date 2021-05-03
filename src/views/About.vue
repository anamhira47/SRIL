<template>
  <div>
    
    
   <section class="about">
        <h1> About </h1>
        <div id="about-top">
            <div>
                <h2>Who we are</h2>
                <p>An non-profit organization dedicated to 
                    mentoring and educating youth in robotics 
                    to discover their STEM potential.</p>
            </div>
            <div>
                <h2>Our team</h2>
                <p>VEX Robotics alumni and university students 
                    with a passion for helping the community.</p>
            </div>
            <div>
                <h2>Our vision</h2>
                <p>To deliver province, nation, and worldwide 
                    impact through our programs for youth.</p>
            </div>
            <div>
                <h2>Our partners</h2>
                <p>City of Surrey, SFU, Surrey Schools District, 
                    UBC, and more.</p>
            </div>
        </div>
    </section>
   
  <v-spacer></v-spacer>
  <h2>What we want to accomplish
  </h2>
  <p>
  -Currently, there is tremendous growth in the Science, Technology, Engineering, and Math (STEM) sector. Surrey is transforming with BC’s first quantum computing institute, healthcare startups at Innovation Boulevard, and research facilities at SFU Surrey.
  </p>
  <p>-But are the youth who want to pursue STEM careers prepared?
  </p>
  <p>-With less than half of high achieving BC grade 12 graduates enrolling at a BC research university, the local talent pool is shrinking — more and more students with an aptitude for STEM are choosing to leave BC to pursue opportunities elsewhere.
  </p>
  <p>-But are the youth who want to pursue STEM careers prepared?
  </p>
  <ol type="1">
  
   <h1>Our Goals</h1>
 <div class = "center">
  <li>-Enhancing STEM education beyond what is offered by the typical high school.</li>
  <li>-Giving current youth an edge in their STEM education and career with real STEM exposure through VEX Robotics, internship opportunities at local high technology companies.</li>
  <li>-Setting youth on track to become the STEM leaders and innovators of tomorrow.</li>
</div>

</ol>
<v-image/>
<br>
<h2>SRIL SERVICES </h2>
<br/>

<p>With the COVID-19 pandemic, SRIL is working hard to adapt our services to the situation. Keep an eye out for updates on the development of future services! </p>

<h3> </h3>
  </div>

  


</template>
<style>
h1 {text-align: center;}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

 .center {
  margin: auto;
  width: 95%;
  padding: 10px;
  }


.nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  background: #103099;
  height: 4rem;
}

.nav a {
  text-decoration: none;
  color: white;
}

.nav .cta {
  padding: 1rem;
  border-radius: 10px;
  border-width: 2px;
  border-color: white;
}

.about {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-top: 1rem;
}

.about h1 {
  font-size: 4rem;
}

.about #about-top {
  width: 70%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr)[2];
      grid-template-columns: repeat(2, 1fr);
}

.about #about-top div {
  padding: 1rem;
}


</style>