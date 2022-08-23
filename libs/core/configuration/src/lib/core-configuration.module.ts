import { ModuleWithProviders, NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';

export function init_appConfiguration(
  configurationService: ConfigurationService
) {
  return () => configurationService.load();
}

@NgModule({
  imports: [HttpClientModule],
  providers: [ConfigurationService],
})
export class CoreConfigurationModule {
  static forRoot(
    configFile?: string
  ): ModuleWithProviders<CoreConfigurationModule> {
    return {
      ngModule: CoreConfigurationModule,
      providers: [
        {
          provide: 'APP_CONFIG_NAME',
          useValue: configFile || 'appconfig.json',
        },
      ],
    };
  }
}
