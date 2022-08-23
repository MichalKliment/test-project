import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MachineCardComponent } from './machine-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [MachineCardComponent],
  declarations: [MachineCardComponent],
  providers: [],
})
export class MachineCardModule {}
