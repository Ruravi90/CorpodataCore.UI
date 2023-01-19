// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Tabs Component


import { NgSelectModule } from '@ng-select/ng-select';
import { BaseRoutingModule } from './base-route.module';
import { DashboardComponent } from '../../views/dashboard/dashboard.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    NgSelectModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
  ],
})
export class BaseModule { }
