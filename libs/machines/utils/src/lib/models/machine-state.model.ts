import { z } from 'zod';

export const MACHINES_STATES = ['Running', 'Alarm', 'Warning'] as const;
export const Z_MACHINE_STATES = z.enum(MACHINES_STATES);
export type MachineState = z.infer<typeof Z_MACHINE_STATES>;
