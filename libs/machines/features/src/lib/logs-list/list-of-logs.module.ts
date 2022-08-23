import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { TimelineModule } from 'primeng/timeline';
import { ListOfLogsComponent } from './list-of-logs.component';

@NgModule({
  imports: [CommonModule, ReactiveComponentModule, TimelineModule],
  exports: [ListOfLogsComponent],
  declarations: [ListOfLogsComponent],
  providers: [],
})
export class ListOfLogsModule {}
