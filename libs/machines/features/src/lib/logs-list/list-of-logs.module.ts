import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { ListOfLogsComponent } from './list-of-logs.component';

@NgModule({
  imports: [CommonModule, ReactiveComponentModule],
  exports: [ListOfLogsComponent],
  declarations: [ListOfLogsComponent],
  providers: [],
})
export class ListOfLogsModule {}
