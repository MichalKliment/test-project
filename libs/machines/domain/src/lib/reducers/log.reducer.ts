import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Log } from '@buhler/machines/utils';
import { Action, createReducer, on } from '@ngrx/store';
import { LogsActions } from '../actions';

import { nanoid } from 'nanoid';
export interface LogsStoreState extends EntityState<Log> {
  loaded: boolean;
  loading: boolean;
  logCount: number;
}

const adapter: EntityAdapter<Log> = createEntityAdapter<Log>();

const initialState: LogsStoreState = adapter.getInitialState({
  loading: false,
  loaded: false,
  logCount: 100,
});

export const logsReducer = createReducer(
  initialState,
  on(LogsActions.addLog, (state, { log }) =>
    /**
     * Add Log with generated id and remove oldest log if logCount is reached
     */
    adapter.setAll(
      [
        ...Object.keys(state.entities)
          .map((key) => state.entities[key] as Log)
          .slice(-state.logCount),
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

export const { selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
