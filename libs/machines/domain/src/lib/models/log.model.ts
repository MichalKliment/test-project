import { MachineState } from './machine-state.model';
import { MachineType } from './machine-type.model';

export type Log = {
  createdAt: string;
  state: MachineState;
  machine: MachineType;
  // id: string;
  message: string;
};
