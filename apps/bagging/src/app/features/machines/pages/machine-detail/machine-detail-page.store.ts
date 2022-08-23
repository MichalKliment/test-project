import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectRouteParam } from '@buhler/core/common-store';

// export interface MachineDetailPageState {

// }

@Injectable() //extends ComponentStore<MachineDetailPageState>
export class MachineDetailPageStore {
  readonly machineId$ = this.store$.pipe(
    select(selectRouteParam('machineId'))
  );

  constructor(private store$: Store<never>) {
    // super({
    //   data: null,
    //   loading: false,
    // });
  }
}
