import React from "react";

import { WeatherToday } from "./WeatherToday";
import { History } from "../Histoty";
import { PredictionWeatherList } from "./PredictionWeatherList";


interface ContentProps {
    history: object[],
    currentCity: any,
    onSelectCity: Function,
    onDeleteHistory: Function
}

export const Content = ({ currentCity, history, onSelectCity, onDeleteHistory }: ContentProps) => {
    if (currentCity) return (
        <>
            <History history={history} onDeleteHistory={onDeleteHistory} onSelectCity={onSelectCity} />
            <div className="main__container">
                <div className="main__weahter-today">
                    <WeatherToday currentWeather={currentCity} />
                </div>
                <PredictionWeatherList predictions={currentCity.list} />
            </div>
        </>
    )
    return <h1>...Loading</h1>;
}