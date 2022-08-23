export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * function for getting random State od machine
 * @returns {string} MachineState
 */
export function getRandomMachineState(): 'Running' | 'Alarm' | 'Warning' {
  const state = getRandomInt(0, 3);
  if (state === 0) return 'Running';
  if (state === 1) return 'Alarm';
  return 'Warning';
}

/**
 * function for getting random Type od machine
 * @returns {string} MachineType
 */
export function getRandomMachineId(ids: string[]): string {
  const id = getRandomInt(0, ids.length);
  return ids[id];
}
