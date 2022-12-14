import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleModule } from '@buhler/core/ui';
import {
  ListOfLogsModule,
  MachinesDiagramModule
} from '@buhler/machines/features';
import { ReactiveComponentModule } from '@ngrx/component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MACHINES_COMPONENTS } from './components';
import { MACHINES_GUARDS } from './guards';
import { MachinesRoutingModule } from './machines.module.routing';
import { MACHINES_PAGES } from './pages';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveComponentModule,
    ButtonModule,
    CardModule,
    MachinesRoutingModule,
    MachinesDiagramModule,
    ListOfLogsModule,
    TitleModule,
  ],
  exports: [],
  declarations: [...MACHINES_PAGES, ...MACHINES_COMPONENTS],
  providers: [...MACHINES_GUARDS],
})
export class MachinesModule {}
