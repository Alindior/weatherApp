import { Actions } from "../../../store/contsts/WeatherTypes";
import {
  pushHistory,
  deleteHistoryItem,
  setCurrentCity,
  showAlert,
  hideAlert,
} from "../../../store/actions/weather";

export const testWeather = {
  city: {
    coord: {},
    country: "BY",
    id: 123,
    name: "Minsk",
    population: 100500,
    sunrise: 1488,
    sunset: 24,
    timezone: 220,
  },
  cnt: 123,
  cod: "204",
  list: [
    {
      cloud: {},
      dt: 123,
      dt_txt: "23.405.12",
      main: {
        temp_max: 271,
        temp_min: 289,
      },
      pop: 124,
      sys: {},
      visibility: 142,
      weather: [
        {
          icon: "io8",
        },
      ],
      wind: {
        deg: 271,
        speed: 258,
      },
    },
  ],
  message: "test",
};

describe("actions for weather", () => {
  const payload = testWeather;
  it("should create action to add weather to history", () => {
    const expectedAction = { type: Actions.PUSH_HISTORY, payload };
    expect(pushHistory(payload)).toEqual(expectedAction);
  });

  it("should create action to delete weather from history", () => {
    const testIndex = 1488;
    const expectedAction = { type: Actions.REMOVE_HISTORY_ITEM, payload: 1488 };
    expect(deleteHistoryItem(testIndex)).toEqual(expectedAction);
  });

  it("should create action to set weather for current city", () => {
    const expectedAction = { type: Actions.SET_CURRENT_CITY, payload };
    expect(setCurrentCity(payload)).toEqual(expectedAction);
  });
  
  it("should create action to hide alert with error", () => {
    const expectedAction = { type: Actions.HIDE_ALERT };
    expect(hideAlert()).toEqual(expectedAction);
  });
});
