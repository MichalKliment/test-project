import { Component, Input } from '@angular/core';

@Component({
  selector: 'buhler-top-bar',
  templateUrl: 'top-bar.component.html',
})
export class TopBarComponent {
  @Input() logo = 'assets/img/buhler-logo.png';
}
