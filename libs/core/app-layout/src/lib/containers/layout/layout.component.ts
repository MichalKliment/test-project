import { Component } from '@angular/core';
import { AppLayoutPortalService } from '../../services';

@Component({
  selector: 'buhler-layout',
  templateUrl: 'layout.component.html',
})
export class LayoutComponent {
  constructor(public readonly appLayoutPortalService: AppLayoutPortalService) {}
}
