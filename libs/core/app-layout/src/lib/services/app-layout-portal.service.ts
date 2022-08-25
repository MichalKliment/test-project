import {
    ComponentPortal,
    DomPortal,
    TemplatePortal
} from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LayoutPortalUnion } from '../model';

import { BehaviorSubject } from 'rxjs';

export type Portal = TemplatePortal | ComponentPortal<unknown> | DomPortal;

@Injectable({ providedIn: 'root' })
export class AppLayoutPortalService {
  private tabs = new BehaviorSubject<Portal | null>(null);
  private topBar = new BehaviorSubject<Portal | null>(null);
  private main = new BehaviorSubject<Portal | null>(null);

  public readonly tabs$ = this.tabs.asObservable();
  public readonly topBar$ = this.topBar.asObservable();
  public readonly main$ = this.main.asObservable();

  settTabs(portal: Portal) {
    if (this.tabs.value?.isAttached) this.tabs.value.detach();
    this.tabs.next(portal);
  }

  setTopBar(portal: Portal) {
    if (this.topBar.value?.isAttached) this.topBar.value.detach();
    this.topBar.next(portal);
  }
  setMain(portal: Portal) {
    if (this.main.value?.isAttached) this.main.value.detach();
    this.main.next(portal);
  }

  setPortal(portal: Portal, portalType: LayoutPortalUnion) {
    switch (portalType) {
      case 'tabs':
        this.settTabs(portal);
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
