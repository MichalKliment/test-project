import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MachineState } from '@buhler/machines/utils';

@Component({
  selector: 'buhler-machine-state-icon',
  templateUrl: 'machine-state-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineStateIconComponent {
  materialIcon = '';

  @Input() set icon(value: MachineState) {
    switch (value) {
      case 'Running':
        this.materialIcon = 'sync';
        break;
      case 'Alarm':
        this.materialIcon = 'error_outline';
        break;
      case 'Warning':
        this.materialIcon = 'report_problem';
        break;
    }
  }
}
