import { Component } from '@angular/core';
import { MachineDetailPageStore } from './machine-detail-page.store';

@Component({
  selector: 'buhler-machine-detail-page',
  templateUrl: 'machine-detail-page.component.html',

  providers: [MachineDetailPageStore],
})
export class MachineDetailPageComponent {
  constructor(public machineDetailPageStore: MachineDetailPageStore) {}
}
