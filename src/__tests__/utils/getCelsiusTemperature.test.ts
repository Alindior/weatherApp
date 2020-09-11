import { getCelsiusTemperature } from "../../utils/normalizeTemperature";

describe("transform kel*vin in celsius", () => {
  it("should return North-", () => {
    const result = getCelsiusTemperature(273.15);
    expect(result).toBe(0);
  });

  it("throws error", () => {
    expect(() => getCelsiusTemperature()).toThrow();
    expect(() => getCelsiusTemperature(425, 125)).toThrow(
      "Invalid number of params."
    );
  });
});
