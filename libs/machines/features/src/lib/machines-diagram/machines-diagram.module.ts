import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { RouterModule } from '@angular/router';
import { MachineCardModule } from '@buhler/machines/ui';
import { MachinesDiagramComponent } from './machines-diagram.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    MachineCardModule,
    RouterModule,
  ],
  exports: [MachinesDiagramComponent],
  declarations: [MachinesDiagramComponent],
  providers: [],
})
export class MachinesDiagramModule {}
