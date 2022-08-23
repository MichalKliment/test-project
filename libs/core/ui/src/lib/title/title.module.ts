import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TitleComponent } from './title.component';

@NgModule({
  imports: [CommonModule],
  exports: [TitleComponent],
  declarations: [TitleComponent],
  providers: [],
})
export class TitleModule {}
