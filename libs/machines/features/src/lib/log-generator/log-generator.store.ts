import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import {
  Log,
  LogsActions,
  Machine,
  MachineSelectors
} from '@buhler/machines/domain';
import {
  getRandomMachineState,
  getRandomMachineType
} from '@buhler/machines/utils';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { filter, tap, withLatestFrom } from 'rxjs/operators';

export interface LogGeneratorState {
  data: Machine[];
}

@Injectable()
export class LogGeneratorStore extends ComponentStore<LogGeneratorState> {
  machines$: Observable<Machine[]> = this.store$.pipe(
    select(MachineSelectors.allMachines)
  );

  constructor(public store$: Store<never>) {
    super({
      data: [],
    });
  }

  private readonly updateData = this.updater((state, input: Machine[]) => ({
    ...state,
    data: input,
  }));

  readonly generateNewLog = this.effect((input: Observable<never>) => {
    return input.pipe(
      withLatestFrom(this.machines$),
      filter(([, machines]) => machines.length > 0),
      tap(() =>
        this.store$.dispatch(
          LogsActions.addLog({ log: this.createNewRandomLog() })
        )
      )
    );
  });

  private createNewRandomLog(): Log {
    const tempType = getRandomMachineType();
    const tempState = getRandomMachineState();
    return {
      createdAt: new Date().toISOString(),
      state: tempState,
      machine: tempType,
      message: `Message for machine: ${tempType} and state: ${tempState}`,
    };
  }
}
