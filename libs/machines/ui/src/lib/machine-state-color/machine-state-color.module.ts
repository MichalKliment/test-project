import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MachineStateDirective } from './machine-state-color.directive';

@NgModule({
  imports: [CommonModule],
  exports: [MachineStateDirective],
  declarations: [MachineStateDirective],
  providers: [],
})
export class MachineStateColorModule {}
