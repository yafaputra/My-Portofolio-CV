<template>
  <Navbar />
  <MyHero id="myhero" />
  <MyEducation id="myeducation" />
  <MySkills id="myskills" />
  <MyProjects id="myprojects" />
  <MyCertificat id="certificates" />
  <mycontact />
</template>

<script>
import Navbar from './components/NavBar.vue'
import mycontact from './components/MyContact.vue'
import MyHero from './components/MyHero.vue'
import MyEducation from './components/MyEducation.vue'
import MySkills from './components/MySkills.vue'
import MyProjects from './components/MyProjects.vue'

export default {
  components: {
    Navbar,
    MyHero,
    MyEducation,
    MySkills,
    MyProjects,
    mycontact
  }
}
</script>
