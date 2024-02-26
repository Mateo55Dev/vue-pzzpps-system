import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/menu-items/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../layouts/LoginLayout.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    /////////////////////////////////////// INSTITUTIONS ///////////////////////////////////////
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   //component: () => import('../views/AboutView.vue')
    //   component: HomeView
    // }
    {
      path: '/displayInstitutions',
      name: 'displayInstitutions',
      component: () => import('../components/menu-items/DisplayInstitutions.vue')
    },
    {
      path: '/addInstitution',
      name: 'addInstitution',
      component: () => import('../components/menu-items/AddInstitution.vue')
    },
    {
      path: '/editInstitution',
      name: 'editInstitution',
      component: () => import('../components/menu-items/EditInstitution.vue')
    },
    {
      path: '/deleteInstitution',
      name: 'deleteInstitution',
      component: () => import('../components/menu-items/DeleteInstitution.vue')
    },

    /////////////////////////////////////// MEMBERS ///////////////////////////////////////
    {
      path: '/displayMembers',
      name: 'displayMembers',
      component: () => import('../components/menu-items/DisplayMembers.vue')
    },
    {
      path: '/addMember',
      name: 'addMember',
      component: () => import('../components/menu-items/AddMember.vue')
    },
    {
      path: '/editMember',
      name: 'editMember',
      component: () => import('../components/menu-items/EditMember.vue')
    },
    {
      path: '/deleteMember',
      name: 'deleteMember',
      component: () => import('../components/menu-items/DeleteMember.vue')
    },
    /////////////////////////////////////// PAYMENTS ///////////////////////////////////////
    {
      path: '/displayPayments',
      name: 'displayPayments',
      component: () => import('../components/menu-items/DisplayPayments.vue')
    },
    {
      path: '/addPayment',
      name: 'addPayment',
      component: () => import('../components/menu-items/AddPayment.vue')
    },
    {
      path: '/editPayment',
      name: 'editPayment',
      component: () => import('../components/menu-items/EditPayment.vue')
    },

    /////////////////////////////////////// EVENTS ///////////////////////////////////////
    {
      path: '/displayEvents',
      name: 'displayEvents',
      component: () => import('../components/menu-items/DisplayEvents.vue')
    },
    {
      path: '/addEvent',
      name: 'addEvent',
      component: () => import('../components/menu-items/AddEvent.vue')
    },
    {
      path: '/editEvent',
      name: 'editEventt',
      component: () => import('../components/menu-items/EditEvent.vue')
    },
    /////////////////////////////////////// DATABASE ///////////////////////////////////////
    
    
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../components/misc/Docs.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../components/misc/DisplayInfo.vue')
    }

  ]
})

export default router
