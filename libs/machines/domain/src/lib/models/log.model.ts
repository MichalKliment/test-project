import { MachineState } from './machine-state.model';

export type Log = {
  id?: number;
  createdAt: string;
  state: MachineState;
  machineId: string;
  message: string;
};
