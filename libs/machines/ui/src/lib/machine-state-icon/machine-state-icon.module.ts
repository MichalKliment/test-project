import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MachineStateColorModule } from '../machine-state-color';

import { MachineStateIconComponent } from './machine-state-icon.component';

@NgModule({
  imports: [CommonModule, MachineStateColorModule],
  exports: [MachineStateIconComponent],
  declarations: [MachineStateIconComponent],
  providers: [],
})
export class MachineStateIconModule {}
