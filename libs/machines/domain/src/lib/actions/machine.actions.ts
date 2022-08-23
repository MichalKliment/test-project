import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Machine } from '../models';

const load = createAction('[Machines] load machines');

const loadSuccess = createAction(
  '[Machines] load machines success',
  props<{ machines: Machine[] }>()
);

const loadFailed = createAction(
  '[Machines] load machines failed',
  props<{ message: string }>()
);

const changeMachineState = createAction(
  '[Machines] change machine state',
  props<{ machine: Update<Machine> }>()
);

const machineNotFond = createAction('[Machines] machine not found');

export const MachinesActions = {
  load,
  loadSuccess,
  loadFailed,
  changeMachineState,
  machineNotFond,
};
