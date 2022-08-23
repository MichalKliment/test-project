import { Log } from '@buhler/machines/utils';
import { createAction, props } from '@ngrx/store';

const addLog = createAction('[Logs] add log', props<{ log: Log }>());

/**
 * set the limit of count for saving the log
 */
const setCountLimit = createAction(
  '[Logs] set count limit',
  props<{ logStoreLimit: number }>()
);

export const LogsActions = {
  addLog,
  setCountLimit,
};
