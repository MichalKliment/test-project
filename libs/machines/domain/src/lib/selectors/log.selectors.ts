import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY, reducers } from '../reducers';
import { selectAll } from '../reducers/log.reducer';

const DomainSelector =
  createFeatureSelector<ReturnType<typeof reducers>>(FEATURE_KEY);

const LogSelector = createSelector(DomainSelector, (s) => s.logs);

const loaded = createSelector(LogSelector, (s) => s.loaded);
const loading = createSelector(LogSelector, (s) => s.loading);

const allLogs = createSelector(LogSelector, selectAll);

export const LogsSelectors = {
  loaded,
  loading,
  allLogs,
};
