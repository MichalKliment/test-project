import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MachinesDiagramModule } from '@buhler/machines/features';
import { ReactiveComponentModule } from '@ngrx/component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DASHBOARD_COMPONENTS } from './components';
import { DashboardRoutingModule } from './dashboard.module.routing';
import { DASHBOARD_GUARDS } from './guards';
import { DASHBOARD_PAGES } from './pages';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveComponentModule,
    ButtonModule,
    CardModule,
    DashboardRoutingModule,
    MachinesDiagramModule
  ],
  exports: [],
  declarations: [...DASHBOARD_PAGES, ...DASHBOARD_COMPONENTS],
  providers: [...DASHBOARD_GUARDS],
})
export class DashboardModule {}
