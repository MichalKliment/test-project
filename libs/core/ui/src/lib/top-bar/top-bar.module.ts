import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './top-bar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [TopBarComponent],
  declarations: [TopBarComponent],
  providers: [],
})
export class TopBarModule {}
