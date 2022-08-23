import { Component, EventEmitter, Output } from '@angular/core';
import { MachinesTabsStore } from './machines-tabs.store';

@Component({
  selector: 'buhler-machines-tabs',
  templateUrl: 'machines-tabs.component.html',
  providers: [MachinesTabsStore],
})
export class MachinesTabsComponent {
  @Output() machineClicked = new EventEmitter<string>();
  constructor(public machinesDiagramStore: MachinesTabsStore) {}
}
