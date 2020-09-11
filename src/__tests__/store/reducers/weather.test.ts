import reducer, { initialState } from "../../../store/reducers/weather";
import {
  setCurrentCity,
  pushHistory,
  deleteHistoryItem,
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
        temp_max: 123,
        temp_min: 24,
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

describe("weather reducer", () => {
  it("should create a reducer to update current city", () => {
    const payload = testWeather;
    const updatedState = {
      currentCity: testWeather,
      history: [],
      error: null,
    };
    expect(reducer(initialState, setCurrentCity(payload))).toStrictEqual(
      updatedState
    );
  });

  it("should create a reducer to push weather to history", () => {
    const payload = testWeather;
    const updatedState = {
      currentCity: null,
      history: [testWeather],
      error: null,
    };
    expect(reducer(initialState, pushHistory(payload))).toStrictEqual(
      updatedState
    );
  });
  it("should create a reducer to remove weather from history", () => {
    const payload = testWeather;
    const initialState = {
      currentCity: null,
      history: [testWeather],
      error: null,
    };
    const updatedState = {
      currentCity: null,
      history: [],
      error: null,
    };
    expect(reducer(initialState, deleteHistoryItem(0))).toStrictEqual(
      updatedState
    );
  });
});
