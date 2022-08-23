import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MachineState, MachineType } from '@buhler/machines/utils';

@Component({
  selector: 'buhler-machine-card',
  templateUrl: 'machine-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineCardComponent {
  @Input() id?: string;
  @Input() name?: string;
  @Input() state: MachineState = 'Running';
  @Input() type?: MachineType;
}
