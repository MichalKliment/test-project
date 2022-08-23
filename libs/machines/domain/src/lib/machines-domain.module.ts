import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MACHINES_EFFECTS } from './effects';
import { FEATURE_KEY, reducers } from './reducers';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_KEY, reducers),
    EffectsModule.forFeature(MACHINES_EFFECTS),
  ],
})
export class MachinesDomainModule {}
