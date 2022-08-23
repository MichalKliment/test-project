import { MachineState } from './machine-state.model';
import { MachineType } from './machine-type.model';

export type Machine = {
  id: string;
  name: string;
  type: MachineType;
  state: MachineState;
  icon: string;
};
