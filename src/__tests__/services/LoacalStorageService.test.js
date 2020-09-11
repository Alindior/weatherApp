import {
  addWeather,
  onRemoveHistoryStorage,
} from "../../services/LocalStorageService";
import { testWeather } from "../store/actions/weather.test";

describe("test working localStorage service", () => {
  beforeAll(() => {
    localStorage.removeItem("history");
  });
  it("should add weather to localStorage", () => {
    addWeather(testWeather);
    const history = localStorage.getItem("history");
    expect(...JSON.parse(history)).toStrictEqual(testWeather);
  });

  it("should remove weather from localStorage", () => {
    onRemoveHistoryStorage(0);
    const history = localStorage.getItem("history");
    expect(JSON.parse(history)).toStrictEqual([]);
  });
});
