export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * function for getting random item from array
 * @returns {string} MachineType
 */
export function getRandomItemFromArray(ids: string[]): string {
  const id = getRandomInt(0, ids.length);
  return ids[id];
}
