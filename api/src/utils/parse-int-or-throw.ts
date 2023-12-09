export function parseIntOrThrow(value: unknown): number {
  if (typeof value !== "string") {
    throw new Error(`Expected value to be a string, got ${typeof value}`);
  }

  const parsedInt = parseInt(value);

  if (Number.isNaN(parsedInt)) {
    throw new Error(`Provided value was not a valid number string ${value}`);
  }

  return parsedInt;
}
