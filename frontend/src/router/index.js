import { createRouter, createWebHistory } from 'vue-router';
import SectionTitle from '@/components/SectionTitle.vue';
import MyEducation from '@/components/MyEducation.vue';
import MyHero from '@/components/MyHero.vue';
import MySkills from '@/components/MySkills.vue';
import MyProjects from '@/components/MyProjects.vue';
import MyContact from '@/components/MyContact.vue';
const routes = [
  {
    path: '/',
    name: 'myhero',
    component: MyHero
  },
  {
    path: '/pendidikan',
    name: 'MyEducation',
    component: MyEducation
  },
  {path: '/sectiontitle',
    name: 'SectionTitle',
    component: SectionTitle
  },
  { path:'/myhero',name:'MyHero',component:MyHero },
  {path: '/myskills', name:'MySkills',component:MySkills},
  {path: '/myprojects', name: 'MyProjects', component:MyProjects},
  {path: '/mycontact', name: 'MyContact', compoment:MyContact},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
