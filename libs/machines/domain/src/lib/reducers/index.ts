import { combineReducers } from '@ngrx/store';
import { logsReducer } from './log.reducer';
import { machinesReducer } from './machine.reducer';

export const FEATURE_KEY = 'machineDomain';

export const reducers = combineReducers({
  machines: machinesReducer,
  logs: logsReducer,
});
