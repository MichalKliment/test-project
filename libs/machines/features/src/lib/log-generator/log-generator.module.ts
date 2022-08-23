import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogGeneratorComponent } from './log-generator.component';

@NgModule({
  imports: [CommonModule],
  exports: [LogGeneratorComponent],
  declarations: [LogGeneratorComponent],
  providers: [],
})
export class LogGeneratorModule {}
