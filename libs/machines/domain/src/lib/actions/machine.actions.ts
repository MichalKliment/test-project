import { Machine } from '@buhler/machines/utils';
import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

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

/**
 * TODO: this action is not handled by the effect yet... 
 * When  toast module is implemented, this action should
 * be handled by the effect and show error toast
 */

const machineNotFond = createAction('[Machines] machine not found');

export const MachinesActions = {
  load,
  loadSuccess,
  loadFailed,
  changeMachineState,
  machineNotFond,
};
