import { Actions, WeatherActionTypes } from "../contsts/WeatherTypes";
import { IWeatherState } from "../../interfaces/IWeatherState";

export const initialState: IWeatherState = {
  currentCity: null,
  history: [],
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.GET_WEATHERS:
      return { ...state, currentCity: action.payload };
    case Actions.PUSH_HISTORY:
      return { ...state, history: [...state.history, action.payload] };
    case Actions.SET_CURRENT_CITY:
      return { ...state, currentCity: action.payload };
    case Actions.LOAD_HISTORY:
      return { ...state, history: action.payload };
    case Actions.REMOVE_HISTORY_ITEM:
      return {
        ...state,
        history: state.history.filter((item, index) => {
          if (index !== action.payload) {
            return item;
          }
        }),
      };
    case Actions.SHOW_ALERT:
      return { ...state, error: action.payload };
    case Actions.HIDE_ALERT:
      return { ...state, error: null };
    default:
      return state;
  }
};
