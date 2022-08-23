import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Log } from '@buhler/machines/utils';
import { Action, createReducer, on } from '@ngrx/store';
import { LogsActions } from '../actions';

import { nanoid } from 'nanoid';
export interface LogsStoreState extends EntityState<Log> {
  loaded: boolean;
  loading: boolean;
  logStoreLimit: number;
}

const adapter: EntityAdapter<Log> = createEntityAdapter<Log>();

const initialState: LogsStoreState = adapter.getInitialState({
  loading: false,
  loaded: false,
  logStoreLimit: 100,
});

export const logsReducer = createReducer(
  initialState,
  on(LogsActions.setCountLimit, (state, { logStoreLimit }) => ({
    ...state,
    logStoreLimit,
  })),
  /**
   * Add Log with generated id and remove oldest
   * log if logStoreLimit is reached
   */
  on(LogsActions.addLog, (state, { log }) =>
    adapter.setAll(
      [
        ...Object.keys(state.entities)
          .map((key) => state.entities[key] as Log)
          .slice(-state.logStoreLimit),
        {
          ...log,
          id: nanoid(),
        },
      ],
      {
        ...state,
      }
    )
  )
);

export function reducer(state: LogsStoreState | undefined, action: Action) {
  return logsReducer(state, action);
}
export const selectState = (state: LogsStoreState) => state;

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
