// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Tabs Component

import {
  UtilitiesModule,
  CardModule,
  FormModule,
  GridModule,
  DropdownModule,
  ButtonModule,
  TableModule,
  AccordionModule
} from '@coreui/angular';

import { ModalModule } from 'ngx-bootstrap/modal';

import { NgSelectModule } from '@ng-select/ng-select';
import { BaseRoutingModule } from './base-route.module';
import { BusinessGroupComponent } from '../../views/business-group/business-group.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    NgSelectModule,
    UtilitiesModule,
    CardModule,
    FormModule,
    GridModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    AccordionModule,
    ModalModule
  ],
  declarations: [
    BusinessGroupComponent,
  ],
  providers: [
  ],
})
export class BaseModule { }
