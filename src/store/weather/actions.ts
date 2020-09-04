import { Actions, IWeather, WeatherActionTypes, IweatherState, ErrorActionTypes } from "./ActionTypes";
import { WeatherService } from "../../services";
import { ThunkAction } from 'redux-thunk';
import { Action } from "redux";

export const getWeather = (
    city: string
): ThunkAction<void, IweatherState, WeatherService, Action<string>> => async (dispath: any, getState, WeatherService: WeatherService) => {
    const data = await WeatherService.getWeather<IWeather>(city);
    if (data.cod !== "404") {
        dispath({
            type: Actions.GET_WEATHERS,
            payload: data
        });
        dispath(hideError());
        dispath(pushHistory(data));
    } else {
        dispath(showError(data.message));
    }
}

const pushHistory = (data: IWeather): WeatherActionTypes => ({
    type: Actions.PUSH_HISTORY,
    payload: data
})

export const deleteHistoryItem = (index: number): WeatherActionTypes => ({
    type: Actions.REMOVE_HISTORY_ITEM,
    payload: index
})

export const setCurrentCity = (weather: IWeather) => (dispath: any) => {
    dispath({
        type: Actions.SET_CURRENT_CITY,
        payload: weather
    });
    dispath(hideError());
}


export const showError = (text: string): ErrorActionTypes => ({
    type: Actions.SHOW_ERROR,
    payload: text
})

export const hideError = (): ErrorActionTypes => ({
    type: Actions.HIDE_ERROR
})

