import { Actions, WeatherActionTypes } from "../contsts/WeatherTypes";
import { IWeather } from "../../interfaces/IWeather";
import { getWeather } from "../../services/WeatherServices";
import { ResponseStatuses } from "../../enums/ErrorCodes";

import {
  getHistory,
  onRemoveHistoryStorage,
} from "../../services/LocalStorageService";

export const searchWeather = (city: string) => async (dispatch: any) => {
  const data = await getWeather<IWeather>(city);
  if (data.cod === ResponseStatuses.success) {
    dispatch(getWeatherOfCity(data));
    dispatch(pushHistory(data));
  } else {
    dispatch(showAlert(data.message))
  }
};

export const getWeatherOfCity = (weather: IWeather): WeatherActionTypes => ({
  type: Actions.GET_WEATHERS,
  payload: weather,
});

export const pushHistory = (data: IWeather): WeatherActionTypes => ({
  type: Actions.PUSH_HISTORY,
  payload: data,
});

export const deleteHistoryItem = (index: number): WeatherActionTypes => {
  onRemoveHistoryStorage(index);
  return {
    type: Actions.REMOVE_HISTORY_ITEM,
    payload: index,
  };
};

export const setCurrentCity = (weather: IWeather) => ({
  type: Actions.SET_CURRENT_CITY,
  payload: weather,
});

export const loadHistory = () => ({
  type: Actions.LOAD_HISTORY,
  payload: getHistory(),
});

export const showAlert = (text: string) => (dispatch: any) => {
  dispatch({ type: Actions.SHOW_ALERT, payload: text });
  setTimeout(() => {
    dispatch(hideAlert());
  }, 2000);
};

export const hideAlert = () => ({
  type: Actions.HIDE_ALERT,
});
