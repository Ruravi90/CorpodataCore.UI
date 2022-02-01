import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

// Views - Pages
const Assembly = () => import('@/views/acts/Assembly')
const Council = () => import('@/views/acts/Council')
const Partners = () => import('@/views/partners/Partners')
const Files = () => import('@/views/files/Files')
const Obligations = () => import('@/views/obligations/Obligations')
const Encumbrances = () => import('@/views/encumbrances/Encumbrances')
const CompanyPowers = () => import('@/views/company_powers/CompanyPowers')
const ActionChanges = () => import('@/views/actions_changes/ActionsChanges')
const Vigilants = () => import('@/views/vigilants/Vigilants')
const Audits = () => import('@/views/audits/Audits')
const Powers = () => import('@/views/transients/Powers')
const Capital = () => import('@/views/transients/Capital')
const Statutes = () => import('@/views/transients/Statutes')

const Contract = () => import('@/views/contracts/Contract')
const Accessories = () => import('@/views/contracts/Accessories')

const Properties = () => import('@/views/properties/Properties')
const Projects = () => import('@/views/properties/Projects')

const Primary = () => import('@/views/trials/Primary')
const Secundaries = () => import('@/views/trials/Secundaries')

const Titles = () => import('@/views/industrial_property/Titles')
const Processes = () => import('@/views/industrial_property/Processes')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
//const Users = () => import('@/views/users/Users')
//const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/CompanyGroup',
      name: 'CompanyGroup',
      component: TheContainer,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: 'CompanyGroup',
          name: 'CompanyGroup',
          component: Dashboard
        },
        {
          path: 'partners',
          name: 'Partners',
          component: Partners
        },
        {
          path: 'files',
          name: 'Files',
          component: Files
        },
        {
          path: 'obligations',
          name: 'Obligations',
          component: Obligations
        },
        {
          path: 'audits',
          name: 'Audits',
          component: Audits
        },
        {
          path: 'encumbrances',
          name: 'Encumbrances',
          component: Encumbrances
        },
        {
          path: 'vigilants',
          name: 'Vigilants',
          component: Vigilants
        },
        {
          path: 'CompanyPowers',
          name: 'CompanyPowers',
          component: CompanyPowers
        },
        {
          path: 'ActionChanges',
          name: 'ActionChanges',
          component: ActionChanges
        },
        {
          path: '/acts',
          redirect: '/acts/assembly',
          name: 'Acts',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'assembly',
              name: 'Assembly',
              component: Assembly
            },
            {
              path: 'council',
              name: 'Council',
              component: Council
            }
          ]
        },
        {
          path: '/Transient',
          redirect: '/Transient/Capital',
          name: 'Transitorios',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Capital',
              name: 'Capital',
              component: Capital
            },
            {
              path: 'Powers',
              name: 'Powera',
              component: Powers
            },
            {
              path: 'Statutes',
              name: 'Statutes',
              component: Statutes
            },
            {
              path: 'Vigilants',
              name: 'Vigilants',
              component: Vigilants
            }
          ]
        },
        {
          path: '/Contracts',
          redirect: '/Contracts/Primary',
          name: 'Contratos',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Primary',
              name: 'Primary',
              component: Contract
            },
            {
              path: 'Accessories',
              name: 'Accessories',
              component: Accessories
            }
          ]
        },
        {
          path: '/Properties',
          redirect: '/Properties/Properties',
          name: 'Properties',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Properties',
              name: 'Properties',
              component: Properties
            },
            {
              path: 'Projects',
              name: 'Projects',
              component: Projects
            }
          ]
        },
        {
          path: '/Trials',
          redirect: '/Trials/Primary',
          name: 'Trials',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Primary',
              name: 'Primary',
              component: Primary
            },
            {
              path: 'Secundaries',
              name: 'Secundaries',
              component: Secundaries
            }
          ]
        },
        {
          path: '/IndustrialProperty',
          redirect: '/IndustrialProperty/Titles',
          name: 'IndustrialProperty',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Titles',
              name: 'Titles',
              component: Titles
            },
            {
              path: 'Processes',
              name: 'Processes',
              component: Processes
            }
          ]
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register 
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        
      ]
    },
    {
      path: "*",
      redirect: "/pages/404",
    },
  ]
}

