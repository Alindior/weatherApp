import { Actions } from "./ActionTypes";

export const getWeather = (city: string) => async (dispath: any, getState: any, WeatherService: any) => {
    try {
        const data = await WeatherService.getWeather(city);
        if (data) {
            dispath({
                type: Actions.GET_WEATHERS,
                payload: data
            });
            dispath({
                type: Actions.PUSH_HISTORY,
                payload: data
            })
        }
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
}

export const deleteHistoryItem = (index: number) => (dispath: any) => {
    dispath({
        type: Actions.REMOVE_HISTORY_ITEM,
        payload: index
    })
}

export const setCurrentCity = (weather: object) => (dispath: any) => {
    dispath({
        type: Actions.SET_CURRENT_CITY,
        payload: weather
    })
}