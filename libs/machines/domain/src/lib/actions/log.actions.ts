import { createAction, props } from '@ngrx/store';
import { Log } from '../models';

const addLog = createAction('[Logs] add log', props<{ log: Log }>());

export const LogsActions = {
  addLog,
};
