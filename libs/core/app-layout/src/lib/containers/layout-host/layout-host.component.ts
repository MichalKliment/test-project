import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LayoutPortalEnum } from '../../model';
import { AppLayoutPortalService } from '../../services';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'buhler-layout-host',
  templateUrl: 'layout-host.component.html',
})
export class LayoutHostComponent implements OnInit {
  @Input() portal: LayoutPortalEnum = 'main';

  @ViewChild('template', { static: true })
  template: TemplateRef<never> | undefined;

  constructor(
    public readonly appLayoutPortalService: AppLayoutPortalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.template) {
      const template = new TemplatePortal(this.template, this.viewContainerRef);
      this.appLayoutPortalService.setPortal(template, this.portal);
    }
  }
}
