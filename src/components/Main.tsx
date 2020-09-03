import React from "react";
import {useSelector} from "react-redux";

import {CurrentWeather} from "../components/CurrentWeather";
import {PredictionItem} from "./PredictionItem";
import {History} from "./Histoty";

export const Main = () => {
    const {currentCity, history} = useSelector((state: any) => state.weather);
    if (currentCity) return (
        <>
            <History history={history}/>
            <div className="main__contaner">
                <div className="main__weahter-today">
                    <CurrentWeather city={currentCity.city.name} weather={currentCity.list[0]}/>
                </div>
                {currentCity.list.map((item: any, index: number) => {
                    if (index % 8 === 0) {
                        return <PredictionItem weather={item} key={item.dt}/>
                    }
                })}
            </div>
        </>
    )
    return <h1>...Loading</h1>;
}