import { z } from 'zod';

export const MACHINES_TYPES = [
  'Scale',
  'Bag Attach',
  'Packer',
  'Bag Close',
] as const;
export const Z_MACHINE_TYPE = z.enum(MACHINES_TYPES);
export type MachineType = z.infer<typeof Z_MACHINE_TYPE>;
