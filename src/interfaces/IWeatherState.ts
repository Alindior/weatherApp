import { IWeather } from "./IWeather";

export interface IWeatherState {
  currentCity: IWeather | null;
  history: IWeather[];
  error: string | null;
}
