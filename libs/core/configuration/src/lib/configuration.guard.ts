import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';

@Injectable({ providedIn: 'root' })
export class AppGuard implements CanActivate {
  constructor(
    public configurationService: ConfigurationService,
    public router: Router
  ) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.configurationService
      .load()
      .then(() => true)
      .catch(() => {
        window.location.assign('/assets/errors/500.html');
        return false;
      });
  }
}
