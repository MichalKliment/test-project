import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Action, createReducer, on } from '@ngrx/store';
import { MachinesActions } from '../actions';
import { Machine } from '../models';

export interface MachineStoreState extends EntityState<Machine> {
  loaded: boolean;
  loading: boolean;
}

const adapter: EntityAdapter<Machine> = createEntityAdapter<Machine>();

const initialState: MachineStoreState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export const machinesReducer = createReducer(
  initialState,
  on(MachinesActions.load, (state) => ({
    ...state,
    loading: true,
  })),
  on(MachinesActions.loadSuccess, (state, { machines }) =>
    adapter.addMany(machines, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),
  on(MachinesActions.loadFailed, (state) => ({
    ...state,
    loading: false,
  })),
  on(MachinesActions.changeMachineState, (state, { machine }) =>
    adapter.updateOne(machine, {
      ...state,
    })
  )
);

export function reducer(state: MachineStoreState | undefined, action: Action) {
  return machinesReducer(state, action);
}
export const selectState = (state: MachineStoreState) => state;

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
