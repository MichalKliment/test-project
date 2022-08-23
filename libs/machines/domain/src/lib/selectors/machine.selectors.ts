import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY, reducers } from '../reducers';
import { selectAll } from '../reducers/machine.reducer';

const DomainSelector =
  createFeatureSelector<ReturnType<typeof reducers>>(FEATURE_KEY);

const MachineSelector = createSelector(DomainSelector, (s) => s.machines);

const loaded = createSelector(MachineSelector, (s) => s.loaded);
const loading = createSelector(MachineSelector, (s) => s.loading);

const allMachines = createSelector(MachineSelector, selectAll);

export const MachinesSelectors = {
  loaded,
  loading,
  allMachines,
};
