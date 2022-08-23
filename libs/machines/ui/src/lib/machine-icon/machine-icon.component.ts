import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MachineType } from '@buhler/machines/utils';

@Component({
  selector: 'buhler-machine-icon',
  templateUrl: 'machine-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineIconComponent {
  materialIcon = '';
  @Input() set icon(value: MachineType) {
    switch (value) {
      case 'Scale':
        this.materialIcon = 'system_update_alt';
        break;
      case 'Bag Attach':
        this.materialIcon = 'vertical_split';
        break;
      case 'Packer':
        this.materialIcon = 'fireplace';
        break;
      case 'Bag Close':
        this.materialIcon = 'calendar_view_month';
        break;
    }
  }
}
