import { IWeather } from "../../interfaces/IWeather";

export enum Actions {
  GET_WEATHERS = "GET_WEATHER",
  PUSH_HISTORY = "PUSH_HISTORY",
  REMOVE_HISTORY_ITEM = "REMOVE_HISTORY_ITEM",
  SET_CURRENT_CITY = "SET_CURRENT_CITY",
  SHOW_ALERT = "SHOW_ALERT",
  HIDE_ALERT = "HIDE_ALERT",
  LOAD_HISTORY = "LOAD_HISTORY",
}

export interface IGetWeatherOfCityActions {
  type: Actions.GET_WEATHERS;
  payload: IWeather;
}

export interface IDeleteHistoryItemAction {
  type: typeof Actions.REMOVE_HISTORY_ITEM;
  payload: number;
}

export interface IPushHistoryAction {
  type: typeof Actions.PUSH_HISTORY;
  payload: IWeather;
}

export interface ISetCurrentCityAction {
  type: typeof Actions.SET_CURRENT_CITY;
  payload: IWeather;
}

export interface ILoadHistory {
  type: typeof Actions.LOAD_HISTORY;
  payload: IWeather[];
}

export interface IHideAlert {
  type: typeof Actions.HIDE_ALERT;
}

export type WeatherActionTypes =
  | IGetWeatherOfCityActions
  | IDeleteHistoryItemAction
  | IPushHistoryAction
  | ILoadHistory
  | ISetCurrentCityAction;
