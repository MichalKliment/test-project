import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'buhler-title',
  templateUrl: 'title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input() title? = 'Heading';
}
