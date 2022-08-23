import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CoreConfigurationModule } from '@buhler/core/configuration';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { rootReducers } from '@buhler/core/common-store';
import {
  NavigationActionTiming,
  RouterState,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { AppRoutingModule } from './app.module.routing';

import { CoreAppLayoutModule } from '@buhler/core/app-layout';
import { ActualTimeModule, TopBarModule } from '@buhler/core/ui';
import { MachinesDomainModule } from '@buhler/machines/domain';
import {
  LogGeneratorModule,
  MachinesTabsModule,
} from '@buhler/machines/features';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreConfigurationModule.forRoot(environment.config),
    StoreModule.forRoot(rootReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      navigationActionTiming: NavigationActionTiming.PreActivation,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true,
    }),
    CoreAppLayoutModule,
    MachinesDomainModule,
    LogGeneratorModule,
    TopBarModule,
    ButtonModule,
    ActualTimeModule,
    MachinesTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
