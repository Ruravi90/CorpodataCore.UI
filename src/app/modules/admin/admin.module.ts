//import { DatepickerModule } from 'ng2-datepicker';

// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Tabs Component
import { NgSelectModule } from '@ng-select/ng-select';

import { AdminRoutingModule } from './admin-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    NgSelectModule,
  ],
  declarations: [
  ],
})
export class AdminModule { }
