import { Component } from '@angular/core';
import { MachinesTabsStore } from './machines-tabs.store';

@Component({
  selector: 'buhler-machines-tabs',
  templateUrl: 'machines-tabs.component.html',
  providers: [MachinesTabsStore],
})
export class MachinesTabsComponent {
  constructor(public machinesDiagramStore: MachinesTabsStore) {}
}
