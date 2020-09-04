export const Actions = {
    GET_WEATHERS: "GET_WEATHER",
    PUSH_HISTORY: "PUSH_HISTORY",
    REMOVE_HISTORY_ITEM: "REMOVE_HOSTORY_ITEM",
    SET_CURRENT_CITY: "SET_CURRENT_CITY",
    SHOW_ERROR: "SHOW_ERROR",
    HIDE_ERROR: "HIDE_ERROR"
}

interface City {
    coord: object,
    country: string,
    id: number,
    name: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number
}

interface WeatherDay {
    cloud: object,
    dt: number,
    dt_text: string,
    main: object,
    pop: number,
    sys: object,
    visibility: number,
    weather: object[],
    wind: {
        deg: number,
        speed: number
    }
}

export interface IWeather {
    city: City,
    cnt: number,
    cod: string,
    list: WeatherDay[],
    message: string
}

export interface IgetWeatherAction {
    type: typeof Actions.GET_WEATHERS,
    payload: IWeather
}

export interface IdeleteHistoryItemAction {
    type: typeof Actions.REMOVE_HISTORY_ITEM,
    payload: number
}

export interface IpushHistoryAction {
    type: typeof Actions.PUSH_HISTORY,
    payload: IWeather
}

export interface IsetCurrentCityAction {
    type: typeof Actions.SET_CURRENT_CITY,
    payload: IWeather
}

export interface IweatherState {
    currentCity: IWeather | null,
    history: IWeather[],
    error: string | null
}

export interface IShowErrorAction {
    type: typeof Actions.SHOW_ERROR,
    payload: string
}

export interface IHideErrorAction {
    type: typeof Actions.HIDE_ERROR
}

export type ErrorActionTypes = IShowErrorAction | IHideErrorAction;

export type WeatherActionTypes = IgetWeatherAction | IdeleteHistoryItemAction | IpushHistoryAction | IsetCurrentCityAction;
