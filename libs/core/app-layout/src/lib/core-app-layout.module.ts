import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP_LAYOUT_CONTAINERS } from './containers';
import { ReactiveComponentModule } from '@ngrx/component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveComponentModule, PortalModule],
  declarations: [...APP_LAYOUT_CONTAINERS],
  exports: [...APP_LAYOUT_CONTAINERS],
})
export class CoreAppLayoutModule {}
