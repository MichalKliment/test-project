import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { LogsActions, MachinesSelectors } from '@buhler/machines/domain';
import {
  getRandomItemFromArray,
  Log,
  Machine,
  MachineState,
  MACHINES_STATES
} from '@buhler/machines/utils';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';

export interface LogGeneratorState {
  data: Machine[];
}

@Injectable()
export class LogGeneratorStore extends ComponentStore<LogGeneratorState> {
  machines$: Observable<Machine[]> = this.store$.pipe(
    select(MachinesSelectors.allMachines)
  );

  constructor(public store$: Store<never>) {
    super({
      data: [],
    });
  }

  readonly generateNewLog = this.effect((input: Observable<never>) => {
    return input.pipe(
      withLatestFrom(this.machines$),
      filter(([, machines]) => machines.length > 0),
      map(([, machines]) => machines.map((p) => p.id)),
      tap((machinesIds) =>
        this.store$.dispatch(
          LogsActions.addLog({ log: this.createNewRandomLog(machinesIds) })
        )
      )
    );
  });

  private createNewRandomLog(machines: string[]): Log {
    const tempMachine = getRandomItemFromArray(machines) as string;
    const tempState = getRandomItemFromArray(
      JSON.parse(JSON.stringify(MACHINES_STATES))
    ) as MachineState;
    return {
      createdAt: new Date().toISOString(),
      state: tempState,
      machineId: tempMachine,
      message: `Message for machine: ${tempMachine} and state: ${tempState}`,
    };
  }
}
