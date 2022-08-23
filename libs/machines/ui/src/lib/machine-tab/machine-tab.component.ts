import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MachineState, MachineType } from '@buhler/machines/utils';

@Component({
  selector: 'buhler-machine-tab',
  templateUrl: 'machine-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineTabComponent {
  @Input() id?: string;
  @Input() name?: string;
  @Input() state: MachineState = 'Running';
  @Input() type?: MachineType;
}
