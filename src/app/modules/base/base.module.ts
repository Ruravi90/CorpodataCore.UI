// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Tabs Component

import {
  UtilitiesModule,
  FormModule,
  GridModule,
  AccordionModule
} from '@coreui/angular';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { InputTextareaModule} from 'primeng/inputtextarea';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {CheckboxModule} from 'primeng/checkbox';

import { NgSelectModule } from '@ng-select/ng-select';
import { BaseRoutingModule } from './base-route.module';

import { BusinessGroupComponent } from '../../views/business-group/business-group.component';
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
    DialogModule,
    TabViewModule,
    FileUploadModule,
    InputTextModule,
    CalendarModule,
    TriStateCheckboxModule,
    InputTextareaModule,
    CheckboxModule,
    PanelModule
  ],
  declarations: [
    BusinessGroupComponent,
    AssemblyComponent,
    CouncilComponent,
    TransientPowersComponent,
    VigilantsComponent,
    TransientVigilantsComponent,
    TransientCapitalComponent,
    TransientStatutesComponent,
    PartnersComponent,
    FilesComponent,
    ObligationsComponent,
    AuditComponent,
    EncumbrancesComponent,
    CompanyPowersComponent,
    ActionChangesComponent,
    ContractComponent,
    AccessoriesComponent,
    ProjectsComponent,
    SecundaryComponent,
    PrimaryComponent,
    TitlesComponent,

    ProcessComponent
  ],
  providers: [
  ],
})
export class BaseModule { }
