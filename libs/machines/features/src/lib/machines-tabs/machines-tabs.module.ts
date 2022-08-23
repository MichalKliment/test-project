import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { MachineCardModule } from '@buhler/machines/ui';
import { MachinesTabsComponent } from './machines-tabs.component';

@NgModule({
  imports: [CommonModule, ReactiveComponentModule, MachineCardModule],
  exports: [MachinesTabsComponent],
  declarations: [MachinesTabsComponent],
  providers: [],
})
export class MachinesTabsModule {}
