import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Action, createReducer, on } from '@ngrx/store';
import { LogsActions } from '../actions';
import { Log } from '../models';

export interface LogsStoreState extends EntityState<Log> {
  loaded: boolean;
  loading: boolean;
}

const adapter: EntityAdapter<Log> = createEntityAdapter<Log>();

const initialState: LogsStoreState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export const logsReducer = createReducer(
  initialState,
  on(LogsActions.addLog, (state, { log }) =>
    adapter.addOne(log, {
      ...state,
    })
  )
);

export function reducer(state: LogsStoreState | undefined, action: Action) {
  return logsReducer(state, action);
}
export const selectState = (state: LogsStoreState) => state;

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
