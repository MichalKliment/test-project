import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'buhler-machine-tab',
  templateUrl: 'machine-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineTabComponent {
  @Input() id?: string;
  @Input() name?: string;
  @Input() state: 'Running' | 'Alarm' | 'Warning' = 'Running';
  @Input() type?: 'Scale' | 'Bag Attach' | 'Packer' | 'Bag Close';
}
