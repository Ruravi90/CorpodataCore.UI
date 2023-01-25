import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessGroupComponent } from '../../views/business-group/business-group.component';

const routes: Routes = [
  {
    path: '',
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
