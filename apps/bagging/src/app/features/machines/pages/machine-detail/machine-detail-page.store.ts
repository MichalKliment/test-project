import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectRouteParam } from '@buhler/core/common-store';
import { LogsActions } from '@buhler/machines/domain';
import { ComponentStore } from '@ngrx/component-store';
import { filter, map, Observable, tap, withLatestFrom } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MachineDetailPageState {}

@Injectable()
export class MachineDetailPageStore extends ComponentStore<MachineDetailPageState> {
  readonly machineId$ = this.store$.pipe(select(selectRouteParam('machineId')));
  readonly machineHeading$ = this.machineId$.pipe(
    map((id) => `Machine Detail: ${id}`)
  );

  constructor(private store$: Store<never>) {
    super({});
  }

  /**
   * Restarting machine to push it insto Running state
   */
  readonly restartMachine = this.effect((input: Observable<never>) => {
    return input.pipe(
      withLatestFrom(this.machineId$),
      filter(([, machineId]) => machineId !== null && machineId !== undefined),
      tap(([, machinesId]) =>
        this.store$.dispatch(
          LogsActions.addLog({
            log: {
              machineId: machinesId as string,
              createdAt: new Date().toISOString(),
              state: 'Running',
              message: `Machine ${machinesId} restarted`,
            },
          })
        )
      )
    );
  });
}
