import {
  ComponentPortal,
  DomPortal,
  TemplatePortal,
} from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LayoutPortalEnum } from '../model';

import { BehaviorSubject } from 'rxjs';

export type Portal = TemplatePortal | ComponentPortal<unknown> | DomPortal;

@Injectable({ providedIn: 'root' })
export class AppLayoutPortalService {
  private sideBar = new BehaviorSubject<Portal | null>(null);
  private sideBarLogo = new BehaviorSubject<Portal | null>(null);
  private topBar = new BehaviorSubject<Portal | null>(null);
  private main = new BehaviorSubject<Portal | null>(null);

  public readonly sideBar$ = this.sideBar.asObservable();
  public readonly sideBarLogo$ = this.sideBarLogo.asObservable();
  public readonly topBar$ = this.topBar.asObservable();
  public readonly main$ = this.main.asObservable();

  setSideBar(portal: Portal) {
    if (this.sideBar.value?.isAttached) this.sideBar.value.detach();
    this.sideBar.next(portal);
  }
  setSideBarLogo(portal: Portal) {
    if (this.sideBarLogo.value?.isAttached) this.sideBarLogo.value.detach();
    this.sideBarLogo.next(portal);
  }
  setTopBar(portal: Portal) {
    if (this.topBar.value?.isAttached) this.topBar.value.detach();
    this.topBar.next(portal);
  }
  setMain(portal: Portal) {
    if (this.main.value?.isAttached) this.main.value.detach();
    this.main.next(portal);
  }

  setPortal(portal: Portal, portalType: LayoutPortalEnum) {
    switch (portalType) {
      case 'sideBar':
        this.setSideBar(portal);
        break;
      case 'topBar':
        this.setTopBar(portal);
        break;
      case 'main':
        this.setMain(portal);
        break;
    }
  }
}
