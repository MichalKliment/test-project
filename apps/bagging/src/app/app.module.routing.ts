import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@buhler/core/app-layout';
import { AppGuard } from '@buhler/core/configuration';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          canActivate: [AppGuard],
          path: '',
          component: LayoutComponent,
          children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
              path: 'dashboard',
              loadChildren: () =>
                import('./features/dashboard').then(
                  ({ DashboardModule }) => DashboardModule
                ),
            },
          ],
        },
      ],
      {
        initialNavigation: 'enabledBlocking',
        anchorScrolling: 'enabled',
        paramsInheritanceStrategy: 'always',
        // scrollPositionRestoration: 'top',
        // elativeLinkResolution: 'legacy',
        scrollPositionRestoration: 'disabled',
        //paramsInheritanceStrategy: 'always',
        //onSameUrlNavigation: 'reload'
        relativeLinkResolution: 'corrected',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
