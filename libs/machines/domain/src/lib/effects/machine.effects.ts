import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { LogsActions, MachinesActions } from '../actions';
import { MachinesSelectors } from '../selectors';
import { MachineDataService } from '../services/machines.service';

@Injectable()
export class MachinesEffects {
  onLoadRequest$ = createEffect(
    () =>
      this._actions.pipe(
        ofType(MachinesActions.load),
        exhaustMap(() =>
          this.machineDataService.load().pipe(
            map((machines) => {
              return MachinesActions.loadSuccess({ machines });
            }),
            catchError(() =>
              of(MachinesActions.loadFailed({ message: 'No machines found' }))
            )
          )
        )
      ),
    { dispatch: true }
  );

  onLogComes$ = createEffect(
    () =>
      this._actions.pipe(
        ofType(LogsActions.addLog),
        withLatestFrom(
          this._store$.pipe(select(MachinesSelectors.allMachines))
        ),
        map(([action, machines]) => {
          const machine = machines.find((m) => m.id === action.log.machineId);
          if (machine) {
            return MachinesActions.changeMachineState({
              machine: {
                id: machine.id,
                changes: { state: action.log.state },
              },
            });
          }
          return MachinesActions.machineNotFond();
        })
      ),
    { dispatch: true }
  );

  constructor(
    private _store$: Store<never>,
    private _actions: Actions,
    private machineDataService: MachineDataService
  ) {}
}
