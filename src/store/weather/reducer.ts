import { Actions, IweatherState, WeatherActionTypes } from "./ActionTypes";

const initialState: IweatherState = {
    currentCity: null,
    history: [],
    error: null
}

export default (state = initialState, action: WeatherActionTypes) => {
    switch (action.type) {
        case Actions.GET_WEATHERS:
            return { ...state, currentCity: action.payload }
        case Actions.PUSH_HISTORY:
            return { ...state, history: [...state.history, action.payload] }
        case Actions.SET_CURRENT_CITY:
            return { ...state, currentCity: action.payload }
        case Actions.REMOVE_HISTORY_ITEM:
            return {
                ...state, history: state.history.filter((item, index) => {
                    if (index !== action.payload) {
                        return item;
                    }
                })
            }
        case Actions.SHOW_ERROR:
            return { ...state, error: action.payload }
        case Actions.HIDE_ERROR:
            return { ...state, error: null }
        default:
            return state;
    }
}