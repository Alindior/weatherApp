import {Actions , WeathersState} from "./ActionTypes";

export const getWeather = (city:string) => async (dispath:any, getState:any, WeatherService:any) => {
    try {
        const data = await WeatherService.getWeather(city);
        if(data){
            dispath({
                type : Actions.GET_WEATHERS,
                payload : data
            });
            dispath({
                type : Actions.PUSH_HISTORY,
                payload : data
            })
        }
    }catch(e){
        console.log(e);
        throw new Error(e);
    }
}