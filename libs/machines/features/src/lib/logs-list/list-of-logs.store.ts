import { Injectable } from '@angular/core';
import { LogsSelectors } from '@buhler/machines/domain';
import { ComponentStore } from '@ngrx/component-store';
import { select, Store } from '@ngrx/store';
import { parseISO } from 'date-fns';

import { combineLatest, map, Observable, tap } from 'rxjs';

export interface ListOfLogsState {
  machineIdForFilter: string | null;
}

@Injectable()
export class ListOfLogsStore extends ComponentStore<ListOfLogsState> {
  readonly allLogs$ = this.store$.pipe(select(LogsSelectors.allLogs));
  readonly machineIdForFilter$ = this.select(
    (state) => state.machineIdForFilter
  );

  readonly logs$ = combineLatest([
    this.allLogs$,
    this.machineIdForFilter$,
  ]).pipe(
    map(([logs, machineIdForFilter]) =>
      logs
        .filter((log) => log.machineId === machineIdForFilter)
        .map((log) => ({
          ...log,
          createAt: parseISO(log.createdAt),
        }))
        .sort((a, b) => (a.createAt > b.createAt ? -1 : 1))
    )
  );

  private readonly updateMachineIdForFilter = this.updater(
    (state, input: string) => ({
      ...state,
      machineIdForFilter: input,
    })
  );

  constructor(private store$: Store<never>) {
    super({
      machineIdForFilter: null,
    });
  }

  readonly setMachineIdForFilter = this.effect((input: Observable<string>) => {
    return input.pipe(tap((p) => this.updateMachineIdForFilter(p)));
  });
}
