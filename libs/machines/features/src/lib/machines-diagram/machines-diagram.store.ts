import { Injectable } from '@angular/core';
import { MachinesSelectors } from '@buhler/machines/domain';
import { select, Store } from '@ngrx/store';

// export interface MachinesDiagramState {
//   data: Machines[];
// }

@Injectable()
//extends ComponentStore<MachinesDiagramState>
export class MachinesDiagramStore {
  readonly machines$ = this.store$.pipe(select(MachinesSelectors.allMachines));

  constructor(private store$: Store<never>) {
    // super({
    //   data: null,
    //   loading: false,
    // });
  }
}
