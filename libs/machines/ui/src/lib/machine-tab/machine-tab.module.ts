import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MachineStateColorModule } from '../machine-state-color/machine-state-color.module';
import { MachineStateIconModule } from '../machine-state-icon';

import { MachineTabComponent } from './machine-tab.component';

@NgModule({
  imports: [CommonModule, MachineStateColorModule, MachineStateIconModule],
  exports: [MachineTabComponent],
  declarations: [MachineTabComponent],
  providers: [],
})
export class MachineTabModule {}
