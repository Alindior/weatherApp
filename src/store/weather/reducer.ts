import { Actions } from "./ActionTypes";

const initialState = {
    currentCity: null,
    history: []
}

export default (state = initialState, action: any) => {
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
        default:
            return state;
    }
}