import { MachineState } from './machine-state.model';

export type Log = {
  id?: string;
  createdAt: string;
  state: MachineState;
  machineId: string;
  message: string;
};
