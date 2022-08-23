import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DASHBOARD_GUARDS } from './guards';
import { DashboardRoutingModule } from './dashboard.module.routing';
import { DASHBOARD_PAGES } from './pages';
import { DASHBOARD_COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveComponentModule,
    ButtonModule,
    CardModule,
    DashboardRoutingModule,
  ],
  exports: [],
  declarations: [...DASHBOARD_PAGES, ...DASHBOARD_COMPONENTS],
  providers: [...DASHBOARD_GUARDS],
})
export class DashboardModule {}
