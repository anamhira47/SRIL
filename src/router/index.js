import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "../views/Homepage.vue"
import Team from "../views/Team.vue"
import Projects from "../views/Projects.vue"
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"
import Recruiting from "../views/Recruiting.vue"
import Library from "../views/Library.vue"
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    
    {
      path: '/Recruiting',
      name: 'Recruiting',
      component: Recruiting
    },
    {
      path: '/Library',
      name: 'Library',
      component: Library
    },
  ]
})

export default router
