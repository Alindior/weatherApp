export const getCelsiusTemperature = (...args: number[]) => {
  if (args.length !== 1) {
    throw new Error("Invalid number of params.");
  }
  return Math.floor(args[0] - 273.15);
};
