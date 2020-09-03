export const Actions = {
    GET_WEATHERS: "GET_WEATHER",
    PUSH_HISTORY : "PUSH_HISTORY"
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

export interface WeathersState {
    city: City,
    cnt: number,
    cod: string,
    list : WeatherDay[],
    message : number
}


interface GetWeathersAction {
    type: typeof Actions.GET_WEATHERS,
    payload:WeathersState
}

export type WeatherActionTypes = GetWeathersAction;
