import { Log } from '@buhler/machines/utils';
import { createAction, props } from '@ngrx/store';

const addLog = createAction('[Logs] add log', props<{ log: Log }>());

export const LogsActions = {
  addLog,
};
