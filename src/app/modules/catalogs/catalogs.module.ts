// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Tabs Component

import { NgSelectModule } from '@ng-select/ng-select';

// Components
import { CatalogsRoutingModule } from './catalogs-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CatalogsRoutingModule,
    NgSelectModule,
  ],
  declarations: [
  ]
})
export class CatalogsModule { }
