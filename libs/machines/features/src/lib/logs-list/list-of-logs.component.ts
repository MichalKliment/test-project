import { Component, Input } from '@angular/core';
import { ListOfLogsStore } from './list-of-logs.store';

@Component({
  selector: 'buhler-list-of-logs',
  templateUrl: 'list-of-logs.component.html',
  providers: [ListOfLogsStore],
})
export class ListOfLogsComponent {
  @Input() set machineId(value: string | undefined | null) {
    if (value) this.listOfLogsStore.setMachineIdForFilter(value);
  }

  constructor(public listOfLogsStore: ListOfLogsStore) {}
}
