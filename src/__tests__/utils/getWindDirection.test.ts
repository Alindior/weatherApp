import { getWindDirection } from "../../utils/windDirection";

describe("Determine wind direction by degrees", () => {
  it("should return North-East", () => {
    const minResult = getWindDirection(1);
    const maxResult = getWindDirection(89);

    expect(minResult).toBe("North-East");
    expect(maxResult).toBe("North-East");
  });

  it("should return South-East", () => {
    const minResult = getWindDirection(91);
    const maxResult = getWindDirection(179);

    expect(minResult).toBe("South-East");
    expect(maxResult).toBe("South-East");
  });

  it("should return South-West", () => {
    const minResult = getWindDirection(181);
    const maxResult = getWindDirection(269);

    expect(minResult).toBe("South-West");
    expect(maxResult).toBe("South-West");
  });

  it("should return North-West", () => {
    const minResult = getWindDirection(271);
    const maxResult = getWindDirection(359);

    expect(minResult).toBe("North-West");
    expect(maxResult).toBe("North-West");
  });

  it("throws error", () => {
    expect(() => getWindDirection()).toThrow();
    expect(() => getWindDirection(425, 125)).toThrow(
      "Invalid number of parametrs."
    );
    expect(() => getWindDirection(-1)).toThrow(
      "The value must be between 0 and 360 degrees."
    );
    expect(() => getWindDirection(361)).toThrow(
      "The value must be between 0 and 360 degrees."
    );
  });
});
