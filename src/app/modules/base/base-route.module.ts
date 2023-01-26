import { state } from '@angular/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessGroupComponent } from '../../views/business-group/business-group.component';
import { PropertiesComponent } from '../../views/properties/properties.component';
import { AssemblyComponent } from '../../views/acts/assembly/assembly.component';
import { CouncilComponent } from '../../views/acts/council/council.component';
import { TransientPowersComponent } from '../../views/transients/powers/powers.component';
import { TransientVigilantsComponent } from '../../views/transients/vigilants/vigilants.component';
import { TransientCapitalComponent } from '../../views/transients/capital/capital.component';
import { TransientStatutesComponent } from '../../views/transients/statutes/statutes.component';
import { PartnersComponent } from '../../views/partners/partners.component';
import { FilesComponent } from '../../views/files/files.component';
import { ObligationsComponent } from '../../views/obligations/obligations.component';
import { AuditComponent } from '../../views/audit/audit.component';
import { EncumbrancesComponent } from '../../views/encumbrances/encumbrances.component';
import { CompanyPowersComponent } from '../../views/company-powers/company-powers.component';
import { ActionChangesComponent } from '../../views/action-changes/action-changes.component';
import { ContractComponent } from '../../views/contract/contract/contract.component';
import { AccessoriesComponent } from '../../views/contract/accessories/accessories.component';
import { ProjectsComponent } from '../../views/property/projects/projects.component';
import { SecundaryComponent } from '../../views/trial/secundary/secundary.component';
import { PrimaryComponent } from '../../views/trial/primary/primary.component';
import { TitlesComponent } from '../../views/industrial-property/titles/titles.component';
import { ProcessComponent } from '../../views/industrial-property/process/process.component';
import { VigilantsComponent } from '../../views/vigilants/vigilants.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'business-group',
    pathMatch: 'full',
  },
  {
    path: 'business-group',
    component: BusinessGroupComponent,
    data: {
      title: 'Grupos empresariales'
    }
  },
  {
    path: 'parnets',
    component: PartnersComponent,
    data: {
      title: 'Socios'
    }
  },
  {
    path: 'files',
    component: FilesComponent,
    data: {
      title: 'Archivos'
    }
  },
  {
    path: 'obligations',
    component: ObligationsComponent,
    data: {
      title: 'Obligaciones Periodicas'
    }
  },
  {
    path: 'audit',
    component: AuditComponent,
    data: {
      title: 'Auditoria'
    }
  },
  {
    path: 'encumbrances',
    component: EncumbrancesComponent,
    data: {
      title: 'Gravamenes'
    }
  },
  {
    path: 'vigilant',
    component: VigilantsComponent,
    data: {
      title: 'Vigilancia'
    }
  },
  {
    path: 'company-power',
    component: CompanyPowersComponent,
    data: {
      title: 'Poderes (Escritura)'
    }
  },
  {
    path: 'action-changes',
    component: ActionChangesComponent,
    data: {
      title: 'Enagenaciones'
    }
  },
  {
    path: 'transients',
    data: {
      title: 'Transitorios'
    },
    children: [
      {
        path: 'power',
        component: TransientPowersComponent,
        data: {
          title: 'Poderes'
        }
      },
      {
        path: 'vigilant',
        component: TransientVigilantsComponent,
        data: {
          title: 'Vigilancia'
        }
      },
      {
        path: 'capital',
        component: TransientCapitalComponent,
        data: {
          title: 'Capital'
        }
      },
      {
        path: 'statutes',
        component: TransientStatutesComponent,
        data: {
          title: 'Clausulas'
        }
      },
    ]
  },
  {
    path: 'acts',
    data: {
      title: 'Actas'
    },
    children: [
      {
        path: 'assambly',
        component: AssemblyComponent,
        data: {
          title: 'Asambleas'
        }
      },
      {
        path: 'council',
        component: CouncilComponent,
        data: {
          title: 'Consejo'
        }
      },
    ]
  },
  {
    path: 'contract',
    data: {
      title: 'Contratos'
    },
    children: [
      {
        path: 'primary',
        component: ContractComponent,
        data: {
          title: 'Contratos'
        }
      },
      {
        path: 'secundary',
        component: AccessoriesComponent,
        data: {
          title: 'Accesorios'
        }
      },
    ]
  },
  {
    path: 'property',
    data: {
      title: 'Inmuebles'
    },
    children: [
      {
        path: 'property',
        component: PropertiesComponent,
        data: {
          title: 'Propiedades'
        }
      },
      {
        path: 'project',
        component: ProjectsComponent,
        data: {
          title: 'Proyectos'
        }
      },
    ]
  },
  {
    path: 'trial',
    data: {
      title: 'Juicios'
    },
    children: [
      {
        path: 'primary',
        component: PrimaryComponent,
        data: {
          title: 'Primarios'
        }
      },
      {
        path: 'secundary',
        component: SecundaryComponent,
        data: {
          title: 'Secundarios'
        }
      },
    ]
  },
  {
    path: 'industrial-property',
    data: {
      title: 'Propiedad Intelectual'
    },
    children: [
      {
        path: 'title',
        component: TitlesComponent,
        data: {
          title: 'Titulos'
        }
      },
      {
        path: 'process',
        component: ProcessComponent,
        data: {
          title: 'Procesos'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
