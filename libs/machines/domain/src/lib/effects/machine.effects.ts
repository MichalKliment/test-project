import { Injectable } from '@angular/core';
import { ConfigurationService } from '@buhler/core/configuration';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs';
import { LogsActions, MachinesActions } from '../actions';
import { Machine } from '../models';
import { MachinesSelectors } from '../selectors';

@Injectable()
export class MachinesEffects {
  // onInitCookieBar$ = createEffect(
  //   () =>
  //     this._actions.pipe(
  //       ofType(CookieActions.initCookie),
  //       map((action) => {
  //         return CookieActions.detectCookie({
  //           detected: true,
  //           enable:
  //             this.cookieService.get(
  //               this.configurationService.get('cookieBarKey') || 'cookieBarKey'
  //             ) == 'agree'
  //               ? true
  //               : null,
  //         });
  //       })
  //     ),
  //   { dispatch: true }
  // );

  onLoadRequest$ = createEffect(
    () =>
      this._actions.pipe(
        ofType(MachinesActions.load),
        map((action) => {
          const machines: Machine[] = [
            {
              id: 'machine1',
              name: 'Machine 1',
              type: 'Scale',
              state: 'Running',
              icon: 'ss',
            },
            {
              id: 'machine2',
              name: 'Machine 2',
              type: 'Bag Attach',
              state: 'Running',
              icon: 'ss',
            },
            {
              id: 'machine3',
              name: 'Machine 3',
              type: 'Packer',
              state: 'Running',
              icon: 'ss',
            },
            {
              id: 'machine4',
              name: 'Machine 4',
              type: 'Bag Close',
              state: 'Running',
              icon: 'ss',
            },
          ];
          // this.configurationService.get(
          //   'machines',
          //   []
          // ) as Machine[];
          if (machines && machines.length > 0) {
            return MachinesActions.loadSuccess({ machines });
          }
          return MachinesActions.loadFailed({ message: 'No machines found' });
        })
      ),
    { dispatch: true }
  );

  onLogComes$ = createEffect(
    () =>
      this._actions.pipe(
        ofType(LogsActions.addLog),
        withLatestFrom(this._store$.select(MachinesSelectors.allMachines)),
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
    private _store$: Store<any>,
    private _actions: Actions,
    private configurationService: ConfigurationService
  ) {}
}
