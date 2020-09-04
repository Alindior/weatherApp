import React from "react";

import { WeatherToday } from "./WeatherToday";
import { PredictionWeatherList } from "./PredictionWeatherList";
import { HistoryList } from "../History/HistoryList";

interface ContentProps {
    history: object[],
    currentCity: any,
    onSelectCity: Function,
    onDeleteHistory: Function,
    error?: string
}

export const Content = ({ currentCity, history, onSelectCity, onDeleteHistory, error }: ContentProps) => {
    if (currentCity) {
        return (
            <div className="main__container">
                {
                    error ? <h1>{error}</h1> :
                        (<div className="weather__current-city">
                            <WeatherToday currentWeather={currentCity} />
                            <PredictionWeatherList predictions={currentCity.list} />
                        </div>)
                }
                <HistoryList history={history} onDeleteHistory={onDeleteHistory} onSelectCity={onSelectCity} />
            </div>
        )
    } else {
        return <h1>Тут вы можете посмотреть погоду в любом городе мира!</h1>
    }
}