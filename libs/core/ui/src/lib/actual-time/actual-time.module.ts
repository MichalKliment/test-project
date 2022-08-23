import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActualTimeComponent } from './actual-time.component';

@NgModule({
  imports: [CommonModule],
  exports: [ActualTimeComponent],
  declarations: [ActualTimeComponent],
  providers: [],
})
export class ActualTimeModule {}
