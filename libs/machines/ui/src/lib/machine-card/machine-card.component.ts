import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'buhler-machine-card',
  templateUrl: 'machine-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineCardComponent {
  @Input() id?: string;
  @Input() name?: string;
  @Input() state: 'Running' | 'Alarm' | 'Warning' = 'Running';
  @Input() type?: 'Scale' | 'Bag Attach' | 'Packer' | 'Bag Close';
}
