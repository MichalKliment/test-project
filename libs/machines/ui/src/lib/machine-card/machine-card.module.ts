import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MachineIconModule } from '../machine-icon';
import { MachineStateColorModule } from '../machine-state-color/machine-state-color.module';
import { MachineStateIconModule } from '../machine-state-icon';

import { MachineCardComponent } from './machine-card.component';

@NgModule({
  imports: [
    CommonModule,
    MachineStateColorModule,
    MachineStateIconModule,
    MachineIconModule,
  ],
  exports: [MachineCardComponent],
  declarations: [MachineCardComponent],
  providers: [],
})
export class MachineCardModule {}
