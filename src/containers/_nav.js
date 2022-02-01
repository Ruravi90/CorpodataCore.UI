export default [
  {
    _name: 'CSidebarNavItem',
    name: 'Grupo empresarial',
    to: '/CompanyGroup',
    icon: 'cil-home',
    roles: ["client","Any"]
  },
  {
    _name: 'CSidebarNavTitle',
    _children: ['Modulos'],
    roles: ["client","Any"]
  },
  {
    _name: 'CSidebarNavItem',
    name: 'Socios',
    to: '/Partners',
    icon: 'cil-group',
    roles: ["client","Any"]
  },
  {
    _name: 'CSidebarNavItem',
    name: 'Archivos',
    to: '/Files',
    icon: 'cil-file',
    roles: ["client","Any"]
  },
  {
    _name: 'CSidebarNavItem',
    name: 'Obligaciones',
    to: '/Obligations',
    icon: 'cil-briefcase',
    roles: ["client"]
  },
  {
    _name: 'CSidebarNavItem',
    name: 'Auditorias',
    to: '/Audits',
    icon: 'cil-badge',
    roles: ["client"]
  },
  {
    _name: 'CSidebarNavItem',
    name: 'Gravámenes',
    to: '/Encumbrances',
    icon: 'cil-diamond',
    roles: ["client"]
  },
  {
    _name: 'CSidebarNavItem',
    name: 'Vigilancia',
    to: '/Vigilants',
    icon: 'cil-magnifying-glass',
    roles: ["client"]
  },
  {
    _name: 'CSidebarNavItem',
    name: 'Poderes (Escrituras)',
    to: '/CompanyPowers',
    icon: 'cil-folder-open',
    roles: ["client"]
  },
  {
    _name: 'CSidebarNavItem',
    name: 'Enagenaciones',
    to: '/ActionChanges',
    icon: 'cil-dollar',
    roles: ["client"]
  },
  {
    _name: 'CSidebarNavDropdown',
    name: 'Transitorios',
    route: '/Transient',
    icon: 'cil-flag-alt',
    roles: ["client"],
    items: [
      {
        name: 'Clausulas',
        to: '/Transient/Statutes'
      },
      {
        name: 'Vigilancia',
        to: '/Transient/Vigilants'
      },
      {
        name: 'Poderes',
        to: '/Transient/Powers'
      },
      {
        name:'Capital',
        to:'/Transient/Capital'
      }
    ]
  },
  {
    _name: 'CSidebarNavDropdown',
    name: 'Actas',
    route: '/Acts',
    icon: 'cil-description',
    roles: ["client"],
    items: [
      {
        name: 'Asamblea',
        to: '/Acts/Assembly'
      },
      {
        name: 'Consejo',
        to: '/Acts/Council'
      },
    ]
  },
  {
    _name: 'CSidebarNavDropdown',
    name: 'Contratos',
    route: '/Contracts',
    icon: 'cil-folder',
    roles: ["client"],
    items: [
      { 
        name: 'Primarios',
        to: '/Contracts/Primary'
      },
      {
        name: 'Accesorios',
        to: '/Contracts/Accessories'
      },
    ]
  },
  {
    _name: 'CSidebarNavDropdown',
    name: 'Inmuebles',
    route: '/Properties',
    icon: 'cil-industry',
    roles: ["client"],
    items: [
      {
        name: 'Properties',
        to: '/Properties/Properties'
      },
      {
        name: 'Projects',
        to: '/Properties/Projects'
      },
    ]
  },
  {
    _name: 'CSidebarNavDropdown',
    name: 'Juicios',
    route: '/Trials',
    icon: 'cil-institution',
    roles: ["client"],
    items: [
      {
        name: 'Primarios',
        to: '/Trials/Primary'
      },
      {
        name: 'Secundarios',
        to: '/Trials/Secundaries'
      }
    ]
  },
  {
    _name: 'CSidebarNavDropdown',
    name: 'Propiedad Intelectual',
    route: '/IndustrialProperty',
    icon: 'cil-lightbulb',
    roles: ["client"],
    items: [
      {
        name: 'Titulos',
        to: '/IndustrialProperty/Titles'
      },
      {
        name: 'Procesos',
        to: '/IndustrialProperty/Processes'
      }
    ]
  }
]