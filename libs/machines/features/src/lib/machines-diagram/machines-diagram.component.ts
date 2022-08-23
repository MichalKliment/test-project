import { Component, EventEmitter, Output } from '@angular/core';
import { MachinesDiagramStore } from './machines-diagram.store';

@Component({
  selector: 'buhler-machines-diagram',
  templateUrl: 'machines-diagram.component.html',
  providers: [MachinesDiagramStore],
})
export class MachinesDiagramComponent {
  @Output() machineClicked = new EventEmitter<string>();
  constructor(public machinesDiagramStore: MachinesDiagramStore) {}
}
