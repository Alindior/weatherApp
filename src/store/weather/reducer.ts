import {Actions} from "./ActionTypes";



const initialState = {
    currentCity: null,
    history : []
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case Actions.GET_WEATHERS :
            return {...state, currentCity: action.payload}
        case Actions.PUSH_HISTORY :
            return {...state, history: [...state.history, action.payload]}
        default :
            return state;
    }
}