let counter = 0;
export function getUniqueId(id: string) {
  return `${id}-${counter++}`;
}
